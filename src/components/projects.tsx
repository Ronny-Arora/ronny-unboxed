import { PROJECTS } from "@/lib/content";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects">
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className={`rounded-lg border border-border p-6 ${
              project.flagship ? "bg-paper" : ""
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium">
                {project.name}
                {project.flagship && (
                  <span className="ml-2 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                    Flagship
                  </span>
                )}
              </h3>
              <span className="font-mono text-xs text-faint">{project.tagline}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
