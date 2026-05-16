export function HoneyDivider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-honey-500/30" />
      <span className="text-honey-500 text-lg">🐝</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-honey-500/30" />
    </div>
  )
}
