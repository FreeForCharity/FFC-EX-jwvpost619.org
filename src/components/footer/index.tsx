'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-[#1d3557] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-4 px-4 sm:px-0">
          <h3 className="text-2xl font-bold text-[#9d8741]">Copper State JWV Post 619</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Supporting veterans and their families in the greater Phoenix area through advocacy,
            social events, and community service.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.facebook.com/groups/471639085511224"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#9d8741] p-2 rounded-full hover:bg-[#b5982e] transition-colors"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 px-4 sm:px-0">
          <h3 className="text-2xl font-bold text-[#9d8741]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Home', href: '/' },
              { name: 'Who We Are', href: '/who-we-are' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#9d8741] transition-colors text-gray-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <h4 className="text-lg font-semibold text-[#9d8741] mb-2">Policies</h4>
            <ul className="space-y-1 text-sm">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#9d8741] transition-colors text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-4 px-4 sm:px-0">
          <h3 className="text-2xl font-bold text-[#9d8741]">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#9d8741] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:6038180115"
                  className="text-gray-300 hover:text-[#9d8741] transition-colors"
                >
                  (603) 818-0115
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#9d8741] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:jwvpost619@gmail.com"
                  className="text-gray-300 hover:text-[#9d8741] transition-colors break-all"
                >
                  jwvpost619@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#9d8741] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mailing Address</p>
                <p className="text-gray-300">
                  PO Box 13113
                  <br />
                  Chandler, AZ 85246
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 border-t border-white/20 text-center text-sm text-gray-400">
        <p>
          &copy; {currentYear} Copper State JWV Post 619. A project of{' '}
          <a
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#b5d8ee] hover:text-white transition-colors"
          >
            Free For Charity
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
