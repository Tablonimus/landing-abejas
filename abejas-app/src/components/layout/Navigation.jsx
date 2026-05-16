import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../constants'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'bg-void/95 backdrop-blur-lg border-b border-pitch-600/40' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐝</span>
          <span className="font-[Bebas_Neue] text-2xl tracking-[0.2em] text-pitch-100 hover:text-honey-200 transition-colors">ABEJAS FC</span>
        </a>

        <AnimatePresence>
          <div className="hidden md:flex items-center">
            {NAV_ITEMS.map(({ label, path }, i) => (
              <a
                key={path}
                href={path}
                style={{ animationDelay: `${i * 40}ms` }}
                className="motion-safe:hover:animate-fade-in relative ml-8 text-sm font-light tracking-wide text-pitch-300 transition-colors hover:text-honey-200"
              >
                {label}
              </a>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </nav>
  )
}
