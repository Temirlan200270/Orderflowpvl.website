# DNS (Hetzner) — reference

Zone for **`orderflowpvl.website`** (same domain as [DATA_CONTRACT.md](DATA_CONTRACT.md)). Shape matches a typical Hetzner export: SOA, three NS, apex + `www` **A** → VPS.

| Item | Value |
|------|--------|
| Zone | `orderflowpvl.website` |
| Apex + `www` | **A** → `178.104.163.216` (TTL 300 in template) |
| NS | `helium`, `hydrogen`, `oxygen` (Hetzner) |

Template: [infra/dns/zone-reference.zone](../infra/dns/zone-reference.zone).

If the marketing site is hosted elsewhere (e.g. Vercel), point **apex / www** there instead — this file is only the **one-server** layout, like your original zone.

### «RRSet(s) cannot be deleted»

Bulk paste **replaces** the zone. Anything already in Hetzner but **missing** from the paste counts as deletion. **Fix:** start from the **current** export in the console, then edit; keep all **NS** lines and any records you still need.
