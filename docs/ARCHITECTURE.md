# Architecture and canonical structure

This document **resolves naming and structure contradictions** from earlier drafts. All implementation MUST follow this map.

## Resolved decisions

| Topic | Deprecated / do not use | Canonical choice |
|--------|-------------------------|------------------|
| Services section file name | `Services.tsx`, `Equipment.tsx` as the services grid | `components/sections/ServicesGrid.tsx` |
| Contact section file name | `Contact.tsx` | `components/sections/ContactInfo.tsx` |
| Technology block | Optional | **Mandatory** — `components/sections/Technology.tsx` (`#technology`). Separate from the three service cards (no fourth card). |
| Building number in address | `81` (without `/1`) | **81/1** everywhere, per bank/registry alignment |
| Legal pages content spec | Ad-hoc copy in components | `docs/LEGAL_PAGES_OUTLINE.md` + verbatim paragraphs in `docs/LEGAL_COPYWRITING.md` |
| Meta pre-submit list | Informal notes | `docs/META_CHECKLIST.md` |

## Canonical route and file map

| Path | Responsibility |
|------|----------------|
| `lib/config/business.ts` | Exports `BUSINESS_INFO` (shape in `docs/DATA_CONTRACT.md` § TypeScript contract) |
| `app/layout.tsx` | `html lang="en"`, metadata, font (Inter or Geist) |
| `app/globals.css` | Base styles; optional noise / grid background |
| `app/page.tsx` | Composes `Header`, sections, `LegalFooter` |
| `app/legal/privacy/page.tsx` | Privacy policy |
| `app/legal/terms/page.tsx` | Terms of service |
| `components/layout/Header.tsx` | Typographic logo, anchor navigation |
| `components/layout/LegalFooter.tsx` | IIN, address, copyright, legal links |
| `components/sections/Hero.tsx` | Hero + primary CTA |
| `components/sections/ServicesGrid.tsx` | Three OKED 45201 cards |
| `components/sections/Technology.tsx` | Equipment / diagnostics narrative (trust section) |
| `components/sections/ContactInfo.tsx` | Legal block + `tel` / `mailto` + map |

## Section order on home page

1. `Header` (sticky or static per design)  
2. `Hero`  
3. `ServicesGrid` — `id="services"`  
4. `Technology` — `id="technology"`  
5. `ContactInfo` — `id="contact"`  
6. `LegalFooter`  

## Map implementation

Pin MUST match **Estaya 81/1**, Pavlodar (same location as address proofs).

### Recommendation (verification / trust)

For Meta Business Manager and similar reviews, prefer an **interactive Google Maps iframe embed**. It reads as a live, verifiable map tied to a real place (zoom/pan, familiar UI), which typically compares better than a flat screenshot when reviewers assess whether the business exists at the stated address.

### Allowed alternatives

- **Static map image** — acceptable as a fallback (optimize file size; ensure the depicted location matches **81/1** Estaya).

Document any change of approach in commit notes or a short note in [IMPLEMENTATION_PHASE2.md](IMPLEMENTATION_PHASE2.md).

## Related documents

- UI details and design tokens: [MASTER_SPEC.md](MASTER_SPEC.md)  
- Footer/display language rules: [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md)  
- Data shape: [DATA_CONTRACT.md](DATA_CONTRACT.md)
