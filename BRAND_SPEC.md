# BRAND_SPEC.md

> Source of truth for all brand styling on this website. When building or modifying any UI, **always read and follow this spec exactly.** If the spec and existing code disagree, the spec wins — update the code to match.

**Brand:** zgoingco (portfolio · zgoingco.design)
**Spec version:** 2.3 — nav active state combines rust color + bold weight; /work hub consolidates case studies and academic projects
**Last updated:** 2026-05-10 (v2.3)

---

## How to use this file

1. Before building any new page, component, or UI element — load this spec first.
2. Use the exact hex values, font stacks, and treatments below. Do not invent new colors or substitute typefaces.
3. Identify which **state** the page belongs to (see "The two-state system" below) and apply the matching treatment.
4. Follow the layout and component patterns at the bottom of this file.
5. If a request would require breaking a "Don't" rule, push back and propose an alternative.

---

## The two-state system

The brand has two states that share the same colors, typography, and logo, but deploy them at different volumes:

### State A — Homepage / index pages

**Used on:** `/` (homepage), `/work` if it's a separate index page.
**Vibe:** loud, atmospheric, landscape-as-page. The brand introducing itself.
**Signature elements:** sunset stripe (top + bottom of the nature carousel), three-ridge silhouette behind the hero, full-width nature photography carousel, rust CTA panel before the footer.

### State B — Content pages

**Used on:** `/case-studies/*`, `/academic-projects/*`, `/about`, `/contact`, any inner page.
**Vibe:** quiet canvas, the work is the focal point.
**Signature elements:** coordinate-style metadata, occasional dark forest panels for emphasis, Sand canvas dominates. State B's signature is what it *doesn't* have — no sunset stripes, no three-ridge silhouette hero, no nature carousel.

**Both states share:** logo, full color palette, all three typefaces, **the global topo + ridge watermark on every page** (see "Signature elements" § 3), case study card components, navigation styling, footer (forest, by default), CTA panel pattern (rust), Breath Strip pattern between heavy panels. Switching between states must feel like turning a page in the same magazine, not opening a different magazine.

---

## Color tokens

Use these as CSS variables. They are non-negotiable.

```css
:root {
  /* Foundations */
  --color-forest:   #2D4A33;  /* Logo, primary structure, dark sections, ridges */
  --color-moss:     #6B8A4A;  /* Secondary green, easy/soft tags */
  --color-charcoal: #1F2A22;  /* Body text, dark UI surfaces, never #000 */
  --color-sand:     #F0E6D0;  /* Page background — NEVER use #FFFFFF */
  --color-sand-edge: #D4C8A8; /* Borders on sand bg, divider color */

  /* Warm accents */
  --color-honey:  #E8B547;  /* Highlights, eyebrow text on dark, "easy" tags */
  --color-amber:  #D87A3A;  /* Secondary CTAs, moderate tags, sunset middle */
  --color-rust:   #B8482E;  /* Primary CTAs, strenuous tags, eyebrow on light, RUST PANELS */
  --color-ember:  #7A2820;  /* Deep accent, text on Honey */

  /* Semantic aliases — use these in component code */
  --bg-page:        var(--color-sand);
  --bg-surface:     #FFFFFF;          /* Cards on top of Sand */
  --bg-dark:        var(--color-charcoal);
  --bg-brand:       var(--color-forest);
  --bg-action:      var(--color-rust);   /* Rust panels (CTAs, banners) */

  --text-primary:    var(--color-charcoal);
  --text-secondary:  #5F5E5A;
  --text-on-dark:    var(--color-sand);
  --text-on-rust:    var(--color-sand);
  --text-eyebrow:    var(--color-rust);    /* On light backgrounds */
  --text-eyebrow-on-dark: var(--color-honey);  /* On forest or rust */

  --cta-primary-bg:    var(--color-rust);
  --cta-primary-text:  var(--color-sand);
  --cta-primary-hover: var(--color-ember);
  --cta-secondary-bg:  transparent;
  --cta-secondary-text: var(--color-forest);
  --cta-secondary-border: var(--color-forest);
  --cta-on-rust-bg:    var(--color-sand);  /* Buttons inside rust panels */
  --cta-on-rust-text:  var(--color-charcoal);

  --border-subtle: var(--color-sand-edge);

  /* Sunset stripe — used in State A only */
  --sunset-stripe: linear-gradient(to right, var(--color-honey) 0%, var(--color-amber) 50%, var(--color-rust) 100%);
  --sunset-stripe-height: 6px;
  --sunset-stripe-opacity: 0.85;
}
```

