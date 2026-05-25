import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-blue-400">
          {BUSINESS_INFO.name}
        </Link>
        <nav aria-label="Основная навигация">
          <a
            href="#contact"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.header.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}
