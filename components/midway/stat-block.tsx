interface StatBlockProps {
  value: string
  caption: string
  dark?: boolean
}

export function StatBlock({ value, caption, dark = false }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`font-display font-bold text-6xl leading-[0.95] ${
          dark ? "text-off-white" : "text-near-black"
        }`}
      >
        {value}
      </span>
      <span
        className={`font-sans text-[15px] max-w-[200px] ${
          dark ? "text-on-dark-muted" : "text-mid-gray"
        }`}
      >
        {caption}
      </span>
    </div>
  )
}