### Color usage rules (quick lookup)

| Use case | Color |
|---|---|
| Page background | `--color-sand` (never `#FFFFFF`) |
| Card / surface on top of Sand | `#FFFFFF` with `--border-subtle` |
| Body text on light bg | `--color-charcoal` (never `#000000`) |
| Body text on dark bg | `--color-sand` |
| Logo on light bg | `--color-forest` |
| Logo on dark bg (forest, charcoal, rust) | `--color-sand` |
| Primary button | `--color-rust` bg, `--color-sand` text |
| Secondary button | transparent bg, `--color-forest` text and border |
| Button inside a rust panel | `--color-sand` bg, `--color-charcoal` text |
| Eyebrow text on light | `--color-rust`, uppercase tracked |
| Eyebrow text on forest or rust panel | `--color-honey`, uppercase tracked |
| "Easy" / Wearable tag | `--color-moss` bg, `--color-sand` text |
| "Moderate" / Wellness tag | `--color-amber` bg, `--color-sand` text |
| "Strenuous" / Watch UI tag | `--color-rust` bg, `--color-sand` text |
| Default footer | `--color-forest` |
| CTA panel (banner before footer) | `--color-rust` |
| Card category accent stripe | varies (Honey / Amber / Rust / Forest) |

### The forest + rust co-structural rule

Both Forest and Rust can carry full-panel structural moments — but they serve different roles:

| Color | Role | When to use |
|---|---|---|
| **Forest** | Resting state. The brand's anchor. | Footers, sidebars, content panels, "default" dark moments. |
| **Rust** | Highlighted state. The brand's call. | CTAs, "currently" callouts, friction-vs-success pairs, seasonal banners. |

**The Breath Strip rule (REQUIRED):** Two heavy structural panels (Forest, Rust, or Charcoal) must NEVER be adjacent without a Sand "breath strip" between them. Saturated dark panels stacked back-to-back create visual collision — the eye has nowhere to rest. The breath strip is a Sand-canvas section (typically 24–32px vertical padding) that gives the panels space and earns its keep with secondary content (a quiet email link, a "or just say hello" line, a small piece of metadata, etc.). See "Breath Strip pattern" below.

**Forest + Rust panels in one section is allowed when colors carry semantic meaning** (e.g., forest = "what worked," rust = "what didn't") — and even then, the Breath Strip rule is waived only when the adjacency *is the point*.

### Breath Strip pattern

When two heavy panels would naturally end up adjacent (most often: rust CTA panel directly above forest footer), insert a Breath Strip — a Sand-canvas section that creates visual rest and carries quiet, lower-commitment content.

```html
<section class="breath-strip">
  <p class="breath-strip-text">Or just say hello.</p>
  <a class="breath-strip-link">hello@zgoingco.design →</a>
</section>
```
```css
.breath-strip {
  background: var(--color-sand);
  padding: var(--space-6) var(--space-6);
  text-align: center;
  position: relative;
  overflow: hidden;
}
/* Optional: faint topo lines as background, opacity 0.18 */
.breath-strip-text {
  font-family: var(--font-mid);
  font-style: italic;
  font-weight: 300;
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0 0 var(--space-1);
}
.breath-strip-link {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--color-rust);
  text-transform: uppercase;
  letter-spacing: 1.8px;
}
```

**Where to use:**
- Between rust CTA panel and forest footer (the standard homepage case)
- Between any forest content panel and a rust CTA below it
- Between any two heavy structural panels where the spec doesn't otherwise prevent adjacency

**What to put inside:** something quiet — an email link, a small piece of metadata, a single one-line italic copy moment. NOT another headline, NOT another button. The breath strip is for *rest*, not *content*.

### Color ratios per screen

Aim for: ~50% Sand, ~28% Forest, ~12% Charcoal, ~7% Rust (for CTA panel moments), ~3% remaining warm accents and Moss. **If a screen feels too orange, it is.**

### Don't

