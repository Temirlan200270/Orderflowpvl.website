import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
            {BUSINESS_INFO.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            {SITE_COPY.header.logoLine2}
          </span>
        </Link>
        <nav
          className="flex items-center gap-6 text-sm font-medium text-slate-400"
          aria-label="Primary"
        >
          <a
            href="#services"
            className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.services}
          </a>
          <a
            href="#technology"
            className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.technology}
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
