import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import '@/styles/globals.scss'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Las Paces — Psicología Social y Derechos Humanos',
    template: '%s | Las Paces',
  },
  description:
    'Consultoría especializada en atención psicosocial, derechos humanos y construcción de paz. 19 años de experiencia en Colombia y México.',
  keywords: [
    'psicología social',
    'derechos humanos',
    'atención psicosocial',
    'daño psicosocial',
    'construcción de paz',
    'Colombia',
    'México',
    'Lina Rondón Daza',
  ],
  authors: [{ name: 'Lina Rondón Daza' }],
  creator: 'Las Paces',
  publisher: 'Las Paces',
  metadataBase: new URL('https://laspaces.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://laspaces.co',
    siteName: 'Las Paces',
    title: 'Las Paces — Psicología Social y Derechos Humanos',
    description:
      'Consultoría especializada en atención psicosocial, derechos humanos y construcción de paz.',
    images: [
      {
        url: '/images/back-hero.png',
        width: 1200,
        height: 630,
        alt: 'Las Paces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Paces — Psicología Social y Derechos Humanos',
    description:
      'Consultoría especializada en atención psicosocial, derechos humanos y construcción de paz.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
