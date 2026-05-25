export const SITE_COPY = {
  header: {
    tagline: "Автосервис в Павлодаре",
    nav: {
      about: "О нас",
      contact: "Контакты",
      legal: "Юридическая информация",
    },
  },
  hero: {
    cta: "Позвонить",
  },
  about: {
    heading: "О нас",
    body: "Диагностика и техническое обслуживание автомобилей.",
    services: [
      {
        title: "Диагностика",
        body: "Компьютерная диагностика неисправностей.",
      },
      {
        title: "Техобслуживание",
        body: "Плановое ТО и замена расходников.",
      },
      {
        title: "Ремонт",
        body: "Обслуживание подвески и тормозной системы.",
      },
    ],
  },
  contact: {
    heading: "Контакты",
    phoneLabel: "Телефон",
    emailLabel: "Email",
  },
  legal: {
    heading: "Юридическая информация",
    nameLabel: "Наименование",
    iinLabel: "ИИН",
    addressLabel: "Адрес",
  },
  footer: {
    copyright: "© 2025–2026 ИП АБИШЕВ",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
  },
} as const;
