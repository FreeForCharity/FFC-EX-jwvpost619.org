import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events & Calendar',
  description:
    'View upcoming events, monthly meetings, and community programs for Jewish War Veterans Post 619 in Sun Lakes and Chandler, Arizona.',
}

export default function EventsPage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container reveal">
          <p className="eyebrow">Post 619 Events</p>
          <h2>
            Stay Connected.
            <br />
            <span>Never Miss a Meeting.</span>
          </h2>
          <p>
            Browse our live calendar for upcoming monthly breakfasts, Veterans Affairs programs,
            social luncheons, and volunteer events. All events are free and open to veterans,
            families, and friends of the community.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact/">
              Get Involved
            </Link>
            <Link className="button secondary" href="/who-we-are/">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Upcoming Events</h2>
          <p className="section-subtitle reveal">
            Our calendar is updated regularly. All events are free and held in the Sun Lakes and
            Chandler, Arizona area.
          </p>

          <div className="card reveal" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '75%',
                minHeight: '400px',
              }}
            >
              <iframe
                title="Jewish War Veterans Post 619 Events Calendar"
                src="https://calendar.google.com/calendar/embed?src=cdr%40jewishwarveteranspost619.com&ctz=America%2FPhoenix"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  borderRadius: '8px',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Recurring Programs</h2>
          <p className="section-subtitle reveal">
            These events happen on a regular schedule throughout the year.
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

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h3>Questions About an Event?</h3>
              <p>
                Contact us directly for meeting details, directions, or to confirm event dates
                before you visit.
              </p>
            </div>
            <div className="cta-actions">
              <a className="button gold" href="tel:+16038180115">
                Call (603) 818-0115
              </a>
              <Link className="button secondary" href="/contact/">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
