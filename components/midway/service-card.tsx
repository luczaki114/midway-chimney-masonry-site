interface ServiceCardProps {
  title: string
  body: string
  href: string
  linkLabel?: string
}

export function ServiceCard({ title, body, href, linkLabel = "Learn more →" }: ServiceCardProps) {
  return (
    <div className="rounded-card border border-[--border] bg-card p-8 flex flex-col gap-3 hover:border-body transition-colors duration-[250ms] ease-in-out">
      <h3 className="font-display font-bold text-2xl leading-[1.1] text-near-black">{title}</h3>
      <p className="font-sans text-base leading-[1.6] text-body">{body}</p>
      <a
        href={href}
        className="font-sans font-semibold text-[15px] text-fire hover:underline mt-auto pt-2"
      >
        {linkLabel}
      </a>
    </div>
  )
}
