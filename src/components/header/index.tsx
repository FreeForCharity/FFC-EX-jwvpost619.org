'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import { assetPath } from '@/lib/assetPath'

interface MenuItem {
  label: string
  path: string
  external?: boolean
}

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Who We Are', path: '/who-we-are' },
  { label: 'Contact', path: '/contact' },
  {
    label: 'Resources',
    path: 'http://jwvusa-my.sharepoint.com/:x:/r/personal/mharrison_jwv_org/_layouts/15/doc.aspx?sourcedoc=%7b3306b438-2fed-44a7-8cb4-5d8ad7e30be2%7d&file=post%20619%20roster.xlsx&action=default&mobileredirect=true',
    external: true,
  },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' || pathname === ''
    return pathname.startsWith(path)
  }

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'h-[55px]' : 'h-[80px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex items-center px-2 transition-all duration-300">
            {/* Logo */}
            <div
              className={`transition-all duration-300 flex-shrink-0 ${isScrolled ? 'w-[40px]' : 'w-[55px]'}`}
            >
              <Link href="/" onClick={handleLinkClick} className="block">
                <img
                  src={assetPath('/Images/jwv/jwv-emblem.jpg')}
                  alt="JWV Post 619"
                  className={`rounded transition-all duration-300 ${isScrolled ? 'h-9 w-9' : 'h-12 w-12'}`}
                />
              </Link>
            </div>

            <div className="flex items-center justify-end w-full">
              {/* Desktop Menu */}
              <nav className="hidden lg:block transition-all duration-300">
                <ul className="flex items-center space-x-1 font-semibold">
                  {menuItems.map((item) => (
                    <li key={item.path} className="relative py-6">
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 text-sm transition-colors duration-200 rounded text-[#535859] hover:text-[#1d3557]"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={handleLinkClick}
                          className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 rounded ${
                            isActive(item.path)
                              ? 'text-[#1d3557] border-b-2 border-[#9d8741]'
                              : 'text-[#535859] hover:text-[#1d3557]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#535859] hover:text-[#1d3557]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[53px]' : 'top-[77px]'
            }`}
          >
            <div className="max-w-[700px] mx-auto px-6 py-4 bg-white border-t-2 border-[#9d8741] shadow-md max-h-[80vh] overflow-auto">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#535859] hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 rounded-lg text-sm font-semibold ${
                          isActive(item.path)
                            ? 'bg-[#b5d8ee]/30 text-[#1d3557]'
                            : 'text-[#535859] hover:bg-gray-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
