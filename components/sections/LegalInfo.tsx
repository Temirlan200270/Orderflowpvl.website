import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function LegalInfo() {
  return (
    <section
      id="legal"
      className="scroll-mt-4 bg-slate-950 py-12 sm:py-16"
      aria-labelledby="legal-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="legal-heading" className="text-lg font-semibold text-white">
          {SITE_COPY.legal.heading}
        </h2>
        <dl className="mt-4 space-y-3 text-base text-slate-300">
          <div>
            <dt className="inline text-slate-400">{SITE_COPY.legal.nameLabel}: </dt>
            <dd className="inline text-slate-200">{BUSINESS_INFO.name}</dd>
          </div>
          <div>
            <dt className="inline text-slate-400">{SITE_COPY.legal.iinLabel}: </dt>
            <dd className="inline font-mono text-slate-200">{BUSINESS_INFO.iin}</dd>
          </div>
          <div>
            <dt className="inline text-slate-400">{SITE_COPY.legal.addressLabel}: </dt>
            <dd className="inline text-slate-200">{BUSINESS_INFO.address.formatted}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