- Don't use `#FFFFFF` for page backgrounds — use Sand.
- Don't use `#000000` for text — use Charcoal.
- Don't recolor the logo in any warm accent or Moss.
- Don't place Forest text on Charcoal background — they disappear.
- Don't stack three or more warm accents in one section.
- Don't place forest and rust panels adjacent without a Sand Breath Strip between them — unless the panels carry semantic meaning (e.g., what-worked vs what-didn't pairs).
- Don't use rust as default footer color — forest is the default; rust footer is a special-case treatment, not a baseline.

---

## Typography

### Font stacks

```css
:root {
  --font-hero:  'cooper-black', Georgia, serif;
  --font-mid:   'bookmania', 'Bookman Old Style', Georgia, serif;
  --font-body:  'eurostile', 'Bank Gothic', sans-serif;
}
```

> Font-family strings use Adobe's lowercase-hyphenated convention. Confirm exact strings inside the Adobe Fonts web project — they may vary.

### Loading fonts (Adobe Fonts / Typekit)

All three typefaces are served via Adobe Fonts. **Do not self-host or use `@font-face` declarations.**

```html
<!-- In <head> -->
<link rel="stylesheet" href="https://use.typekit.net/PROJECT_ID.css">
```

**Required active weights in Adobe Fonts web project:**

| Typeface | Required weights | Used for |
|---|---|---|
| Cooper Black | Regular | Hero headlines |
| Bookmania | Light Italic (300), Regular (400), Bold (700) | Subheads, journal copy, section headers |
| Eurostile | Regular | Body, UI, all uppercase tracked elements |

If a weight is referenced in CSS but not activated in the Adobe Fonts project, the browser fakes it — which looks bad. Activate every weight you reference.

### Type scale

```css
:root {
  /* Hero — Cooper Black */
  --text-hero-xl: clamp(40px, 6vw, 64px);
  --text-hero-lg: clamp(32px, 4.5vw, 48px);

  /* Mid — Bookmania */
  --text-h1: clamp(28px, 3.5vw, 36px);
  --text-h2: clamp(22px, 2.5vw, 28px);
  --text-h3: 18px;
  --text-subhead: clamp(15px, 1.6vw, 19px);

  /* Body — Eurostile */
  --text-body-lg: 16px;
  --text-body:    14px;
  --text-small:   12px;
  --text-tiny:    10px;
  --text-eyebrow: 11px;
}
```

### Component-level type rules

```css
/* Hero headline — Cooper Black */
.hero-headline {
  font-family: var(--font-hero);
  font-size: var(--text-hero-xl);
  line-height: 1.0;
  color: var(--text-primary);
  /* Use ONE per screen, max. Do not use below 24px. */
}

/* Section header — Bookmania Bold */
.section-header,
.card-title {
  font-family: var(--font-mid);
  font-weight: 700;
  font-size: var(--text-h2);
  line-height: 1.25;
  color: var(--text-primary);
}

/* Subhead / pull quote — Bookmania Light Italic */
.subhead {
  font-family: var(--font-mid);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-subhead);
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Long-form journal copy — Bookmania Regular */
.journal-text {
  font-family: var(--font-mid);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-primary);
}

/* Default body text — Eurostile */
.body-text {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.6;
  color: var(--text-primary);
  letter-spacing: 0.01em;
}

/* Navigation — Eurostile uppercase */
.nav-link {
  font-family: var(--font-body);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-primary);
}
.nav-link.active {
  color: var(--color-rust);
  font-weight: 700;  /* Bold treatment required alongside rust color */
}

/* Buttons — Eurostile uppercase tracked */
.btn {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.8px;
}

/* Eyebrow text */
.eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-eyebrow);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-eyebrow);
}
.eyebrow.on-dark {
  color: var(--text-eyebrow-on-dark);  /* Honey on forest/rust */
}

/* Metadata (e.g., "8.6 MI · 1,500 FT") */
.metadata {
  font-family: var(--font-body);
  font-size: var(--text-small);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-secondary);
}

/* Coordinate / wayfinding metadata (e.g., "N 34.013° · W 118.310°") */
.coordinate {
  font-family: var(--font-body);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-rust);
}
```

### Don't

