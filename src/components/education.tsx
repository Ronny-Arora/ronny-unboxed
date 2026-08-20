import { CERTIFICATIONS, EDUCATION } from "@/lib/content";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications" tone="cream">
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-medium text-ink">
            {EDUCATION.credential} <span className="text-muted">· {EDUCATION.org}</span>
          </h3>
          <span className="font-mono text-xs text-muted">{EDUCATION.period}</span>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
          {EDUCATION.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Certifications</p>
        <ul className="mt-3 space-y-2">
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-t border-ink/10 pt-2 text-sm first:border-t-0 first:pt-0"
            >
              <span className="text-ink">{cert.name}</span>
              <span className="font-mono text-xs text-muted">{cert.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
