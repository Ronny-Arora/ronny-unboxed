import { SITE_LINKS } from "@/lib/content";
import { BrunoBubble } from "./bruno-bubble";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-16 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          Software Engineer · Perth, WA
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Raunak Arora (Ronny)
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Software engineer based in Perth, WA, and incoming Associate at PwC
          Australia on the Risk &amp; Digital Trust team.{" "}
          <BrunoBubble quip="he's smart isn't he" align="right" />
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {SITE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="border-b border-border pb-0.5 text-ink transition-colors hover:border-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
