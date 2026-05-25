import Link from "next/link";
import { SITE_COPY } from "@/lib/siteCopy";

export function LegalFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{SITE_COPY.footer.copyright}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link
            href="/legal/privacy"
            className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.footer.privacy}
          </Link>
          <span aria-hidden className="text-slate-700">
            ·
          </span>
          <Link
            href="/legal/terms"
            className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.footer.terms}
          </Link>
        </p>
      </div>
    </footer>
  );
}
