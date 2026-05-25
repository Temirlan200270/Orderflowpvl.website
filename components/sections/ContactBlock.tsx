import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function ContactBlock() {
  return (
    <section
      id="contact"
      className="scroll-mt-4 border-b border-slate-800 bg-slate-950 py-12 sm:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="contact-heading" className="text-lg font-semibold text-white">
          {SITE_COPY.contact.heading}
        </h2>
        <dl className="mt-4 space-y-3 text-base text-slate-300">
          <div>
            <dt className="sr-only">{SITE_COPY.contact.phoneLabel}</dt>
            <dd>
              {SITE_COPY.contact.phoneLabel}:{" "}
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">{SITE_COPY.contact.emailLabel}</dt>
            <dd>
              {SITE_COPY.contact.emailLabel}:{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="break-all text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {BUSINESS_INFO.contact.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
