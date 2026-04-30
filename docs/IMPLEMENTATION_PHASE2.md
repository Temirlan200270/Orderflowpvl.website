# Phase 2 — Next.js implementation

Execute after documentation is frozen. Follow [ARCHITECTURE.md](ARCHITECTURE.md), [DATA_CONTRACT.md](DATA_CONTRACT.md), [MASTER_SPEC.md](MASTER_SPEC.md), [CONTENT_COPY.md](CONTENT_COPY.md), and [LEGAL_PAGES_OUTLINE.md](LEGAL_PAGES_OUTLINE.md) / [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md).

## 1. Scaffold

From the repository root:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

If the directory is not empty, create in a subfolder and move files, or use the CLI’s non-empty workflow per current Next.js docs.

Recommended options:

- **TypeScript:** yes  
- **Tailwind CSS:** yes  
- **App Router:** yes  
- **`src/` directory:** no (paths in docs assume `app/` at root)

## 2. Dependencies

```bash
npm install lucide-react
```

No Framer Motion or form backends in v1.

## 3. Implementation order (suggested commits)

1. **`lib/config/business.ts`** — Implement `BUSINESS_INFO` exactly per [DATA_CONTRACT.md](DATA_CONTRACT.md) § TypeScript contract.  
2. **`app/globals.css` + `app/layout.tsx`** — Fonts (Inter or Geist), metadata from [CONTENT_COPY.md](CONTENT_COPY.md), `lang="en"`.  
3. **`components/layout/Header.tsx`** + **`LegalFooter.tsx`**.  
4. **`components/sections/Hero.tsx`**, **`ServicesGrid.tsx`**, **`Technology.tsx`**, **`ContactInfo.tsx`**.  
5. **`app/page.tsx`** — Compose in order: Header → Hero → ServicesGrid → Technology → ContactInfo → LegalFooter.  
6. **`app/legal/privacy/page.tsx`** and **`app/legal/terms/page.tsx`** — Content per legal docs; use `BUSINESS_INFO` for variables.  
7. **Map** — iframe or static image; document choice in commit message.  
8. **Self-check** — [META_CHECKLIST.md](META_CHECKLIST.md).

## 4. Quality gates

- `npm run lint` / `npm run build` pass.  
- No hardcoded IIN, address, phone, or email outside `business.ts` (except legal boilerplate that duplicates constants only via imports).  
- Grep sanity: building number appears as **81/1**, not `81` alone, in user-visible strings.

## 5. Deployment

- Deploy to Vercel (or host of choice); enable HTTPS.  
- Point **orderflowpvl.website** DNS to the deployment.  
- Re-run [META_CHECKLIST.md](META_CHECKLIST.md) on production URL.
