# Legal and business data contract

This document is the **single source of truth** for all legal, contact, and address fields in the Next.js application. Values here must match official documents (state registration, bank records) and whatever you submit in Meta Business Manager.

## 1. Legal identity

| Field | Value |
|--------|--------|
| Public brand / site name (EN) | IE ABISHEV |
| Owner full name (EN) | ABISHEV BAKHTIYAR SANSYZBAEVICH |
| Tax ID (IIN) | 830520350723 |
| Activity code | OKED 45201 — Automotive repair and maintenance |
| Established (notification) | 2025 |
| Banking partner (reference) | ForteBank |
| Legal name (Cyrillic, as in registry) | ИП АБИШЕВ |
| Owner full name (Cyrillic, as in registry) | АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ |

Displayed on the site as one bridge line: **ИП АБИШЕВ · АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ** (footer + contacts).

## 2. Contact and domain

| Field | Value |
|--------|--------|
| Phone (display) | +7 701 100 05 70 |
| Phone (`tel:` URI, no spaces) | `tel:+77011000570` |
| Email | info@orderflowpvl.website |
| Email (`mailto:`) | `mailto:info@orderflowpvl.website` |
| Public website | https://orderflowpvl.website |

## 3. Registered address (strict match)

Use **one** canonical formatting style across footer, contact block, and legal pages.

| Field | Value |
|--------|--------|
| Country | Republic of Kazakhstan |
| ZIP / postal code | 140000 |
| Region | Pavlodar Region |
| City | Pavlodar |
| Street | Estaya St. |
| Building | 81/1 |
| Apartment / office | 19 |

**Formatted address (footer, policies, contact):**

`140000, Republic of Kazakhstan, Pavlodar, Estaya St., Bld. 81/1, Apt/Office 19.`

**Privacy Policy opening phrase (required substring — see `LEGAL_PAGES_OUTLINE.md` / `LEGAL_COPYWRITING.md`):**  
Includes IIN, city, street/building/apt, and domain — wording fixed there to avoid drift.

## 4. Meta Business Manager field mapping (reference)

Align typed form fields with **the same PDFs you upload** (IE notification + bank statement). Mixed languages or an extra “house **81**” from map autocomplete (e.g. **Естай көшесі 81** + **д. 81/1**) do **not** match either document and trigger “address / name mismatch” even when the real address is correct.

### 4.1 Supporting documents (canonical wording from files)

| Source | Registered name | Address (as printed) | Phone on document |
|--------|-----------------|----------------------|-------------------|
| **Уведомление ИП** № KZ32UWQ07387134 | **ИП АБИШЕВ** (п. 3) | **г. Павлодар, ул. Естая, д. 81/1, кв. (офис) 19** (п. 5) | **7011000570** (п. 6; без +7) |
| **Выписка ForteBank** (ИИК KZ4396507F0008823689) | **ИП АБИШЕВ** (клиент) | **140000, КАЗАХСТАН, ПАВЛОДАРСКАЯ обл, ПАВЛОДАР г, ЕСТАЯ ул, дом 81/1, кв 19** | *не указан* — подтвердить телефон по этому файлу нельзя |

ФИО заявителя в уведомлении (п. 2): **АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ** — это не поле «наименование ИП»; для поля юр. названия в Meta ориентир — **ИП АБИШЕВ**, как в п. 3 и в банке.

### 4.2 What to type in Meta (copy-paste discipline)

**Legal / registered business name:** `ИП АБИШЕВ` (как в п. 3 уведомления и шапке выписки).

**Address — предпочтительно как в уведомлении (ручной ввод, без казахского «көшесі … 81»):**

- Одной строкой: `г. Павлодар, ул. Естая, д. 81/1, кв. 19`
- Либо в стиле выписки: `140000, Павлодар, ул. Естая, д. 81/1, кв. 19` + область/страна по полям формы.

**Нельзя** смешивать подсказку карты **«Естай көшесі 81»** с **д. 81/1** — в документах нет отдельного номера дома **81** у улицы; есть **ул. Естая** и **д. 81/1**.

**Phone:** в форме — **+77011000570** (эквивалент **7011000570** из уведомления). Раз выписка **не содержит** телефон, Meta часто не засчитывает телефон по одной выписке → варианты: **подтверждение по email** (как предлагает письмо) и/или загрузка **уведомления ИП**, где телефон указан рядом с **ИП АБИШЕВ** и адресом.

**Display / brand (если поле отдельно):** IE ABISHEV — на сайте без изменений.

| Meta / form concept | Suggested value |
|---------------------|-----------------|
| Legal / company name | `ИП АБИШЕВ` |
| Address (notification-style) | `г. Павлодар, ул. Естая, д. 81/1, кв. 19` (+ индекс **140000** / область по макету формы) |
| Address (bank-style fallback) | `ЕСТАЯ ул., дом 81/1, кв. 19`, `Павлодар`, `140000`, Kazakhstan |
| City | Pavlodar / Павлодар |
| Postal code | 140000 |
| Country | Kazakhstan |
| Phone | +77011000570 (как на сайте); в уведомлении без кода: **7011000570**. Предпочтительно **верификация по email**, если телефон не принимают |
| Website | https://orderflowpvl.website |

**Lookup limitation (Meta / Google):** Если карта даёт только **дом 81**, выберите ближайшую точку и **в свободных полях** оставьте текст как в документе (**ул. Естая, д. 81/1, кв. 19**).

Подавайте **одним набором** полей без дробления: имя и адрес должны быть **один в один** с тем PDF, который вы прикладываете первым (лучше **уведомление ИП** — там и название, и адрес, и телефон на одном листе).

## 5. TypeScript contract (`lib/config/business.ts`)

Implement a single exported constant, e.g. `BUSINESS_INFO`, matching this shape. **Values must equal the tables above** (no extra fields with alternate addresses).

```typescript
export const BUSINESS_INFO = {
  name: "IE ABISHEV",
  ownerFullName: "ABISHEV BAKHTIYAR SANSYZBAEVICH",
  registry: {
    legalNameCyrillic: "ИП АБИШЕВ",
    ownerFullNameCyrillic: "АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ",
  },
  iin: "830520350723",
  activity: "Automotive repair and maintenance (OKED 45201)",
  established: "2025",
  bankingPartner: "ForteBank",
  contact: {
    phoneDisplay: "+7 701 100 05 70",
    phoneTelHref: "tel:+77011000570",
    email: "info@orderflowpvl.website",
    emailMailtoHref: "mailto:info@orderflowpvl.website",
    website: "https://orderflowpvl.website",
  },
  address: {
    country: "Republic of Kazakhstan",
    zip: "140000",
    region: "Pavlodar Region",
    city: "Pavlodar",
    street: "Estaya St.",
    building: "81/1",
    apartmentOrOffice: "19",
    formatted:
      "140000, Republic of Kazakhstan, Pavlodar, Estaya St., Bld. 81/1, Apt/Office 19.",
  },
} as const;
```

Optional: derive `phoneDisplay` from a single normalized E.164 string in code — but displayed and linked values must match this contract.

## 6. Implementation rule

- All UI strings that contain IIN, address, phone, email, or company name MUST be read from `lib/config/business.ts`, which mirrors this document.
- Do not hardcode alternate spellings (e.g. “81” vs “81/1”) in components.
