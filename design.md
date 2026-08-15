# Design — Kittichod Portfolio

A locked design system for this multi-page portfolio. Every route reads this
system. Extend this file before introducing a per-page visual exception.

## Genre

Modern-minimal, technical and restrained. Existing blue identity retained.

## Macrostructure family

- Home: Split Studio with H2 Split Diptych; text/proof ratio 7/5, negative-space divider.
- Works: Portfolio Grid; landscape cards, subtle span variation, no global CTA.
- Writing and About navigation: Index-First; links and section titles carry navigation.
- Case studies: Narrative Workflow; genuine project phases and decisions provide sequence.

## Theme

Cobalt-derived, adapted for a personal technical/product portfolio rather than
an API product. Exact light and dark values live in `tokens.css`.

- Paper: `oklch(97.5% 0.006 250)`
- Ink: `oklch(19% 0.018 258)`
- Accent: `oklch(50% 0.18 256)`
- Focus: `oklch(48% 0.20 256)`
- Dark paper: `oklch(15% 0.012 258)`
- Dark ink: `oklch(94% 0.007 250)`

Accent is a signal, not a field: active navigation, focus, links, and small proof
marks only. Warm proof colour is reserved for verified awards.

## Typography

- Display: Space Grotesk, weight 700, roman.
- Body: Inter, weight 400.
- Meta/code: JetBrains Mono, weight 400; section metadata and keyboard hints only. Other utility text stays in Inter.
- Body floor: 16 px.
- Mobile hierarchy: H1 38–48 px, H2 25–31 px, H3 20 px, body 16 px.
- Heading order never skips levels. Labels never substitute for headings.
- Display tracking: `-0.03em`; display line-height: `1.04–1.12`.

## Spacing

Four-point named scale in `tokens.css`. Page layouts are mobile-first. Multi-column
structures activate at 60 rem or when their content fits, never automatically at
768 px. Major sections deliberately vary between `--space-xl`, `--space-2xl`, and
`--space-3xl`.

## Motion

- One short page-load entrance for the opening composition.
- Body sections and reading content are static.
- Buttons use a 1 px press response; focus rings are instant.
- Command palette opens instantly and remains keyboard navigable.
- Reduced motion removes spatial movement and keeps state changes at 150 ms or less.

## Microinteractions stance

- Keyboard first, hover second.
- Hover styling only inside pointer-capability queries.
- Silent success; visible outcomes need no toast.
- Every touch target is at least 44 × 44 px.

## CTA voice

- Primary: compact rectangular cobalt control, 6 px radius, destination-specific label.
- Secondary: outlined chip or typographic link.
- Resume: “Open resume PDF”; secondary “Plain-text resume”.

## Per-page allowances

- Home may use the supplied portrait and verified award proof.
- Works may use project thumbnails; no invented screenshots or metrics.
- About and case studies are content-led; no decorative hero imagery.
- Writing uses no enrichment.

## What pages MUST share

- Wordmark, accent placement, type pairing, focus ring, CTA geometry, container width,
  mobile typography hierarchy, and N13/Ft2 shared chrome.
- Navigation: N13 Inline Command-K search, pill right of brand, grouped results.
- Footer: Ft2 Inline rule single line; vertical list on phones.

## What pages MAY differ on

- Page macrostructure within the declared family.
- Project imagery and verified proof content.
- Section spacing cadence where content density requires it.

## Exports

### tokens.css

`tokens.css` at project root is the canonical complete export.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97.5% 0.006 250);
  --color-ink: oklch(19% 0.018 258);
  --color-accent: oklch(50% 0.18 256);
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-outlier: "Inter", sans-serif;
  --font-meta: "JetBrains Mono", monospace;
  --spacing-md: 1.5rem;
  --text-md: 1.25rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(97.5% 0.006 250)", "$type": "color" },
    "ink": { "$value": "oklch(19% 0.018 258)", "$type": "color" },
    "accent": { "$value": "oklch(50% 0.18 256)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Space Grotesk, sans-serif", "$type": "fontFamily" },
    "body": { "$value": "Inter, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97.5% 0.006 250;
  --foreground: 19% 0.018 258;
  --primary: 50% 0.18 256;
  --primary-foreground: 98% 0.006 250;
  --muted: 91% 0.01 250;
  --muted-foreground: 43% 0.014 256;
  --border: 82% 0.009 252;
  --input: 82% 0.009 252;
  --ring: 48% 0.20 256;
  --radius: 6px;
}
```
