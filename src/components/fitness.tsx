import { FITNESS_STATS, SITE_LINKS } from "@/lib/content";
import { Section } from "./section";
import { BrunoBubble } from "./bruno-bubble";

const instagram = SITE_LINKS.find((link) => link.label === "Instagram")!;

export function Fitness() {
  return (
    <Section
      id="fitness"
      eyebrow="Fitness"
      title="Training"
      tone="navy"
      action={
        <BrunoBubble
          quip="he waits by the door before every run — best hype dog in Perth"
          tone="navy"
        />
      }
    >
      <p className="max-w-xl text-sm leading-relaxed text-fog">
        Currently training for his first Hyrox — weeks of consistent prep mixing
        zone 2 runs, weight training sessions, and race-specific workouts
        leading into race day.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FITNESS_STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/15 bg-navy-soft p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-fog">{stat.label}</p>
            <p className="mt-2 font-display text-3xl font-medium tracking-tight text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-fog">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/15 bg-navy-soft p-6 text-sm text-fog">
        <span>
          He documents the journey on Instagram — a fitness content series
          documenting every uncomfortable step, from race-day tips to
          training reflections.{" "}
          <a
            href={instagram.href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/30 pb-0.5 text-white transition-colors hover:border-white"
          >
            @ronny.creates
          </a>
        </span>
        <BrunoBubble quip="he's also a content creator, that's why I love him" tone="navy" />
      </div>
    </Section>
  );
}
