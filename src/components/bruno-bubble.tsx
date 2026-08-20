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

const MOBILE_BREAKPOINT = 640;
const EDGE_MARGIN = 12;

/**
 * Small Bruno icon that pops a speech bubble with a one-liner.
 * Auto-shows once when scrolled into view, then can be replayed on
 * hover/click/focus. Below the sm breakpoint the bubble opens
 * centered under the icon and self-corrects if that would push it
 * past the viewport edge (the icon's position within its flex row
 * isn't known ahead of time on narrow screens).
 */
export function BrunoBubble({ quip, align = "right", tone = "light" }: BrunoBubbleProps) {
  const [open, setOpen] = useState(false);
  const [mobileShift, setMobileShift] = useState(0);
  const autoShownRef = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const styles = TONE_STYLES[tone];

  const clampToViewport = () => {
    if (typeof window === "undefined" || window.innerWidth >= MOBILE_BREAKPOINT) {
      setMobileShift(0);
      return;
    }
    const el = bubbleRef.current;
    if (!el) return;
    // The bubble's position doesn't depend on `open`, so this can be measured
    // synchronously — no need to wait a frame (and rAF can stall in some
    // embedding contexts, e.g. a backgrounded/hidden tab).
    const rect = el.getBoundingClientRect();
    const naturalLeft = rect.left - mobileShift;
    const naturalRight = rect.right - mobileShift;
    let delta = 0;
    if (naturalLeft < EDGE_MARGIN) delta = EDGE_MARGIN - naturalLeft;
    else if (naturalRight > window.innerWidth - EDGE_MARGIN) {
      delta = window.innerWidth - EDGE_MARGIN - naturalRight;
    }
    setMobileShift(delta);
  };

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpen(true);
    clampToViewport();
  };
  const hide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpen(false);
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !autoShownRef.current) {
          autoShownRef.current = true;
          show();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-colors ${styles.button}`}
      >
        <BrunoIcon className="h-5 w-5" />
      </button>
      <span
        ref={bubbleRef}
        role="status"
        aria-hidden={!open}
        style={mobileShift ? { translate: `calc(-50% + ${mobileShift}px) 0` } : undefined}
        className={`pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[min(220px,80vw)] -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs leading-snug shadow-sm transition-opacity duration-200 ${styles.bubble} ${
          align === "right"
            ? "sm:left-full sm:top-1/2 sm:mt-0 sm:ml-3 sm:translate-x-0 sm:-translate-y-1/2"
            : "sm:right-full sm:left-auto sm:top-1/2 sm:mt-0 sm:mr-3 sm:translate-x-0 sm:-translate-y-1/2"
        } ${open ? "opacity-100" : "opacity-0"}`}
      >
        {quip}
      </span>
    </span>
  );
}
