import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Learn about the volunteers and mission behind Jewish War Veterans Post 619 in Sun Lakes, Arizona.',
}

export default function WhoWeArePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Who We Are</p>
            <h2>
              Proud Americans.
              <br />
              <span>Dedicated to Fellow Veterans.</span>
            </h2>
            <p>
              Post 619 is a volunteer-led chapter committed to restoring dignity and confidence to
              those who served. Through service projects, fundraising, and social connection, we
              help veterans feel seen, respected, and supported.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/contact/">
                Volunteer With Us
              </Link>
              <a className="button secondary" href="mailto:admin@jwvpost619.org">
                Ask About Membership
              </a>
            </div>
          </div>

          <div className="hero-media reveal">
            <div className="hero-photo">
              <img
                src={assetPath('/assets/images/manahouse-volunteers.jpg')}
                alt="JWV Post 619 members volunteering at a community event"
              />
            </div>
            <div className="hero-stamp">
              <img
                src={assetPath('/assets/images/jwv-emblem-192.webp')}
                width={38}
                height={38}
                alt="JWV emblem"
              />
              <p>Our work combines practical support, fellowship, and strong local partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="card reveal">
            <h3>What We Stand For</h3>
            <p>
              We are a passionate group that supports hospitalized and homeless veterans, organizes
              social events such as pizza parties and Thanksgiving luncheons, and creates
              opportunities for fellowship across the veteran community.
            </p>
            <p>
              Our chapter welcomes all who believe in honoring service and strengthening veteran
              well-being.
            </p>
          </article>

          <article className="card reveal">
            <h3>How We Serve</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Fundraising and Resource Support</h4>
                <p>
                  We raise funds and partner with organizations to deliver needed support for
                  veterans and families.
                </p>
              </div>
              <div className="timeline-item">
                <h4>Facility Improvements</h4>
                <p>
                  Our teams refurbish veterans facility rooms to improve comfort, dignity, and
                  quality of care.
                </p>
              </div>
              <div className="timeline-item">
                <h4>Community Events</h4>
                <p>
                  We host gatherings that build relationships and reduce isolation among veterans
                  and supporters.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Highlighted Accomplishments</h2>
          <p className="section-subtitle reveal">
            Milestones that reflect our commitment to meaningful local impact.
          </p>

          <div className="timeline" style={{ marginTop: '1.25rem' }}>
            <div className="timeline-item reveal">
              <h4>2023 - Community Impact Award</h4>
              <p>
                For donating a six-passenger golf cart to the Veterans Hospital Southeast Clinic in
                Gilbert.
              </p>
            </div>
            <div className="timeline-item reveal">
              <h4>2022 - Veteran Support Excellence</h4>
              <p>
                For partnerships with Phoenix Veterans Hospital and MANA House that expanded support
                programs.
              </p>
            </div>
            <div className="timeline-item reveal">
              <h4>2021 - Outstanding Volunteer Service</h4>
              <p>
                For consistent support at Arizona StandDown and patient room refurbishing projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">In the Community</h2>
          <p className="section-subtitle reveal">
            A visual look at the teamwork and service behind Post 619.
          </p>

          <div className="gallery" style={{ marginTop: '1.2rem' }}>
            <figure className="reveal">
              <img
                src={assetPath('/assets/images/veterans-helping-veterans.jpg')}
                alt="Group of veterans and volunteers at a JWV Post 619 outreach event"
              />
              <figcaption>Post 619 members and supporters in active community service.</figcaption>
            </figure>
            <figure className="reveal">
              <img
                src={assetPath('/assets/images/manahouse-volunteers.jpg')}
                alt="Volunteers from JWV Post 619 at a service location"
              />
              <figcaption>
                Collaboration with local organizations to serve veterans with dignity.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h3>Join Post 619 and Make a Difference</h3>
              <p>
                Your time, voice, and support help bring honor and practical assistance to veterans
                in our community.
              </p>
            </div>
            <Link className="button gold" href="/contact/#donate">
              Donate or Join
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
