# Recipes · Patterns (layout, section rhythm, photo treatment)

The page-level rules that make a Midway layout *feel* like Midway. Get these right and individual
components fall into place.

---

## Section rhythm — alternate dark and light

Move down the page alternating background temperature. This is the single most important layout move.

1. Dark section (full-bleed photo, or solid `bg-near-black`) — text `text-off-white`
2. Light section (`bg-off-white`) — text `text-body`
3. Dark · 4. Light · …

Red appears **only** on interactive elements (buttons, phone links) and the price callout — **never
as a large section background.** It should surprise, not saturate.

**Section shell:**
```tsx
<section className="bg-off-white">{/* or bg-near-black */}
  <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-24">{/* 56px mobile → 96px desktop */}
    …
  </div>
</section>
```

- Max content width **1280px**, centered. 12-col mental model, 24px (`gap-6`) gutter.
- Section padding **96px desktop / 56px mobile** → `py-14 md:py-24`.

---

## Photo treatment — three hard rules

1. **Warm overlay on every photo background.** `bg-near-black/50` (40–55%) over the image. This
   unifies phone-camera-quality job-site photos into one coherent system and makes text legible.
2. **Photos only on dark sections.** Light sections use solid `bg-off-white`. **Never** a photo on
   a light background — that's the WordPress-template look the brand avoids.
3. **Bleed to the edge.** Full-bleed photos get **no rounded corners, no border**. Constrain the
   content on top with padding, not a frame around the image.

**Full-bleed photo section:**
```tsx
<section className="relative bg-cover bg-center" style={{ backgroundImage: "url('assets/photos/chimney-rebuild-rooftop.jpg')" }}>
  <div className="absolute inset-0 bg-near-black/50" />          {/* warm overlay */}
  <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-28">
    <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-off-white/85">
      Chimney & Masonry · Cook · DuPage · Lake
    </span>
    <h1 className="font-display font-extrabold text-[64px] leading-[1.04] text-off-white mt-4 max-w-[720px] text-balance">
      The South Side family that does the work.
    </h1>
    <p className="font-sans text-xl leading-[1.5] text-[#E6E1DB] mt-5 max-w-[560px]">
      Over 25 years cleaning chimneys and rebuilding brickwork. Honest prices up front.
    </p>
  </div>
</section>
```

(The bridge also ships a `.photo-frame` helper that injects the overlay for you — see `tailwind.css`.)

**Imagery** in `assets/photos/` is real, warm, daylight job-site photography. Use it directly. **No
stock photography** — it visually clashes with the authentic photos.

---

## Sticky nav — the one shadow

Nav is the only element that gets a shadow, and only once scrolled:
`shadow-[0_2px_12px_rgb(28_23_20/0.15)]` (or the `shadow-nav` utility). Everything else is flat.

---

## Hard rules recap

- **No navy blue** — not as background, button, or headline. Anywhere.
- **Red only** on CTAs, phone links, and the price callout. Never a section background.
- **Serif headlines** (Playfair Regular/Bold — never thin), **Inter body** (16px / 1.6, never < 15px).
- **Flat** — 6px radius, no shadows except sticky nav. No gradients, patterns, or textures.
- **Deliberate motion** — 250–300ms ease-in-out. Buttons deepen (never lighten) on hover/press.
- **No pill buttons. No badge/certification grids. No emoji. No "Family Owned" stamp.**
- **Icons:** Lucide, 1.5px stroke, inherit text color, used sparsely with labels — never icon grids.
