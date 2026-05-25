import { SITE_COPY } from "@/lib/siteCopy";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-slate-800 bg-slate-950 py-12 sm:py-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="about-heading" className="text-lg font-semibold text-white">
          {SITE_COPY.about.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          {SITE_COPY.about.body}
        </p>
      </div>
    </section>
  );
}
