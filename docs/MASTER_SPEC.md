# UI and architecture specification

## 1. Project stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## 2. Design system

- **Theme:** Industrial / deep tech, dark-first, corporate B2B.
- **Colors:** Page background `bg-slate-950`, surfaces `bg-slate-900`, borders `border-slate-800`, accents `text-blue-500` / `bg-blue-600` (use theme tokens consistently).
- **Typography:** Inter or Geist, sans-serif, high contrast, minimal decoration.
- **Motion:** No heavy animation libraries. Prefer CSS-only subtle hover/focus states.
- **Background:** Optional very light noise or grid texture via `globals.css` (performance-friendly).

## 3. Canonical file map

See **[ARCHITECTURE.md](ARCHITECTURE.md)** for the authoritative path list, resolved naming (`ServicesGrid`, `ContactInfo`, mandatory `Technology`), and section `id`s. Do not duplicate that table here.

## 4. Page structure (`app/page.tsx`)

1. **Header**  
   Typographic logo: **IE ABISHEV** with secondary line **AUTOMOTIVE SYSTEMS** (or “\| AUTOMOTIVE SYSTEMS”). Anchor links: Services, Technology, Contact (IDs: `#services`, `#technology`, `#contact`).

2. **Hero** (`#` top)  
   - Background: `slate-950`, optional radial/grid accent.  
   - Eyebrow: e.g. “Established 2025” (exact wording in `CONTENT_COPY.md`).  
   - H1: **Advanced Vehicle Diagnostic & Maintenance Center.**  
   - Subtitle: precision maintenance, ECU diagnostics, Pavlodar / fleet context.  
   - Primary CTA: `mailto:` to corporate email (from config).

3. **Services** (`#services`) — OKED 45201 alignment  
   Three-column grid (responsive stack on small screens). Cards on `bg-slate-900`, `border-slate-800`, hover e.g. `hover:border-blue-500/50`.

   - **ECU diagnostics & software calibration** — OBD2, control units, calibration (icon e.g. `Cpu`).
   - **Chassis, suspension & transmission** — brakes, suspension, transmission servicing (icon e.g. `Wrench`).
   - **Fleet preventive maintenance & fluids** — oil, filters, inspections (icon e.g. `Activity`).

4. **Technology / equipment** (`#technology`) — **required**  
   Not a fourth “service” card: a dedicated narrative block that states use of industrial diagnostic hardware, OEM-level procedures, and named classes of tools (e.g. professional OBD2 scanners, calibration workflows) in dry technical language. Goal: credible operational depth, not marketing fluff. No pricing tables.

5. **Contact / location** (`#contact`)  
   - Two columns: **left** — legal name, IIN, full formatted address (from config); **right** — clickable `tel:` and `mailto:`.  
   - **Map:** Prefer an **interactive Google Maps iframe** (see [ARCHITECTURE.md](ARCHITECTURE.md) — trust / verification). Static map image is an allowed fallback; pin must match Estaya **81/1**, Pavlodar.

6. **Footer**  
   `LegalFooter`: © 2025–2026 IE ABISHEV, Privacy and Terms links, micro-line: operates under OKED 45201; banking reference ForteBank per `DATA_CONTRACT.md`.

## 5. Routing

| Route | Purpose |
|--------|---------|
| `/` | Landing |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |

## 6. Non-goals

- No server-side contact forms, databases, or auth.
- No social embeds unless you explicitly add them later (keep footprint minimal).
- No third-party trackers in v1 unless required later (document if added).

## 7. Related documents

| Document | Role |
|----------|------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | File map, section order, resolved contradictions |
| [DATA_CONTRACT.md](DATA_CONTRACT.md) | Legal data + `BUSINESS_INFO` TypeScript shape |
| [CONTENT_COPY.md](CONTENT_COPY.md) | English marketing strings |
| [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) | Footer / language rules |
| [LEGAL_PAGES_OUTLINE.md](LEGAL_PAGES_OUTLINE.md) | Legal page structure |
| [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md) | Required legal phrases and notes |
| [META_CHECKLIST.md](META_CHECKLIST.md) | Pre-submit verification |
| [IMPLEMENTATION_PHASE2.md](IMPLEMENTATION_PHASE2.md) | Scaffold and build order |
