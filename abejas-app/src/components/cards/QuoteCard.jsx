import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'

export default function QuoteCard({ frase, autor, contexto, tag, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="quote-card hover-lift"
    >
      {/* Fondo hex sutil */}
      <div className="card-glow" />
      <div className="quote-card__mark">"</div>

      <div className="relative z-10">
        <QuoteIcon className="w-5 h-5 text-honey-300/40 mb-4" />

        <blockquote className="font-editorial text-xl md:text-2xl text-pitch-50 italic leading-relaxed mb-5">
          "{frase}"
        </blockquote>

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-body font-semibold text-honey-300 text-sm">{autor}</span>
          {tag && (
            <span className="badge badge-honey">
              {tag}
            </span>
          )}
        </div>

        {contexto && (
          <p className="text-pitch-400 text-xs leading-relaxed border-l-2 border-pitch-600/40 pl-3">
            {contexto}
          </p>
        )}
      </div>
    </motion.article>
  )
}
