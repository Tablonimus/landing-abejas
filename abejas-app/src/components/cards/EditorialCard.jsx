import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function EditorialCard({ tag, tagColor, title, subtitle, excerpt, cta, index = 0, size = 'md' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-editorial group cursor-default ${size === 'lg' ? 'md:col-span-2' : ''}`}
    >
      {/* Glow sutil en hover */}
      <div className="card-glow" />

      <div className="relative z-10 p-8 md:p-10">
        {/* Badge */}
        {tag && (
          <span className={`badge mb-5 ${
            tagColor === 'honey'
              ? 'badge-honey'
              : 'bg-pitch-600/30 text-pitch-200 border border-pitch-500/20'
          }`}>
            {tag}
          </span>
        )}

        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wider text-pitch-100 leading-tight mb-3 group-hover:text-honey-200 transition-colors duration-300">
          {title}
        </h3>

        {subtitle && (
          <p className="font-editorial italic text-pitch-400 text-sm md:text-base mb-4">
            {subtitle}
          </p>
        )}

        {excerpt && (
          <p className="text-pitch-300 leading-relaxed text-sm md:text-base mb-6 max-w-xl">
            {excerpt}
          </p>
        )}

        {cta && (
          <motion.div
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-2 text-honey-300 text-sm font-semibold tracking-wide"
          >
            {cta}
            <ArrowRight size={14} />
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
