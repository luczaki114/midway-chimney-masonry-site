interface PullQuoteProps {
  quote: string
  name: string
  location: string
  dark?: boolean
}

export function PullQuote({ quote, name, location, dark = false }: PullQuoteProps) {
  return (
    <figure className="relative pl-16 max-w-[720px]">
      <span
        aria-hidden
        className="absolute left-0 -top-5 font-display font-bold text-[104px] leading-none text-fire"
      >
        &ldquo;
      </span>
      <blockquote
        className={`font-display italic font-medium text-[28px] leading-[1.35] ${
          dark ? "text-off-white" : "text-near-black"
        }`}
      >
        {quote}
      </blockquote>
      <figcaption
        className={`font-sans text-[15px] mt-4 ${
          dark ? "text-on-dark-muted" : "text-mid-gray"
        }`}
      >
        <strong
          className={`font-semibold ${dark ? "text-on-dark" : "text-body"}`}
        >
          {name}
        </strong>
        {" · "}
        {location}
      </figcaption>
    </figure>
  )
}
