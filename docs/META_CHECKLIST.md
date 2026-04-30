# Meta Business Manager — pre-submit checklist

Complete **after** the site is deployed and **before** submitting or re-submitting verification. Cross-check every item against [DATA_CONTRACT.md](DATA_CONTRACT.md).

## Site and technical

- [ ] Domain **orderflowpvl.website** loads over **HTTPS** with a valid certificate.
- [ ] Home page shows **IE ABISHEV**, **IIN 830520350723**, and the **full registered address** (Estaya St., Bld. 81/1, Apt/Office 19, Pavlodar, 140000, Kazakhstan — consistent wording).
- [ ] Footer links to **Privacy Policy** and **Terms of Service**; both routes return **200** and display content.
- [ ] **mailto:** `info@orderflowpvl.website` opens the user’s mail client.
- [ ] **tel:** `+77011000570` (or agreed format) initiates a call on mobile.
- [ ] No broken internal links; no placeholder “lorem ipsum” in production.
- [ ] Map (if present) shows a pin consistent with **81/1 Estaya**, Pavlodar.

## Email

- [ ] **info@orderflowpvl.website** can **receive** mail (inbox + spam check).
- [ ] Same address can **send** mail if you use it for Meta correspondence.
- [ ] Test: send an email to and from this address before relying on Meta’s verification message.

## Documents (PDFs)

- [ ] **State IE notification** (or equivalent): name and **IIN 830520350723** match the site and form.
- [ ] **Bank statement (ForteBank):** address and name match the site and Meta address fields **word for word** where the form requires it.

## Meta form consistency

- [ ] Legal name / business name matches documents and site.
- [ ] Address lines, city, postal code, country match `DATA_CONTRACT.md` and your proofs.
- [ ] Phone format matches what you use on the site.
- [ ] Website URL exactly **https://orderflowpvl.website** (no typos, correct protocol).

## Optional sanity checks

- [ ] Open the site in an incognito window and click every header/footer link.
- [ ] Save a screenshot of the footer and legal pages for your records.

---

## Verification notes (code + prod)

**Aligned with code / `DATA_CONTRACT` (review 2026-04-30):**

- **HTTPS / domain:** confirm in browser and `curl -sI https://orderflowpvl.website` (you had **200 OK** on VPS).
- **IE ABISHEV on home:** header logo uses `BUSINESS_INFO.name`; Contact block repeats legal name, **IIN 830520350723**, `address.formatted` (Estaya, **81/1**, apt 19, Pavlodar, 140000).
- **Footer:** Privacy + Terms links; **mailto** `info@orderflowpvl.website`, **tel** `+77011000570` from `business.ts`.
- **Legal routes:** `/legal/privacy`, `/legal/terms` have metadata and IIN/address in copy (see `app/legal/*`).
- **Map:** iframe uses lat/lng for Estaya area (`mapEmbed` in `lib/config/business.ts`).
- **Placeholders:** no `lorem` / obvious TODO in TSX.

**Only you can confirm (not in repo):**

- [ ] Inbox **info@orderflowpvl.website** (receive + send test).
- [ ] PDFs (IE notification, ForteBank) match site and Meta fields **word-for-word** where required.
- [ ] Meta Business form: URL exactly **https://orderflowpvl.website**, address/phone match `DATA_CONTRACT.md`.
