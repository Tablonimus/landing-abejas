import { useState } from 'react'
import { motion } from 'framer-motion'

export default function QuoteCarousel({ quotes }) {
  const [current, setCurrent] = useState(0)
  const quote = quotes[current]

  const next = () => setCurrent((c) => (c + 1) % quotes.length)
  const prev = () => setCurrent((c) => (c - 1 + quotes.length) % quotes.length)

  return (
    <section className="relative py-32 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(250,204,21,0.06),transparent)]" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <motion.blockquote
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="font-editorial text-2xl md:text-4xl text-pitch-100 italic leading-relaxed">
            "{quote.text}"
          </p>
          <footer className="mt-8 font-typewriter text-honey-300 text-sm tracking-wide">
            — {quote.author}
          </footer>
        </motion.blockquote>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-honey-300 w-8' : 'bg-pitch-500 hover:bg-pitch-300'
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="hidden absolute left-0 top-1/2 -translate-y-1/2 text-pitch-400 hover:text-honey-300 transition-colors"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          onClick={next}
          className="hidden absolute right-0 top-1/2 -translate-y-1/2 text-pitch-400 hover:text-honey-300 transition-colors"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>
    </section>
  )
}
