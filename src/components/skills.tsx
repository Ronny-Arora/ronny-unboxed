import { SKILLS } from "@/lib/content";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              {group.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
