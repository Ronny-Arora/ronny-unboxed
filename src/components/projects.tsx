import { PROJECTS } from "@/lib/content";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects" tone="cream">
      <div className="space-y-6">
        {PROJECTS.map((project) =>
          project.flagship ? (
            <div key={project.name} className="rounded-2xl bg-navy p-7 text-white sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-medium">
                  {project.name}
                  <span className="ml-3 rounded-full border border-white/30 px-2.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-widest text-fog">
                    Flagship
                  </span>
                </h3>
                <span className="font-mono text-xs text-fog">{project.tagline}</span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 px-2.5 py-0.5 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={project.name}
              className="rounded-2xl border border-ink/10 bg-white p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium text-ink">{project.name}</h3>
                <span className="font-mono text-xs text-muted">{project.tagline}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
}
