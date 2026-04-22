import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Jewish War Veterans Post 619 supports veterans and their families through advocacy, volunteer service, and community programs in Sun Lakes and Chandler, Arizona.',
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Honor Through Service</p>
            <h2>
              Supporting Our Heroes.
              <br />
              <span>Building Stronger Futures.</span>
            </h2>
            <p>
              Post 619 is a passionate volunteer community committed to veterans and their families.
              We advocate, serve, and create meaningful moments of dignity and connection for those
              who served our nation.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/who-we-are/">
                Explore Our Mission
              </Link>
              <Link className="button secondary" href="/contact/">
                Get Involved
              </Link>
            </div>
          </div>

          <div className="hero-media reveal">
            <div className="hero-photo">
              <img
                src={assetPath('/assets/images/veterans-helping-veterans.jpg')}
                alt="JWV Post 619 volunteers supporting veterans in the community"
              />
            </div>
            <div className="hero-stamp">
              <img
                src={assetPath('/assets/images/jwv-emblem-192.webp')}
                width={38}
                height={38}
                alt="JWV emblem"
              />
              <p>
                Serving veterans with respect, practical support, and year-round community action.
              </p>
            </div>
          </div>
        </div>

        <div className="container info-ribbon reveal">
          <div className="ribbon-grid">
            <div className="ribbon-item">
              <span className="ribbon-label">Phone</span>
              <a className="ribbon-value" href="tel:+16038180115">
                (603) 818-0115
              </a>
            </div>
            <div className="ribbon-item">
              <span className="ribbon-label">Email</span>
              <a className="ribbon-value" href="mailto:admin@jwvpost619.org">
                admin@jwvpost619.org
              </a>
            </div>
            <div className="ribbon-item">
              <span className="ribbon-label">Mailing Address</span>
              <span className="ribbon-value">P.O. Box 13113, Chandler, AZ 85246</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="card reveal">
            <h3>Our Mission</h3>
            <p>
              We support hospitalized and homeless veterans through direct service, fundraising,
              social gatherings, and partnerships with local veteran organizations. Our doors are
              open to all, regardless of religion, race, or creed.
            </p>
            <div className="stat-grid">
              <div className="stat">
                <strong>2021-2023</strong>
                <span>Recognized years of service and impact</span>
              </div>
              <div className="stat">
                <strong>3 Core Programs</strong>
                <span>Community support, social events, and facility improvements</span>
              </div>
              <div className="stat">
                <strong>100% Volunteer</strong>
                <span>Members giving time and skill to veterans</span>
              </div>
            </div>
          </article>

          <article className="card reveal">
            <h3>Recent Accomplishments</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>2023 - Community Impact Award</h4>
                <p>
                  Recognized for donating a six-passenger golf cart to the Veterans Hospital
                  Southeast Clinic in Gilbert.
                </p>
              </div>
              <div className="timeline-item">
                <h4>2022 - Veteran Support Excellence</h4>
                <p>
                  Awarded for partnerships with Phoenix Veterans Hospital and MANA House to
                  strengthen support services.
                </p>
              </div>
              <div className="timeline-item">
                <h4>2021 - Outstanding Volunteer Service</h4>
                <p>
                  Honored for support at Arizona StandDown and refurbishing patient rooms at
                  veterans facilities.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Dedicated Services for Veterans and Families</h2>
          <p className="section-subtitle reveal">
            Every program is built around restoring dignity, strengthening community ties, and
            making sure no veteran is left unsupported.
          </p>

          <div className="grid-three" style={{ marginTop: '1.2rem' }}>
            <article className="program reveal">
              <h3>Social Gatherings</h3>
              <p>
                We host welcoming events with food and fellowship to build camaraderie and support
                among veterans and families.
              </p>
            </article>
            <article className="program reveal">
              <h3>Refurbished Patient Rooms</h3>
              <p>
                Our volunteers renovate patient spaces at veterans facilities to provide comfort and
                renewed dignity.
              </p>
            </article>
            <article className="program reveal">
              <h3>Community Support</h3>
              <p>
                Through fundraising and hands-on service, we help veterans transition to a stronger
                civilian life.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Where, Why, and When</h2>
          <p className="section-subtitle reveal">
            Programs and gatherings that keep our veteran community connected year-round.
          </p>

          <div className="event-board">
            <article className="event-card reveal">
              <h3>Monthly Breakfast Meeting</h3>
              <p>Third Sunday, September through June.</p>
              <span>Free</span>
            </article>
            <article className="event-card reveal">
              <h3>Veterans Affairs Program</h3>
              <p>Every third Sunday at 10:00 AM.</p>
              <span>Free</span>
            </article>
            <article className="event-card reveal">
              <h3>Social Luncheon</h3>
              <p>Thanksgiving and graduation celebrations.</p>
              <span>Free</span>
            </article>
            <article className="event-card reveal">
              <h3>Stand Down Volunteer Day</h3>
              <p>Annual event supporting veterans statewide.</p>
              <span>Free</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="donate">
        <div className="container">
          <h2 className="section-title reveal">Donate to Sustain Post 619</h2>
          <p className="section-subtitle reveal">
            Your support keeps veteran assistance programs, events, and outreach active all year.
          </p>

          <div className="donation-wrap">
            <article className="donation-card reveal">
              <h3>Fastest Way to Give: Zelle</h3>
              <p>
                Use the secure Zelle link or scan the QR code to donate directly from your banking
                app.
              </p>
              <ul className="donation-list">
                <li>
                  <strong>Recipient:</strong> COPPER STATE POST 619
                </li>
                <li>
                  <strong>Zelle Token:</strong> jwvpost619az@gmail.com (search this in Zelle)
                </li>
                <li>
                  <strong>Purpose:</strong> Veteran support programs, events, and direct assistance.
                </li>
              </ul>
              <div className="payment-links">
                <a
                  className="button zelle"
                  href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiQ09QUEVSIFNUQVRFIFBPU1QgNjE5IiwidG9rZW4iOiJqd3Zwb3N0NjE5YXpAZ21haWwuY29tIiwiYWN0aW9uIjoicGF5bWVudCJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Zelle Donate Link
                </a>
                <a
                  className="button secondary"
                  href="mailto:admin@jwvpost619.org?subject=JWV%20Post%20619%20Donation%20Question"
                >
                  Ask Donation Questions
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

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Need details about volunteering, membership, or services? Start here, then contact us
              for anything else.
            </p>
            <div className="faq">
              <article className="faq-item">
                <button className="faq-question" type="button">
                  How can I contact JWV Post 619 for assistance?
                </button>
                <div className="faq-answer">
                  <p>
                    Call (603) 818-0115, email admin@jwvpost619.org, or use the contact page to
                    reach our team.
                  </p>
                </div>
              </article>
              <article className="faq-item">
                <button className="faq-question" type="button">
                  Can I volunteer with JWV Post 619?
                </button>
                <div className="faq-answer">
                  <p>
                    Yes. Volunteers are welcome and needed for events, outreach, and support
                    activities.
                  </p>
                </div>
              </article>
              <article className="faq-item">
                <button className="faq-question" type="button">
                  How do I become a member?
                </button>
                <div className="faq-answer">
                  <p>
                    Membership is open to veterans. Contact us directly and we will guide you
                    through the next steps.
                  </p>
                </div>
              </article>
              <article className="faq-item">
                <button className="faq-question" type="button">
                  Do you support non-Jewish veterans?
                </button>
                <div className="faq-answer">
                  <p>Yes. Our services and support are inclusive and open to all veterans.</p>
                </div>
              </article>
            </div>
          </div>

          <aside className="card reveal">
            <h3>Support Our Mission</h3>
            <p>
              Donations and volunteer support directly strengthen our programs for veterans and
              families. Zelle contributions are now available through our secure QR code and payment
              link.
            </p>
            <p>
              Contact us directly for receipts, partnership requests, and upcoming volunteer
              opportunities.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.2rem' }}>
              <a
                className="button gold"
                href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiQ09QUEVSIFNUQVRFIFBPU1QgNjE5IiwidG9rZW4iOiJqd3Zwb3N0NjE5YXpAZ21haWwuY29tIiwiYWN0aW9uIjoicGF5bWVudCJ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via Zelle
              </a>
              <Link className="button secondary" href="/contact/">
                Contact Team
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h3>Become Part of Post 619</h3>
              <p>
                Join our mission to restore dignity, confidence, and lasting support for every
                veteran we serve.
              </p>
            </div>
            <a
              className="button gold"
              href="mailto:admin@jwvpost619.org?subject=Membership%20Inquiry%20-%20JWV%20Post%20619"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
