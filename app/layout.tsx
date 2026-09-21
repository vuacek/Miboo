import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Baloo_2({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Miboo — Bubble Tea, Praha 1',
  description:
    'Miboo — bubble tea, mléčné čaje, matcha, káva a smoothie v srdci Prahy. Husova 8, Praha 1. Otevřeno každý den 10:00–22:00.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#7fd1c1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`light bg-background ${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
