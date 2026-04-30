import { Activity, Cpu, Wrench } from "lucide-react";
import { SITE_COPY } from "@/lib/siteCopy";

const icons = [Cpu, Wrench, Activity] as const;

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-slate-800 bg-slate-950 py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="services-heading"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Technical scope aligned with OKED 45201
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {SITE_COPY.services.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title}>
                <article className="group flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-blue-500/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-800 text-blue-400 transition-colors group-hover:bg-slate-800/80 group-hover:text-blue-300">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