- Don't use Cooper Black below 24px — it becomes muddy.
- Don't use more than one Cooper Black headline per screen.
- Don't use Bookmania for default body text — that's Eurostile's job. Bookmania Regular is reserved for long-form journal content (`.journal-text`).
- Don't use Bookmania below Bold (700) for section headers — anemic weights look weak next to Cooper.
- Don't reference a Bookmania weight not activated in the Adobe Fonts web project.
- Don't use Eurostile lowercase for navigation or buttons — uppercase tracked is the brand signature.
- Don't add `@font-face` rules — Adobe Fonts handles loading.
- Don't introduce a fourth typeface.

---

## Signature elements

These are the brand-defining visual moves. Every element below has a specific role.

### 1. Sunset stripe

A 6px gradient stripe (`--sunset-stripe`) used in **State A only**. Sandwiches the nature carousel (one stripe at the top, one at the bottom). Conceptually: sky framing the photography from above and below.

```html
<div class="sunset-stripe"></div>
```
```css
.sunset-stripe {
  height: var(--sunset-stripe-height);  /* 6px */
  background: var(--sunset-stripe);
  opacity: var(--sunset-stripe-opacity);  /* 0.85 */
}
```

**Where it appears:**
- Top of the nature carousel (State A only)
- Bottom of the nature carousel (State A only)

**Where it does NOT appear:**
- Anywhere on State B pages
- Inside the hero
- Around individual components

### 2. Ridge silhouettes (hero background)

Three layered mountain ridges in fading green opacity. Used as the **State A hero background** and as the **bottom-of-page horizon** on State B page watermarks.

```svg
<svg viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice">
  <polygon points="0,180 60,165 110,170 170,150 230,162 290,140 360,158 430,138 500,155 570,142 640,158 720,148 800,160 800,280 0,280" fill="#2D4A33" opacity="0.10"/>
  <polygon points="0,210 80,185 140,195 210,165 280,182 350,158 430,178 500,160 580,180 650,168 720,185 800,178 800,280 0,280" fill="#2D4A33" opacity="0.18"/>
  <polygon points="0,250 100,210 180,225 260,180 340,210 420,165 510,200 590,170 680,195 760,180 800,205 800,280 0,280" fill="#2D4A33" opacity="0.32"/>
</svg>
```

The three opacities (10% / 18% / 32%) create depth. The closest ridge has the most prominent peaks. Always anchor ridges to the bottom of their container.

### 3. Topo + ridge watermark (GLOBAL page background)

**Applied globally to every page on the site, including the homepage.** It lives in the root layout (`app/layout.tsx`) as a fixed-position element behind all content, so every route inherits it automatically — no per-page wiring needed. Future pages added to the site will pick it up without any extra work.

Topo lines float above ghost ridges at the bottom — creates the feeling of "looking out across a valley." Total opacity at the wrapper level: **0.13**. Higher and it competes with content; lower and it disappears.

```html
<!-- Inside app/layout.tsx, sibling to {children} -->
<TopoWatermark />
```

```jsx
// components/TopoWatermark.tsx
export function TopoWatermark() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.13,
      }}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Distant ghost ridges (anchored to bottom) */}
        <g opacity="0.5">
          <polygon points="0,360 80,330 140,340 210,310 280,332 350,308 430,328 500,310 580,330 650,318 720,335 800,328 800,600 0,600" fill="#2D4A33"/>
        </g>
        {/* Topo contour lines floating above */}
        <g fill="none" stroke="#2D4A33" strokeWidth="1">
          <path d="M -20 80 Q 200 50 400 110 T 850 90" />
          <path d="M -20 160 Q 200 130 400 180 T 850 170" />
          <path d="M -20 250 Q 200 220 400 270 T 850 260" />
        </g>
        {/* Optional rust dashed contour (a "trail" line) */}
        <g fill="none" stroke="#B8482E" strokeWidth="1" strokeDasharray="2,4">
          <path d="M -20 200 Q 200 170 400 220 T 850 210" />
        </g>
      </svg>
    </div>
  );
}
```

**Why fixed positioning:** the watermark stays in place as the user scrolls, which means long pages (case studies, academic projects) get the same atmospheric backdrop throughout — not just behind the hero. The watermark acts as wallpaper, not a hero element.

