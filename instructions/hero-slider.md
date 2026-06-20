# Hero Slider — Build Plan

## Behavior layer
- Install shadcn Carousel (Embla-based): `npx shadcn@latest add carousel`
- Install autoplay plugin: `npm install embla-carousel-autoplay`
- Auto-advance: 5–6s per slide, pause on hover/focus via `embla-carousel-autoplay`
- Each `<CarouselItem>` is a full-bleed photo section — the Carousel owns scroll/swipe/keyboard only

## Visual structure per slide
```tsx
<CarouselItem>
  <section className="relative bg-cover bg-center min-h-[600px]" style={{ backgroundImage: "url('...')" }}>
    <div className="absolute inset-0 bg-near-black/50" />
    <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-28">
      {/* slide content */}
    </div>
  </section>
</CarouselItem>
```

## Slide 1 — The Lead Offer
- **Background:** `chimney-rebuild-rooftop.jpg`
- **Eyebrow:** "Chimney Cleaning + 14-Point Inspection" (`.eyebrow`, `text-off-white/85`)
- **Price:** `<PriceTag amount={189} size="xl" dark />` — the visual anchor
- **Subheadline:** "Two services. One honest price. Know exactly what you're paying before we show up — no surprises, no add-ons you didn't ask for." (Inter 20px, `text-[#E6E1DB]`, `max-w-[540px]`)
- **CTAs:** Primary fire button → `tel:+13122415115`; Secondary outline-on-dark → schedule link

## Slide 2 — Senior & Veteran Discounts
- **Background:** `mason-tuckpointing-scaffold.jpg`
- **Headline:** "We Take Care of the People Who Took Care of Us." (Playfair Bold, large, `text-off-white`, wider `max-w`)
- **Subheadline:** "Midway Chimney & Masonry is proud to offer special discounts for seniors and veterans. Because your service deserves more than a thank-you."
- **CTA:** Single fire button → `tel:+13122415115` "Call to Ask About Your Discount"
- No price treatment — this slide earns weight from the headline alone

## Slide 3 — Brand & Trust
- **Background:** `chimney-rebuild-rooftop.jpg` (different `bg-position`, e.g. `bg-top`) or a third photo from skill assets
- **Headline:** "South Side Chicago's Chimney & Masonry Experts" (Playfair Bold, `text-off-white`)
- **Stat:** `<StatBlock dark value="25+" caption="years of family service" />` — placed below headline as visual anchor (mirrors slide 1's PriceTag role)
- **Subheadline:** "From fireplace cleaning to I-beam replacement, we do it all — one company, one call — serving Cook, DuPage, and Lake County."
- **CTA:** Fire button → contact form anchor or free estimate page

## Dot indicators (custom visual, not shadcn)
```tsx
// inactive
<button className="w-2 h-2 rounded-full bg-off-white/30 transition-colors duration-300" />
// active
<button className="w-2 h-2 rounded-full bg-fire transition-colors duration-300" />
```
Positioned absolute bottom-8, centered horizontally over the slide.

## Photos needed
- Slides 1 & 3 can share `chimney-rebuild-rooftop.jpg` at different `bg-position` values
- Slide 2: `mason-tuckpointing-scaffold.jpg`
- Optional: pull a third photo from `.claude/skills/midway-chimney-masonry-design/assets/photos/` before building

## Pre-build checklist
- [ ] Run `npx shadcn@latest docs carousel` to verify base-nova Carousel API before writing any code
- [ ] Install `embla-carousel-autoplay`
- [ ] Check skill assets for a third photo
- [ ] Replace static photo hero in `app/page.tsx` with the `<HeroSlider />` component
- [ ] Keep `<TrustBar />` directly below the slider (it sits in the dark strip between hero and first light section)
