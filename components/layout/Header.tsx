import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
        <Link href="/" className="group">
          <p className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
            {BUSINESS_INFO.name}
          </p>
          <p className="mt-1 text-sm text-slate-400">{SITE_COPY.header.tagline}</p>
        </Link>
        <nav
          className="flex gap-5 text-sm text-slate-400"
          aria-label="Основная навигация"
        >
          <a
            href="#contact"
            className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.contact}
          </a>
          <a
            href="#legal"
            className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.legal}
          </a>
        </nav>
      </div>
    </header>
  );
}
