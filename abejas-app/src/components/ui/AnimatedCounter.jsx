import { motion } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {prefix}{value}{suffix}
    </motion.span>
  )
}
