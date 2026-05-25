import { Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function LegalInfo() {
  return (
    <section
      id="legal"
      className="scroll-mt-20 bg-slate-950 py-16 sm:py-20"
      aria-labelledby="legal-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          {SITE_COPY.legal.heading}
        </p>
        <h2 id="legal-heading" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Реквизиты
        </h2>
        <article className="mt-10 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
              <Building2 className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            </span>
            <dl className="space-y-4 text-sm sm:text-base">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {SITE_COPY.legal.nameLabel}
                </dt>
                <dd className="mt-1 font-medium text-white">{BUSINESS_INFO.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {SITE_COPY.legal.iinLabel}
                </dt>
                <dd className="mt-1 font-mono text-slate-200">{BUSINESS_INFO.iin}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {SITE_COPY.legal.addressLabel}
                </dt>
                <dd className="mt-1 leading-relaxed text-slate-200">
                  {BUSINESS_INFO.address.formatted}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
