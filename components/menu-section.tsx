"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function MenuSection() {
  const { t } = useLanguage()

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          {t.menu.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-4xl font-bold text-foreground text-balance md:text-5xl">
          {t.menu.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-pretty">
          {t.menu.subtitle}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {t.menu.categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-4 border-b border-border p-5">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={72}
                height={72}
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  {category.note && (
                    <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                      {category.note}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.tagline}
                </p>
              </div>
            </div>

            <ul className="divide-y divide-border">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 px-5 py-3"
                >
                  <span className="min-w-0 font-semibold text-foreground">
                    {item.name}
                    {item.note && (
                      <span className="ml-2 text-xs font-normal text-muted-foreground">
                        {item.note}
                      </span>
                    )}
                  </span>
                  {item.priceM ? (
                    <span className="flex shrink-0 items-center gap-3 text-sm">
                      <span className="flex items-center gap-1">
                        <span className="text-xs font-bold text-muted-foreground">
                          {t.menu.sizeM}
                        </span>
                        <span className="font-bold text-primary">
                          {item.priceM}
                        </span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-xs font-bold text-muted-foreground">
                          {t.menu.sizeL}
                        </span>
                        <span className="font-bold text-primary">
                          {item.priceL}
                        </span>
                      </span>
                    </span>
                  ) : (
                    <span className="shrink-0 font-bold text-primary">
                      {item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        {t.menu.milkNote}
      </p>
    </section>
  )
}
