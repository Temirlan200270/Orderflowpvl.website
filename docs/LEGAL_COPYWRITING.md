# Legal pages — content outline

**Page structure (headings, ordering):** [LEGAL_PAGES_OUTLINE.md](LEGAL_PAGES_OUTLINE.md)

**Disclaimer:** This is a structural and copy outline for a small business site. It is **not** legal advice. Have a qualified lawyer review final text for Kazakhstan and any applicable GDPR/CCPA-facing language if you serve EU/EEA or California users.

## 1. Privacy policy (`/legal/privacy`)

### Required opening paragraph

The first paragraph **must** contain the following sentence verbatim (Meta and internal consistency checks):

> This Privacy Policy outlines how IE ABISHEV (Tax ID / IIN: 830520350723), located at 140000, Pavlodar, Estaya 81/1, apt 19, collects and processes data via orderflowpvl.website.

### Recommended sections (headings)

1. **Introduction** — Who operates the site; reference IIN and domain.  
2. **Data we process** — Contact details voluntarily provided (e.g. when emailing or calling), technical logs if you add analytics later (if none, state minimal server logs only).  
3. **Purposes** — **Solely** automotive service appointment scheduling and related B2B communication.  
4. **Legal basis / compliance** — Laws of the Republic of Kazakhstan; mention that you do not sell personal data to third parties.  
5. **Retention** — High-level, reasonable periods.  
6. **Your rights** — Access, correction, deletion where applicable under local law (keep generic if unsure).  
7. **Contact** — Data controller contact: same email/phone as `DATA_CONTRACT.md`.  
8. **Changes** — Policy may be updated; last updated date.

### UI requirements

- English primary text, `max-w-3xl`, readable line length, link “Back to home” to `/`.
- Pull company name, IIN, address snippets from `BUSINESS_INFO` where possible so legal pages stay in sync with the contract.

## 2. Terms of service (`/legal/terms`)

### Must include

- **Jurisdiction:** Laws of the **Republic of Kazakhstan**.  
- **Service scope:** Professional automotive technical maintenance, ECU diagnostics, and suspension-related work under **OKED 45201**.  
- **Safety / refusal:**  
  > IE ABISHEV reserves the right to refuse service to vehicles that do not meet our safety inspection criteria.

### Recommended sections

1. Acceptance of terms  
2. Description of services (aligned with OKED 45201)  
3. Appointments and communications (mailto/tel — no online ordering)  
4. Limitation of liability (generic, lawyer-reviewed)  
5. Governing law and venue (Kazakhstan)  
6. Contact  
7. Changes to terms  

### UI requirements

- Same layout discipline as privacy page; “Back to home” to `/`.

---

## Kazakhstan — personal data law (reference, not legal advice)

The business operates in the **Republic of Kazakhstan**. Applicable rules include the Law of the Republic of Kazakhstan **“On Personal Data and Their Protection”** (and related norms). For a **website**, regulators and platforms generally expect a clear **Privacy Policy** describing who processes data, why, and how users may contact you.

### Consent and interaction patterns

- **Ideal (later versions):** If you add **contact forms**, newsletters, or other active collection on the site, consider explicit consent UX (e.g. a **checkbox** “I agree to the processing of personal data”) aligned with local counsel advice.
- **Version 1 (current product scope):** The site uses only **`mailto:`** and **`tel:`** links — the visitor’s mail client or phone handles communication; there is no server-side form submission in v1. For that minimal pattern, a published **Privacy Policy** that describes voluntary contact and purposes (appointment scheduling / workshop coordination) is **typically sufficient** as a baseline; upgrading to explicit checkbox flows remains optional until you add forms or tracking that materially changes collection.

**Reminder:** Confirm wording and consent mechanics with a qualified lawyer in Kazakhstan before relying on them for compliance or disputes.
