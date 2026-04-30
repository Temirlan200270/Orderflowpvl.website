# Legal and business data contract

This document is the **single source of truth** for all legal, contact, and address fields in the Next.js application. Values here must match official documents (state registration, bank records) and whatever you submit in Meta Business Manager.

## 1. Legal identity

| Field | Value |
|--------|--------|
| Company name (EN, site/Meta) | IE ABISHEV |
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

Align typed form fields with this table; typos here cause rejections.

| Meta / form concept | Suggested value |
|---------------------|-----------------|
| Legal / business name | IE ABISHEV (or full IE name if the form requires it — match your documents) |
| Address line 1 | Estaya St., 81/1 (or platform-specific split) |
| Address line 2 | Apt/Office 19 |
| City | Pavlodar |
| Postal code | 140000 |
| Country | Kazakhstan |
| Phone | +77011000570 (or formatted per form) |
| Website | https://orderflowpvl.website |

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
