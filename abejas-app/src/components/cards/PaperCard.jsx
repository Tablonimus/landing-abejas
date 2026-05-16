import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'

export default function PaperClip({ paper, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-gradient-to-br from-vintage-white to-paper p-5 sm:p-6 md:p-8 text-void overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-honey-300/10 transition-all duration-500 rotate-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
      style={{
        transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
      }}
    >
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey-300/20 text-void text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
        <Newspaper size={10} />
        {paper.fuente}
      </div>

      <p className="text-honey-400 text-xs font-medium mb-2">{paper.fecha}</p>

      <h3 className="font-editorial text-xl md:text-2xl font-bold leading-snug text-void mb-4 group-hover:text-honey-500 transition-colors">
        {paper.titulo}
      </h3>

      <p className="text-graphite leading-relaxed text-sm mb-5">{paper.cuerpo}</p>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper text-graphite text-[10px] font-bold uppercase tracking-wider">
        {paper.icon} {paper.tag}
      </span>
    </motion.article>
  )
}
