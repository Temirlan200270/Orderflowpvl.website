import { Mail, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function ContactBlock() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          {SITE_COPY.contact.heading}
        </p>
        <h2 id="contact-heading" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Свяжитесь с нами
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={BUSINESS_INFO.contact.phoneTelHref}
            className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-blue-500/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 ring-1 ring-blue-500/20">
              <Phone className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.phoneLabel}
              </span>
              <span className="mt-1 block text-lg font-medium text-white group-hover:text-blue-400">
                {BUSINESS_INFO.contact.phoneDisplay}
              </span>
            </span>
          </a>
          <a
            href={BUSINESS_INFO.contact.emailMailtoHref}
            className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-blue-500/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 ring-1 ring-blue-500/20">
              <Mail className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                {SITE_COPY.contact.emailLabel}
              </span>
              <span className="mt-1 block break-all text-lg font-medium text-white group-hover:text-blue-400">
                {BUSINESS_INFO.contact.email}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
