interface StatBlockProps {
  value: string
  caption: string
  dark?: boolean
}

function parseSuffix(value: string): [string, string] {
  const match = value.match(/^(\d+)([+%]?)$/)
  if (!match) return [value, ""]
  return [match[1], match[2]]
}

export function StatBlock({ value, caption, dark = false }: StatBlockProps) {
  const [figure, suffix] = parseSuffix(value)
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`font-display font-bold text-6xl leading-[0.95] ${
          dark ? "text-off-white" : "text-near-black"
        }`}
      >
        {figure}
        {suffix && <span className="text-[30px]">{suffix}</span>}
      </span>
      <span
        className={`font-sans text-[13px] max-w-[200px] ${
          dark ? "text-on-dark-muted" : "text-mid-gray"
        }`}
      >
        {caption}
      </span>
    </div>
  )
}
