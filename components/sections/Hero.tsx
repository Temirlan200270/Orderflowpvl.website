import { BUSINESS_INFO } from "@/lib/config/business";
import { SITE_COPY } from "@/lib/siteCopy";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.14),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(15_23_42/0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_23_42/0.4)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
          {SITE_COPY.hero.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {SITE_COPY.hero.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {SITE_COPY.hero.subtitle}
        </p>
        <div className="mt-10">
          <a
            href={BUSINESS_INFO.contact.emailMailtoHref}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {SITE_COPY.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
