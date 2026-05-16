import { motion } from 'framer-motion'
import { ROUTES } from '../../constants'

export default function HeroBanner() {
  return (
    <section className="hero">
      {/* Fondos */}
      <div className="hero-bg-gradient" />
      <div className="hero-stripes" />
      <div className="hero-overlay" />

      {/* Contenido */}
      <div className="hero-content">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-eyebrow">
            El panal desde 2013
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title"
        >
          ABEJAS
          <br />
          <span className="hero-title-accent">FC</span>
        </motion.h1>

        {/* Cita + autor */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="hero-subtitle"
        >
          "Las abejas no saben de aerodinámica… Y vuelan."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="hero-author"
        >
          — Nacho de la Rosa, 2023
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hero-actions"
        >
          <a href={ROUTES.TIMELINE} className="btn btn-gold">
            La historia completa →
          </a>
          <a href={ROUTES.CHRONICLES} className="btn btn-outline-gold">
            Leer crónicas
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hero-scroll-indicator"
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
