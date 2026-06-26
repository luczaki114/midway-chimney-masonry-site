# About Page — Build Plan

## Benchmark: How the Home Page Was Built

The home page alternates 8 dark/light sections using these shapes:
- **Full-bleed carousel hero** with 3 slides + dot controls (HeroSlider)
- **Price strip** — prominent offer bar
- **Prose intro** — single centered paragraph
- **Offer block** — 2-col: PriceTag + fire divider left, body + CTA right
- **Services grid** — 2×2 ServiceCards
- **"Why Midway" grid** — 2×2 cells, each: `border-t-2 border-fire w-16` divider + H3 + body
- **Testimonials** — 2×PullQuote side-by-side
- **Stats** — StatBlocks + body + phone CTA

All copy is hardcoded inline. No server data.

---

## About Page Section Plan — 7 Sections, Strict Dark/Light Alternation

---

### Section 1 — Page Hero `DARK | photo background`
**New component:** `components/midway/page-hero.tsx`

This replaces the slider with a single static photo hero — a distinct shape from HeroSlider and reusable on contact/services pages.

**Photo:** `mason-tuckpointing-scaffold.jpg` — already in public/, shows a craftsman on scaffold. Perfect visual for "still doing the work ourselves."

```
Photo (full-bleed) + bg-near-black/50 overlay
├── Eyebrow: "Midway Chimney & Masonry · South Side Chicago"
├── H1 (52px Playfair Bold, text-balance): "25 Years on the South Side. Family-Owned. Still Doing the Work Ourselves."
└── Lead (20px Inter): "Cook, DuPage & Lake County"
```

**Props:** `eyebrow`, `headline`, `lead`, `imageSrc`, `imageAlt`

**Why new:** HeroSlider is home-specific (embla carousel, 3 slides, autoplay). PageHero is a simple RSC: `<section>` with `relative bg-cover bg-center` + overlay div + content. ~30 lines.

---

### Section 2 — The Story `LIGHT | bg-off-white`
**No new component** — inline JSX in page file. New layout shape for the project.

**Layout:** Magazine 2-column — eyebrow + H2 anchored left, 3 body paragraphs right. Stacked on mobile.

```
Eyebrow: "Where We Come From"
H2 (Playfair Bold 36px): "Where We Come From"

Body ¶1: "We started this business near Midway Airport because this is where we're from..."
Body ¶2: "Midway Chimney & Masonry grew out of a simple idea: that homeowners deserve a contractor
          who tells them the truth, shows up when they say they will, and charges a fair price..."
Body ¶3: "We've cleaned chimneys in Beverly and Bridgeport. We've repointed brickwork in Oak Lawn
          and Orland Park. We've replaced I-beams and shelf angles on three-flats in the near
          South Side. We've done it all under one name, with the same family doing the work —
          no subcontractors, no call centers."
```

**Layout spec:**
- `grid md:grid-cols-[280px_1fr] gap-12 items-start`
- Left col: eyebrow + H2 (sticky optionally on desktop)
- Right col: 3 `<p>` elements, `max-w-[620px]`, `flex flex-col gap-6`

---

### Section 3 — Photo Statement / Visual Break `DARK | new photo`
**New layout shape** — mid-page full-bleed photo with overlaid brand statement.

**Photo:** `structural-steel-brick-repair.jpg` → copy from `.agents/skills/midway-chimney-masonry-design/assets/photos/` to `public/`. This photo is directly referenced in the copy ("replaced I-beams and shelf angles on three-flats").

```
Photo (full-bleed) + bg-near-black/50 overlay
├── Max-width centered content block (max-w-[720px] mx-auto text-center)
├── Eyebrow: "No subcontractors. No call centers."
└── Statement (Playfair Regular 36px — softer secondary voice, not Bold):
    "The same family doing the work, under one name, for over 25 years."
```

Uses the dual-weight H2 pattern from `typography.md` — Playfair **Regular** at 36px (quieter secondary headline voice vs. Bold for primary). Not a PullQuote; a brand statement lifted from paragraph 3 of the story copy.

**Why this works:** The home page has no mid-page photo break — sections alternate between solid dark/light backgrounds only. This introduces a second distinct dark treatment (photo vs. solid) and deploys one of the 4 unused photos.

---

### Section 4 — What We Believe `LIGHT | bg-off-white`
**New layout shape** — numbered commitment rows. Distinct from home's 2×2 grid.

**Layout spec:** Full-width stacked rows. Each row: full-width `border-t border-[--border]` divider, then `grid grid-cols-[80px_1fr] gap-8 py-10`

```
Eyebrow: "How We Think Work Should Be Done"
H2 (Playfair Bold 36px): "What We Believe"

Row 1: ─────────────────────────────────────────────────────────────
  [01]  Tell people what things cost.
        "Before we ever show up at your home, you know what you're paying. We publish our prices
        because we believe pricing transparency is the bare minimum of honest business. No surprise
        charges when we're done. No pressure to add on work you didn't ask for."

Row 2: ─────────────────────────────────────────────────────────────
  [02]  Show up when you say you will.
        "We confirm appointments. We keep them. If something changes, we call you — not the other
        way around. That's not exceptional service. That's just showing up."

Row 3: ─────────────────────────────────────────────────────────────
  [03]  Tell the truth about what you find.
        "After a 14-point chimney inspection, we tell you exactly what we found — good and bad. If
        your chimney is fine, we'll say so. If there's a problem, we'll describe it clearly and
        tell you what it would cost to fix. Then the decision is yours. No pressure, no invented
        urgency."

Row 4: ─────────────────────────────────────────────────────────────
  [04]  Do both sides of the work.
        "We built Midway to handle everything your home's brick and chimney system needs — from a
        fireplace sweep to a parapet wall rebuild. Most chimney sweeps don't do structural masonry.
        Most masonry contractors don't touch chimneys. We do both, because splitting the work
        between two contractors costs you more and creates gaps in accountability."
```

