import { SITE_COPY } from "@/lib/siteCopy";

export function Technology() {
  return (
    <section
      id="technology"
      className="scroll-mt-24 border-b border-slate-800 bg-slate-950 py-20 sm:py-24"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="technology-heading"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Technology
        </h2>
        <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {SITE_COPY.technology.heading}
        </h3>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {SITE_COPY.technology.body}
        </p>
      </div>
    </section>
  );
}
