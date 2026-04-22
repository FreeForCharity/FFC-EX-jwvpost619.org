'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const revealTargets = document.querySelectorAll<Element>('.reveal')
    if (!revealTargets.length) return

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.18 }
      )
      revealTargets.forEach((target) => observer.observe(target))
      return () => observer.disconnect()
    } else {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
    }
  }, [pathname])

  return null
}
