# Portfolio Website — Progress Log

> Personal running doc to track what's done, what's in flight, and what's next.
> Update this whenever you make a meaningful change so future-you (and Claude) can pick up fast.

**Last updated:** 2026-05-10 (v2.3 · /work hub built, nav consolidated to Home/Work/About/Contact)

---

## TL;DR — Where I am right now

Infrastructure complete. Live at https://zgoingco.design. Brand system at **v2.3** (nav consolidated to Home · Work · About · Contact; active link = rust + bold; /work hub built). Next: fill in UGLOO case study content and add academic projects.

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
- [x] Locked brand identity: Z+mountains+path logo (Image 8 from Claude.ai brand session)
- [x] Locked color system: Forest `#2D4A33` (primary), Moss, Cream, Charcoal, plus warm autumn accents (Honey, Amber, Rust, Ember)
- [x] Locked typography: Cooper Black (hero) + Bookmania (mid) + Eurostile (body/UI), all served via Adobe Fonts
- [x] Created `BRAND_GUIDE.md` and `BRAND_SPEC.md` (machine-readable for Claude Code) — to be added to the repo and to the IxD project on Claude.ai
- [x] Cleaned logo source files: `logo-forest.svg`/`.png` and `logo-cream.svg`/`.png` (transparent backgrounds, brand color normalized to `#2D4A33`)
- [x] **Brand v2.2 watermark migration** — `TopoWatermark` refactored from `position: absolute` (section-scoped) to `position: fixed; z-index: -1` and moved to `app/layout.tsx`. Now rendered once globally; inherits to every route including `/case-studies/[slug]` and `/academic-projects/[slug]` which previously had no watermark. All per-page `<TopoWatermark />` instances and their bounding `relative overflow-hidden` wrappers removed.
- [x] **Brand v2.3 / Nav restructure** — Top nav consolidated from 5 links to 4: Home · Work · About · Contact. `/work` hub page built with case studies section above academic projects section, matching card patterns from their respective index pages. Active link state upgraded to rust + bold (was rust-only). "Work" link stays active on `/case-studies/*` and `/academic-projects/*` sub-routes. Legacy URLs preserved as deep links. BRAND_SPEC.md and BRAND_GUIDE.md bumped to v2.3.
- [x] **Carousel v2** — `OutdoorCarousel` fully rebuilt: 6 real Unsplash photos (autumn/nature, no people, all under 250KB) in `public/images/nature-carousel/`. Auto-advances every 6s. Hover + focus pause (separate `hoverPaused` state). Manual arrow/dot interaction triggers a one-interval pause then resumes (`manualPaused` via `setTimeout`). `prefers-reduced-motion` respected with live MediaQuery listener. Prev/next arrows: sand/92 bg, sand-edge border, charcoal chevron, 40px circle. Pagination: 6 dots, rust active pill (24×6px), sand/60 inactive (6px). Photo credits in `public/images/nature-carousel/CREDITS.md`.

## In progress 🔄

- [ ] Apply new brand system across the existing site (Option A — full refactor):
  - [ ] Drop logo files into `/public/logo/`
  - [ ] Wire Adobe Fonts `<link>` into `app/layout.tsx` (or equivalent)
  - [ ] Replace any existing color values with brand tokens from `BRAND_SPEC.md`
  - [ ] Replace existing fonts with Cooper Black / Bookmania / Eurostile per spec
  - [ ] Swap any logo references to point at `/logo/logo-forest.svg`
- [ ] Fill in real UGLOO content (`content/case-studies/ugloo.mdx`) — Brief → Problem → Research → Solution → Outcomes

## Next up 🔜

- [ ] Replicate the UGLOO MDX pattern for BeWell
- [ ] Then NeuroVerse / wearable redesign / remaining short case studies
- [ ] Wire homepage cards to the case study pages
- [ ] Polish, optimize images (TinyPNG / Squoosh), deploy to Vercel
- [ ] Update resume/links to point to new domain instead of Webflow URL
- [ ] **Logo cleanup task:** redraw the SVG as clean hand-coded paths (current SVG is from a raster trace — works but bloated). Target: under 5 path elements, single fill.
- [ ] Create icon-only variant of the logo (Z + mountains, no path detail) for favicons and small UI

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
- [ ] Activate Adobe Fonts web project with Cooper Black + Bookmania (Light Italic, Regular, Bold) + Eurostile, paste `<link>` into `app/layout.tsx`
- [ ] After Option A refactor, schedule the logo SVG redraw (clean hand-coded paths) before any print/large-format use
- [ ] Confirm the Adobe Fonts web project's exact font-family strings match the spec (lowercase-hyphenated by Adobe convention but can vary)
- [ ] Source 4-12 nature photographs for the homepage carousel (landscape orientation, ~1600px wide). Until then, run the build with placeholder gradients and swap real photos in afterward.
- [ ] Decide whether `/work` is a separate index page (would also use State A) or whether the homepage IS the work index

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

