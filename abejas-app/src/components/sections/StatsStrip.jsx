import { motion } from 'framer-motion'
import { SectionLabel, Reveal } from '../ui/Reveal'

export default function StatsStrip({ stats }) {
  return (
    <section className="py-24 border-y border-pitch-600/40 bg-pitch-700/30">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <Reveal>
          <SectionLabel>10 años en números</SectionLabel>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-pitch-600/30 mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-void/80 p-7 md:p-9 group hover:bg-pitch-700/60 transition-colors duration-300"
            >
              <p className="font-display text-3xl md:text-4xl lg:text-5xl text-honey-300 mb-1">
                {stat.value}
              </p>
              <p className="text-pitch-200 font-medium text-sm mb-1">{stat.label}</p>
              <p className="text-pitch-400 text-xs leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
