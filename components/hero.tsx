"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
            {t.hero.badge}
          </span>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl">
            {t.hero.titleLead}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#menu"
              className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              {t.hero.ctaMenu}
            </Link>
            <Link
              href="#kontakt"
              className="rounded-full border-2 border-border bg-card px-6 py-3 font-bold text-foreground transition-colors hover:border-primary"
            >
              {t.hero.ctaLocation}
            </Link>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {t.hero.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {t.hero.hoursShort}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10" />
          <Image
            src="/images/hero-bubbletea.png"
            alt={t.hero.imageAlt}
            width={640}
            height={640}
            priority
            className="w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
