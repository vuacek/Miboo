"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const MAPS_QUERY = encodeURIComponent("Husova 8, Praha 1, Česko")

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-0.5" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { t } = useLanguage()

  return (
    <section id="recenze" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            {t.reviews.eyebrow}
          </span>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
            <span className="font-display text-5xl font-bold text-foreground">
              4,8
            </span>
            <div className="flex flex-col items-start">
              <Stars rating={5} label={t.reviews.starsLabel(5)} />
              <span className="mt-1 text-sm text-muted-foreground">
                {t.reviews.ratingSuffix}
              </span>
            </div>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground text-balance md:text-5xl">
            {t.reviews.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <Stars rating={review.rating} label={t.reviews.starsLabel(review.rating)} />
              <blockquote className="flex-1 leading-relaxed text-foreground text-pretty">
                {`"${review.text}"`}
              </blockquote>
              <figcaption className="font-bold text-muted-foreground">
                — {review.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-6 py-3 font-bold text-foreground transition-colors hover:border-primary"
          >
            {t.reviews.seeAll}
          </a>
        </div>
      </div>
    </section>
  )
}
