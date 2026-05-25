import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";

export const metadata: Metadata = {
  title: "Условия использования | ИП АБИШЕВ",
  description: "Условия использования сайта ИП АБИШЕВ.",
};

export default function TermsPage() {
  const lastUpdated = "Май 2026";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <Link
          href="/"
          className="text-sm font-medium text-blue-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          ← На главную
        </Link>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight text-white">
          Условия использования
        </h1>
        <p className="mt-2 text-sm text-slate-500">Обновлено: {lastUpdated}</p>

        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed sm:text-base">
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Общие положения</h2>
            <p>
              Используя сайт {BUSINESS_INFO.contact.website}, вы соглашаетесь с настоящими
              условиями.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Услуги</h2>
            <p>
              {BUSINESS_INFO.name} оказывает услуги диагностики и обслуживания автомобилей в
              Павлодаре. Запись и согласование услуг — по телефону или email, указанным на сайте.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Контакты</h2>
            <p>
              {BUSINESS_INFO.name} — {BUSINESS_INFO.address.formatted} —{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.email}
              </a>{" "}
              —{" "}
              <a
                href={BUSINESS_INFO.contact.phoneTelHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