**The body's background must be `--color-sand`** (already specified in the color tokens) so the watermark reads correctly. If a parent container forgets `background: var(--bg-page)`, the watermark may show through stacked browser defaults and look strange.

**What sits on top automatically:**
- Sand-canvas sections — watermark visible (this is the desired effect)
- Cards (white bg) — opaque, watermark hidden behind them (correct)
- Forest panels (KeyInsight, QuoteCard, hero forest treatments, footer) — opaque, watermark hidden (correct)
- Rust panels (CTA banner, Breath Strip exception) — opaque, watermark hidden (correct)
- Images and image grids — opaque, watermark hidden (correct)
- Sunset stripes on the homepage carousel — opaque, watermark hidden (correct)
- The nature carousel itself — full-bleed photos cover the watermark (correct)

**Per-page exceptions:** none. The watermark is global. Do not add `<TopoWatermark />` inside any individual page; that would duplicate it. Do not remove it from individual pages; consistency is the point.

**Optional rust dashed contour line:** the rust "trail" path inside the SVG is part of the global pattern. It's static — every page shows the same trail. If you want to vary it per page later, that becomes a per-page decision and breaks the "set it and forget it" benefit of global placement.

### 4. Coordinate metadata

Wayfinding language pattern that runs throughout both states. Replaces generic eyebrow text on hero areas.

Examples:
- `UX/UI Designer · N 34.013° · W 118.310°` (about / homepage)
- `Case study · 2025 · Spring · 16 weeks` (case study hero)
- `12 case studies · 2022 – 2026` (work index)
- `Send a signal` (contact)
- `Currently · Fall 2026` (eyebrow on a featured banner)

Always set as `.coordinate` (Eurostile, 9px, uppercase, 2px tracking, color rust). Always preceded by a 24px × 1px rust line:

```html
<div class="coordinate-row">
  <div class="coordinate-line"></div>
  <span class="coordinate">UX/UI Designer · N 34.013° · W 118.310°</span>
</div>
```
```css
.coordinate-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.coordinate-line { width: 24px; height: 1px; background: var(--color-rust); }
```

### 5. Shape-symbol category tags

Replace generic word tags with shape symbols + word combinations. Symbols establish a wayfinding/trail-marker language.

| Category | Symbol | Color |
|---|---|---|
| Wearable | ▲ | Honey on cards, Forest on filters |
| Wellness | ◆ | Amber on cards, Forest on filters |
| Watch UI | ● | Rust on cards, Forest on filters |
| Mobile | ■ | Forest on cards, Forest on filters |

Example: `▲ Wearable · 2025` instead of just `Wearable`.

### 6. Rust CTA panel

The standard "currently open to / get in touch" banner that appears between the work section and the footer on the homepage and most content pages.

```html
<section class="cta-panel">
  <div class="cta-panel-content">
    <span class="eyebrow on-dark">Currently open to</span>
    <h2 class="cta-panel-headline">UX/UI roles<br/>and freelance.</h2>
    <p class="cta-panel-subhead">If you're working on something at the intersection of wellness, neurodiversity, or thoughtful product design — let's talk.</p>
  </div>
  <a class="btn btn-on-rust">Get in touch →</a>
</section>
```
```css
.cta-panel {
  background: var(--color-rust);
  color: var(--text-on-rust);
  padding: var(--space-8) var(--space-7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}
.cta-panel-headline {
  font-family: var(--font-hero);
  font-size: 26px;
  line-height: 1;
  margin: var(--space-2) 0;
}
.cta-panel-subhead {
  font-family: var(--font-mid);
  font-style: italic;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.5;
  max-width: 380px;
  opacity: 0.92;
}
.btn-on-rust {
  background: var(--color-sand);
  color: var(--color-charcoal);
  padding: 10px 18px;
  border-radius: 6px;
  flex-shrink: 0;
}
```

---

