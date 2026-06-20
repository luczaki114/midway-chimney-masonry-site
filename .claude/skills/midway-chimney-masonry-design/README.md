# Midway Chimney & Masonry — Brand Design Skill

A warm, grounded, South Side Chicago brand for a family-owned chimney and masonry
contractor. This skill is a **set of rules + tokens + recipes + photography** for
flavoring *any* component you build — it ships **no runtime JavaScript**. Use it in a
Tailwind v4 + shadcn project (or any stack) to make interfaces that read like a trusted
neighborhood institution, never a home-services franchise.

> **The brand in one line:** honest, neighborly, warm — transparent pricing in a serif,
> real job-site photos under a warm overlay, fire red only where it counts, and
> absolutely **no navy blue** (every competitor uses it).

---

## What's in here

```
midway-chimney-masonry-design/
  SKILL.md              — entry point / invocation
  README.md             — this file (the brand guide)
  tokens/
    midway-tokens.css   — all brand values as CSS custom properties (framework-agnostic)
    tailwind.css        — Tailwind v4 @theme + shadcn variable bridge (the integration point)
  recipes/
    core.md             — Button, Badge, Eyebrow, Divider
    forms.md            — Input, Textarea, Select, FormField
    content.md          — PriceTag, ServiceCard, PullQuote, StatBlock
    patterns.md         — section rhythm, photo treatment, layout, hard rules
  assets/photos/        — seven real, named job-site photographs
```

There are **no `.jsx` components** — you build components in your app and style them with
these rules. The recipes are self-contained specs (exact colors, sizes, states), written
for a Tailwind/shadcn workflow.

---

## Setup (Tailwind v4 + shadcn)

1. In your app's CSS entry, after `@import "tailwindcss";` **and** after shadcn's generated
   `:root` block, paste in `tokens/tailwind.css`:
   - **Layer 1** overwrites shadcn's variables (`--primary`, `--ring`, `--radius`,
     `--background`, `--destructive`, …) with Midway values — your existing shadcn
     components reskin to the brand for free. Includes a `.dark` block for dark sections.
   - **Layer 2** adds an `@theme` namespace of brand utilities: `bg-fire`, `font-display`,
     `rounded-card`, `text-on-dark`, `bg-danger`, `tracking-eyebrow`, `shadow-nav`, plus
     `.eyebrow` / `.photo-frame` helpers.
2. Build components as usual. Variables set the **floor** (consistent defaults); utilities
   are the **ceiling** — `className="bg-near-black rounded-none"` overrides any default, so
   you keep full freedom to "do more" when the copy defines a new shape.
3. Read the relevant `recipes/*.md` when building a branded element.

Not on Tailwind/shadcn? Link `tokens/midway-tokens.css` for the raw CSS variables and follow
the same rules.

---

## Content fundamentals (voice & copy)

Neighborly, honest, plain-spoken South Side Chicago. Confident without being slick.

- **Person:** warm "we" for the business, direct "you/your" for the reader.
- **Casing:** sentence case everywhere except tracked eyebrow labels (ALL CAPS). Headlines
  are sentence case, never Title Case.
- **Numbers & prices:** stated plainly and proudly — *"$189 flat," "25+ years," "3 counties."*
  Transparent pricing is the core trust move; never hedge it.
- **Sentences:** short, declarative. Specificity over claims — name neighborhoods (Garfield
  Ridge, Brighton Park) and trade detail (crown, flue, tuckpointing). Adjectives don't earn trust.
- **No emoji. No hype. No corporate filler.** Say "Family Owned" at most once in copy — never
  as a badge or stamp.

---

## Visual foundations (summary — full rules in `recipes/patterns.md`)

- **Color:** warm temperatures only, **no navy**. Near-black `#1C1714`, off-white `#F7F5F1`,
  fire red `#C41E2E` (CTAs + prices only), body `#2E2926`, mid-gray `#8A8380`. Separate
  destructive oxblood `#8C2A1C` for danger actions.
- **Type:** Playfair Display (serif) for headlines, display numbers, pull quotes — Regular &
  Bold only, never thin. Inter for body/UI — 16px base, 1.6 line-height, never below 15px.
  Eyebrows: Inter Light, uppercase, 0.15em tracking, 11–12px.
- **Layout:** 1280px centered max width, 24px gutter, 96/56px section padding. Mobile-first.
- **Rhythm:** alternate dark and light sections down the page; red surprises, never saturates.
- **Photos:** authentic job-site only, dark sections only, edge-to-edge (no radius/border),
  under a warm near-black overlay 40–55%. Never on light backgrounds; never stock.
- **Surfaces:** flat — 6px radius cards/buttons, **no shadows except the sticky nav**. No
  gradients, patterns, textures, glassmorphism.
- **Motion:** 250–300ms ease-in-out. Buttons deepen (never lighten) on hover/press. Focus is
  always a 2px fire-red outline at 2px offset.

## Iconography

[Lucide](https://lucide.dev), 1.5px stroke. Sizes 16/20/24. Icons **inherit text color**, are
used **sparsely with labels**, and never replace text. Avoid icon grids, icon-as-hero, and the
competitor's certification badge grid (CSIA/BBB/NCSG). No emoji, no unicode-glyph icons.

---

## Patterns to avoid

No navy · no badge/certification grids · no pill buttons · no thin serif · no stock photography ·
no "Family Owned" stamp · no gradients/patterns/textures · no auto-playing video · no icon grids.

---

## Caveat — fonts

Playfair Display and Inter load from **Google Fonts** (`@import` in `tokens/midway-tokens.css`
and via your app's font setup). No `.woff2` binaries are bundled. For offline/self-hosted use,
provide the binaries and swap the `@import` for local `@font-face` rules.
