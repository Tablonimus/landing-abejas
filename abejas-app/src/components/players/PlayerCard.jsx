import { motion } from 'framer-motion'
import { Cake, Plane, Calendar } from 'lucide-react'

export default function PlayerCard({ player, index = 0 }) {
  const statusConfig = {
    Activo: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
    'En España': { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    'Viene y va': { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
    'Se fue': { color: 'text-pitch-400', bg: 'bg-pitch-600/30', border: 'border-pitch-500/30' },
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-pitch-600/40 bg-pitch-700/50 overflow-hidden hover:border-honey-300/30 transition-all duration-500"
    >
      {/* Top color stripe */}
      <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${player.colores?.[0] || '#F59E0B'}, ${player.colores?.[1] || '#1C1917'})` }} />

      <div className="p-6 md:p-8">
        {/* Avatar circle */}
        <div className="flex items-end justify-between mb-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-display text-3xl text-void"
            style={{ background: `linear-gradient(135deg, ${player.colores?.[0] || '#F59E0B'}, ${player.colores?.[1] || '#1C1917'})` }}
          >
            {player.alias.charAt(0)}
          </div>
          <span className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${statusConfig[player.estado]?.bg || 'bg-pitch-600/30'} ${statusConfig[player.estado]?.color || 'text-pitch-400'} border ${statusConfig[player.estado]?.border || 'border-pitch-500/30'}`}>
            {player.estado}
          </span>
        </div>

        <h3 className="font-[Bebas_Neue] text-2xl md:text-3xl tracking-wider text-pitch-100 mb-1 group-hover:text-honey-300 transition-colors">
          {player.alias}
        </h3>

        <p className="text-pitch-300 text-sm mb-1">{player.nombre}</p>
        <p className="text-honey-300/70 text-xs font-medium mb-4">{player.rol}</p>

        <p className="text-pitch-300 text-sm leading-relaxed line-clamp-4">{player.lore}</p>

        {player.frases?.length > 0 && (
          <div className="mt-5 pt-4 border-t border-pitch-600/40">
            {player.frases.map((f, i) => (
              <p key={i} className="font-editorial italic text-pitch-200 text-sm">
                "{f}"
              </p>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 mt-4 text-xs text-pitch-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {player.desde}
          </span>
          <span className="flex items-center gap-1">
            {player.estado === 'En España' ? <Plane size={12} /> : <Cake size={12} />}
            {player.nacionalidad}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
