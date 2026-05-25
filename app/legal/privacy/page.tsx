import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/config/business";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | ИП АБИШЕВ",
  description: "Политика конфиденциальности ИП АБИШЕВ и orderflowpvl.website.",
};

export default function PrivacyPage() {
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
          Политика конфиденциальности
        </h1>
        <p className="mt-2 text-sm text-slate-500">Обновлено: {lastUpdated}</p>

        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed sm:text-base">
          <section className="space-y-4">
            <p>
              Настоящая политика описывает, как {BUSINESS_INFO.name} (ИИН: {BUSINESS_INFO.iin}),
              адрес: {BUSINESS_INFO.address.formatted}, обрабатывает данные через сайт
              orderflowpvl.website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Какие данные мы собираем</h2>
            <p>
              Мы можем обрабатывать контактные данные, которые вы добровольно передаёте при звонке
              или письме по контактам, указанным на сайте.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Как мы используем данные</h2>
            <p>
              Данные используются для записи на обслуживание автомобилей и связи по вопросам
              автосервиса. Мы не продаём персональные данные третьим лицам.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Контакты</h2>
            <p>
              {BUSINESS_INFO.name}. Email:{" "}
              <a
                href={BUSINESS_INFO.contact.emailMailtoHref}
                className="text-blue-400 hover:underline"
              >
                {BUSINESS_INFO.contact.email}
              </a>
              . Телефон:{" "}
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
