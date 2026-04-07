import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { openSans, ebGaramond } from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://freeforcharity.github.io/FFC-EX-jwvpost619.org'),
  title: {
    default: 'JWV Post 619 | Copper State',
    template: '%s | JWV Post 619',
  },
  description:
    'Copper State JWV Post 619 supports veterans and their families in the greater Phoenix area through advocacy, social events, and community service.',
  keywords: [
    'JWV',
    'Jewish War Veterans',
    'Post 619',
    'veterans',
    'Arizona',
    'Sun Lakes',
    'Chandler',
    'veteran support',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    url: 'https://freeforcharity.github.io/FFC-EX-jwvpost619.org/',
    siteName: 'JWV Post 619',
    title: 'JWV Post 619 | Copper State',
    description:
      'Copper State JWV Post 619 supports veterans and their families in the greater Phoenix area.',
    images: [
      {
        url: 'Images/jwv/jwv-emblem.jpg',
        width: 512,
        height: 512,
        alt: 'JWV Post 619 Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWV Post 619 | Copper State',
    description:
      'Copper State JWV Post 619 supports veterans and their families in the greater Phoenix area.',
    images: ['Images/jwv/jwv-emblem.jpg'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/jwv/jwv-emblem.jpg`}
          fetchPriority="high"
        />

        <GoogleTagManager />
      </head>
      <body
        className={['antialiased', openSans.variable, ebGaramond.variable].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
