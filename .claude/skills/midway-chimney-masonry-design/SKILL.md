---
name: midway-chimney-masonry-design
description: Use this skill to design and build well-branded interfaces for Midway Chimney & Masonry — a warm, family-owned South Side Chicago chimney and masonry contractor. Provides brand rules, design tokens, a Tailwind v4 + shadcn bridge, component recipes, and real job-site photography. Ships no runtime JS — it flavors any component you build. Invoke for production code or throwaway prototypes/mocks alike.
user-invocable: true
---

# Midway Chimney & Masonry — Brand Design Skill

Read `README.md` first (the brand guide), then explore:

- `tokens/tailwind.css` — the integration point for a Tailwind v4 + shadcn project (paste it
  after `@import "tailwindcss";` and shadcn's `:root` block). `tokens/midway-tokens.css` has the
  same values as framework-agnostic CSS variables.
- `recipes/*.md` — self-contained specs (exact colors, sizes, states) for building branded
  elements: `typography.md` (full type scale + usage intent incl. the lead/standfirst),
  `core.md` (Button, Badge, Eyebrow, Divider), `forms.md`, `content.md` (PriceTag,
  ServiceCard, PullQuote, StatBlock), `patterns.md` (section rhythm, photo treatment, layout).
- `assets/photos/` — real, named job-site photographs to use directly (under a warm overlay).
- `brand-spec-sheet.html` — a printable human reference (open in a browser → Save as PDF, Letter
  portrait) covering color, type, spacing, components, photo treatment, and the hard rules.

## How to work

- **Production code:** load `tailwind.css`, then build components with your own shadcn/Radix
  primitives + Tailwind utilities, following the recipes. The bridge variables set sane brand
  defaults; utilities let you "do more" when the copy defines a shape that doesn't exist yet.
- **Visual artifacts (mocks, prototypes, slides):** copy the photos out and write static HTML +
  the tokens; follow the same rules.

## Never forget

No navy blue, anywhere. Warm palette only. Serif headlines (Playfair, never thin), Inter body
(16px+). Alternate dark/light sections. Photos only on dark sections under a 40–55% warm overlay,
edge-to-edge. Flat surfaces (one shadow: sticky nav). Fire red only on CTAs and prices; oxblood
for destructive. Deliberate 250–300ms ease-in-out motion. No pill buttons, no badge grids, no emoji.

If invoked with no other guidance, ask what the user wants to build, ask a few focused questions,
and act as an expert designer who outputs HTML artifacts or production code as needed.
