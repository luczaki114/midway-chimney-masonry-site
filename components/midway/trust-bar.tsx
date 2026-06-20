import { Fragment } from "react"

const DEFAULT_ITEMS = [
  "25+ Years in Business",
  "Open 7 Days a Week",
  "Free Estimates",
  "Cook, DuPage & Lake County",
  "Senior & Veteran Discounts",
]

interface TrustBarProps {
  items?: string[]
}

export function TrustBar({ items = DEFAULT_ITEMS }: TrustBarProps) {
  return (
    <div className="bg-near-black border-t border-off-white/10">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <ul className="flex flex-wrap justify-center items-center gap-y-2">
          {items.map((item, i) => (
            <Fragment key={item}>
              <li className="font-sans text-sm font-medium text-on-dark-muted whitespace-nowrap px-4">
                {item}
              </li>
              {i < items.length - 1 && (
                <li aria-hidden role="presentation" className="text-off-white/20 text-xs select-none">
                  ·
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}
