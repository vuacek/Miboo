import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { HoursSection } from "@/components/hours-section"
import { LocationSection } from "@/components/location-section"
import { ReviewsSection } from "@/components/reviews-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <SiteHeader />
        <Hero />
        <MenuSection />
        <GallerySection />
        <HoursSection />
        <LocationSection />
        <ReviewsSection />
        <SiteFooter />
      </main>
    </LanguageProvider>
  )
}
