import PlayerCard from '../components/players/PlayerCard'
import { Reveal, SectionLabel } from '../components/ui/Reveal'
import { players } from '../data/mocks'
import { Search } from 'lucide-react'
import { useState, useMemo } from 'react'

export default function Players() {
   const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')

  const estados = useMemo(() => ['Todos', ...new Set(players.map((p) => p.estado))], [])

  const filtered = useMemo(() => {
    return players.filter((p) => {
      const matchEstado = filter === 'Todos' || p.estado === filter
      const q = search.toLowerCase()
      const matchSearch = !q || p.alias.toLowerCase().includes(q) || p.nombre.toLowerCase().includes(q)
      return matchEstado && matchSearch
    })
  }, [filter, search])

  return (
    <div className="bg-void min-h-screen">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <div className="mb-10">
              <SectionLabel>Jugadores</SectionLabel>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
                EL PANAL
              </h1>

              <p className="font-editorial text-pitch-400 italic text-base md:text-lg mt-4 max-w-lg">
                16 leyendas vivas — o casi vivas — de la historia abeja.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pitch-400 w-4 h-4" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar jugador..."
                  className="pl-10 pr-5 py-2.5 bg-pitch-800/50 border border-pitch-600/30 rounded-full text-sm text-pitch-100 placeholder-pitch-400 focus:outline-none focus:border-honey-300/40 transition-colors w-56"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {estados.map((e) => (
                  <button
                    key={e}
                    onClick={() => setFilter(e)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      filter === e
                        ? 'bg-honey-200 text-void shadow-[0_0_16px_rgba(250,204,21,0.3)]'
                        : 'bg-pitch-800/50 text-pitch-300 border border-pitch-600/30 hover:border-pitch-400 hover:text-pitch-100'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <PlayerCard key={p.id} player={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-pitch-400 text-center py-16 font-editorial italic">
              Ningún jugador coincide con ese filtro.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