## Layout primitives

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-7:  28px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;

  --container-narrow: 640px;
  --container-default: 1080px;
  --container-wide: 1280px;
}
```

---

## Component patterns

### Primary button (default)

```html
<button class="btn btn-primary">Find your trail</button>
```
```css
.btn-primary {
  background: var(--color-rust);
  color: var(--color-sand);
  border: none;
  padding: 12px 22px;
  border-radius: var(--radius-md);
  cursor: pointer;
}
.btn-primary:hover { background: var(--color-ember); }
```

### Secondary button

```css
.btn-secondary {
  background: transparent;
  color: var(--color-forest);
  border: 0.5px solid var(--color-forest);
  padding: 12px 22px;
  border-radius: var(--radius-md);
}
.btn-secondary:hover {
  background: var(--color-forest);
  color: var(--color-sand);
}
```

### Category tag

```html
<span class="tag tag-easy">▲ Wearable · 2025</span>
```
```css
.tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  color: var(--color-sand);
}
.tag-easy      { background: var(--color-moss); }
.tag-moderate  { background: var(--color-amber); }
.tag-strenuous { background: var(--color-rust); }
```

### Featured / "currently" badge (Honey on Ember)

```css
.badge-featured {
  display: inline-block;
  background: var(--color-honey);
  color: var(--color-ember);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
}
```

### Case study card (used on both states)

```html
<article class="card">
  <div class="card-eyebrow">▲ Wearable · 2025</div>
  <h3 class="card-title">UGLOO</h3>
  <p class="card-description">Wearable for neurodivergent kids</p>
</article>
```
```css
.card {
  background: var(--bg-surface);
  border: 0.5px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  border-left: 3px solid var(--card-accent, var(--color-honey)); /* Override per category */
}
.card-eyebrow {
  font-family: var(--font-body);
  font-size: 9px;
  color: var(--color-rust);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 6px;
}
.card-description {
  font-family: var(--font-mid);
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;
}
```

### Card category accent stripes

Apply via inline style or category class on the card's `border-left`:

| Category | Accent color |
|---|---|
| Wearable | `--color-honey` |
| Wellness | `--color-amber` |
| Watch UI | `--color-rust` |
| Mobile / Other | `--color-forest` |

---

## Page composition

> **Important:** the topo + ridge watermark sits behind every page on the site at `position: fixed; z-index: -1;` (see "Signature elements" § 3). Do NOT add a `<TopoWatermark />` instance to any individual page — it's already in the root layout. The composition lists below describe what's *on top* of the watermark, which is everything.

### Homepage (State A) — required structure

In order, top to bottom:

```
1. Nav bar (Sand bg, charcoal text, forest logo)
2. Sunset stripe (6px gradient)
3. Nature photo carousel (full-width, 4 photos visible, 2px gaps)
4. Sunset stripe (6px gradient)
5. Hero section
   - Sand bg with three-ridge silhouette anchored to bottom (this is in addition to the global watermark — they layer)
   - Coordinate row (rust line + rust eyebrow)
   - Cooper Black headline (Sentence case · 'quiet middle' in rust accent)
   - Bookmania Light Italic subhead
6. Selected work section
   - Sand bg (the global watermark shows through naturally)
   - "Selected work" header (Bookmania Bold) + horizontal rust gradient line + "3 of 12" coordinate
   - 3-column case study cards
7. Rust CTA panel
8. Breath Strip (Sand) ← REQUIRED between rust CTA and forest footer
9. Forest footer (default)
```

### Content page (State B) — required structure

In order, top to bottom:

```
1. Nav bar (same as State A; active link in rust)
2. (No sunset stripe)
3. Hero / page header
   - Coordinate row (rust line + rust eyebrow describing what kind of page this is)
   - Cooper Black or Bookmania Bold title (depending on page type)
   - Bookmania Light Italic subhead
4. Page content
   - Mostly Sand canvas (the global watermark shows through)
   - Forest panels for emphasis (sidebars, "field notes" callouts, related links)
   - Rust CTA panel before the footer (where appropriate — the contact page is itself the CTA, so it skips this)
5. Breath Strip (Sand) ← REQUIRED if a rust CTA panel sits directly above the footer
6. Forest footer
```

This applies to all State B routes: `/about`, `/contact`, `/case-studies`, `/case-studies/[slug]`, `/academic-projects`, `/academic-projects/[slug]`, and any future inner page.

### State A is **only** for the homepage and pure index pages. Every other route uses State B.

---

## Logo

The logo lives in `/public/logo/`.

```html
<!-- On light backgrounds (Sand) -->
<img src="/logo/logo-forest.svg" alt="zgoingco" width="32" height="32" />

