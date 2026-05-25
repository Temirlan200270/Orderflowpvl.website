import { BUSINESS_INFO, getGoogleMapsEmbedUrl } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function ContactInfo() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {SITE_COPY.contact.heading}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.nameLabel}
              </p>
              <p className="mt-1 text-base font-medium text-white">{BUSINESS_INFO.name}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.iinLabel}
              </p>
              <p className="mt-1 font-mono text-white">{BUSINESS_INFO.iin}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.addressLabel}
              </p>
              <p className="mt-1 leading-relaxed text-slate-300">
                {BUSINESS_INFO.address.formatted}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.phoneLabel}
              </p>
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="mt-1 inline-block text-lg font-medium text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.emailLabel}
              </p>
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="mt-1 inline-block break-all text-lg font-medium text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.email}
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-xl shadow-black/40">
              <iframe
                title="Карта — Павлодар, ул. Естая, д. 81/1"
                src={getGoogleMapsEmbedUrl()}
                className="aspect-[16/10] min-h-[240px] w-full border-0 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-slate-500">{SITE_COPY.contact.mapCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
