import React from 'react'
import type { Metadata } from 'next'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Learn about JWV Post 619 — our mission, accomplishments, services, and events for veterans in the greater Phoenix area.',
}

const accomplishments = [
  'Partnered with MANA House to provide transitional housing for homeless veterans',
  'Completed multiple room renovations at veteran housing facilities',
  'Hosted annual Stand Down events providing direct support to veterans in need',
  'Organized monthly breakfast meetings with Veterans Affairs programming',
  'Provided social luncheons for Thanksgiving and graduation celebrations',
  'Advocated for veteran rights and benefits at the state and local level',
  'Built a strong coalition of volunteers dedicated to veteran support',
  'Connected veterans with essential services and community resources',
]

const services = [
  {
    title: 'Social Events',
    description:
      'We organize regular social gatherings including monthly breakfasts, holiday luncheons, and community celebrations that help veterans and their families build lasting connections.',
  },
  {
    title: 'Room Renovations',
    description:
      'Our volunteers renovate rooms at veteran housing facilities, creating comfortable and dignified living spaces for veterans transitioning out of homelessness.',
  },
  {
    title: 'Veteran Support',
    description:
      'Through advocacy, partnerships, and direct service, we connect veterans with the resources and support they need to thrive in their communities.',
  },
]

const events = [
  {
    title: 'Monthly Breakfast Meeting',
    schedule: 'Third Sunday, September through June',
    description:
      'Join us for a morning of fellowship, food, and discussion. Each meeting includes a Veterans Affairs program to keep our members informed about important veteran issues and resources.',
    image: '/Images/jwv/fb-group-photo.jpg',
    imageAlt: 'JWV Post 619 members at a breakfast meeting',
  },
  {
    title: 'Veterans Affairs Program',
    schedule: 'Every Third Sunday at 10:00 AM',
    description:
      'Educational presentations and discussions about veteran benefits, healthcare, and advocacy. Open to all members and guests interested in veteran affairs.',
    image: '/Images/jwv/jwv-event.jpg',
    imageAlt: 'Veterans Affairs program presentation',
  },
  {
    title: 'Social Luncheon',
    schedule: 'Thanksgiving & Graduation',
    description:
      'Special luncheon events celebrating holidays and milestones. These gatherings bring together our members and their families for food, friendship, and celebration.',
    image: '/Images/jwv/social-luncheon.jpg',
    imageAlt: 'Social luncheon event',
  },
  {
    title: 'Stand Down Volunteer Day',
    schedule: 'Annually',
    description:
      'Our annual Stand Down event brings together volunteers and community partners to provide direct services to veterans in need, including food, clothing, health screenings, and referrals.',
    image: '/Images/jwv/stand-down.jpg',
    imageAlt: 'Stand Down volunteer event for veterans',
  },
]

export default function WhoWeArePage() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-[#1d3557] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-lg md:text-xl text-[#b5d8ee] max-w-3xl mx-auto">
            JWV Post 619, Copper State Post, is dedicated to honoring the service and sacrifice of
            Jewish war veterans while supporting all veterans and their families in the greater
            Phoenix area.
          </p>
        </div>
      </section>

      {/* Mission Description */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6">Our Mission</h2>
              <p className="text-[#535859] leading-relaxed mb-4">
                Copper State JWV Post 619 was established to serve the veteran community in
                Arizona&apos;s East Valley. As a post of the Jewish War Veterans of the United
                States of America, we carry forward the tradition of service, advocacy, and
                camaraderie that has defined the JWV since 1896.
              </p>
              <p className="text-[#535859] leading-relaxed mb-4">
                Our mission is to provide meaningful support to veterans through social engagement,
                community partnerships, and direct service. We believe that every veteran deserves
                dignity, community, and access to the resources they need to live fulfilling lives
                after service.
              </p>
              <p className="text-[#535859] leading-relaxed">
                From room renovations at MANA House to monthly breakfast meetings and annual Stand
                Down events, Post 619 is committed to making a tangible difference in the lives of
                veterans and their families.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={assetPath('/Images/jwv/jwv-event3.jpg')}
                alt="JWV Post 619 event with members and volunteers"
                className="rounded-lg shadow-lg w-full"
                width={2048}
                height={1536}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-16 md:py-20 bg-[#eeefee]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] text-center mb-4">
            Our Accomplishments
          </h2>
          <p className="text-center text-[#535859] mb-12 max-w-2xl mx-auto">
            Highlights from 2021–2023 and our ongoing commitment to veterans
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accomplishments.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-[#9d8741] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-[#535859]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#eeefee] rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1d3557] mb-4">{service.title}</h3>
                <p className="text-[#535859] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-20 bg-[#eeefee]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] text-center mb-12">
            Events
          </h2>
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1">
                  <img
                    src={assetPath(event.image)}
                    alt={event.imageAlt}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1d3557] mb-2">{event.title}</h3>
                  <p className="text-[#9d8741] font-semibold mb-4">{event.schedule}</p>
                  <p className="text-[#535859] leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-20 bg-[#1d3557] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-[#b5d8ee] text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to attend an event, volunteer your time, or become a member, we welcome
            you to be part of our mission to support veterans.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#9d8741] text-white px-8 py-3 rounded font-semibold hover:bg-[#b5982e] transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </main>
  )
}