<!-- On dark backgrounds (Forest, Charcoal, Rust) -->
<img src="/logo/logo-cream.svg" alt="zgoingco" width="32" height="32" />
```

> Note on naming: the inverse logo file is named `logo-cream.svg` for historical reasons — it's recolored Sand (`#F0E6D0`), not the original Cream value. Don't rename the file; just know the color it produces is Sand.

**Available files:**

| File | Use |
|---|---|
| `logo-forest.svg` | Primary, web — light backgrounds |
| `logo-cream.svg` | Inverse, web — dark backgrounds |
| `logo-forest.png`, `-1x`, `-2x` | Raster fallbacks (transparent) |
| `logo-cream.png`, `-1x`, `-2x` | Inverse raster fallbacks (transparent) |

**Note on the SVG:** the shipping SVG was traced from a raster source, so the path data is bloated. Color is correct (Forest `#2D4A33` + transparent). A future task is to redraw it as clean hand-coded SVG. Logged in `PORTFOLIO_PROGRESS.md`.

**Minimum size:** 24px tall. Below that, use an icon-only variant (to be created).
**Clear space:** equal to the height of the mountain peak inside the Z.
**Never:** recolor in Honey, Amber, Rust, Ember, or Moss.

---

## Voice and tone

When writing copy:

- **Spare, not slick.** Trim adjectives.
- **Specific, not generic.** "Six miles past the last paved road" beats "deep in the wilderness."
- **Earned, not aspirational.** Distance, weather, gear, time — not transformation, escape, self-discovery.
- **Wayfinding language for navigation moments.** "Send a signal" instead of "Contact form." "Selected work · 3 of 12" instead of "Featured projects." "Currently open to" instead of "Hire me."

Sentence case for everything except buttons, navigation, eyebrow text, and metadata (uppercase tracked).

---

## Pre-shipping checklist

Verify before declaring any page "done":

**Color & background**
- [ ] Page background is `--color-sand` (`#F0E6D0`), not white.
- [ ] Body text is `--color-charcoal`, not black.
- [ ] Logo is Forest on light bg, Sand on dark bg.
- [ ] No third hex color outside this palette has been introduced.

**Typography**
- [ ] At most one Cooper Black headline per screen, never below 24px.
- [ ] Section headers and card titles use Bookmania Bold (700).
- [ ] Subheads use Bookmania Light Italic (300, italic).
- [ ] Default body text uses Eurostile.
- [ ] Buttons, nav, eyebrow text, metadata are uppercase Eurostile with proper tracking.
- [ ] All Bookmania weights referenced (300, 400, 700) are activated in the Adobe Fonts web project.
- [ ] Adobe Fonts `<link>` is in `<head>` with correct project ID.
- [ ] No `@font-face` rules anywhere in the codebase.

**State-specific**
- [ ] If homepage (State A): sunset stripes sandwich the carousel; three-ridge silhouette layers under the hero; rust CTA + Breath Strip + forest footer.
- [ ] If content page (State B): no sunset stripes; active nav link is rust.
- [ ] **`<TopoWatermark />` is in `app/layout.tsx`** at the root of the layout tree, NOT in any individual page file.
- [ ] Coordinate metadata appears at the top of every hero.

**Color ratio sanity check**
- [ ] Greens (Forest + Moss + ridges) carry the brand identity weight, not warm accents.
- [ ] Warm accents do not stack 3+ in a single section.
- [ ] Forest and Rust panels are not adjacent unless they carry semantic meaning OR a Sand Breath Strip separates them.
- [ ] **Breath Strip is present** between any rust CTA panel and the forest footer below it.

---

---

## What changed in v2.3

- **Nav active state now requires rust color AND bold weight (700) together.** Color alone was insufficient — recruiters scanning the nav need to locate their position in under one second. Both treatments reinforce each other. Active nav link = `color: var(--color-rust); font-weight: 700`.
- **Site IA consolidated under `/work` hub.** Case Studies and Academic Projects are no longer top-level nav entries. The nav is now: Home · Work · About · Contact. `/case-studies` and `/academic-projects` URLs are preserved as deep links. The "Work" nav link is active on `/work`, `/case-studies/*`, and `/academic-projects/*`.

---

*This spec is the source of truth. If anything in the codebase contradicts it, update the codebase to match. If anything in this spec needs to change, update this file first, then the codebase.*
