"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setLang(t.toggle.next)}
      aria-label={
        lang === "cs" ? "Switch to English" : "Přepnout do češtiny"
      }
      className="inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-card px-3 py-1.5 text-sm font-bold text-foreground transition-colors hover:border-primary"
    >
      <Globe className="h-4 w-4 text-primary" />
      {t.toggle.label}
    </button>
  )
}
