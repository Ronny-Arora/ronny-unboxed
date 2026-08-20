import Image from "next/image";
import { SITE_LINKS } from "@/lib/content";
import { BrunoBubble } from "./bruno-bubble";

const BADGES = ["Software Engineer", "Incoming PwC Associate", "Training for Hyrox #1"];

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-fog">
            Perth, WA · Software Engineer
          </p>
          <h1 className="mt-5 font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
            Raunak
            <br />
            Arora
          </h1>
          <p className="mt-3 font-display text-2xl italic text-fog">aka Ronny</p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
            Software engineer based in Perth, incoming Associate at PwC
            Australia&apos;s Risk &amp; Digital Trust team — and currently
            training for his first Hyrox.{" "}
            <BrunoBubble quip="he's smart isn't he" align="right" tone="navy" />
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/25 px-3 py-1 text-xs text-white"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {SITE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="border-b border-white/30 pb-0.5 text-white transition-colors hover:border-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/15 lg:max-w-md lg:justify-self-end">
          <Image
            src="/images/ronny-jetty.jpg"
            alt="Ronny leaning on a jetty railing over the ocean at dusk"
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
