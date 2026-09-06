# LeesLig

Faceless South African **Afrikaans reading practice** product — free calm web app (Gr 1–7) + sellable printable pack.

**Audience:** SA parents/caregivers · Grades 1–7  
**Price:** R99 (Gumroad — create after daily limit reset; queue with AGM / Little Angels)  
**COI-safe:** no mining/Tronox · no founder face/name on product

## Legal fence (required)

Afrikaans reading practice and enrichment only. ADHD-friendly *design* (short sessions, one task at a time, calm UI) — **not** ADHD diagnosis, treatment, or therapy. Not CAPS-certified, not a school curriculum, and not a substitute for a registered teacher, school, or official DBE materials. Results vary; no exam or grade guarantees. For use under a parent/guardian. LeesLig / the seller is not an education authority, tutoring franchise, or healthcare provider.

Fuller copy: `pack/DISCLAIMER.md`.

**Hard no:** CAPS-aligned, DBE-approved, covers curriculum, guaranteed marks, school replacement, ADHD cure/treatment/diagnosis, remedial therapy.

## Repo layout

```
index.html          Free practice web app MVP
tips.html           Parent tip sheet (short sessions)
css/ styles.css     Calm, low-clutter UI
js/ content.js      Original Afrikaans DEMO items (Gr1–3 fuller; Gr4–7 stubs)
js/ app.js          Grade/session/modules + timer + parent gate + localStorage stars
pack/               Sellable pack source
GUMROAD_LISTING.md  Paste-ready listing (R99) — HOLD create until Gumroad reset
LeesLig_Afrikaans_Reading_Practice_Pack.zip
```

## Run locally

Open `index.html` in a browser (no build step).

```bash
python3 -m http.server 8080 --directory /workspace/leeslig
```

## Web modules

| Module | Focus |
|--------|--------|
| Klanke | Letter / digraph sounds (junior-heavy) |
| Kort woorde | Read & match spelling |
| Sinne | Short sentences + comprehension |
| Passasies | Short passages + questions (senior-leaning) |

- Grade picker Gr 1–7  
- Session length 3 / 5 / 8 minutes  
- Optional gentle timer (parent settings)  
- Parent mode gate (3+4) for settings  
- Progress stars in `localStorage` (device-only; no child accounts; no social)

## GitHub Pages plan

| Item | Value |
|------|--------|
| Org/user | `esteprinsloo101-web` |
| Repo | `leeslig` (public) |
| Branch | `main` |
| Pages source | Deploy from branch `main` / root `/` |
| Expected URL | `https://esteprinsloo101-web.github.io/leeslig/` |

## Sellable pack

Zip: `LeesLig_Afrikaans_Reading_Practice_Pack.zip`  
Gumroad: paste from `GUMROAD_LISTING.md` · **HOLD create** if daily limit hit — same queue as AGM / Little Angels.

## Do not modify

`little-angels/` · `steady-kit/` · `randradar/` · `first-minutes/`
