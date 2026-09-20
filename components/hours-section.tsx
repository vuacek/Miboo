"use client"

import { Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const dayIndex = (new Date().getDay() + 6) % 7 // Mon = 0

export function HoursSection() {
  const { t } = useLanguage()

  return (
    <section id="hodiny" className="bg-primary/10 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col justify-center gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
            <Clock className="h-4 w-4" />
            {t.hours.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground text-balance md:text-5xl">
            {t.hours.title}
          </h2>
          <p className="max-w-md text-lg text-muted-foreground text-pretty">
            {t.hours.descPre}
            <strong className="text-foreground">{t.hours.descBold}</strong>
            {t.hours.descPost}
          </p>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-sm">
          <ul className="divide-y divide-border">
            {t.hours.days.map((day, i) => (
              <li
                key={day}
                className={`flex items-center justify-between rounded-xl px-3 py-3 ${
                  i === dayIndex ? "bg-secondary" : ""
                }`}
              >
                <span className="flex items-center gap-2 font-semibold text-foreground">
                  {day}
                  {i === dayIndex && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      {t.hours.today}
                    </span>
                  )}
                </span>
                <span className="font-bold text-primary">{t.hours.range}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
