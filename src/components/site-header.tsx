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
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-base font-medium tracking-tight text-white"
        >
          <BrunoIcon className="h-6 w-6 shrink-0" />
          Raunak Arora
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-fog">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
