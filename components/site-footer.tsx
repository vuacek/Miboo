"use client"

import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { InstagramIcon } from "@/components/icons/instagram"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-display text-2xl font-black text-foreground">
            Miboo
          </span>
          <p className="max-w-xs text-sm text-muted-foreground text-pretty">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">
            {t.footer.contactTitle}
          </h3>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {t.hero.address}
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            {t.hero.hoursShort}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">
            {t.footer.menuTitle}
          </h3>
          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            {t.footer.menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Miboo. {t.footer.rights}
          </p>
          <Link
            href="https://www.instagram.com/mibooprague"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <InstagramIcon className="h-4 w-4" />
            @mibooprague
          </Link>
        </div>
      </div>
    </footer>
  )
}
