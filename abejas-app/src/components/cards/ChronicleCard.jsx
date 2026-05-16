import { motion } from 'framer-motion'

export default function ChronicleCard({ chronicle, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-editorial group hover-lift"
    >
      <div className="card-glow" />

      <div className="relative z-10 p-8 md:p-11 lg:p-13">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="badge badge-honey">
            {chronicle.tag}
          </span>
          <span className="text-pitch-400 text-xs font-body tracking-wide">
            → Lee {chronicle.readTime}
          </span>
        </div>

        {/* Título */}
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider text-pitch-100 mb-3 group-hover:text-honey-200 transition-colors duration-300">
          {chronicle.title}
        </h3>

        {chronicle.subtitle && (
          <p className="font-editorial text-lg italic text-pitch-400 mb-5">
            {chronicle.subtitle}
          </p>
        )}

        {/* Autor + fecha */}
        <p className="font-typewriter text-honey-300/60 text-xs mb-6 tracking-wide">
          Por {chronicle.author} · {chronicle.date}
        </p>

        {/* Hero quote */}
        {chronicle.heroQuote && (
          <blockquote className="border-l-[3px] border-honey-300/40 pl-6 mb-8">
            <p className="font-editorial text-xl md:text-2xl text-pitch-100 italic leading-relaxed">
              {chronicle.heroQuote}
            </p>
          </blockquote>
        )}

        {/* Preview del cuerpo */}
        {chronicle.preview && (
          <p className="text-pitch-300 leading-relaxed text-sm md:text-base line-clamp-3 mb-6">
            {chronicle.preview}
          </p>
        )}

        {/* Frase CTA */}
        <div className="mt-8 pt-5 border-t border-pitch-600/20 flex items-center justify-between">
          <span className="text-pitch-400 text-xs font-typewriter tracking-wide">
            {chronicle.sections?.length || 0} capítulos
          </span>
          <motion.button
            whileHover={{ x: 4 }}
            className="btn btn-sm btn-ghost"
            style={{
              color: 'var(--color-honey-300)',
              borderColor: 'rgba(250,204,21,0.25)',
              background: 'rgba(250,204,21,0.05)'
            }}
          >
            Leer crónica →
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
