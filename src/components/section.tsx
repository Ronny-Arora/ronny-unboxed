import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  tone: "navy" | "cream";
  action?: ReactNode;
  children: ReactNode;
};

const TONE_STYLES = {
  navy: {
    section: "bg-navy text-white",
    eyebrow: "text-fog",
    title: "text-white",
  },
  cream: {
    section: "bg-cream text-ink",
    eyebrow: "text-muted",
    title: "text-ink",
  },
};

export function Section({ id, eyebrow, title, tone, action, children }: SectionProps) {
  const styles = TONE_STYLES[tone];

  return (
    <section id={id} className={`scroll-mt-20 ${styles.section}`}>
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-baseline justify-between gap-4">
          <h2
            className={`flex items-center gap-3 font-display text-3xl font-medium tracking-tight sm:text-4xl ${styles.title}`}
          >
            {title}
            {action}
          </h2>
          <span
            className={`hidden font-mono text-xs uppercase tracking-widest sm:block ${styles.eyebrow}`}
          >
            {eyebrow}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
