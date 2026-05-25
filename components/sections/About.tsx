import { Gauge, Settings, Wrench } from "lucide-react";
import { SITE_COPY } from "@/lib/siteCopy";

const icons = [Gauge, Settings, Wrench] as const;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          {SITE_COPY.about.heading}
        </p>
        <h2
          id="about-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Чем занимаемся
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {SITE_COPY.about.services.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title}>
                <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-blue-500/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
