# Portfolio Website — Progress Log

> Personal running doc to track what's done, what's in flight, and what's next.
> Update this whenever you make a meaningful change so future-you (and Claude) can pick up fast.

**Last updated:** 2026-05-05

---

## TL;DR — Where I am right now

Migrating off Webflow to a Next.js + MDX portfolio, scaffolded from a v0 export, edited with Claude Code in the terminal. Tech setup is mostly done; content migration is the active phase. About to wire up the **UGLOO** case study as the first MDX page to validate the pattern.

---

## The stack & approach

- **Framework:** Next.js (from v0 export)
- **Content format:** MDX files (one per case study) — chosen over a CMS because volume is small (~12 case studies) and editing files directly is faster than maintaining a CMS schema
- **Editing:** Claude Code in Terminal
- **Hosting:** Vercel (planned)
- **Replacing:** Webflow (`z-design-notebook.webflow.io`) — leaving because case study creation was too slow

---

## Project location on disk

```
~/Desktop/my_portfolio/b_pWjCYhe5jTr/
```

The outer `my_portfolio` folder is just a wrapper — actual project files (including `package.json`) live in `b_pWjCYhe5jTr`. Always `cd` into the inner folder before running `npm` commands.

---

## Done ✅

- [x] Decided to leave Webflow and rebuild
- [x] Generated initial site scaffold via v0
- [x] Exported v0 project, unzipped to Desktop
- [x] Installed Claude Code (v2.1.112) in Terminal
- [x] Located actual project folder (the `b_pWjCYhe5jTr` subfolder)
- [x] Confirmed case studies are NOT in Webflow CMS — they're static pages, so no API migration possible
- [x] Decided on MDX as the content format
- [x] Decided to **copy** (not move) images from organized folders into `public/images/case-studies/`

## In progress 🔄

- [ ] Run `npm install` successfully inside `b_pWjCYhe5jTr`
- [ ] Wire up first case study (UGLOO) as MDX to validate the pattern
- [ ] Copy UGLOO images into `public/images/case-studies/ugloo/`

## Next up 🔜

- [ ] Replicate the UGLOO MDX pattern for BeWell
- [ ] Then NeuroVerse / wearable redesign / remaining short case studies
- [ ] Wire homepage cards to the case study pages
- [ ] Polish, optimize images (TinyPNG / Squoosh), deploy to Vercel
- [ ] Update resume/links to point to new domain instead of Webflow URL

---

## Case study inventory

Pulled from resume + project files. Status reflects readiness for the new site.

### Major case studies (3 — long-form)

| Project | Year | Role | Source material status | MDX status |
|---|---|---|---|---|
| **UGLOO** — Wearable ecosystem for neurodivergent kids (Lvl 1 Autism) | Spring 2025 (16 wks) | Marketing/Brand Lead, UX/UI, UX Research | Full PDF write-up + images in project files | Not started |
| **BeWell** — Wellness app for medical professionals / Barnsdall walk experience | Fall 2024 (16 wks) | UX/UI Designer | Wireframes + final UI screens in project files | Not started |
| **Apple Watch — Now Playing redesign** | Spring 2025 (2 wks) | UX/UI Designer | Sketches, lo-fi, mid-fi, final renders in project files | Not started |

### Shorter case studies (~9 — to be inventoried)

- Howdy Partner! (Google UX cert peer-matching app, Winter 2023)
- *Others to be listed as content is gathered*

---

## Image asset locations

**Originals (don't touch — these are the archive):**
- Organized folders on local machine (UGLOO renders, BeWell screens, etc.)

**Repo copies (where MDX pulls from):**
- `public/images/case-studies/ugloo/` — pending
- `public/images/case-studies/bewell/` — pending
- `public/images/case-studies/apple-watch/` — pending

Optimize later via TinyPNG or Squoosh before deploy.

---

## Open questions / decisions parked

- [ ] What component pattern for case study layouts? (hero → problem → research → solution → outcomes — match across all three majors?)
- [ ] How rich should the major case studies feel? (Embedded prototypes? Image carousels? Just static images + prose?)
- [ ] Domain name — keep `z-design-notebook` or pick something new?

---

## Useful commands cheat sheet

```bash
# Get into the project
cd ~/Desktop/my_portfolio/b_pWjCYhe5jTr

# Install deps (first time, or after pulling new packages)
npm install

# Run the dev server
npm run dev

# Launch Claude Code inside the project
claude
```

---

## Log

### 2026-05-05
- Returned after working on other projects; couldn't remember status
- Created this progress doc to prevent future "where was I?" gaps
- About to resume UGLOO MDX wire-up

### Late April 2026
- Confirmed Webflow case studies are static pages, not CMS-backed
- Settled on MDX over Sanity/Contentful for content
- Discussed image copy-vs-move workflow

### Mid-April 2026
- Installed Claude Code 2.1.112
- Located v0 project files (subfolder issue resolved)
- Hit `npm install` ENOENT error — caused by being in wrong folder
