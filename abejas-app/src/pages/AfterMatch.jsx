import { motion } from 'framer-motion'
import { Beer, Music, Flame, Trophy } from 'lucide-react'
import { useState } from 'react'
import { tercerTiempo } from '../data/mocks'

const icons = { 'Playlist': Music, Bebida: Beer, Ranking: Trophy, Asado: Flame }
const bgColors = {
  'Playlist': 'from-violet-900/30 to-void/80',
  'Bebida': 'from-amber-900/30 to-void/80',
  'Asado': 'from-orange-900/20 to-void/80',
  'Ranking': 'from-honey-300/10 to-void/80',
}

export default function AfterMatch() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const categorias = ['Todos', 'Playlist', 'Bebida', 'Asado', 'Ranking']

  const filtered = tercerTiempo
    .filter((t) => activeFilter === 'Todos' || t.categoria === activeFilter)

  return (
    <div className="bg-void min-h-screen">
<section className="relative py-16 md:py-24 lg:py-36 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(250,204,21,0.1),transparent)]" />

         <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-honey-300 text-xs uppercase tracking-[0.4em]">
              <Beer size={14} />
              Lo que pasa después del partido
              <Beer size={14} />
            </span>
            <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl lg:text-9xl tracking-tight text-pitch-100 mt-4 mb-6">
              TERCER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey-200 to-amber-600">
                TIEMPO
              </span>
            </h1>
            <p className="font-editorial text-xl text-pitch-300 italic max-w-lg mx-auto">
              "El after match. O lo que viene después del pitido final: lo que realmente importa."
            </p>
          </motion.div>
        </div>
      </section>

{/* Filters */}
       <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-honey-300 text-void'
                  : 'bg-pitch-700/50 text-pitch-300 border border-pitch-600/40 hover:border-pitch-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

{/* Content */}
       <section className="py-12 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item, i) => {
            const Icon = icons[item.categoria] || Beer
            const bg = bgColors[item.categoria] || 'from-pitch-700/50 to-void/80'

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-2xl bg-gradient-to-br ${bg} border border-pitch-600/30 p-7 md:p-9 overflow-hidden hover:border-honey-300/25 transition-all duration-500`}
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="text-honey-300 w-32 h-32" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-honey-300/10 flex items-center justify-center text-honey-200">
                      <Icon size={18} />
                    </div>
                    <span className="text-honey-300 text-[10px] font-bold uppercase tracking-[0.2em]">{item.categoria}</span>
                  </div>

                  <h3 className="font-[Bebas_Neue] text-2xl tracking-wider text-pitch-100 mb-3 group-hover:text-honey-200 transition-colors">
                    {item.titulo}
                  </h3>

                  <p className="text-pitch-300 text-sm mb-5">{item.desc}</p>

                  <div className="space-y-2">
                    {item.items.map((song, j) => (
                      <motion.div
                        key={j}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-pitch-700/30 transition-colors"
                      >
                        <span className="w-5 h-5 rounded-full bg-honey-300/15 text-honey-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {j + 1}
                        </span>
                        <span className="text-pitch-200 text-sm">{song}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Story highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-honey-300/20 bg-gradient-to-br from-honey-300/8 via-pitch-700/30 to-void/80 p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-6 -right-6 text-[8rem] opacity-[0.04]">🍻</div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-5 h-5 text-honey-300" />
                <span className="font-display text-honey-300 text-xs uppercase tracking-[0.3em]">La noche más legendaria</span>
              </div>
              <h3 className="font-[Bebas_Neue] text-3xl md:text-4xl tracking-wider text-pitch-100 mb-4">
                ASADO + ZONDA + BOMBEROS
              </h3>
              <p className="text-pitch-200 leading-relaxed">
                Junio de 2017, La Platea. Partido, asado, Zonda. Humo. Vecinos llaman a los bomberos.
                Los bomberos llegan, confirman: es un asado. Se van. Abejas les ofrece un chori.
                Lo rechazan. La noticia sale en diarios de todo el país.
                Una noche que resume todo lo que es Abejas FC: fútbol, viento, fuego y humor.
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              {['Partido de fútbol', 'Asado bien regado', 'Segundo partido', 'Tercer tiempo épico'].map((item, j) => (
                <div key={j} className="flex items-center gap-3 text-pitch-400 text-sm">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    j === 2 ? 'bg-honey-300/20 text-honey-200' : 'bg-pitch-600/40 text-pitch-300'
                  }`}>
                    {j + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
