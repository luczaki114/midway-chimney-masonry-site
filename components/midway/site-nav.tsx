"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { business } from "@/lib/business-info"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { SheetTrigger } from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
]

const PHONE_CTA =
  "font-sans font-semibold text-[15px] px-[18px] py-[10px] rounded-card bg-fire text-off-white " +
  "hover:bg-fire-hover active:bg-fire-active transition-colors duration-300 ease-in-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function isActive(href: string) {
    if (href.startsWith("#")) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-off-white transition-shadow duration-[250ms] ease-in-out",
        scrolled ? "shadow-nav" : "border-b border-near-black/[0.08]"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="font-display font-bold text-[22px] tracking-[-0.01em] text-near-black">
            Midway
          </span>
          <span className="font-sans font-light text-[11px] uppercase tracking-eyebrow text-mid-gray">
            Chimney &amp; Masonry
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[15px] transition-colors duration-[250ms] ease-in-out",
                isActive(link.href)
                  ? "font-semibold text-fire"
                  : "font-medium text-body hover:text-near-black"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a href={business.phoneHref} className={PHONE_CTA}>
            {business.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center p-2 -mr-2 rounded-card
              text-body hover:bg-near-black/5 transition-colors duration-[250ms] ease-in-out
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire"
          >
            <MenuIcon size={22} strokeWidth={1.5} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent side="right" className="bg-off-white w-[280px] p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-near-black/[0.08]">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-display font-bold text-[20px] tracking-[-0.01em] text-near-black">
                  Midway
                </span>
                <span className="font-sans font-light text-[10px] uppercase tracking-eyebrow text-mid-gray">
                  Chimney &amp; Masonry
                </span>
              </Link>
            </SheetHeader>

            <nav className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "font-sans text-[15px] py-2.5 transition-colors duration-[250ms] ease-in-out",
                    isActive(link.href)
                      ? "font-semibold text-fire"
                      : "font-medium text-body hover:text-near-black"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-6 pb-8">
              <a href={business.phoneHref} className={cn(PHONE_CTA, "block text-center")}>
                {business.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
