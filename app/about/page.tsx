import type { Metadata } from "next"
import { PageHero } from "@/components/midway/page-hero"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "About Us",
  description: "Family-owned chimney and masonry contractors serving Chicago's South Side and Cook, DuPage & Lake County for over 25 years.",
}

const SECTION = "max-w-[1280px] mx-auto px-6 py-14 md:py-24"

const beliefs = [
  {
    number: "01",
    heading: "Tell people what things cost.",
    body: "Before we ever show up at your home, you know what you're paying. We publish our prices because we believe pricing transparency is the bare minimum of honest business. No surprise charges when we're done. No pressure to add on work you didn't ask for.",
  },
  {
    number: "02",
    heading: "Show up when you say you will.",
    body: "We confirm appointments. We keep them. If something changes, we call you — not the other way around. That's not exceptional service. That's just showing up.",
  },
  {
    number: "03",
    heading: "Tell the truth about what you find.",
    body: "After a 14-point chimney inspection, we tell you exactly what we found — good and bad. If your chimney is fine, we'll say so. If there's a problem, we'll describe it clearly and tell you what it would cost to fix. Then the decision is yours. No pressure, no invented urgency.",
  },
  {
    number: "04",
    heading: "Do both sides of the work.",
    body: "We built Midway to handle everything your home's brick and chimney system needs — from a fireplace sweep to a parapet wall rebuild. Most chimney sweeps don't do structural masonry. Most masonry contractors don't touch chimneys. We do both, because splitting the work between two contractors costs you more and creates gaps in accountability.",
  },
]

const credentials = [
  {
    heading: "NFPA Certified",
    body: "PLACEHOLDER — verify certification name & status before publishing.",
  },
  {
    heading: "Illinois Licensed",
    body: "PLACEHOLDER — add license number before publishing.",
  },
  {
    heading: "BBB Member",
    body: "PLACEHOLDER — add BBB profile link before publishing.",
  },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── Section 1: Page Hero ── dark, full-bleed photo */}
      <PageHero
        eyebrow="Midway Chimney & Masonry · South Side Chicago"
        headline="25 Years on the South Side. Family-Owned. Still Doing the Work Ourselves."
        lead="Cook, DuPage & Lake County"
        imageSrc="/mason-tuckpointing-scaffold.jpg"
        imageAlt="Craftsman on scaffold doing tuckpointing work"
      />

      {/* ── Section 2: The Story ── light */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="flex flex-col gap-12">
          <div>
            <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
              Where we come from
            </span>
            <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black mt-3 max-w-[560px] text-balance">
              The story
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-[960px]">
            <p className="font-sans text-base leading-[1.6] text-body">
              We started this business near Midway Airport because this is where we&rsquo;re from.
              The South Side is our home — these are our neighbors, our blocks, our brick. When we
              clean a chimney in Beverly or repoint a three-flat in Bridgeport, we&rsquo;re not
              driving in from the suburbs. We live here.
            </p>
            <p className="font-sans text-base leading-[1.6] text-body">
              Midway Chimney &amp; Masonry grew out of a simple idea: that homeowners deserve a
              contractor who tells them the truth, shows up when they say they will, and charges a
              fair price. Over 25 years, that idea hasn&rsquo;t changed. The work has gotten
              bigger — we&rsquo;ve taken on full chimney rebuilds, I-beam replacements, shelf
              angle work on older three-flats — but the way we do business is exactly the same.
            </p>
            <p className="font-sans text-base leading-[1.6] text-body md:col-span-2 max-w-[620px]">
              We&rsquo;ve cleaned chimneys in Beverly and Bridgeport. We&rsquo;ve repointed
              brickwork in Oak Lawn and Orland Park. We&rsquo;ve replaced I-beams and shelf
              angles on three-flats in the near South Side. We&rsquo;ve done it all under one
              name, with the same family doing the work — no subcontractors, no call centers.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Photo Statement Break ── dark, full-bleed photo */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/structural-steel-brick-repair.jpg')" }}
      >
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 md:py-32">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-off-white">
              No subcontractors. No call centers.
            </span>
            <p className="font-display font-normal text-[44px] leading-[1.15] text-off-white mt-5 text-balance">
              The same family doing the work, under one name, for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: What We Believe ── light */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="flex flex-col gap-3 mb-14">
            <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
              How we think work should be done
            </span>
            <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black text-balance">
              What we believe
            </h2>
          </div>
          <div className="flex flex-col">
            {beliefs.map(({ number, heading, body }) => (
              <div
                key={number}
                className="grid grid-cols-[80px_1fr] gap-8 py-10 border-t border-[--border]"
              >
                <span className="font-display font-bold text-[48px] leading-none text-mid-gray select-none">
                  {number}
                </span>
                <div className="flex flex-col gap-3 pt-1">
                  <h3 className="font-display font-bold text-[24px] leading-[1.1] text-near-black">
                    {heading}
                  </h3>
                  <p className="font-sans text-base leading-[1.6] text-body max-w-[620px]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Trust Signals ── dark, photo background */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/chimney-rebuild-caps.jpg')" }}
      >
        <div className="absolute inset-0 bg-near-black/65" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-14 md:py-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-off-white">
                Credentials
              </span>
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-off-white text-balance">
                Licensed, bonded &amp; insured
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {credentials.map(({ heading, body }) => (
                <div key={heading} className="flex flex-col gap-3">
                  <div className="border-t-2 border-fire w-16" />
                  <h3 className="font-display font-bold text-[24px] leading-[1.1] text-off-white">
                    {heading}
                  </h3>
                  <p className="font-sans text-base leading-[1.6] text-on-dark-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Team ── light, placeholder */}
      <section className="bg-off-white">
        <div className={SECTION}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray">
                The people who do the work
              </span>
              <h2 className="font-display font-bold text-[36px] leading-[1.1] text-near-black">
                Our team
              </h2>
            </div>
            <div className="border border-[--border] rounded-card p-8 max-w-[620px]">
              <p className="font-sans text-base leading-[1.6] text-mid-gray italic">
                Team photos and bios coming soon — to be supplied by client. Even first names and
                roles (e.g., Mike, Owner &amp; Lead Chimney Technician) add significant trust. A
                single candid job-site photo outperforms any stock image.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ── dark, solid */}
      <section className="bg-near-black">
        <div className={SECTION}>
          <div className="max-w-[680px] mx-auto text-center flex flex-col gap-6 items-center">
            <h2 className="font-display font-bold text-[36px] leading-[1.1] text-off-white text-balance">
              Have a question? Just call.
            </h2>
            <p className="font-sans text-xl leading-[1.5] text-[#E6E1DB] max-w-[560px]">
              We&rsquo;re open 7 days a week. When you call, you&rsquo;ll talk to someone who can
              actually answer your question — not a dispatcher reading from a script.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center font-sans font-semibold
                  text-base px-6 py-3 rounded-card bg-fire text-off-white hover:bg-fire-hover
                  active:bg-fire-active transition-colors duration-300 ease-in-out
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
              >
                Call {business.phone}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center font-sans font-semibold
                  text-base px-6 py-3 rounded-card border border-off-white/40 text-off-white
                  hover:border-off-white/70 hover:bg-off-white/10
                  transition-colors duration-300 ease-in-out
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
              >
                Request a callback
              </a>
            </div>
            <p className="font-sans text-sm text-on-dark-muted">
              No obligation. We&rsquo;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
