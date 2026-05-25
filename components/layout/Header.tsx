import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

const navLinks = [
  { href: "#about", label: SITE_COPY.header.nav.about },
  { href: "#contact", label: SITE_COPY.header.nav.contact },
  { href: "#legal", label: SITE_COPY.header.nav.legal },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-sm font-bold text-blue-400 ring-1 ring-blue-500/30"
            aria-hidden
          >
            ИП
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
              {BUSINESS_INFO.name}
            </span>
            <span className="block text-xs text-slate-500">{SITE_COPY.header.tagline}</span>
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-400 sm:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
