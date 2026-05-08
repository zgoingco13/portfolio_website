# BRAND_SPEC.md

> This file is the single source of truth for brand styling on this website.
> When building or modifying any UI, **always read and follow this spec exactly.**
> If the spec and existing code disagree, the spec wins — update the code to match.

**Brand:** zgoingco (portfolio · zgoingco.design)
**Vibe:** Outdoor / autumn / journey. Forest greens grounded by warm autumn accents. Retro outfitter, craft-revival typography.
**Spec version:** 1.1 (typography locked, Adobe Fonts)

---

## How to use this file

1. When asked to build any new page, component, or UI element — load this spec first.
2. Use the exact hex values, font stacks, and treatments below. Do not invent new colors or substitute typefaces.
3. Follow the layout and component patterns at the bottom of this file.
4. If a request would require breaking a "Don't" rule, push back and propose an alternative.

---

## Color tokens

Use these as CSS variables. They are non-negotiable.

```css
:root {
  /* Foundations */
  --color-forest:   #2D4A33;  /* Logo, primary structure, dark sections */
  --color-moss:     #6B8A4A;  /* Secondary green, easy/soft tags */
  --color-charcoal: #1F2A22;  /* Body text, footer, deep UI surfaces */
  --color-cream:    #FAF6EE;  /* Page background — NEVER use #FFFFFF */

  /* Warm accents */
  --color-honey:  #E8B547;  /* Highlights, badges, eyebrow text on dark */
  --color-amber:  #D87A3A;  /* Secondary CTAs, moderate tags */
  --color-rust:   #B8482E;  /* Primary CTAs, strenuous tags */
  --color-ember:  #7A2820;  /* Deep accent, text on Honey */

  /* Semantic aliases — use these in component code */
  --bg-page:        var(--color-cream);
  --bg-surface:     #FFFFFF;          /* Cards on top of cream */
  --bg-dark:        var(--color-charcoal);
  --bg-brand:       var(--color-forest);

  --text-primary:   var(--color-charcoal);
  --text-secondary: #5F5E5A;
  --text-on-dark:   var(--color-cream);
  --text-eyebrow:   var(--color-rust);          /* On light bg */
  --text-eyebrow-dark: var(--color-honey);      /* On dark bg */

  --cta-primary-bg:    var(--color-rust);
  --cta-primary-text:  var(--color-cream);
  --cta-secondary-bg:  transparent;
  --cta-secondary-text: var(--color-forest);
  --cta-secondary-border: var(--color-forest);

  --border-subtle: #E8E2D5;
}
```

### Color usage rules

| Use case | Color |
|---|---|
| Page background | `--color-cream` (never `#FFFFFF`) |
| Card / surface on top of cream | `#FFFFFF` with `--border-subtle` |
| Body text on light bg | `--color-charcoal` (never `#000000`) |
| Body text on dark bg | `--color-cream` |
| Logo on light bg | `--color-forest` |
| Logo on dark bg | `--color-cream` |
| Primary button | `--color-rust` background, `--color-cream` text |
| Secondary button | transparent bg, `--color-forest` text and border |
| Tertiary button / link | `--color-forest` text, no background |
| Eyebrow text on light | `--color-rust`, uppercase tracked |
| Eyebrow text on dark | `--color-honey`, uppercase tracked |
| "Easy" tag | `--color-moss` bg, `--color-cream` text |
| "Moderate" tag | `--color-amber` bg, `--color-cream` text |
| "Strenuous" tag | `--color-rust` bg, `--color-cream` text |
| "Featured" badge | `--color-honey` bg, `--color-ember` text |
| Footer background | `--color-charcoal` |

### Color ratios per screen

Aim for: 50% Cream, 30% Forest, 12% Charcoal, 5% warm accents, 3% Moss. **If a screen feels too orange, it is.**

### Don't

- Don't use `#FFFFFF` for page backgrounds — use Cream.
- Don't use `#000000` for text — use Charcoal.
- Don't recolor the logo in any warm accent.
- Don't place Forest text on Charcoal background — they disappear.
- Don't stack three or more warm accents in one section.

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

> Font-family strings use Adobe's lowercase-hyphenated naming convention. Confirm the exact strings inside your Adobe Fonts web project — they're shown in the project's CSS snippet.

### Loading fonts (Adobe Fonts / Typekit)

All three typefaces — Cooper Black, Bookmania, Eurostile — are served via Adobe Fonts. **Do not self-host or use `@font-face` declarations.**

**Required setup:**

1. The site `<head>` must include the Adobe Fonts Web Project `<link>` tag. Replace `YOUR_PROJECT_ID` with the project ID from fonts.adobe.com.

```html
<link rel="stylesheet" href="https://use.typekit.net/YOUR_PROJECT_ID.css">
```

2. The Adobe Fonts Web Project must have these typefaces and weights activated, at minimum:

| Typeface | Required weights | Used for |
|---|---|---|
| Cooper Black | Regular | Hero headlines |
| Bookmania | Light Italic, Regular, Bold | Subheads, body, section headers |
| Eurostile | Regular | Body text, UI |

