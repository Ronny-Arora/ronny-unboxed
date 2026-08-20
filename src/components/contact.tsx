import { SITE_LINKS } from "@/lib/content";
import { Section } from "./section";

const email = SITE_LINKS.find((link) => link.label === "Email")!;
const otherLinks = SITE_LINKS.filter((link) => link.label !== "Email");

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch" tone="cream">
      <p className="max-w-lg text-sm leading-relaxed text-muted">
        The fastest way to reach me is email — happy to talk about roles,
        collaborations, or anything you saw above.
      </p>
      <a
        href={email.href}
        className="mt-6 inline-block font-display text-3xl font-medium text-ink underline decoration-ink/30 decoration-2 underline-offset-4 transition-colors hover:decoration-ink sm:text-4xl"
      >
        ronny.arora@outlook.com
      </a>
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {otherLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink/20 pb-0.5 text-ink transition-colors hover:border-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
