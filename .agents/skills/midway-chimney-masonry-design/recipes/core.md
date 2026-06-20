# Recipes · Core (Button, Badge, Eyebrow, Divider)

How to flavor your shadcn/Tailwind primitives to Midway. These are **specs, not imports** —
build the component in your app; use the exact values below. Assumes `tailwind.css` (the
bridge) is loaded, so utilities like `bg-fire`, `font-display`, `rounded-card`,
`tracking-eyebrow`, and shadcn's `--primary`/`--ring`/`--radius` already resolve to brand values.

---

## Button

**What you get for free from the bridge:** shadcn's default Button is *already* mostly
on-brand — `--primary` = fire red, `--primary-foreground` = off-white, `--radius` = 6px,
`--ring` = fire red. Two things you MUST override to match the brand:

1. **Hover/press deepens — never fades.** shadcn defaults to `hover:bg-primary/90` (an opacity
   fade). Replace with the brand's deepening steps.
2. **Never pill.** Keep `rounded-card` (6px). No `rounded-full`.

**Exact values**

| State | Primary | Secondary (outline) | Destructive |
|---|---|---|---|
| Default | `bg-fire text-off-white` | `bg-transparent text-near-black border-2 border-near-black` | `bg-danger text-off-white` |
| Hover | `hover:bg-fire-hover` (`#A01824`) | `hover:bg-near-black hover:text-off-white` | `hover:bg-danger-hover` (`#73200F`) |
| Active | `active:bg-fire-active` (`#8A1420`) | (holds) | — |
| Disabled | `disabled:bg-mid-gray disabled:text-off-white disabled:cursor-not-allowed` | same | same |
| Focus | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire` | same | same |

- **Sizes:** sm `px-4 py-2 text-[15px]` · md `px-6 py-3 text-base` · lg `px-8 py-4 text-[18px]`. All `font-semibold rounded-card`.
- **Transition:** `transition-colors duration-300 ease-in-out` (250–300ms; never snappier).
- **On dark sections** a third "ghost" treatment: `bg-transparent text-off-white border-2 border-off-white/50 hover:bg-off-white/10`.

```tsx
// Primary CTA
<Button className="rounded-card font-semibold px-6 py-3 bg-fire text-off-white
  hover:bg-fire-hover active:bg-fire-active transition-colors duration-300 ease-in-out
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire">
  Call (773) 555-0199
</Button>

// Secondary
<Button variant="outline" className="rounded-card font-semibold px-6 py-3 border-2
  border-near-black text-near-black bg-transparent hover:bg-near-black hover:text-off-white
  transition-colors duration-300 ease-in-out">
  See our services
</Button>

// Destructive (distinct oxblood — never the same red as primary)
<Button variant="destructive" className="rounded-card bg-danger text-off-white
  hover:bg-danger-hover">
  Delete job
</Button>
```

---

## Badge

Flat — no shadow, 6px radius. `inline-flex items-center gap-1.5 rounded-card px-2.5 py-1 text-xs font-semibold`.

- **solid:** `bg-fire text-off-white`
- **neutral:** `bg-near-black text-off-white`
- **outline:** `bg-transparent text-body border border-mid-gray`

Use for service categories and senior/veteran discounts. **Never** build a row of certification
logos (CSIA/BBB/NCSG) — that's the competitor's badge grid; the brand earns trust through pricing
transparency, not logo rows.

---

## Eyebrow

The brand's third "voice" — small tracked uppercase label above a heading. Creates hierarchy
without a third typeface.

`font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray` (on dark: `text-off-white/85`).

```tsx
<span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
  Chimney Cleaning · Cook County
</span>
```

---

## Divider

Structure between sections without boxing everything in cards.

- **Hairline (default):** `border-0 border-t border-[--border]` full width.
- **Strong (emphasis):** `border-0 border-t-2 border-fire w-16` — the 64px fire-red rule.
  **Use one or two per page maximum.**
