import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../constants'
import { useLocation, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MainLayout({ children }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="grain min-h-screen flex flex-col bg-void">
      {/* ─── NAVBAR ─── */}
      <nav
        className={`navbar-glass fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'navbar-glass scrolled' : ''
        }`}
      >
        <div className="container flex items-center justify-between h-[68px]">
          {/* Brand */}
          <a href="/" className="navbar-brand group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
              <img 
                src="/src/assets/logos/logo_insitucional.jpg" 
                alt="Abejas FC" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="navbar-title group-hover:text-honey-300">
              ABEJAS FC
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, path }) => {
              const active = pathname === path || (path !== '/' && pathname.startsWith(path))
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={`nav-link${active ? ' nav-link-active' : ''}`}
                >
                  {label}
                </NavLink>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-pitch-200 hover:text-honey-300 transition-colors p-2"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="lg:hidden overflow-hidden bg-void/97 backdrop-blur-xl border-t border-pitch-600/40"
            >
              <div className="px-5 py-6 space-y-1">
                {NAV_ITEMS.map(({ label, path }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'bg-honey-300/10 text-honey-300'
                          : 'text-pitch-200 hover:text-pitch-50 hover:bg-pitch-600/25'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── MAIN ─── */}
      <main className="flex-1 pt-[80px] md:pt-[90px]">
        <div className="">
          {children}
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer relative">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img 
                  src="/src/assets/logos/logo_insitucional.jpg" 
                  alt="Abejas FC" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="footer-brand-name">ABEJAS FC</p>
                <p className="footer-tagline">El documental interactivo de un equipo que no debería existir</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="footer-quote text-center md:text-right max-w-xs">
              "Las abejas no saben de aerodinámica… Y vuelan."
            </blockquote>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-pitch-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-pitch-400 text-xs tracking-wide">
              © 2024 Abejas FC. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              {NAV_ITEMS.filter(n => n.path !== '/').slice(0, 4).map(n => (
                <NavLink
                  key={n.path}
                  to={n.path}
                  className="text-pitch-400 hover:text-honey-300 text-xs tracking-widest uppercase transition-colors"
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
