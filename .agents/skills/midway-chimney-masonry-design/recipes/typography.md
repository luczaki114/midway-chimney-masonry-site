# Recipes · Typography (the full type system + usage intent)

Two families only. **Playfair Display** (serif) for anything with weight — headlines, display
numbers, pull quotes; Regular & Bold only, never thin. **Inter** for everything else. The third
"voice" is Inter Light, uppercase, tracked — the eyebrow, not a third typeface.

With the `tailwind.css` bridge loaded: `font-display` = Playfair, `font-sans` = Inter,
`tracking-eyebrow` = 0.15em.

---

## The scale — value, and when to reach for it

| Role | Size / line-height | Font & weight | Use it for |
|---|---|---|---|
| **Display** | 72px+ / 0.95 | Playfair Bold | Hero figures and **prices** (menu-price treatment). Currency mark in fire red. |
| **H1** | 52px / 1.05 | Playfair Bold | Page hero headline. One per page. `text-balance`. |
| **H2** | 36px / 1.1 | Playfair **Bold** = primary; **Regular** = softer secondary | Section headlines. See the dual-weight note below. |
| **H3** | 24px / 1.1 | Playfair Bold | Card titles, sub-sections. |
| **H4** | 20px / 1.25 | Playfair Semibold | Small headings, labels with weight. |
| **Lead** | 20px / 1.5 | **Inter Regular** | The **intro paragraph** under a headline — the one sentence that sets up a section. Sits between the eyebrow/headline and the body. This is the deck/standfirst voice; use it once near the top of a section, not for running copy. |
| **Body-lg** | 18px / 1.6 | Inter Regular | Emphasised body in roomy sections. |
| **Body** | 16px / 1.6 | Inter Regular | Default running copy. The floor for comfortable reading. |
| **Small** | 15px / 1.6 | Inter Regular | Dense UI text. **Never go below 15px for body.** |
| **Caption** | 14px | Inter Regular | Captions, form hints/errors, footnotes. |
| **Eyebrow** | 11–12px | Inter **Light**, UPPERCASE, 0.15em | Category label above a headline. |

---

## The signature section-opener stack

Eyebrow → headline → **lead** → body. This is a **compositional tool, not a checklist.** Use
the elements the copy needs — never all four by default.

- **Eyebrow:** earns its place only when it adds context the headline can't carry alone — a
  category label, a location, a scope qualifier. If it would just repeat the headline in smaller
  text, omit it. Never drop an empty or redundant eyebrow span just for structure.
- **Lead:** for sections where the H2 lands a statement and a sentence of setup is genuinely
  needed before body copy. Skip it if the headline is self-sufficient.
- **Body:** only when there's running copy below the lead. A section with just an H2 + grid
  beneath it needs no lead or body prose above the grid.

The lead is what makes a section feel composed rather than abrupt — but only when the section
actually needs that breath. "Don't skip it" means don't skip it *when it's needed*, not that
every section requires one.

```tsx
<span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
  What we do
</span>
<h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black mt-3 text-balance">
  Two trades, one family
</h2>
{/* LEAD — 20px Inter, the standfirst that sets up the section */}
<p className="font-sans text-xl leading-[1.5] text-body mt-4 max-w-[560px]">
  Chimney work and structural masonry under one roof — a rare combination on the South Side.
</p>
{/* BODY — 16px running copy below */}
<p className="font-sans text-base leading-[1.6] text-body mt-4 max-w-[560px]">
  We publish our prices because we're not afraid of them…
</p>
```

On dark sections the lead reads warmest as `text-[#E6E1DB]` (a hair brighter than
`text-on-dark-muted`), headline `text-off-white`.

---

## Rules

- **Headlines + prices + pull quotes = Playfair.** Everything else = Inter. No exceptions, no third face.
- **Never thin Playfair.** Regular (400) or Bold (700) only — thin serif reads fragile, and this brand isn't.
- **Body never below 15px**, base 16px, line-height 1.6 minimum.
- **Sentence case** for headlines and body; **UPPERCASE** only for the tracked eyebrow.
- Numbers that carry weight (years, counts, prices) get **Playfair** even amid Inter copy — serif numbers have inherent authority.

---

## Display numbers — the details that make them sing

These are demonstrated in the foundation previews and easy to miss:

- **Currency mark in fire red.** `$` is `text-fire`; the figure stays `text-near-black`. (`$189`, the `$` red.)
- **Smaller suffix.** A trailing `+` / `%` / superscript is set at **~50% of the figure size** — e.g. on an 80px "25+", the `+` is ~40px. Keeps the figure dominant.
  ```tsx
  <span className="font-display font-bold text-[80px] leading-[0.95] text-near-black">
    25<span className="text-[40px]">+</span>
  </span>
  ```
- **Caption beneath.** A short Inter caption sits under the number at **13–14px, `text-mid-gray`** (tighter than body — these are labels, e.g. "Years on the South Side", "Cleaning + 14-pt inspection"). Use `text-[13px]`/`text-sm`, not the 15px body floor.
- **Dual-weight H2.** Primary section headlines are Playfair **Bold**; use Playfair **Regular** at the same 36px for a softer, secondary headline (e.g. a quieter sub-section). Same size, lighter voice — a deliberate part of the system, not an accident.
