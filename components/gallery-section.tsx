"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const photos = [
  { src: "/images/gallery-1.png", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.png", span: "" },
  { src: "/images/gallery-3.png", span: "" },
  { src: "/images/gallery-4.png", span: "" },
  { src: "/images/gallery-5.png", span: "" },
  { src: "/images/gallery-6.png", span: "md:col-span-2" },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="galerie" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            {t.gallery.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground text-balance md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="max-w-xl text-muted-foreground text-pretty">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${photo.span}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={t.gallery.alts[i]}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
