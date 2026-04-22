import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://freeforcharity.github.io/FFC-EX-jwvpost619.org'),
  title: {
    default: 'Jewish War Veterans Post 619 | Supporting Our Heroes',
    template: '%s | JWV Post 619',
  },
  description:
    'Jewish War Veterans Post 619 supports veterans and their families through advocacy, volunteer service, and community programs in Sun Lakes and Chandler, Arizona.',
  keywords: [
    'JWV',
    'Jewish War Veterans',
    'Post 619',
    'veterans',
    'Arizona',
    'Sun Lakes',
    'Chandler',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: `${basePath}/assets/images/jwv-emblem.jpg` }],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={`${basePath}/assets/images/jwv-emblem.jpg`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/styles.css`} />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="site-shell">
          <span className="page-ornament top" aria-hidden="true" />
          <span className="page-ornament mid" aria-hidden="true" />

          <header className="site-header">
            <div className="container nav-inner">
              <Link className="brand" href="/" aria-label="JWV Post 619 home">
                <img
                  className="brand-mark"
                  src={`${basePath}/assets/images/jwv-emblem-192.webp`}
                  width={45}
                  height={45}
                  alt="Jewish War Veterans Post 619 emblem"
                />
                <div>
                  <h1>Jewish War Veterans Post 619</h1>
                  <p>Sun Lakes, Arizona</p>
                </div>
              </Link>
              <button
                className="nav-toggle"
                aria-expanded="false"
                aria-controls="site-nav"
                data-nav-toggle=""
              >
                Menu
              </button>
              <nav id="site-nav" className="nav-panel" data-nav-panel="">
                <div className="nav-links">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                  <Link className="nav-link" href="/who-we-are/">
                    Who We Are
                  </Link>
                  <Link className="nav-link" href="/contact/">
                    Contact
                  </Link>
                  <Link className="header-cta" href="/contact/#donate">
                    Donate
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {children}

          <footer className="site-footer">
            <div className="container footer-grid">
              <div>
                <h3>Jewish War Veterans Post 619</h3>
                <p>
                  Supporting veterans through service, advocacy, and community-building across Sun
                  Lakes and Chandler, Arizona.
                </p>
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  <strong>Phone:</strong> (603) 818-0115
                </p>
                <p>
                  <strong>Email:</strong> admin@jwvpost619.org
                </p>
                <p>
                  <strong>Mailing:</strong> P.O. Box 13113, Chandler, AZ 85246
                </p>
              </div>
              <div>
                <h3>Meeting Locations</h3>
                <p>
                  <strong>9532 E Riggs Rd</strong>
                  <br />
                  Chandler, AZ 85248-7463
                </p>
                <p>
                  <strong>24218 S Oakwood Blvd</strong>
                  <br />
                  Sun Lakes, AZ 85248
                </p>
              </div>
            </div>
            <div className="container footer-bottom">
              <span>
                Jewish War Veterans of the USA is a 501(c)(4) nonprofit organization following rules
                for war veteran organizations as defined by IRC 170(c)(3).
              </span>
              <span>
                &copy; {new Date().getFullYear()} Jewish War Veterans Post 619, Sun Lakes, Arizona
              </span>
            </div>
          </footer>
        </div>

        <Script src={`${basePath}/assets/js/site.js`} strategy="lazyOnload" />
      </body>
    </html>
  )
}
