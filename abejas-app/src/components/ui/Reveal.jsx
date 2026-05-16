import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionDivider() {
  return <div className="w-full h-px bg-gradient-to-r from-transparent via-honey-500/30 to-transparent my-16" />
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-honey-500">
      <span className="w-8 h-px bg-honey-500" />
      {children}
      <span className="w-2 h-2 rounded-full bg-honey-500" />
    </span>
  )
}