**Number style:** `font-display font-bold text-[48px] leading-none text-mid-gray` — recessive mid-gray so numbers don't compete with H3 headings.  
**Heading style:** H3 Playfair Bold 24px `text-near-black`  
**Body style:** Inter 16px `text-body` `leading-[1.6]`

---

### Section 5 — Trust Signals `DARK | bg-near-black or photo bg`
**New layout shape** — 3-column trust credentials grid (placeholder-aware).

**Photo option:** `chimney-rebuild-caps.jpg` → copy from skill assets to `public/`. Use as photo background with overlay instead of solid `bg-near-black` if it reads well.

```
[Photo or solid bg-near-black] + overlay if photo
├── Eyebrow: "Credentials"
├── H2: "Licensed, Bonded & Insured"
└── 3-col grid (md:grid-cols-3 gap-8):
    [Col 1]                           [Col 2]                       [Col 3]
    border-t-2 border-fire            border-t-2 border-fire        border-t-2 border-fire
    NFPA Certified                    Illinois Licensed              BBB Member
    [PLACEHOLDER — verify            [PLACEHOLDER — add            [PLACEHOLDER — add
    name & status before publishing]  license number]               BBB profile link]
```

Each credential cell follows the "Why Midway" grid pattern: fire divider rule + H3 (Playfair Bold) + 1–2 body lines. No icons. No badge widgets.

---

### Section 6 — Team `LIGHT | bg-off-white` [PLACEHOLDER]
**Shape only — content pending client.**

```
Eyebrow: "The people who do the work"
H2 (Playfair Bold 36px): "Our Team"

[Single bordered placeholder card]
border border-[--border] rounded-card p-8
"Team photos and bios coming soon — to be supplied by client.
Even first names and roles (e.g., Mike, Owner & Lead Chimney Technician)
add significant trust. A single candid job-site photo outperforms any stock image."
```

Placeholder text in `text-mid-gray italic`. No avatar placeholders. No stock images. The space is held honestly.

---

### Section 7 — CTA `DARK | bg-near-black | solid`
**Pattern:** Adapted from home's bottom CTA left column — simpler (no full form; home already has that at `/#contact`).

```
Centered content (max-w-[680px] mx-auto text-center):
├── H2 (Playfair Bold 36px): "Have a Question? Just Call."
├── Lead (20px Inter): "We're open 7 days a week. When you call, you'll talk to someone who can
│   actually answer your question — not a dispatcher reading from a script."
├── [2 buttons, side-by-side desktop / stacked mobile]
│   Primary (fire): "Call (312) 241-5115"          → business.phoneHref
│   Secondary (outline on dark): "Request a Callback" → /#contact
└── Reassurance (14px, text-on-dark-muted): "No obligation. We'll get back to you within 24 hours."
```

"Request a Callback" links to `/#contact` (home page form) — no duplicate form on about.

---

## New Files Required

| File | What it is |
|---|---|
| `components/midway/page-hero.tsx` | Reusable static photo hero RSC (~30 lines) |
| `app/about/page.tsx` | Full about page (sections 2–7 inline) |
| `public/structural-steel-brick-repair.jpg` | Copy from `.agents/skills/midway-chimney-masonry-design/assets/photos/` |
| `public/chimney-rebuild-caps.jpg` | Copy from `.agents/skills/midway-chimney-masonry-design/assets/photos/` (trust section bg option) |

## Existing Components Reused

- `business` from `lib/business-info.ts` — phone/phoneHref in the CTA
- `StatBlock`, `PullQuote`, `PriceStrip` — **not used** on this page (about leads with story, not numbers/reviews/price offer)

---

## What's Fresh vs. the Home Page

| Shape | Status |
|---|---|
| Static single-image PageHero | **New** — home uses a 3-slide carousel |
| Magazine 2-col story layout | **New** — home has no long-form editorial prose section |
| Mid-page photo statement break | **New** — home has no photo-bg sections outside the hero |
| Numbered commitment rows | **New** — home's 2×2 grid uses no display numerals |
| Trust credential grid | **New** — home has no credentials section |
| Team placeholder section | **New** — home has no team section |
| Photos used | `structural-steel-brick-repair.jpg`, `chimney-rebuild-caps.jpg` — never appeared on site |

---

## Design System Rules to Enforce

- Dark/light alternation must hold across all 7 sections
- Photos only on dark sections, never light — with `bg-near-black/50` warm overlay
- Fire red only on CTAs and the `$` in prices — not on display numerals or dividers in non-CTA contexts (wait — fire dividers are used in "Why Midway" — keep that pattern for trust signals but not for the belief rows which use `border-[--border]`)
- Playfair Bold for primary H2, Playfair Regular for secondary/softer statements (photo break section)
- Numbers that carry weight (01, 02…) get Playfair even mid-page
- All phone numbers pull from `lib/business-info.ts` — never inlined
- No navy, no cool grays, no pill buttons, no icon grids, no emoji
