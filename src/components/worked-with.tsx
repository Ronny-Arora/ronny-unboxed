import { WORKED_WITH } from "@/lib/content";

export function WorkedWith() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Worked with</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {WORKED_WITH.map((name) => (
              <span
                key={name}
                className="font-display text-xl italic tracking-tight text-ink/70 sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
