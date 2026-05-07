# Portfolio Website — Progress Log

> Personal running doc to track what's done, what's in flight, and what's next.
> Update this whenever you make a meaningful change so future-you (and Claude) can pick up fast.

**Last updated:** 2026-05-07

---

## TL;DR — Where I am right now

Infrastructure complete. Live at https://zgoingco.design. Next phase: filling in case study content, starting with **UGLOO**.

---

## The stack & approach

- **Framework:** Next.js (from v0 export)
- **Content format:** MDX files (one per case study) — chosen over a CMS because volume is small (~12 case studies) and editing files directly is faster than maintaining a CMS schema
- **Editing:** Claude Code in Terminal
- **Hosting:** Vercel (live — auto-deploys from `main`)
- **Replacing:** Webflow (`z-design-notebook.webflow.io`) — leaving because case study creation was too slow

---

## Project location on disk

```
~/Desktop/portfolio_website/
```

Flattened today — no `my_portfolio` wrapper, no `b_pWjCYhe5jTr` subfolder. `package.json` and all project files live directly here.

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
- [x] v0 export already includes MDX infrastructure — custom components in `components/mdx/`: `CaseStudyHeader`, `Section`, `ImageWithCaption`, `AnnotatedImage`, `KeyInsight`, `QuoteCard`, `QuoteGrid`, `PersonaCard`, `PersonaGrid`, `StoryboardFrame`, `StoryboardGrid`, `ComparisonGrid`
- [x] Initialized git repo with clean `.gitignore` on `main` branch
- [x] Standardized on pnpm (v10.33.3); removed `package-lock.json` conflict
- [x] Flattened folder structure (removed `my_portfolio` wrapper)
- [x] Pushed repo to GitHub at `zgoingco13/portfolio_website`
- [x] Connected GitHub to existing Vercel project (`v0-portfolio-website-design`, on Pro plan)
- [x] Verified end-to-end: push to `main` triggers production build automatically (~10–15s)
- [x] Confirmed UGLOO case study scaffold renders live at `/case-studies/ugloo`
- [x] Production URL: https://v0-portfolio-website-design-lovat-six-96.vercel.app
- [x] Bought `zgoingco.design` ($19.99 yr 1, autorenew OFF — expires May 5 2027)
- [x] Bought `zgoingco.com` ($11.25/yr, autorenew ON)
- [x] Configured `zgoingco.design` as primary; `.com` and `.vercel.app` URLs redirect to it

## In progress 🔄

- [ ] Fill in real UGLOO content (`content/case-studies/ugloo.mdx`) — Brief → Problem → Research → Solution → Outcomes

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
| **UGLOO** — Wearable ecosystem for neurodivergent kids (Lvl 1 Autism) | Spring 2025 (16 wks) | Marketing/Brand Lead, UX/UI, UX Research | Full PDF write-up + images in project files | **Partially started** — `ugloo.mdx` exists; 4 images in `public/images/case-studies/ugloo/` (hero-phone, hero-watch, logo, solution-diagram) |
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
- `public/images/case-studies/ugloo/` — **4 images present** (hero-phone, hero-watch, logo, solution-diagram)
- `public/images/case-studies/bewell/` — pending
- `public/images/case-studies/apple-watch/` — pending

Optimize later via TinyPNG or Squoosh before deploy.

---

## Open questions / decisions parked

- [ ] What component pattern for case study layouts? (hero → problem → research → solution → outcomes — match across all three majors?)
- [ ] How rich should the major case studies feel? (Embedded prototypes? Image carousels? Just static images + prose?)
- [ ] Rename Vercel project from `v0-portfolio-website-design` to something cleaner (e.g. `portfolio`)
- [ ] Rename `name` field in `package.json` from `"my-project"` to something real
- [ ] Delete dead code: `lib/case-studies.ts` (orphan from v0, unused since switch to MDX)
- [ ] Decide on `.design` renewal by April 2027 (~$53.29/yr after promo)
- [ ] Decide whether to commit `_source/` PDFs to git or add to `.gitignore`

---

## Useful commands cheat sheet

```bash
# Get into the project
cd ~/Desktop/portfolio_website

# Install deps (first time, or after pulling new packages)
pnpm install

# Run the dev server
pnpm dev

# Add a package
pnpm add <pkg>

# Launch Claude Code inside the project
claude
```

---

## Log

### 2026-05-07
Domain session. Bought `zgoingco.design` (primary, $19.99 yr 1, autorenew OFF, expires May 2027) and `zgoingco.com` ($11.25/yr, autorenew ON). Configured `.design` as the canonical URL on Vercel; `.com` and `.vercel.app` redirect to it. Site is now live at https://zgoingco.design. Open question: decide whether to renew `.design` at ~$53.29/yr before May 2027.

### 2026-05-05
Major infrastructure session. Returned after weeks away. Created progress doc, set up git repo, pushed to GitHub, standardized on pnpm, connected GitHub to existing Vercel project, verified auto-deploy works end-to-end. UGLOO scaffold now live. Next session: start filling in UGLOO content from the source PDF.

- Returned after working on other projects; couldn't remember status
- Created this progress doc to prevent future "where was I?" gaps
- Dropped progress doc into repo, initialized git, made root commit on `main`
- Discovered v0 scaffold is more complete than remembered: MDX component library already exists (`components/mdx/`), `ugloo.mdx` is partially written, 4 UGLOO images already in `public/`
- Standardized on pnpm (v10.33.3), removed `package-lock.json`
- Flattened folder structure — removed `my_portfolio` wrapper directory
- Pushed to GitHub (`zgoingco13/portfolio_website`)
- Connected GitHub repo to existing Vercel project (`v0-portfolio-website-design`, Pro plan)
- Verified push-to-main triggers production build automatically (~10–15s)
- UGLOO case study scaffold confirmed live at `/case-studies/ugloo`

### Late April 2026
- Confirmed Webflow case studies are static pages, not CMS-backed
- Settled on MDX over Sanity/Contentful for content
- Discussed image copy-vs-move workflow

### Mid-April 2026
- Installed Claude Code 2.1.112
- Located v0 project files (subfolder issue resolved)
- Hit `npm install` ENOENT error — caused by being in wrong folder
