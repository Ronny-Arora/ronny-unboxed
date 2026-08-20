import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, action, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            {title}
            {action}
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-faint">
            {eyebrow}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