### 2026-05-08 (evening) — v2.2 global watermark migration
Spotted that the topo + ridge watermark was missing from `/case-studies/[slug]` and `/academic-projects/[slug]` after the v2.1 build finished. Root cause: spec described the watermark as a "page-level wrapper," which led to per-page wiring that missed the dynamic detail routes.

- **Fix: global watermark.** Spec updated to v2.2 — watermark now lives once in `app/layout.tsx` as a `position: fixed; z-index: -1` element. Every route inherits it automatically, including future pages.
- **Side effect (intentional):** the homepage now also has the watermark behind its Sand-canvas sections (Selected Work, Breath Strip). The State A hero still layers its three-ridge silhouette on top.
- **Lower maintenance:** future pages no longer need per-page watermark wiring. Add a route, get the brand background for free.
- **What didn't change:** opacity (0.13), SVG paths, ridge anchoring to bottom — all spec-locked. Only the placement strategy changed.
- **Files updated:** BRAND_SPEC.md (sections 3, two-state system, page composition, pre-shipping checklist), BRAND_GUIDE.md (v2.2 entry added, State B description corrected), V2.2_WATERMARK_PROMPT.md (new short Claude Code prompt for the migration). Old v2.1 commit stays committed locally — the watermark migration will be its own commit.
- **Next:** run the v2.2 prompt against the local repo, visual check, then push v2.1 + v2.2 together to production.

### 2026-05-08 (evening) — v2.1 Breath Strip
Quick follow-up session to fix a visual collision spotted in the v2.0 homepage assembly mockup.

