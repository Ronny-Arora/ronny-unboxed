import Link from "next/link";
import { BrunoIcon } from "./bruno-icon";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#fitness", label: "Fitness" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-paper">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <Link href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <BrunoIcon className="h-6 w-6 shrink-0" />
          Raunak Arora
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
