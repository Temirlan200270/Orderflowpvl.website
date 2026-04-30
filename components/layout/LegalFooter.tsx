import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function LegalFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2 text-sm">
            <p className="text-base font-semibold text-white">{BUSINESS_INFO.name}</p>
            <p className="text-xs leading-relaxed text-slate-500">
              <span className="text-slate-600">{SITE_COPY.footer.registryNameLabel} </span>
              <span lang="ru" className="text-slate-400">
                {BUSINESS_INFO.registry.legalNameCyrillic} ·{" "}
                {BUSINESS_INFO.registry.ownerFullNameCyrillic}
              </span>
            </p>
            <p>{BUSINESS_INFO.ownerFullName}</p>
            <p>
              <span className="text-slate-500">IIN:</span> {BUSINESS_INFO.iin}
            </p>
            <p className="max-w-xl leading-relaxed">{BUSINESS_INFO.address.formatted}</p>
            <p>
              <span className="text-slate-500">Phone:</span>{" "}
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-slate-500">Email:</span>{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <p className="text-xs uppercase tracking-wider text-slate-500">Legal</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
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
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-xs leading-relaxed text-slate-500">
          <p>{SITE_COPY.footer.copyright}</p>
          <p className="mt-2">
            {SITE_COPY.footer.micro}{" "}
            <span className="text-slate-400">{BUSINESS_INFO.bankingPartner}.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
