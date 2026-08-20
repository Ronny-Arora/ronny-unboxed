import { BrunoIcon } from "./bruno-icon";
import { SITE_LINKS } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5">
          made with Bruno&apos;s supervision <BrunoIcon className="h-4 w-4" />
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {SITE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <span>© {year} Raunak Arora</span>
        </div>
      </div>
    </footer>
  );
}
