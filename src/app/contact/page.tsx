import type { Metadata } from 'next'
import { assetPath } from '@/lib/assetPath'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jewish War Veterans Post 619 for membership, volunteering, donations, and community partnerships.',
}

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Contact Post 619</p>
            <h2>
              Connect With Our Team.
              <br />
              <span>Join the Mission.</span>
            </h2>
            <p>
              Reach out for membership, volunteer opportunities, partnership ideas, or donation
              support. Every message helps us serve veterans more effectively.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="tel:+16038180115">
                Call (603) 818-0115
              </a>
              <a className="button secondary" href="mailto:admin@jwvpost619.org">
                Email Us
              </a>
              <a className="button gold" href="#donate">
                Donate Now
              </a>
            </div>
          </div>

          <div className="hero-media reveal">
            <div className="hero-photo">
              <img
                src={assetPath('/assets/images/manahouse-volunteers.jpg')}
                alt="JWV Post 619 volunteers gathered in support of veterans"
              />
            </div>
            <div className="hero-stamp">
              <img
                src={assetPath('/assets/images/jwv-emblem-192.webp')}
                width={38}
                height={38}
                alt="JWV emblem"
              />
              <p>We welcome veterans, families, volunteers, and partner organizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Direct Contact Information</h2>
          <p className="section-subtitle reveal">
            Use whichever channel is easiest. We are ready to help.
          </p>

          <div className="contact-grid">
            <article className="contact-block reveal">
              <h3>Phone</h3>
              <p>
                <strong>
                  <a href="tel:+16038180115">(603) 818-0115</a>
                </strong>
              </p>
              <p>Call for assistance, volunteer interest, or membership inquiries.</p>
            </article>
            <article className="contact-block reveal">
              <h3>Email</h3>
              <p>
                <strong>
                  <a href="mailto:admin@jwvpost619.org">admin@jwvpost619.org</a>
                </strong>
              </p>
              <p>Best for partnership requests, donations, and general questions.</p>
            </article>
            <article className="contact-block reveal">
              <h3>Mailing Address</h3>
              <p>
                <strong>
                  P.O. Box 13113
                  <br />
                  Chandler, AZ 85246
                </strong>
              </p>
              <p>Donations and formal correspondence are accepted by mail.</p>
            </article>
          </div>

          <div className="split" style={{ marginTop: '1rem' }}>
            <article className="card reveal">
              <h3>Meeting Locations</h3>
              <p>
                <strong>Physical Address (meetings)</strong>
                <br />
                9532 E Riggs Rd, Chandler, AZ 85248-7463
              </p>
              <p>
                <strong>Additional listed location</strong>
                <br />
                24218 S Oakwood Blvd, Sun Lakes, AZ 85248
              </p>
              <p>Please contact us before visiting to confirm meeting dates and access details.</p>
            </article>

            <article className="card reveal">
              <h3>Map</h3>
              <iframe
                title="Map to 9532 E Riggs Rd, Chandler, Arizona"
                src="https://www.google.com/maps?q=9532+E+Riggs+Rd,+Chandler,+AZ+85248&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: '100%', minHeight: '260px', border: 0, borderRadius: '12px' }}
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="donate" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <h2 className="section-title reveal">Donate Securely With Zelle</h2>
          <p className="section-subtitle reveal">
            Scan the QR code or use the direct payment link to support veterans through Post 619.
          </p>

          <div className="donation-wrap">
            <article className="donation-card reveal">
              <h3>Donation Details</h3>
              <ul className="donation-list">
                <li>
                  <strong>Recipient:</strong> COPPER STATE POST 619
                </li>
                <li>
                  <strong>Zelle Token:</strong> jwvpost619az@gmail.com (search this in Zelle)
                </li>
                <li>
                  <strong>Mailing Option:</strong> P.O. Box 13113, Chandler, AZ 85246
                </li>
              </ul>
              <div className="payment-links">
                <a
                  className="button zelle"
                  href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiQ09QUEVSIFNUQVRFIFBPU1QgNjE5IiwidG9rZW4iOiJqd3Zwb3N0NjE5YXpAZ21haWwuY29tIiwiYWN0aW9uIjoicGF5bWVudCJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate With Zelle
                </a>
                <a
                  className="button secondary"
                  href="mailto:admin@jwvpost619.org?subject=JWV%20Post%20619%20Donation%20Receipt"
                >
                  Request Donation Receipt
                </a>
              </div>
            </article>

            <figure className="donation-flyer-card reveal" aria-label="Zelle donation flyer">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${basePath}/assets/images/donation-flyer-420-lossless.webp 420w, ${basePath}/assets/images/donation-flyer-840-lossless.webp 840w`}
                  sizes="(max-width: 620px) 88vw, 420px"
                />
                <source
                  type="image/png"
                  srcSet={`${basePath}/assets/images/donation-flyer-420.png 420w, ${basePath}/assets/images/donation-flyer-840.png 840w`}
                  sizes="(max-width: 620px) 88vw, 420px"
                />
                <img
                  className="donation-flyer-image"
                  src={assetPath('/assets/images/donation-flyer-420.png')}
                  width={420}
                  height={630}
                  loading="lazy"
                  decoding="async"
                  alt="Jewish War Veterans Post 619 donation flyer with integrated Zelle QR code"
                />
              </picture>
              <figcaption className="donation-flyer-note">
                Scan the flyer in your banking app, use the Zelle donation button, or search for{' '}
                <strong>jwvpost619az@gmail.com</strong> in Zelle.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <h2 className="section-title reveal">Send a Message</h2>
          <p className="section-subtitle reveal">
            This form opens your email app addressed to our team with your details prefilled.
          </p>

          <form className="contact-form reveal" data-contact-form="">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-group full">
                <label htmlFor="topic">Topic</label>
                <input
                  id="topic"
                  name="topic"
                  type="text"
                  placeholder="Membership, volunteering, donation, partnership..."
                  required
                />
              </div>

              <div className="form-group full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
            </div>

            <div className="hero-actions" style={{ marginTop: '1rem' }}>
              <button className="button primary" type="submit">
                Prepare Email
              </button>
              <a className="button secondary" href="mailto:admin@jwvpost619.org">
                Open Email Directly
              </a>
            </div>
            <p className="form-note">
              By contacting Post 619, you help us respond faster to veterans and community needs.
            </p>
          </form>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h3>Thank You for Supporting Veterans</h3>
              <p>
                Every call, email, and volunteer hour strengthens our mission to honor service and
                serve with purpose.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="button gold"
                href="mailto:admin@jwvpost619.org?subject=Volunteer%20-%20JWV%20Post%20619"
              >
                Volunteer Today
              </a>
              <a className="button secondary" href="#donate">
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