- **Problem:** the rust CTA panel sat directly above the forest footer, and both being saturated dark structural panels back-to-back created visual collision — the eye had nowhere to rest.
- **Fix: Breath Strip pattern.** A short Sand-canvas section (24-32px padding) inserted between the rust CTA and the forest footer. Carries quiet "or just say hello" + email link content — same destination as the rust CTA, lower commitment level. The page rhythm now reads: announce → invite → close.
- **System rule added:** two heavy structural panels (Forest, Rust, Charcoal) must never be adjacent without a Breath Strip between them, unless adjacency carries semantic meaning (what-worked / what-didn't pairs).
- **Spec, guide, prompt, and pre-shipping checklist updated** to v2.1. New `.breath-strip` component pattern is in `BRAND_SPEC.md`. Homepage composition now has 9 steps (was 8), with Breath Strip required between rust CTA and forest footer.
- **Next:** unchanged from afternoon — Adobe Fonts setup, then run the v2.1 Claude Code prompt.

### 2026-05-08 (afternoon)
Brand v2.0 lock session in Claude.ai. Earlier today's v1.1 was the warm-up; this session resolved the architecture questions that were still open.

- **Page canvas: Cream → Sand.** `#FAF6EE` was reading too yellow / too dairy. Tested six warmer alternatives, picked **Sand `#F0E6D0`** — earthy enough to feel like canvas/parchment, light enough that body text contrast still works.
- **Two-state architecture decided.** Homepage gets State A (loud, atmospheric — sunset stripes, three-ridge hero, full-width nature carousel). Every other page gets State B (calm Sand canvas + topo+ridge watermark). Both states share all tokens, components, typography. Reasoning: portfolio homepage's job is first-impression atmosphere; content page's job is making the case study itself the focal point. Same brand, two volumes.
- **Background watermark for inner pages: Topo + ridge silhouettes.** Picked over hand-drawn topo (too casual), botanical fragments (too literal — would compete with case study photography), and tree rings (too motif-heavy). Topo + ridge gives "looking out across a valley" without literal mountains.
- **Hero treatment: thin sunrise stripe + outline ridges.** Original v1 hero had full forest panel + amber-orange gradient band, which read as too intense. Pulled back to just the 6px sunset stripe + three-ridge silhouette in fading green opacity. Keeps the sunrise reference, stops shouting.
- **Carousel placement: before the hero, with sunset stripes top AND bottom.** Sandwiches the photography between two horizon lines — sky above, sky below. The visual move that makes the carousel feel like a held moment instead of a random photo strip.
- **Rust co-structural panels approved.** Rust now joins Forest as a panel-level structural color. Forest = brand's resting state (default footers, sidebars, content panels). Rust = brand's call (CTAs, "currently open to" callouts, friction-vs-success pairs). Standard homepage pattern: rust CTA panel between work section and forest footer.
- **New signature elements formalized:**
  - **Sunset stripe** — 6px gradient (Honey → Amber → Rust), 85% opacity, State A only
  - **Three-ridge silhouettes** — fading green opacity layers (10%/18%/32%), anchored to bottom of containers
  - **Topo + ridge watermark** — State B page-level pattern at 0.13 wrapper opacity
  - **Coordinate metadata** — wayfinding language with 24px rust marker line (e.g., `UX/UI Designer · N 34.013° · W 118.310°`)
  - **Shape-symbol category tags** — ▲ Wearable · ◆ Wellness · ● Watch UI · ■ Mobile
  - **Rust CTA panel** — canonical "currently open to" banner, used once per page
- **Brand documents updated to v2.0:**
  - `BRAND_SPEC.md` — rewritten from scratch, now encodes both states, all signature elements, and CSS for everything
  - `BRAND_GUIDE.md` — rewritten with two-state explanation, "what changed in v2.0" section
  - `CLAUDE_CODE_PROMPT.md` — new 11-step prompt covering the full Option A refactor including State A homepage build and State B page treatment
- **Decisions deferred:**
  - Real nature photography for the homepage carousel — placeholders OK for first build, swap real photos in after
  - Logo SVG redraw (still a raster trace; works on web, redraw before any print use)
  - Adobe Fonts Web Project setup — needs to happen before running the Claude Code prompt
- **Next session:** create the Adobe Fonts Web Project, drop the brand files into the IxD project on Claude.ai, then run the v2.0 Claude Code prompt against the portfolio repo.

### 2026-05-08 (morning)
Brand identity session in Claude.ai. Locked the full brand system before applying it to the portfolio.

- **Logo:** picked the Z + mountains + winding path mark (Image 8 from a set of 8 generated options). Considered but rejected: a more abstract mountain-and-path version that lost the Z structure — kept Image 8 because the Z works as a recognizable monogram, which matters since the brand starts with Z (zgoingco).
- **Color system:** Forest green `#2D4A33` primary, plus Moss, Cream `#FAF6EE` (page bg, never `#FFF`), Charcoal `#1F2A22` (text, never `#000`), and a 4-step warm accent ramp — Honey `#E8B547`, Amber `#D87A3A`, Rust `#B8482E`, Ember `#7A2820`. Aim for ~70% greens / ~5% warm accents per screen.
- **Typography:** three-typeface system, all served via Adobe Fonts (no self-hosting):
  - Cooper Black for hero headlines (one per screen, max)
  - Bookmania for section headers (Bold) and subheads (Light Italic) — chose Bookmania over Recoleta (not on Adobe Fonts) and over Adobe Caslon (right move was warmth over editorial contrast since Cooper already brings personality)
  - Eurostile for body, UI, and uppercase tracked elements (nav, buttons, eyebrow, metadata)
- **Logo files cleaned in this session:**
  - Source PNG was actually a JPEG with a black background baked in. Re-extracted with anti-aliased alpha, autocropped, saved as `logo-forest.png` / `logo-cream.png` plus `-1x` (256px) and `-2x` (512px) web variants — all transparent backgrounds.
  - Source SVG was an Illustrator image-trace export with 200+ slightly different shades of green. Normalized down to 2 colors (Forest + Cream) and saved as `logo-forest.svg` / `logo-cream.svg`. Path data is still bloated; future task is to hand-redraw as clean SVG.
- **Brand documents created:**
  - `BRAND_GUIDE.md` — human-readable reference (rationale, voice, files)
  - `BRAND_SPEC.md` — machine-readable spec for Claude Code (CSS variables, component patterns, do's/don'ts, pre-shipping checklist)
- **Decided on Option A** for applying to the existing portfolio: full refactor since only the homepage and one case study scaffold exist — better to get the foundation right now than retrofit later.
- **Adobe Fonts setup pending:** need to create a Web Project on fonts.adobe.com, activate Cooper Black, Bookmania (Light Italic + Regular + Bold), and Eurostile (Regular), then paste the project's `<link>` tag into `app/layout.tsx`.
- **Next session:** run the Claude Code prompt (saved alongside the brand docs) to apply the brand across the site, then return to UGLOO content.

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

---

## UGLOO case study — content phase

### Session 1: Brief + Problem (May 7, 2026)
- Source PDF lives at `_source/UGLOO_website_pdf.pdf` (gitignored)
- Workflow: Claude Code reads the PDF, drafts into existing MDX components, I iterate on tone before committing
- Tone decisions that stuck:
  - First person singular for my contributions, plural for team decisions
  - Short paragraphs (2–4 sentences)
  - Concrete over abstract — picked the most specific version of any claim
  - Pushed back on stylized rewriting — first Claude draft of Brief led with "UGLOO is a wearable and companion app ecosystem designed for..." which was too polished; reverted to PDF's plain declarative tone
  - "we" → "I" but team still visible — changed "we were tasked" to "I worked with a team of four" to show both ownership and collaboration
- Components used in Brief + Problem: `Section`, `ImageWithCaption` (with `natural` prop for full-width responsive display), `KeyInsight` (with bullet list inside)
- Next session: Research + Interviews
