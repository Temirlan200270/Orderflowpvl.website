# Content guidelines (language and footer)

## Primary site language

- **English** is the primary language for all marketing and legal pages (`lang="en"`).
- Tone: dry, engineering-focused, B2B — see [CONTENT_COPY.md](CONTENT_COPY.md).

## Legal identity in footer and contact block

| Element | Guideline |
|---------|-----------|
| Company name | Use **IE ABISHEV** (EN) as the main heading. |
| Owner name | Optional second line: **ABISHEV BAKHTIYAR SANSYZBAEVICH** (EN, matches registry) if you want parity with PDFs without mixing Cyrillic/Latin inconsistently. |
| Cyrillic (ИП, ФИО) | **Implemented** in footer and contact block: one line (`lang="ru"`) with registry spelling **ИП АБИШЕВ · АБИШЕВ БАХТИЯР САНСЫЗБАЕВИЧ** under the English tradename, sourced from `BUSINESS_INFO.registry`. This bridges EN UI to RU/KZ documents (Meta, local clients) without changing the primary language of the site. **One spelling per field** — always from [DATA_CONTRACT.md](DATA_CONTRACT.md) / `business.ts`. |

**Canonical rule:** One spelling per field across footer, contact, and legal pages — sourced from `BUSINESS_INFO` / [DATA_CONTRACT.md](DATA_CONTRACT.md).

## Prohibited content scope

- Do not introduce unrelated business verticals (food service, restaurant trades, generic marketplace “delivery/menu” product copy, or unrelated brands) in UI, comments, or `alt` text.
- Keep all copy aligned with **OKED 45201** (automotive repair and maintenance).

## Legal pages

- Structure: [LEGAL_PAGES_OUTLINE.md](LEGAL_PAGES_OUTLINE.md)  
- Required phrases and extended notes: [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md)
