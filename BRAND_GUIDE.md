# zgoingco — Brand Guide

*Brand system v2.4 · Last updated 2026-11-09*

> Companion to `BRAND_SPEC.md`. The spec is the rules; this guide is the reasoning.

---

## The system in one paragraph

zgoingco's brand is a portfolio for a designer who works at the intersection of wellness, neurodiversity, and thoughtful product design. The brand uses outdoor visual language — mountain ridges, topographic contour lines, sunrise gradients, coordinate metadata — not to claim "I work in the outdoor industry," but because that vocabulary maps cleanly to the work's actual themes: journey, attention, distance, slowness, observing carefully. Forest greens carry the brand identity. Sand is the canvas. Warm autumn tones (honey, amber, rust, ember) appear as wayfinding accents. Three typefaces — Cooper Black for attention, Bookmania for personality, Eurostile for readability — handle every typography moment.

---

## Quick reference

| Element | Color | Hex | Typeface |
|---|---|---|---|
| Logo (boot print) | Rust (light bg) / Sand (dark bg) | `#B8482E` / `#F0E6D0` | Cooper Black (Z, outlined) |
| Favicon | Rust shoe print on Sand tile | `#B8482E` / `#F0E6D0` | Cooper Black (Z, outlined) |
| Page background | Sand | `#F0E6D0` | — |
| Body text | Charcoal | `#1F2A22` | Eurostile |
| Hero headline | Charcoal (with Rust accent word) | `#1F2A22` / `#B8482E` | Cooper Black |
| Section header | Charcoal | `#1F2A22` | Bookmania Bold |
| Subhead / pull quote | Charcoal 80% | `#1F2A22` | Bookmania Light Italic |
| Coordinate metadata | Rust | `#B8482E` | Eurostile uppercase |
| Primary CTA | Rust on Sand | `#B8482E` | Eurostile uppercase |
| Highlight badge | Honey on Ember | `#E8B547` / `#7A2820` | Eurostile uppercase |
| Easy / soft tag | Moss on Sand | `#6B8A4A` | Eurostile uppercase |
| Eyebrow text on dark | Honey | `#E8B547` | Eurostile uppercase |
| Default footer | Forest | `#2D4A33` | — |
| CTA banner (rust panel) | Rust | `#B8482E` | — |

---

## 1. The two-state system

The most important architectural decision in v2.0: the brand has **two states**, and every page belongs to exactly one.

### State A — Homepage

The homepage's job is to make a strong first impression in the few seconds before someone decides whether to scroll. State A earns that attention through atmosphere: a full-width nature photography carousel sandwiched by sunset stripes, a hero with three-ridge mountain silhouettes, generous use of color and landscape composition.

