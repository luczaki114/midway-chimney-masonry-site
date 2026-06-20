import { HeroSlider } from "@/components/midway/hero-slider"
import { PriceTag } from "@/components/midway/price-tag"
import { ServiceCard } from "@/components/midway/service-card"
import { PullQuote } from "@/components/midway/pull-quote"
import { StatBlock } from "@/components/midway/stat-block"
import { TrustBar } from "@/components/midway/trust-bar"
import { business } from "@/lib/business-info"

const SECTION = "max-w-[1280px] mx-auto px-6 py-14 md:py-24"

export default function Home() {
  return (
    <main>

      {/* ── Hero Slider ── dark, full-bleed, 3 slides */}
      <HeroSlider />

      {/* ── Trust Bar ── dark strip below hero */}
      <TrustBar />

      {/* ── Brief Intro ── light */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <p className="font-sans text-lg leading-[1.6] text-body max-w-[680px] mx-auto text-center">
            Midway Chimney &amp; Masonry is a family-owned business based near Midway Airport on
            Chicago&rsquo;s South Side. For over 25 years, we&rsquo;ve been cleaning chimneys,
            repointing brickwork, and handling everything in between for homeowners across Cook,
            DuPage, and Lake County. When you call us, you talk to the family that does the work.
          </p>
        </div>
      </section>

      {/* ── $189 Offer Block ── dark */}
      <section className="bg-near-black">
        <div className={SECTION}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <PriceTag
                eyebrow="Cleaning + 14-point inspection"
                amount={189}
                unit="flat"
                size="xl"
                dark
              />
              <div className="border-t-2 border-fire w-16" />
              <p className="font-sans text-base leading-[1.6] text-on-dark-muted max-w-[460px]">
                Chimney cleaning on its own: $149. A 14-point inspection on its own: $139. Get
                both together for $189 — and know exactly what&rsquo;s going on inside your chimney
                before the heating season starts.
              </p>
              <p className="font-sans text-base leading-[1.6] text-on-dark-muted max-w-[460px]">
                Our 14-point inspection checks the firebox, smoke chamber, flue liner, damper, cap,
                crown, flashing, and more. You&rsquo;ll get a straight answer on what&rsquo;s
                working, what isn&rsquo;t, and what it would cost to fix — then the decision is
                yours. No pressure.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:pt-8">
              <p className="font-sans text-base leading-[1.6] text-on-dark-muted">
                We publish this price because we want you to know what you&rsquo;re walking into.
                No one else in this market does that.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center font-sans font-semibold
                    text-base px-6 py-3 rounded-card bg-fire text-off-white hover:bg-fire-hover
                    active:bg-fire-active transition-colors duration-300 ease-in-out
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
                >
                  Call for Your $189 Inspection — {business.phone}
                </a>
                <p className="font-sans text-sm text-on-dark-muted">
                  No obligation. No sales pitch. Just an honest estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── light */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[600px] mx-auto text-center">
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black">
                What we do
              </h2>
              <p className="font-sans text-xl leading-[1.5] text-body">
                One call covers it all
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="Chimney Services"
                body="We handle everything your chimney needs — from an annual sweep to a full rebuild. If your fireplace or furnace flue hasn't been cleaned in a year, that's where we start. If something's wrong with the liner, cap, or damper, we'll tell you exactly what we found."
                href="/services/chimney"
                linkLabel="See all chimney services →"
              />
              <ServiceCard
                title="Masonry Services"
                body="Chicago's brick takes a beating. Decades of freeze-thaw cycles crack mortar, rust lintels, and weaken parapet walls. We repair and restore — tuckpointing, lintel and shelf angle replacement, parapet work, I-beam replacement, waterproofing, and more."
                href="/services/masonry"
                linkLabel="See all masonry services →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Midway ── dark */}
      <section className="bg-near-black">
        <div className={SECTION}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-off-white">
                Why Midway
              </h2>
              <p className="font-sans text-xl leading-[1.5] text-[#E6E1DB] max-w-[560px]">
                We post our prices. We do both. We show up.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  heading: "We tell you the price upfront",
                  body: "We post our prices. Not ranges. Not “call for a quote.” If you’re booking a chimney cleaning and inspection, you know it’s $189 before we ever show up. Every competitor in this market hides their pricing. We don’t, because we have nothing to hide.",
                },
                {
                  heading: "You talk to the family that owns the business",
                  body: "When you call Midway, you're not routed to a dispatcher or a call center. You're talking to the same family that's been doing this work on the South Side for over 25 years. We take your home seriously because our name is on every job.",
                },
                {
                  heading: "We do chimney and masonry — under one roof",
                  body: "Most chimney companies don't touch structural masonry. Most masonry contractors won't go near a flue. Midway does both. One call covers everything from your firebox to your front stoop — and we don't subcontract it out.",
                },
                {
                  heading: "No surprises. No upselling. We show up.",
                  body: "The three complaints we hear most about other contractors: they quoted one price and charged another; they pushed work that didn't need doing; they didn't show up when they said they would. We're not those guys.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="flex flex-col gap-3">
                  <div className="border-t-2 border-fire w-16" />
                  <h3 className="font-display font-bold text-xl leading-[1.2] text-off-white">
                    {heading}
                  </h3>
                  <p className="font-sans text-base leading-[1.6] text-on-dark-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── light (placeholder) */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="flex flex-col gap-3 mb-14 max-w-[600px] mx-auto text-center">
            <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black">
              In their words
            </h2>
            <p className="font-sans text-xl leading-[1.5] text-body">
              Straight from the South Side
            </p>
          </div>
          {/* Testimonials placeholder — to be supplied by client */}
          <div className="grid md:grid-cols-2 gap-14">
            <PullQuote
              quote="They told me the price over the phone, showed up when they said, and the chimney's never drawn better."
              name="Maria T."
              location="Garfield Ridge, Chicago"
            />
            <PullQuote
              quote="Called three companies before Midway. They were the only ones who gave me a straight number without coming out first."
              name="James K."
              location="Oak Lawn, IL"
            />
          </div>
        </div>
      </section>

      {/* ── Service Area ── dark */}
      <section className="bg-near-black">
        <div className={SECTION}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-off-white">
                Service area
              </h2>
              <p className="font-sans text-xl leading-[1.5] text-[#E6E1DB] max-w-[560px]">
                Serving the South Side and beyond
              </p>
            </div>
            <div className="flex flex-wrap gap-12">
              {[
                { value: "25+", caption: "Years on the South Side" },
                { value: "3", caption: "Counties served — Cook, DuPage & Lake" },
                { value: "7", caption: "Days a week, including weekends" },
              ].map((stat) => (
                <StatBlock key={stat.caption} value={stat.value} caption={stat.caption} dark />
              ))}
            </div>
            <p className="font-sans text-base leading-[1.6] text-on-dark-muted max-w-[620px]">
              We&rsquo;re based near Midway Airport and serve homeowners across Cook County,
              DuPage County, and Lake County. If you&rsquo;re not sure whether we cover your area,
              just call — we&rsquo;ll tell you straight.
            </p>
            <a
              href={business.phoneHref}
              className="self-start inline-flex items-center font-sans font-semibold text-base
                px-6 py-3 rounded-card bg-fire text-off-white hover:bg-fire-hover
                active:bg-fire-active transition-colors duration-300 ease-in-out
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── light */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black">
                Get in touch
              </h2>
              <p className="font-sans text-xl leading-[1.5] text-body">
                Ready to book or just have a question?
              </p>
              <p className="font-sans text-base leading-[1.6] text-body">
                We&rsquo;re open 7 days a week. Call us or fill out the form and we&rsquo;ll get
                back to you within 24 hours.
              </p>
              <a
                href={business.phoneHref}
                className="self-start inline-flex items-center font-sans font-semibold text-[18px]
                  px-8 py-4 rounded-card bg-fire text-off-white hover:bg-fire-hover
                  active:bg-fire-active transition-colors duration-300 ease-in-out
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
              >
                Call {business.phone}
              </a>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[15px] font-semibold text-body">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-card border border-mid-gray bg-background text-body
                    text-base px-3.5 py-2.5 placeholder:text-mid-gray
                    transition-colors duration-[250ms] ease-in-out
                    focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire
                    focus-visible:ring-offset-2 focus-visible:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[15px] font-semibold text-body">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(312) 555-0000"
                  className="w-full rounded-card border border-mid-gray bg-background text-body
                    text-base px-3.5 py-2.5 placeholder:text-mid-gray
                    transition-colors duration-[250ms] ease-in-out
                    focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire
                    focus-visible:ring-offset-2 focus-visible:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[15px] font-semibold text-body">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-card border border-mid-gray bg-background text-body
                    text-base px-3.5 py-2.5 placeholder:text-mid-gray
                    transition-colors duration-[250ms] ease-in-out
                    focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire
                    focus-visible:ring-offset-2 focus-visible:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-[15px] font-semibold text-body">
                  Service needed
                </label>
                <select
                  id="service"
                  defaultValue=""
                  className="w-full rounded-card border border-mid-gray bg-background text-body
                    text-base px-3.5 py-2.5
                    transition-colors duration-[250ms] ease-in-out
                    focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire
                    focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <option value="" disabled>Select a service…</option>
                  <option>Chimney Cleaning</option>
                  <option>14-Point Chimney Inspection</option>
                  <option>Chimney Cleaning + Inspection ($189)</option>
                  <option>Chimney Liner Installation</option>
                  <option>Chimney Cap / Damper</option>
                  <option>Chimney Rebuild</option>
                  <option>Tuckpointing</option>
                  <option>Brick Restoration</option>
                  <option>Lintel Replacement</option>
                  <option>Parapet Wall Repairs</option>
                  <option>I-Beam Replacement</option>
                  <option>Shelf Angle Replacement</option>
                  <option>Concrete Repair</option>
                  <option>Waterproofing</option>
                  <option>Glass Block Windows</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[15px] font-semibold text-body">
                  Message <span className="font-normal text-mid-gray">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Anything else we should know?"
                  className="w-full rounded-card border border-mid-gray bg-background text-body
                    text-base px-3.5 py-2.5 placeholder:text-mid-gray resize-y
                    transition-colors duration-[250ms] ease-in-out
                    focus-visible:border-fire focus-visible:ring-2 focus-visible:ring-fire
                    focus-visible:ring-offset-2 focus-visible:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center font-sans font-semibold
                    text-base px-6 py-3 rounded-card bg-fire text-off-white hover:bg-fire-hover
                    active:bg-fire-active transition-colors duration-300 ease-in-out
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
                >
                  Request a Callback
                </button>
                <p className="font-sans text-sm text-mid-gray text-center">
                  No obligation. We&rsquo;ll get back to you within 24 hours. Free estimates on all
                  services.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