3. If a weight is referenced in CSS but not activated in the web project, the browser will fall back to fake-bolded or fake-italicized rendering. **This must not happen.** If you need a weight, activate it in the Adobe Fonts project first.

**Do not:**

- Use `@font-face` rules — Adobe Fonts handles font loading via the `<link>` tag.
- Add font files to `/public/fonts/` — there shouldn't be any.
- Reference fonts not activated in the Adobe Fonts project.

### Type scale (use these exact values)

```css
:root {
  /* Hero — Cooper Black */
  --text-hero-xl: clamp(48px, 7vw, 72px);   /* Main hero headlines */
  --text-hero-lg: clamp(36px, 5vw, 56px);   /* Secondary heroes */

  /* Mid — Bookmania */
  --text-h1: clamp(28px, 3.5vw, 36px);      /* Page titles (when not Cooper) */
  --text-h2: clamp(22px, 2.5vw, 28px);      /* Section headers */
  --text-h3: 18px;                          /* Card titles, sub-sections */
  --text-subhead: clamp(15px, 1.6vw, 19px); /* Bookmania Light Italic subheads */

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
/* Hero headline */
.hero-headline {
  font-family: var(--font-hero);
  font-size: var(--text-hero-xl);
  line-height: 1.0;
  color: var(--text-primary);
  /* ONE per screen, maximum. */
}

/* Section header — Bookmania Bold */
.section-header {
  font-family: var(--font-mid);
  font-size: var(--text-h2);
  font-weight: 700;       /* Bookmania Bold — must be activated in Adobe Fonts project */
  line-height: 1.25;
  color: var(--text-primary);
}

/* Subhead / pull quote — Bookmania Light Italic */
.subhead {
  font-family: var(--font-mid);
  font-style: italic;
  font-weight: 300;       /* Bookmania Light Italic — must be activated in Adobe Fonts project */
  font-size: var(--text-subhead);
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Long-form journal copy — Bookmania Regular (use ONLY for editorial content; default body uses Eurostile) */
.journal-text {
  font-family: var(--font-mid);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-primary);
}

/* Body text */
.body-text {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.6;
  color: var(--text-primary);
  letter-spacing: 0.01em;
}

/* Navigation links */
.nav-link {
  font-family: var(--font-body);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-primary);
}

/* Button text */
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

/* Metadata (e.g., "8.6 MI · 1,500 FT") */
.metadata {
  font-family: var(--font-body);
  font-size: var(--text-small);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-secondary);
}
```

### Don't

- Don't use Cooper Black below 24px — it becomes muddy.
- Don't use more than one Cooper Black headline per screen.
- Don't use Bookmania for default body text — use Eurostile. Bookmania Regular is reserved for long-form *editorial* journal content (the `.journal-text` class), not standard UI copy.
- Don't use Bookmania below Bold (700) for section headers — anemic weights look weak next to Cooper. If you want a lighter section header, use a smaller size at Bold rather than dropping the weight.
- Don't reference a Bookmania weight (Light, Light Italic, Regular, Bold, Black) that isn't activated in the Adobe Fonts web project — the browser will fake-render it.
- Don't use Eurostile lowercase for navigation or buttons — uppercase tracked is the brand signature.
- Don't use any typeface other than these three.
- Don't add `@font-face` rules — Adobe Fonts handles loading.

---

## Layout primitives

### Spacing scale

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

### Border radius

```css
:root {
  --radius-sm: 4px;   /* Tags, pills (use 999px for full pill) */
  --radius-md: 8px;   /* Buttons, small cards */
  --radius-lg: 12px;  /* Section containers, hero cards */
  --radius-pill: 999px;
}
```

### Container widths

```css
:root {
  --container-narrow: 640px;   /* Long-form reading */
  --container-default: 1080px; /* Most pages */
  --container-wide: 1280px;    /* Full marketing pages */
}
```

---

## Component patterns

### Primary button

```html
<button class="btn btn-primary">Find your trail</button>
```
```css
.btn-primary {
  background: var(--color-rust);
  color: var(--color-cream);
  border: none;
  padding: 12px 22px;
  border-radius: var(--radius-md);
  cursor: pointer;
  /* Inherits .btn typography */
}
.btn-primary:hover { background: var(--color-ember); }
```

### Secondary button

```html
<button class="btn btn-secondary">Watch the film</button>
```
```css
.btn-secondary {
  background: transparent;
  color: var(--color-forest);
  border: 0.5px solid var(--color-forest);
  padding: 12px 22px;
  border-radius: var(--radius-md);
  cursor: pointer;
}
.btn-secondary:hover {
  background: var(--color-forest);
  color: var(--color-cream);
}
```

### Difficulty tag

```html
<span class="tag tag-easy">Easy</span>
<span class="tag tag-moderate">Moderate</span>
<span class="tag tag-strenuous">Strenuous</span>
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
  color: var(--color-cream);
}
.tag-easy      { background: var(--color-moss); }
.tag-moderate  { background: var(--color-amber); }
.tag-strenuous { background: var(--color-rust); }
```

