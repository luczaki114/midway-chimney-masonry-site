# Recipes · Content (PriceTag, ServiceCard, PullQuote, StatBlock)

The brand's signature, identity-carrying pieces. These are where Playfair Display and the
serif-number authority live. Build them by hand — shadcn has no equivalent.

---

## PriceTag — the signature trust signal

Transparent pricing rendered like a confident menu price. **The currency mark is fire red; the
figure is near-black.** Playfair Bold at display scale (72px+).

- Wrapper: `flex flex-col gap-1.5`
- Optional eyebrow label above (the Eyebrow recipe)
- Number: `font-display font-bold text-[72px] leading-[0.95] text-near-black flex items-baseline`
  - Currency `<span className="text-fire mr-0.5">$</span>`
  - Trailing unit: `font-sans font-medium text-base text-mid-gray ml-2`

```tsx
<div className="flex flex-col gap-1.5">
  <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
    Cleaning + 14-point inspection
  </span>
  <span className="font-display font-bold text-[72px] leading-[0.95] text-near-black flex items-baseline">
    <span className="text-fire mr-0.5">$</span>189
    <span className="font-sans font-medium text-base text-mid-gray ml-2">flat</span>
  </span>
</div>
```

Use sizes 48 / 72 / 88px. Never render a price like a form-field value — it gets the serif and the scale.

---

## ServiceCard — flat, no shadow

`rounded-card border border-[--border] bg-card p-8 flex flex-col gap-3`. **No shadow.** The
hairline border **warms to near-black on hover**: `hover:border-body transition-colors duration-250 ease-in-out`.

- Title: `font-display font-bold text-2xl leading-[1.1] text-near-black`
- Body: `font-sans text-base leading-[1.6] text-body`
- Optional price: `font-display font-bold text-[32px] text-near-black` with fire `$`
- Link: `font-sans font-semibold text-[15px] text-fire hover:underline` — e.g. `What's included →`
- Optional Lucide icon (1.5px stroke) in `text-fire` — supports the text, never replaces it.

---

## PullQuote — editorial, warmer than a review widget

Playfair italic with a large fire-red quotation mark. Use instead of star-rating widgets.

- Container: `relative pl-16 max-w-[720px]`
- Quote mark: `absolute left-0 -top-5 font-display font-bold text-[104px] leading-none text-fire` (content `"`)
- Quote: `font-display italic font-medium text-[28px] leading-[1.35] text-near-black`
- Attribution: `font-sans text-[15px] text-mid-gray` with the name in `font-semibold text-body`

```tsx
<figure className="relative pl-16 max-w-[720px]">
  <span aria-hidden className="absolute left-0 -top-5 font-display font-bold text-[104px] leading-none text-fire">“</span>
  <blockquote className="font-display italic font-medium text-[28px] leading-[1.35] text-near-black">
    They told me the price over the phone, showed up when they said, and the chimney's never drawn better.
  </blockquote>
  <figcaption className="font-sans text-[15px] text-mid-gray mt-4">
    <strong className="font-semibold text-body">Maria T.</strong> · Garfield Ridge, Chicago
  </figcaption>
</figure>
```

On dark sections: quote `text-off-white`, attribution `text-on-dark-muted`.

---

## StatBlock — serif numbers carry authority

`flex flex-col gap-1.5`. Value `font-display font-bold text-6xl leading-[0.95] text-near-black`
(64px); caption `font-sans text-[13px] text-mid-gray max-w-[200px]` (13–14px — tighter than the
15px body floor; these are labels). A trailing `+`/`%` suffix is set at ~50% of the figure size
(see Typography → Display numbers). On dark: value `text-off-white`, caption `text-on-dark-muted`.
