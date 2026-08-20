import { EXPERIENCE } from "@/lib/content";
import { Section } from "./section";
import { BrunoBubble } from "./bruno-bubble";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience"
      action={<BrunoBubble quip="he supervised every one of these, mostly from under my desk" />}
    >
      <ol className="space-y-10">
        {EXPERIENCE.map((item) => (
          <li key={`${item.org}-${item.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium">
                {item.role} <span className="text-muted">· {item.org}</span>
              </h3>
              <span className="font-mono text-xs text-faint">{item.period}</span>
            </div>
            <p className="mt-0.5 text-xs text-faint">{item.location}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
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
