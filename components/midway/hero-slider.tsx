"use client"

import { useEffect, useRef, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { PriceTag } from "@/components/midway/price-tag"
import { StatBlock } from "@/components/midway/stat-block"
import { business } from "@/lib/business-info"

const BTN =
  "inline-flex items-center font-sans font-semibold text-[18px] px-8 py-4 rounded-card bg-fire text-off-white hover:bg-fire-hover active:bg-fire-active transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"

const TEXT_LINK =
  "group inline-flex items-center gap-1.5 font-sans font-semibold text-[17px] text-fire hover:text-fire-hover transition-colors duration-300 ease-in-out"

const slides = [
  {
    bg: "/chimney-rebuild-rooftop.jpg",
    align: "left" as const,
    content: (
      <div className="max-w-[540px]">
        <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-off-white/85">
          Chimney Cleaning + 14-Point Inspection
        </span>
        <div className="mt-4">
          <PriceTag amount={189} size="xl" dark />
        </div>
        <p className="font-sans text-xl leading-[1.5] text-off-white/80 mt-5">
          Two services. One honest price. Know exactly what you&rsquo;re paying
          before we show up &mdash; no surprises, no add-ons you didn&rsquo;t ask for.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
          <a href={business.phoneHref} className={BTN}>
            Call {business.phone}
          </a>
          <a href="#contact" className={TEXT_LINK}>
            Schedule your inspection
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    ),
  },
  {
    bg: "/mason-tuckpointing-scaffold.jpg",
    align: "left" as const,
    content: (
      <div className="max-w-[560px]">
        <h2 className="font-display font-bold text-[48px] md:text-[60px] leading-[1.04] text-off-white">
          We Take Care of the People Who Took Care of Us.
        </h2>
        <p className="font-sans text-xl leading-[1.5] text-off-white/80 mt-5">
          Midway Chimney &amp; Masonry is proud to offer special discounts for
          seniors and veterans. Because your service deserves more than a
          thank-you.
        </p>
        <div className="mt-8 flex flex-col gap-2">
          <a href={business.phoneHref} className={BTN}>
            Call {business.phone}
          </a>
          <span className="font-sans text-sm text-off-white/50">
            Ask about senior &amp; veteran discounts
          </span>
        </div>
      </div>
    ),
  },
  {
    bg: "/greystone-restored-facade.jpg",
    align: "right" as const,
    content: (
      <div className="max-w-[520px] ml-auto">
        <h2 className="font-display font-bold text-[48px] md:text-[60px] leading-[1.04] text-off-white">
          South Side Chicago&rsquo;s Chimney &amp; Masonry Experts
        </h2>
        <div className="mt-5">
          <StatBlock dark value="25+" caption="years of family service" />
        </div>
        <p className="font-sans text-xl leading-[1.5] text-off-white/80 mt-5">
          From fireplace cleaning to I-beam replacement, we do it all &mdash;
          one company, one call &mdash; serving Cook, DuPage, and Lake County.
        </p>
        <div className="mt-8">
          <a href="#contact" className={TEXT_LINK}>
            Get a free estimate
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    ),
  },
]

export function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const plugin = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="relative">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="pl-0">
              <section
                className="relative bg-cover bg-center min-h-[600px] md:min-h-[680px] flex items-center"
                style={{ backgroundImage: `url('${slide.bg}')` }}
                aria-label={`Slide ${i + 1} of ${slides.length}`}
              >
                <div className="absolute inset-0 bg-near-black/50" />
                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-10">
                  {slide.content}
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots — left-aligned, flush with content column */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-[1280px] mx-auto px-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-fire" : "bg-off-white/30 hover:bg-off-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
