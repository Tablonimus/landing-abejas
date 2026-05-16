import { motion } from 'framer-motion'

export default function PlayerCard({ player, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 cursor-default"
    >
      {/* Foto protagonista */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={player.foto || "/images/placeholder-player.jpg"}
          alt={player.alias}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.12]"
        />
        
        {/* Overlay cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        
        {/* Glow amarillo sutil en hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.12),transparent_70%)]" />

        {/* Estado */}
        <div className="absolute top-5 right-5">
          <span className={`px-4 py-1 text-xs font-semibold tracking-widest rounded-full border ${
            player.estado === "Activo" 
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
              : "bg-white/10 text-white/70 border-white/20"
          }`}>
            {player.estado}
          </span>
        </div>

        {/* Nombre grande */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-5xl tracking-[-2px] text-white leading-none mb-1">
            {player.alias}
          </h3>
          <p className="text-white/70 text-sm tracking-wide">{player.nombre}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Rol / Apodo */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1 text-xs font-bold tracking-[1.5px] bg-honey-300/10 text-honey-300 rounded-full border border-honey-300/20">
            {player.rol}
          </span>
          {player.desde && (
            <span className="text-xs text-white/50 tracking-widest">Desde {player.desde}</span>
          )}
        </div>

        {/* Frase memorable */}
        {player.frase && (
          <p className="font-editorial italic text-lg text-white/90 leading-tight mb-5">
            “{player.frase}”
          </p>
        )}

        {/* Lore */}
        <p className="text-pitch-300 text-sm leading-relaxed line-clamp-3 mb-5">
          {player.lore}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {player.tags?.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-0.5 text-[10px] tracking-widest bg-white/5 text-white/60 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
