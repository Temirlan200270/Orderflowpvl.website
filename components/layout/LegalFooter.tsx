import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function LegalFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
        <div className="space-y-2 text-sm">
          <p className="text-base font-semibold text-white">{BUSINESS_INFO.name}</p>
          <p className="leading-relaxed">{BUSINESS_INFO.address.formatted}</p>
          <p>
            <a
              href={BUSINESS_INFO.contact.phoneTelHref}
              className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {BUSINESS_INFO.contact.phoneDisplay}
            </a>
            {" · "}
            <a
              href={BUSINESS_INFO.contact.emailMailtoHref}
              className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {BUSINESS_INFO.contact.email}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/legal/privacy"
            className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.footer.privacy}
          </Link>
          <Link
            href="/legal/terms"
            className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {SITE_COPY.footer.terms}
          </Link>
        </div>
        <p className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          {SITE_COPY.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
