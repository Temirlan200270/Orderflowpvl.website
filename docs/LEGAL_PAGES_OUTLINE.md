# Legal pages — structure outline

Structural specification for `/legal/privacy` and `/legal/terms`. **Verbatim legal paragraphs and the required Privacy opening sentence** are in [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md).

## Shared UI requirements

- English prose, `max-w-3xl` (or equivalent), comfortable line height, dark theme consistent with [MASTER_SPEC.md](MASTER_SPEC.md).
- Prominent **Back to home** link to `/`.
- Where possible, interpolate company name, IIN, address, email, and phone from `BUSINESS_INFO` in `lib/config/business.ts` ([DATA_CONTRACT.md](DATA_CONTRACT.md)) so text cannot drift from the contract.

---

## Privacy policy (`/legal/privacy`)

### Required content

1. **Opening paragraph** — Must include the exact sentence specified in [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md) (IIN, location, domain).
2. **Controller identity** — IE ABISHEV, IIN, registered address, contact coordinates.
3. **Purposes** — Data processed **only** for automotive service appointment scheduling and related B2B communication.
4. **Categories of data** — e.g. contact details voluntarily provided; technical logs only if applicable (state honestly).
5. **No sale** — No sale of personal data to third parties.
6. **Legal basis / compliance** — Republic of Kazakhstan; high-level rights (access, correction, deletion) where applicable.
7. **Retention** — Reasonable, described generically.
8. **Changes** — Policy may be updated; last updated date on page.
9. **Disclaimer** — Short note that this is not legal advice (optional but recommended; see LEGAL_COPYWRITING).

### Suggested heading outline

- Introduction  
- Information we collect  
- How we use your information  
- Legal bases and retention  
- Your rights  
- Contact  
- Changes to this policy  

---

## Terms of service (`/legal/terms`)

### Required content

1. **Jurisdiction** — Laws of the **Republic of Kazakhstan**.
2. **Service scope** — Professional automotive technical maintenance, ECU diagnostics, and suspension-related services under **OKED 45201**.
3. **Refusal clause** — Exact wording in [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md).

### Suggested heading outline

- Acceptance of terms  
- Description of services  
- Appointments and communications (mailto/tel; no e-commerce checkout in v1)  
- Limitation of liability (generic; lawyer review)  
- Governing law  
- Contact  
- Changes to terms  

---

## Related documents

- [LEGAL_COPYWRITING.md](LEGAL_COPYWRITING.md) — Required phrases and drafting notes  
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) — Language and identity display  
- [META_CHECKLIST.md](META_CHECKLIST.md) — Pre-submit verification
