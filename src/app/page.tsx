import React from 'react'
import type { Metadata } from 'next'
import { assetPath } from '@/lib/assetPath'
import { homeFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Copper State JWV Post 619 — Supporting Our Heroes, Building Stronger Futures. Join us in making a difference for veterans.',
}

export default function HomePage() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-[#1d3557] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Supporting Our Heroes, Building Stronger Futures
            </h1>
            <p className="text-lg md:text-xl text-[#b5d8ee] mb-8">
              Join Us in Making a Difference for Veterans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/who-we-are"
                className="inline-block bg-[#9d8741] text-white px-8 py-3 rounded font-semibold hover:bg-[#b5982e] transition-colors text-center"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-[#9d8741] text-[#9d8741] px-8 py-3 rounded font-semibold hover:bg-[#9d8741] hover:text-white transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={assetPath('/Images/jwv/jwv-emblem.jpg')}
              alt="JWV Post 619 Emblem"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-[#9d8741]"
              width={256}
              height={256}
            />
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-16 md:py-20 bg-[#eeefee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6">
                Support Our Mission
              </h2>
              <p className="text-[#535859] leading-relaxed mb-4">
                JWV Post 619, also known as Copper State Post, is dedicated to supporting veterans
                and their families in the greater Phoenix area. Through partnerships with
                organizations like MANA House, we provide transitional housing support, room
                renovations, and essential services for homeless veterans.
              </p>
              <p className="text-[#535859] leading-relaxed">
                Our members volunteer their time and resources to ensure that every veteran has
                access to the support they need. From advocacy to social events, we are committed to
                building stronger futures for those who have served.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={assetPath('/Images/jwv/manahouse2024.jpg')}
                alt="MANA House — transitional housing for veterans"
                className="rounded-lg shadow-lg w-full"
                width={1080}
                height={720}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-[#1d3557]">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-[#9d8741] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 text-[#535859] leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-20 bg-[#eeefee]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6">Stay Connected</h2>
          <p className="text-[#535859] mb-8 text-lg">
            Follow us on Facebook to stay up to date with our latest events, news, and community
            activities.
          </p>
          <a
            href="https://www.facebook.com/groups/471639085511224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#166FE5] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Join Us on Facebook
          </a>
        </div>
      </section>

      {/* Join Our Mission CTA */}
      <section className="py-16 md:py-20 bg-[#1d3557] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
          <p className="text-[#b5d8ee] text-lg mb-8 max-w-2xl mx-auto">
            Whether you are a veteran looking for community, or a supporter wanting to make a
            difference, JWV Post 619 welcomes you. Together we can build stronger futures for those
            who served.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#9d8741] text-white px-8 py-3 rounded font-semibold hover:bg-[#b5982e] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:6038180115"
              className="inline-block border-2 border-[#9d8741] text-[#9d8741] px-8 py-3 rounded font-semibold hover:bg-[#9d8741] hover:text-white transition-colors"
            >
              Call (603) 818-0115
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
