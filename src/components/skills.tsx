import { SKILLS } from "@/lib/content";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills" tone="navy">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              {group.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white"
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
