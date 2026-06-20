import Link from "next/link"
import { business } from "@/lib/business-info"

const SERVICES = [
  { label: "Chimney Cleaning + Inspection", href: "/services/chimney" },
  { label: "Tuckpointing", href: "/services/masonry" },
  { label: "Chimney Rebuilds", href: "/services/chimney" },
  { label: "Concrete & Masonry", href: "/services/masonry" },
]

export function SiteFooter() {
  return (
    <footer className="bg-near-black text-off-white">

      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">

        {/* Col 1 — brand */}
        <div>
          <p className="font-display font-bold text-[24px] leading-tight text-off-white mb-3">
            Midway Chimney &amp; Masonry
          </p>
          <p className="font-sans text-[15px] leading-[1.6] text-on-dark-muted max-w-[320px]">
            Family-owned, South Side Chicago. Cleaning chimneys and rebuilding brickwork across
            Cook, DuPage &amp; Lake County for over 25 years.
          </p>
        </div>

        {/* Col 2 — services */}
        <div>
          <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray block mb-4">
            Services
          </span>
          <nav className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="font-sans text-[15px] text-off-white hover:text-fire transition-colors duration-300 ease-in-out"
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — contact */}
        <div>
          <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-mid-gray block mb-4">
            Get in touch
          </span>
          <a
            href={business.phoneHref}
            className="font-display font-bold text-[24px] leading-tight text-fire hover:text-fire-hover transition-colors duration-300 ease-in-out block mb-3"
          >
            {business.phone}
          </a>
          <p className="font-sans text-[15px] leading-[1.6] text-on-dark-muted">
            {business.address.neighborhood}<br />
            {business.address.city}, {business.address.state}
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-off-white/[0.14]">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span className="font-sans text-[13px] text-mid-gray">
            &copy; 2026 {business.name}
          </span>
          <span className="font-sans text-[13px] text-mid-gray">
            Licensed &amp; insured &middot; Senior &amp; veteran discounts
          </span>
        </div>
      </div>

    </footer>
  )
}
