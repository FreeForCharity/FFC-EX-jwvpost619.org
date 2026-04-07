import React from 'react'
import type { Metadata } from 'next'
import { assetPath } from '@/lib/assetPath'
import { contactFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with JWV Post 619. Phone: (603) 818-0115, Email: jwvpost619@gmail.com. Located in the Sun Lakes/Chandler, AZ area.',
}

export default function ContactPage() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-[#1d3557] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connecting Veterans and Community
              </h1>
              <p className="text-lg md:text-xl text-[#b5d8ee]">
                Welcome to JWV Post 619. We are here to help veterans and community members connect
                with the support and services they need.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={assetPath('/Images/jwv/coalition-volunteers.jpg')}
                alt="Coalition volunteers supporting veterans"
                className="rounded-lg shadow-lg w-full"
                width={1920}
                height={1694}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-[#eeefee] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#9d8741]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d3557] mb-2">Phone</h3>
              <a
                href="tel:6038180115"
                className="text-[#9d8741] font-semibold text-lg hover:underline"
              >
                (603) 818-0115
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#eeefee] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#9d8741]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d3557] mb-2">Email</h3>
              <a
                href="mailto:jwvpost619@gmail.com"
                className="text-[#9d8741] font-semibold text-lg hover:underline break-all"
              >
                jwvpost619@gmail.com
              </a>
            </div>

            {/* Mailing Address */}
            <div className="bg-[#eeefee] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#9d8741]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d3557] mb-2">Mailing Address</h3>
              <p className="text-[#535859]">
                PO Box 13113
                <br />
                Chandler, AZ 85246
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 bg-[#eeefee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6">Our Location</h2>
              <p className="text-[#535859] leading-relaxed mb-4">
                JWV Post 619 serves the Sun Lakes, Chandler, and greater Phoenix East Valley area.
                Our meetings and events are held at:
              </p>
              <address className="not-italic text-[#535859] leading-relaxed mb-4">
                <strong className="text-[#1d3557]">Physical Location:</strong>
                <br />
                24218 S Oakwood Blvd
                <br />
                Sun Lakes, AZ 85248
              </address>
              <address className="not-italic text-[#535859] leading-relaxed">
                <strong className="text-[#1d3557]">Mailing Address:</strong>
                <br />
                PO Box 13113
                <br />
                Chandler, AZ 85246
              </address>
            </div>
            <div className="flex-1">
              <img
                src={assetPath('/Images/jwv/location-map.jpg')}
                alt="Map showing the location of JWV Post 619 in Sun Lakes, Arizona"
                className="rounded-lg shadow-lg w-full"
                width={2048}
                height={1642}
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
            {contactFaqs.map((faq, index) => (
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

      {/* Get Involved CTA */}
      <section className="py-16 md:py-20 bg-[#1d3557] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved with JWV Post 619</h2>
          <p className="text-[#b5d8ee] text-lg mb-8 max-w-2xl mx-auto">
            Ready to make a difference? Whether you want to become a member, volunteer at our
            events, or simply learn more about what we do, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jwvpost619@gmail.com"
              className="inline-block bg-[#9d8741] text-white px-8 py-3 rounded font-semibold hover:bg-[#b5982e] transition-colors"
            >
              Email Us
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
