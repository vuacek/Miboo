"use client"

import { MapPin, Clock, Navigation } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const MAPS_QUERY = encodeURIComponent("Husova 8, Praha 1, Česko")

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          {t.location.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-4xl font-bold text-foreground text-balance md:text-5xl">
          {t.location.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-pretty">
          {t.location.subtitle}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {t.location.addressLabel}
              </h3>
              <p className="text-muted-foreground">{t.location.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {t.location.hoursLabel}
              </h3>
              <p className="text-muted-foreground">{t.location.hoursValue}</p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Navigation className="h-4 w-4" />
            {t.location.navigate}
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title={t.location.mapTitle}
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&hl=${t.location.mapLang}&z=17&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
