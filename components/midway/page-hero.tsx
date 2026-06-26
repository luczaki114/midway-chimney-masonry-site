interface PageHeroProps {
  eyebrow: string
  headline: string
  lead: string
  imageSrc: string
  imageAlt: string
}

export function PageHero({ eyebrow, headline, lead, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      aria-label={imageAlt}
    >
      <div className="absolute inset-0 bg-near-black/65" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-28 md:py-36">
        <span className="font-sans font-light text-xs uppercase tracking-eyebrow text-off-white">
          {eyebrow}
        </span>
        <h1 className="font-display font-bold text-[44px] md:text-[52px] leading-[1.05] text-off-white mt-4 max-w-[760px] text-balance">
          {headline}
        </h1>
        <p className="font-sans text-xl leading-[1.5] text-[#E6E1DB] mt-5 max-w-[480px]">
          {lead}
        </p>
      </div>
    </section>
  )
}