### Featured badge (Honey on Ember)

```html
<span class="badge-featured">Autumn season · 2026</span>
```
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

### Hero section structure

```html
<section class="hero">
  <span class="badge-featured">Autumn season · 2026</span>
  <h1 class="hero-headline">Go where the leaves go.</h1>
  <p class="subhead">Curated routes for the season when the light turns gold.</p>
  <div class="cta-row">
    <button class="btn btn-primary">Find your trail</button>
    <button class="btn btn-secondary">Watch the film</button>
  </div>
</section>
```

### Card

```html
<article class="card">
  <span class="tag tag-moderate">Moderate</span>
  <h3 class="card-title">Aspen Loop</h3>
  <p class="metadata">8.6 MI · 1,500 FT</p>
</article>
```
```css
.card {
  background: var(--bg-surface);
  border: 0.5px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}
.card-title {
  font-family: var(--font-mid);
  font-size: var(--text-h3);
  font-weight: 700;       /* Bookmania Bold */
  color: var(--text-primary);
  margin: var(--space-3) 0 var(--space-1);
}
```

### Dark section (footer or feature block)

```html
<section class="section-dark">
  <span class="eyebrow eyebrow-dark">Field journal · entry 14</span>
  <h2 class="hero-headline-sm">Three nights up high.</h2>
  <p class="subhead subhead-dark">Notes from October on the high traverse.</p>
</section>
```
```css
.section-dark {
  background: var(--color-forest);
  color: var(--color-cream);
  padding: var(--space-12) var(--space-8);
  border-radius: var(--radius-lg);
}
.eyebrow-dark { color: var(--color-honey); }
.subhead-dark { color: var(--color-cream); opacity: 0.85; }
```

---

## Logo

The logo lives in `/public/logo/`. Use the SVG for web; the PNGs are available as fallbacks.

```html
<!-- On light backgrounds -->
<img src="/logo/logo-forest.svg" alt="zgoingco" width="32" height="32" />

<!-- On dark backgrounds (footer, hero overlays) -->
<img src="/logo/logo-cream.svg" alt="zgoingco" width="32" height="32" />
```

**Available files:**

| File | Use |
|---|---|
| `logo-forest.svg` | Primary, web — light backgrounds |
| `logo-cream.svg` | Inverse, web — dark backgrounds (Forest, Charcoal) |
| `logo-forest.png` | Raster fallback (full-resolution, transparent) |
| `logo-forest-2x.png` | Web raster, 512px max dim (transparent) |
| `logo-forest-1x.png` | Web raster, 256px max dim (transparent) |
| `logo-cream.png` / `-1x` / `-2x` | Cream raster equivalents |

**Note on the current SVG:** The shipping SVG was traced from a raster source, so its path data is bloated even though the color is now normalized to brand Forest (`#2D4A33`) plus Cream (`#FAF6EE`). It renders correctly, but a future task is to redraw it as clean hand-coded SVG (target: under 5 path elements). Logged in `PORTFOLIO_PROGRESS.md`.

**Minimum size:** 24px tall on screen. Below that, use an icon-only variant (Z + mountains, no path detail) — to be created.

**Clear space:** Maintain padding around the logo equal to the height of the mountain peak inside the Z.

**Never:** recolor in Honey, Amber, Rust, Ember, or Moss. The mark is always Forest or Cream.

---

## Voice and tone

When writing copy:

- **Spare, not slick.** Trim adjectives.
- **Specific, not generic.** "Six miles past the last paved road" beats "deep in the wilderness."
- **Earned, not aspirational.** Distance, weather, gear, time — not transformation, escape, self-discovery.

Sentence case for everything except buttons, navigation, eyebrow text, and metadata (which are uppercase tracked).

---

## Quick checks before shipping

Before considering any page "done," verify:

- [ ] Page background is `--color-cream`, not white.
- [ ] Body text is `--color-charcoal`, not black.
- [ ] At most one Cooper Black headline on the screen.
- [ ] Greens dominate at least ~70% of the visual weight.
- [ ] Warm accents appear as punctuation, not paragraphs.
- [ ] Buttons, nav, and eyebrow text are uppercase Eurostile with letter-spacing.
- [ ] Logo is Forest on light backgrounds, Cream on dark.
- [ ] No third typeface has been introduced.
- [ ] No third hex color outside this palette has been introduced.
- [ ] Adobe Fonts `<link>` tag is in the `<head>` and the project ID is correct.
- [ ] Every Bookmania weight referenced in CSS (Light Italic 300, Regular 400, Bold 700) is activated in the Adobe Fonts web project — no fake-bold rendering.
- [ ] No `@font-face` rules exist anywhere in the codebase.
- [ ] Section headers and card titles use Bookmania Bold (700), not lighter weights.

---

*This spec is the source of truth. If anything in the codebase contradicts it, update the codebase to match. If anything in this spec needs to change, update this file first, then update the codebase.*