**State A is only used on the homepage** (`/`) and any pure index page (`/work` if it's separate from the homepage).

### State B — Content pages

Once someone clicks into a case study or an inner page, the case study itself needs to be the loudest thing on the page. State B is the calm canvas: Sand background, coordinate metadata, occasional forest panels for emphasis. Color is reserved for accents and CTA moments. The topo + ridge watermark sits globally behind every page (not just State B) — see § 5.

**State B is used on every page that isn't the homepage** — case studies, about, contact, all future inner pages.

### What stays consistent

Both states share the logo, the full color palette, the three typefaces, the navigation styling, the case study card components, the rust CTA panel pattern, and the forest footer. The only thing that changes is *volume* — how loudly the brand expresses itself in any given moment.

This is how mature brands work. Patagonia's homepage is full-bleed mountain imagery. Patagonia's product pages are clean and data-dense. Same brand, different volumes for different jobs.

---

## 2. The mark

### The logo: boot print with a Z

The logo is a hiking-boot sole seen from below: chevron lugs up the middle of the forefoot, a ring of edge blocks, a round lug on the heel, and a capital **Z in Cooper Black** stamped into the arch plate, like a maker's mark on a real boot. It's a footprint — the first step of a trail — with the brand's initial pressed into it.

It carries the same idea as the original mark (a Z with mountains and a path running past the frame): the brand is about a journey. The boot says it more directly — this is someone who actually walks the trail — and it's a single, sturdy shape instead of a scene. It replaced the original in v2.4 because the old mark had too many small details and broke down at small sizes.

### Logo color

- **Rust (`#B8482E`) on light backgrounds** (Sand, white cards).
- **Sand (`#F0E6D0`) on dark backgrounds** (Forest footer, Charcoal). Rust on Forest is too low-contrast.
- One color at a time; the Z and the gaps between lugs are cut out, so the background shows through.
- Never in Honey, Amber, Ember, Moss, or Forest.

Rust is the brand's "call" color, so the logo now reads as the brand's signature accent rather than part of the green structure.

### File naming caveat

The files keep their old names so existing code keeps working: `logo-forest.svg` is the primary (light-background) logo — it's now **Rust**, not Forest — and `logo-cream.svg` is the inverse, which renders Sand (`#F0E6D0`). Don't rename them; just know the names are historical.

### File quality

Drawn by hand in Illustrator as clean vector shapes, with fills set directly on each shape. Crisp at any size, including print. The old traced, bloated SVG is retired.

### Proportions, clear space, and minimum size

- The logo is tall and narrow: about **0.4 : 1** (width : height).
- **Clear space:** at least the width of the heel on every side.
- **Minimum size (upright):** about 96px tall — that's where the Z becomes readable. Smaller than that, use the nav version or the favicon.

### Nav version: sideways boot

In the nav and footer, the boot turns sideways and walks right, toward the nav links, with the Z kept upright. The upright boot is too narrow for a header: at 64px tall its Z is only about 10px. Sideways at 56px tall, the Z is about 21px and the header doesn't have to grow.

- Files: `logo-nav-forest.svg` (Rust, light backgrounds) and `logo-nav-cream.svg` (Sand, dark backgrounds).
- Proportions about **2.55 : 1**. Nav: 56px tall (`143 × 56`). Footer: 48px tall (`123 × 48`).
- Always walking right (toe toward the right). Never flip it to walk left.

### The favicon: shoe print with a Z

At favicon sizes the boot's tread turns to texture, so the brand has a dedicated icon: **a single shoe print, turned sideways and walking right like the nav logo, with an upright Cooper Black Z cut out of the sole**, in Rust on a Sand rounded tile. It's the nav logo simplified: same direction, same Z, no lugs. Sideways, the sole is wide enough to give the Z more room than an upright print would.

- One design works at every size, from the 16px browser tab to the 512px app icon.
- The Z is Cooper Black, set large (about 13% bigger than an even stroke Z) so it survives at 16px. It stays upright while the print turns.
- The Sand tile keeps the icon visible in both light and dark browser tabs.
- On the iPhone home-screen icon, the tile is a full Sand square, because iOS rounds the corners itself.

### Alternate mark: footsteps Z

An earlier v2.4 candidate, kept as an alternate: nine shoe prints walking the shape of a Z, ending at a Rust badge with a waving flag cut out. Footprints in Forest (Sand on dark), flag badge in Rust. Use it only for decorative moments (e.g. a section divider or about-page detail), never in place of the logo.

### Why Cooper Black for the Z

Cooper Black is already the hero headline face, so the Z belongs to the brand. It's also the only one of the three typefaces heavy enough to survive small sizes: rounded, with no thin strokes. In the logo and favicon the Z is outlined artwork, not live text.

---

## 3. Color system

### Foundations

Four colors do the structural work. They appear on every page.

**Forest** — `#2D4A33`
The brand anchor. Navigation, structural elements, dark section backgrounds, the ridge silhouettes that appear in both states. Most-used color after Sand.

**Moss** — `#6B8A4A`
Secondary green. "Easy" / "Wearable" tags, success states, lighter green accents.

**Charcoal** — `#1F2A22`
Body text, deep UI surfaces. Never use pure black — Charcoal is a very dark green-gray that keeps the palette cohesive.

**Sand** — `#F0E6D0`
Page background. Never use pure white. Sand is warmer and more earthy than Cream — it reads as canvas, parchment, weathered map. The shift from the original Cream (`#FAF6EE`) to Sand was deliberate: it pulls the whole brand toward "natural surface" instead of "office software."

### Warm accents

Four colors bring autumn warmth. They appear as wayfinding signals, CTAs, and accent moments — not as paragraphs of color.

**Honey** — `#E8B547`
Highlights, "currently" badges, eyebrow text on dark backgrounds, "easy" tags.

**Amber** — `#D87A3A`
Sunset stripe middle, secondary CTAs, "Wellness / moderate" tags, journal section accents.

**Rust** — `#B8482E`
Primary CTAs, "Watch UI / strenuous" tags, coordinate metadata, accent words in headlines, the rust co-structural panel, the logo, and the favicon. The most-used warm accent.

**Ember** — `#7A2820`
Deep accent. Text on Honey backgrounds, sunset gradient endpoint, hover states.

### The forest + rust co-structural rule

This is the architectural change that defines v2.0's color system. Both Forest and Rust can carry full-panel structural moments — but they serve different roles:

**Forest is the brand's resting state.** Default footers, sidebars, content panels, and any "default" dark moment. When you don't have a specific reason, use Forest.

**Rust is the brand's call.** CTAs, "currently open to" callouts, friction-vs-success pairs, seasonal banners. When you want attention, use Rust.

Both panels can appear in the same section *only when colors carry semantic meaning* — for example, a forest "what worked" panel paired with a rust "what didn't" panel in a research findings section. Otherwise, never place forest and rust panels adjacent. The page becomes harder to read because both are competing as primary structural moments.

The standard homepage rhythm uses both: rust CTA panel ("currently open to UX/UI roles and freelance") sits between the work section and the footer, with the forest footer underneath. They're sequenced — rust grabs you with the call, forest catches you for the closing details.

### Color ratios

For any given screen, aim for: ~50% Sand canvas, ~28% Forest, ~12% Charcoal, ~7% Rust (CTA moments), ~3% remaining warm accents and Moss.

**If a screen feels too orange, it is.** Greens have to ground everything.

---

## 4. Typography

Three typefaces, three jobs. **Cooper for attention. Bookmania for personality. Eurostile for readability.** All three are served via Adobe Fonts.

### Cooper Black — Hero headlines

Used for hero headlines, key statements, and special callouts. Cooper's chunky retro warmth gives the brand its national-park-poster character. It's also the letterform for the Z in the logo and the favicon (outlined artwork).

- Sizes: 40–64px (responsive via clamp)
- Weight: Black (the only weight)
- Case: Sentence case
- Leading: Tight (1.0–1.1)
- Use sparingly — one Cooper headline per screen, max
- Below 24px, Cooper becomes muddy as live text. Use Bookmania instead. (The favicon Z is the exception: it's a single heavy outlined letter, drawn large inside the icon.)

### Bookmania — Section headers and voice

Bookmania is a revival of Bookman — Cooper Black's older cousin in the warm rounded-serif family. Pairing them keeps the brand cohesive in a single craft-revival vocabulary. Three weights are in active use:

- **Section headers** — Bookmania Bold, 22–32px
- **Subheads / pull quotes** — Bookmania Light Italic, 15–19px (this is where the editorial elegance lives)
- **Long-form journal copy** — Bookmania Regular, 16px (only for editorial-feeling content; default body is Eurostile)

### Eurostile — Body, UI, and labels

Used for everything functional: body text, navigation, buttons, labels, captions, metadata, form inputs.

- Body sizes: 14–16px, line height 1.6
- UI sizes: 11–13px
- **Uppercase Eurostile with +1.5 to +2px tracking** is the brand's signature for navigation, buttons, eyebrow text, coordinate metadata, and labels. This treatment evokes trail signage and gear specs.

### Hierarchy reference

| Element | Typeface | Size | Treatment |
|---|---|---|---|
| Hero headline | Cooper Black | 40–64px | Sentence case, tight leading |
| Section header | Bookmania Bold | 22–32px | Bold weight |
| Card title | Bookmania Bold | 18px | Bold weight |
| Subhead / pull quote | Bookmania Light Italic | 15–19px | Light italic for voice |
| Long-form journal copy | Bookmania Regular | 16px | Editorial content only |
| Body text (default) | Eurostile | 14–16px | 1.6 line height |
| Navigation | Eurostile | 12px | Uppercase, +1.5px tracking |
| Buttons | Eurostile | 11px | Uppercase, +1.8px tracking |
| Coordinate metadata | Eurostile | 9–10px | Uppercase, +2px tracking, color rust |
| Labels / metadata | Eurostile | 10–11px | Uppercase, +1px tracking |

### Licensing and loading (Adobe Fonts)

All three typefaces are licensed and served through the Adobe Fonts subscription. No self-hosting required.

In the Adobe Fonts Web Project, activate at minimum:
- Cooper Black — Regular
- Bookmania — Light Italic, Regular, Bold
- Eurostile — Regular

If a weight is referenced in CSS but not activated in the project, the browser fakes it — which looks bad. Activate every weight you reference.

---

## 5. Signature elements

Six brand-defining visual moves that distinguish zgoingco from other portfolio sites.

### Sunset stripe

A 6px gradient stripe (Honey → Amber → Rust) at 85% opacity. **State A only.** Sandwiches the nature photography carousel — one stripe at the top, one at the bottom. Conceptually: sky framing the photography from above and below. Without it, the carousel feels like an interruption; with it, the carousel feels like a held moment of horizon.

### Three-ridge silhouettes

Layered mountain ridge polygons in fading green opacity (10% / 18% / 32%). Used as the State A hero background and as the bottom-of-page horizon on State B page watermarks. The three opacities create depth — the closest ridge has the most prominent peaks. Always anchor ridges to the bottom of their container.

### Topo + ridge watermark (global)

The brand's wallpaper. Topo contour lines float above ghost ridges anchored to the bottom of the viewport — creates the feeling of "looking out across a valley." Lives in the root layout as a `position: fixed` element behind all content (z-index: -1, opacity: 0.13). Every page on the site inherits it automatically — homepage, case studies, academic projects, about, contact, all future routes.

Why fixed positioning: the watermark stays visible as the user scrolls, so long pages get the same atmospheric backdrop throughout. It acts as wallpaper, not a hero element. Cards, forest panels, rust panels, images, and the nature carousel all sit on top with opaque backgrounds, so the watermark naturally hides behind anything that needs to be loud — and shows through anywhere the canvas is plain Sand. The total opacity of 0.13 was chosen carefully: higher and it competes with content, lower and it disappears.

### Coordinate metadata

Wayfinding language pattern that runs throughout both states. Replaces generic eyebrow text. Always preceded by a 24px × 1px rust line. Examples:

- `UX/UI Designer · N 34.013° · W 118.310°` (homepage)
- `Case study · 2025 · Spring · 16 weeks` (case study hero)
- `12 case studies · 2022 – 2026` (work index)
- `Send a signal` (contact)

The pattern matters more than the specific words — anything that reads as wayfinding metadata works. Mileage, elevation, conditions, dates, route numbers.

### Shape-symbol category tags

Category tags use shape symbols + word combinations: `▲ Wearable`, `◆ Wellness`, `● Watch UI`, `■ Mobile`. The symbols establish a wayfinding/trail-marker visual language across the site. They appear on case study cards, filter pills, and any taxonomy moment.

### Rust CTA panel

The standard "currently open to / get in touch" banner. Appears between the work section and the footer on the homepage, and at the bottom of most content pages. Honey eyebrow text, Cooper Black headline (with Sand color), Bookmania Light Italic subhead, Sand-on-Charcoal button. This is the canonical "rust as a structural color" moment — high-stakes, attention-grabbing, used once per page.

### Breath Strip

The fix for the most common visual collision in the brand: when a rust CTA panel sits directly above a forest footer, both saturated dark panels stack back-to-back and the eye has nowhere to rest. The Breath Strip is a short Sand-canvas section between any two heavy structural panels — typically 24-32px of vertical padding, with an italic single-line copy moment ("Or just say hello.") and a quiet rust email link.

The rule: **two heavy structural panels (Forest, Rust, Charcoal) must never be adjacent without a Breath Strip between them**, unless their adjacency carries semantic meaning (e.g., a forest "what worked" panel paired with a rust "what didn't" panel — there, the adjacency *is* the message).

The Breath Strip earns its keep beyond just creating space — it gives you a third moment of contact on the page. The big rust CTA is for visitors who want a real conversation; the Breath Strip's email link is for visitors who'd rather just shoot a quick message. Different intents, different commitment levels, both supported.

---

## 6. Page composition

### Homepage (State A)

```
[Global topo + ridge watermark sits behind everything ↓]

Nav bar (Sand bg)
↓
Sunset stripe (6px)
↓
Nature carousel (4 photos visible)
↓
Sunset stripe (6px)
↓
Hero with three-ridge silhouette (layered ON TOP of the global watermark)
↓
Selected work section (Sand canvas — global watermark shows through)
↓
Rust CTA panel
↓
Breath Strip (Sand)
↓
Forest footer
```

The sunset stripes are the homepage's defining structural move. They turn the nature carousel from an unrelated photo strip into a held moment of horizon — sky above, sky below.

### Content page (State B)

```
[Global topo + ridge watermark sits behind everything ↓]

Nav bar (active link in rust + bold)
↓
Hero / page header with coordinate metadata
↓
Page content (Sand canvas + occasional forest panels)
↓
Rust CTA panel (or related-content moment)
↓
Breath Strip (Sand) — required between rust panel and forest footer
↓
Forest footer
```

Inner pages do not get sunset stripes (those are State A only). The global watermark and consistent typography carry the brand identity instead.

---

## 7. Voice and tone

Three principles for any brand copy:

**Spare, not slick.** Trim adjectives. Don't oversell. The work doesn't need a marketing pitch — let the case studies do the work.

**Specific, not generic.** "Six miles past the last paved road" beats "deep in the wilderness." "16-week design sprint with a four-person team" beats "comprehensive design project." Concrete details build trust.

**Earned, not aspirational.** Use the language of distance, weather, gear, time, observation. Avoid the language of escape, transformation, self-discovery, or "passion."

**Wayfinding language for navigation moments.** "Send a signal" instead of "Contact form." "Selected work · 3 of 12" instead of "Featured projects." "Currently open to" instead of "Hire me." This is the brand's outdoor identity doing quiet work.

Sentence case for everything except buttons, navigation, eyebrow text, and metadata (uppercase tracked).

---

## 8. What changed in v2.4

A new mark, a real favicon, and a letterform for the Z:

- **New logo: boot print with a Cooper Black Z.** The Z + mountains + path mark is retired. The new logo is a hiking-boot sole with a Cooper Black Z stamped into the arch. Reason: the old mark had too many small details and broke down at small sizes; the boot keeps the journey idea as one sturdy shape.
- **Logo color changed to Rust** on light backgrounds (Sand on dark). Previously the logo was Forest. File names stay `logo-forest.svg` / `logo-cream.svg` so code doesn't break.
- **Clean vector files.** Hand-drawn in Illustrator; the old raster-trace SVG and its "redraw later" task are resolved.
- **Favicon added.** A single upright shoe print with a Cooper Black Z cut out, Rust on a Sand tile — the boot simplified. One design at every size (16–512px). Replaces the planned "Z + mountains" icon-only variant.
- **Alternate mark: footsteps Z** (nine prints walking a Z to a Rust flag badge), kept for decorative use only.
- **Cooper Black for the Z** in both the logo and the favicon (outlined), matching the hero typeface.
- **Logo proportions changed** from square to tall (about 0.4 : 1).
- **Nav version:** the boot turns sideways and walks right in the nav and footer (`logo-nav-*.svg`, 143 × 56 in the nav), so the Z is about 21px instead of 10px. The favicon turns sideways to match.

## 9. What changed in v2.3

A small but meaningful change to information architecture and nav behavior:

- **Nav consolidated.** Previously four-link nav (Home · Case Studies · Academic Projects · Contact) became Home · Work · About · Contact. The /work page is a new hub that lists Case Studies in their own section above Academic Projects, giving case studies visual priority while keeping academic work discoverable.
- **/case-studies and /academic-projects URLs preserved.** They still render as deep-link routes — useful for sharing a specific case study without losing context. /work is just the canonical browsing entry point.
- **Active nav link styling bumped.** Previously rust color only. Now rust color + Bookmania Bold weight together. Either treatment alone wasn't strong enough — visitors couldn't always find their current location at a glance. Combined, the active link is unmissable.
- **About page added to the top nav.** The about page was built in v2.2 but wasn't yet linked from the main nav — that's resolved now.
- **Sub-route active state behavior.** When a visitor is on /case-studies/ugloo or /academic-projects/[anything], the Work nav link displays as active (rust + bold). This required `pathname.startsWith()` logic in the nav component since sub-routes don't match exactly.

## 10. What changed in v2.2

A scope correction after seeing the v2.1 site live:

- **Topo + ridge watermark moved to global page background.** Previously specified as "State B page-level wrapper" with the implication of per-page wiring, which led to dynamic detail routes (`/case-studies/[slug]`, `/academic-projects/[slug]`) being missed during the v2.1 application. Now lives in `app/layout.tsx` as a single `<TopoWatermark />` component with `position: fixed; inset: 0; z-index: -1`. Every route inherits it automatically.
- **Watermark now appears on the homepage too** (under the Sand-canvas sections — hero, work index, Breath Strip). Previously State A had its own three-ridge silhouette in the hero only. Now both states share the watermark; State A *also* layers the three-ridge silhouette into its hero on top.
- **Pre-shipping checklist updated** to verify `<TopoWatermark />` is in the root layout, not duplicated per-page.
- Lower-maintenance benefit: future pages added to the site inherit the watermark with zero extra work.

## 11. What changed in v2.1

A small but important addition after testing the v2.0 homepage assembly:

- **Breath Strip pattern.** A required Sand-canvas section between any two heavy structural panels (Forest, Rust, Charcoal). Solves the rust-CTA-above-forest-footer collision. Carries quiet "or just say hello" + email link content. Adds a third commitment level to the contact flow.
- **Updated rule.** Forest + Rust panel adjacency now requires either semantic meaning (what-worked / what-didn't pairs) OR a Breath Strip between them. Pre-shipping checklist updated accordingly.
- **Homepage composition updated.** New step 8 (Breath Strip) inserted between the rust CTA and forest footer.

## 12. What changed in v2.0

For anyone tracking the system's evolution:

- **Cream → Sand.** Page canvas shifted from `#FAF6EE` (yellow-cream) to `#F0E6D0` (warmer, earthier). Ripples through every State B page background and every "on-dark text" treatment.
- **Two-state architecture.** Previously the brand had one expression; now homepage and content pages get distinct treatments while sharing all underlying tokens.
- **Sunset stripe.** New 6px gradient pattern, used only in State A to frame the nature carousel.
- **Three-ridge silhouettes.** New SVG pattern used in both states — anchors heroes to a horizon.
- **Topo + ridge watermark.** Replaces the previous topo-only watermark. Adds ghost ridges at the bottom for depth.
- **Coordinate metadata.** Wayfinding language pattern formalized as a reusable component (`.coordinate-row`).
- **Shape-symbol category tags.** Category tags now use ▲ ◆ ● ■ symbols alongside words.
- **Rust co-structural panels.** Rust joins Forest as a panel-level structural color, with rules about when each is appropriate.
- **Active nav link.** Navigation links now turn rust (`#B8482E`) when their page is active.

---

## 13. Files and assets

```
/public
  /logo
    logo-forest.svg                primary logo: Rust boot print (light backgrounds)
    logo-forest.png / -1x / -2x    raster fallbacks (1024 / 256 / 512 px tall)
    logo-cream.svg                 inverse: Sand boot print (dark backgrounds)
    logo-cream.png / -1x / -2x     inverse raster fallbacks
    logo-nav-forest.svg            nav version: sideways Rust boot (header)
    logo-nav-cream.svg             nav version: sideways Sand boot (footer)
    footsteps-z-forest.svg / -cream.svg   alternate mark (decorative only)
/app
  favicon.ico                      sideways shoe-print favicon (16, 32, 48 px inside)
  icon.svg                         shoe-print favicon, vector (modern browsers)
  apple-icon.png                   180 px, full Sand square (iOS rounds corners)
  (optional) icon-16/32/192/512.png
/brand
  /docs
    BRAND_GUIDE.md                 (this file)
    BRAND_SPEC.md                  machine-readable spec for Claude Code
    CLAUDE_CODE_PROMPT.md          one-shot rebrand prompt
```

Fonts are not self-hosted — served via Adobe Fonts using the Web Project `<link>` tag in `<head>`.

---

## When the brand evolves

This document and `BRAND_SPEC.md` are living sources of truth. If you add a sixth color, change typography, or refine the logo — update both files together. They must always agree. Bump the version number in both, log the change in this guide's "What changed" section, and add a corresponding entry to `PORTFOLIO_PROGRESS.md`.
