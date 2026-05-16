import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { useState } from 'react'

export default function JerseyCard({ kit, index = 0 }) {
  const [open, setOpen] = useState(false)

  const stripeColors = {
    '2016–primera época': ['from-honey-300', 'to-amber-600'],
    '2018–segunda': ['from-amber-300', 'to-honey-300'],
    'Todas las temporadas': ['from-honey-200', 'to-amber-500'],
  }
  const colors = stripeColors[kit.anio] || ['from-honey-300', 'to-amber-600']

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative rounded-2xl border border-pitch-600/40 bg-pitch-700/50 overflow-hidden hover:border-honey-300/30 transition-all duration-500"
      >
        {/* Jersey visual placeholder */}
        <div className="relative h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors[0]}/${colors[1]} opacity-80`} />
          {/* Stripes */}
          <div className="absolute inset-0 flex flex-col justify-evenly opacity-15">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-12 bg-void rounded-sm mx-4" />
            ))}
          </div>
          {/* Shield placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-28 rounded-xl bg-void/60 border border-honey-300/30 backdrop-blur-sm flex items-center justify-center">
              <span className="font-display text-4xl text-honey-300">🐝</span>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-honey-300/10 flex items-center justify-center"
          >
            <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-void/80 backdrop-blur-md rounded-full text-sm font-medium text-pitch-100 hover:bg-void transition-colors">
              <Expand size={14} />
              Ver historia
            </button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-6">
          <span className="font-display text-honey-300 text-sm tracking-[0.2em]">{kit.anio}</span>
          <h3 className="font-[Bebas_Neue] text-xl md:text-2xl tracking-wider text-pitch-100 mt-1 mb-1">{kit.nombre}</h3>
          <p className="text-pitch-400 text-xs">{kit.modelo}</p>
        </div>
      </motion.article>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-void/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-pitch-700 border border-pitch-600/50 rounded-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-pitch-400 hover:text-pitch-100 text-sm"
            >
              ✕
            </button>

            <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${colors[0]} ${colors[1]} mb-6 flex items-center justify-center`}>
              <span className="font-display text-5xl text-white/20">🐝</span>
            </div>

            <span className="font-display text-honey-300 text-sm tracking-[0.2em]">{kit.anio}</span>
            <h3 className="font-[Bebas_Neue] text-3xl tracking-wider text-pitch-100 mt-1 mb-1">{kit.nombre}</h3>

            <p className="text-honey-300/70 text-sm mb-4">{kit.modelo}</p>
            <p className="text-pitch-200 leading-relaxed text-sm mb-5">{kit.historia}</p>

            {kit.anecdotas && (
              <div className="p-4 rounded-xl bg-honey-300/5 border border-honey-300/10">
                <p className="font-editorial italic text-pitch-200">{kit.anecdotas}</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
}
