import { motion } from 'framer-motion'

export default function TimelineCard({ event, index, total }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-start ${
        isEven ? '' : 'md:text-right'
      }`}
    >
      {/* Spacer on the opposite side */}
      <div className={`hidden md:block ${isEven ? '' : 'order-3'}`} />

      {/* Dot */}
      <div className={`hidden md:flex flex-col items-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
          className="w-12 h-12 rounded-full bg-pitch-700 border-2 border-honey-300/60 flex items-center justify-center text-xl z-10 relative"
        >
          {event.icon}
        </motion.div>
        {index < total - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-honey-300/40 to-transparent mt-3" />
        )}
      </div>

      {/* Content */}
      <div className={`${isEven ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}>
        <motion.div
          whileHover={{ x: isEven ? -6 : 6 }}
          className={`group rounded-2xl p-8 md:p-10 lg:p-12 border border-pitch-600/40 bg-gradient-to-br ${
            isEven ? 'from-pitch-700/50 to-void/80' : 'from-pitch-700/50 to-void/80'
          } hover:border-honey-300/25 transition-all duration-500 cursor-default`}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-display text-honey-300 text-sm tracking-[0.2em]">{event.year}</span>
            <span className="w-1 h-1 rounded-full bg-pitch-500" />
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-honey-300/10 text-honey-200 rounded-full border border-honey-300/20">
              {event.tag}
            </span>
          </div>

          <h3 className="font-[Bebas_Neue] text-2xl md:text-3xl tracking-wider text-pitch-100 mb-2 group-hover:text-honey-200 transition-colors">
            {event.title}
          </h3>

          <p className="text-pitch-400 text-xs font-typewriter mb-3">{event.date}</p>

          <p className="text-pitch-200 leading-relaxed text-sm">{event.body}</p>
        </motion.div>
      </div>
    </motion.article>
  )
}
