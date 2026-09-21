"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { InstagramIcon } from "@/components/icons/instagram"

export function SiteHeader() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#hodiny" },
    { label: t.nav.location, href: "#kontakt" },
    { label: t.nav.reviews, href: "#recenze" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-3" aria-label="Miboo">
          <Image
            src="/images/miboo-logo.png"
            alt="Miboo — Bubble Tea & Smoothies"
            width={160}
            height={160}
            priority
            className="h-16 w-auto"
          />
          <span className="font-display text-4xl font-black leading-none text-foreground md:text-5xl">
            Miboo
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://www.instagram.com/miboo.prague"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @miboo.prague"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <LanguageToggle />
          <Link
            href="#kontakt"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            {t.nav.visit}
          </Link>
        </div>
      </div>
    </header>
  )
}
