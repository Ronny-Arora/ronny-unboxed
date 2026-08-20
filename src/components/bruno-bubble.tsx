"use client";

import { useEffect, useRef, useState } from "react";
import { BrunoIcon } from "./bruno-icon";

type BrunoBubbleProps = {
  quip: string;
  align?: "left" | "right";
  /** "light" = sitting on a cream/white section, "navy" = sitting on a navy section. */
  tone?: "light" | "navy";
};

const TONE_STYLES = {
  light: {
    button: "border-ink/20 text-ink hover:border-ink",
    bubble: "border-ink/15 bg-white text-ink",
  },
  navy: {
    button: "border-white/30 text-white hover:border-white",
    bubble: "border-white/20 bg-navy-soft text-white",
  },
};

/**
 * Small Bruno icon that pops a speech bubble with a one-liner.
 * Auto-shows once when scrolled into view, then can be replayed on
 * hover/click/focus.
 */
export function BrunoBubble({ quip, align = "right", tone = "light" }: BrunoBubbleProps) {
  const [open, setOpen] = useState(false);
  const autoShownRef = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const styles = TONE_STYLES[tone];

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !autoShownRef.current) {
          autoShownRef.current = true;
          setOpen(true);
          hideTimer.current = setTimeout(() => setOpen(false), 3400);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpen(false);
  };

  return (
    <span ref={wrapperRef} className="relative inline-flex items-center align-middle">
      <button
        type="button"
        onClick={() => (open ? hide() : show())}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        aria-label="Bruno has something to say"
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors ${styles.button}`}
      >
        <BrunoIcon className="h-4.5 w-4.5" />
      </button>
      <span
        role="status"
        aria-hidden={!open}
        className={`pointer-events-none absolute top-1/2 z-20 w-max max-w-[220px] -translate-y-1/2 rounded-md border px-3 py-1.5 text-xs leading-snug shadow-sm transition-opacity duration-200 ${styles.bubble} ${
          align === "right" ? "left-full ml-3" : "right-full mr-3"
        } ${open ? "opacity-100" : "opacity-0"}`}
      >
        {quip}
      </span>
    </span>
  );
}
