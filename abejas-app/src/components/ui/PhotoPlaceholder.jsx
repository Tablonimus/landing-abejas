export default function PhotoPlaceholder({
  label,
  icon = '🐝',
  colors = ['from-honey-300', 'to-amber-600'],
  className = '',
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colors[0]} ${colors[1]} opacity-80`} />

      <div className="absolute inset-0 flex flex-col justify-evenly opacity-15">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-12 bg-void rounded-sm mx-4" />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-28 rounded-xl bg-void/60 border border-honey-300/30 backdrop-blur-sm flex items-center justify-center">
          <span className="font-display text-4xl text-honey-300">{icon}</span>
        </div>
      </div>

      {label && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-pitch-100/70 uppercase whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  )
}
