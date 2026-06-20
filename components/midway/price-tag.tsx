interface PriceTagProps {
  eyebrow?: string
  amount: number
  unit?: string
  size?: "md" | "lg" | "xl"
  dark?: boolean
}

const sizeMap = {
  md: "text-[48px]",
  lg: "text-[72px]",
  xl: "text-[88px]",
}

export function PriceTag({ eyebrow, amount, unit = "flat", size = "lg", dark = false }: PriceTagProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {eyebrow && (
        <span className={`font-sans font-light text-xs uppercase tracking-eyebrow ${dark ? "text-on-dark-muted" : "text-mid-gray"}`}>
          {eyebrow}
        </span>
      )}
      <span className={`font-display font-bold ${sizeMap[size]} leading-[0.95] ${dark ? "text-off-white" : "text-near-black"} flex items-baseline`}>
        <span className="text-fire mr-0.5">$</span>
        {amount}
        {unit && (
          <span className="font-sans font-medium text-base text-mid-gray ml-2">{unit}</span>
        )}
      </span>
    </div>
  )
}
