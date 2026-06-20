import { PriceTag } from "@/components/midway/price-tag"

export function PriceStrip() {
  return (
    <section className="bg-off-white border-b border-near-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 py-6 lg:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

          {/* Price + divider + badges */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <PriceTag
              eyebrow="Cleaning + 14-point inspection"
              amount={189}
              unit="flat"
              size="md"
            />
            {/* Divider — only meaningful in horizontal layout */}
            <div className="hidden sm:block w-px h-14 bg-near-black/20 shrink-0" />
            <div className="flex gap-2 flex-wrap items-center">
              <span className="inline-flex items-center rounded-card px-2.5 py-1 text-xs font-semibold bg-transparent text-body border border-mid-gray">
                Senior discount
              </span>
              <span className="inline-flex items-center rounded-card px-2.5 py-1 text-xs font-semibold bg-transparent text-body border border-mid-gray">
                Veteran discount
              </span>
              <span className="inline-flex items-center rounded-card px-2.5 py-1 text-xs font-semibold bg-near-black text-off-white">
                Licensed &amp; insured
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="self-start lg:self-center inline-flex items-center font-sans font-semibold
              text-base px-6 py-3 rounded-card bg-fire text-off-white hover:bg-fire-hover
              active:bg-fire-active transition-colors duration-300 ease-in-out
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
          >
            Book an inspection
          </a>

        </div>
      </div>
    </section>
  )
}
