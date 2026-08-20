import { EXPERIENCE } from "@/lib/content";
import { Section } from "./section";
import { BrunoBubble } from "./bruno-bubble";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience"
      tone="navy"
      action={
        <BrunoBubble
          quip="he supervised every one of these, mostly from under my desk"
          tone="navy"
        />
      }
    >
      <ol className="space-y-10">
        {EXPERIENCE.map((item) => (
          <li
            key={`${item.org}-${item.role}`}
            className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium text-white">
                {item.role} <span className="text-fog">· {item.org}</span>
              </h3>
              <span className="font-mono text-xs text-fog/70">{item.period}</span>
            </div>
            <p className="mt-0.5 text-xs text-fog/70">{item.location}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-fog">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
