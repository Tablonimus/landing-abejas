import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const cronicas = [
  {
    id: 1,
    titulo: "Érase una vez…",
    fecha: "3 de diciembre de 2013",
    autor: "JMP",
    extracto: "Corrió el 3 de diciembre de 2013. Facebook era la más popular de las redes sociales…",
    contenido: `Corrió el 3 de diciembre de 2013. Facebook era la más popular de las redes sociales, WhatsApp apenas si comenzaba a masificarse. El Papa era argentino y en 2 días fallecería Nelson Mandela.

En ese contexto, un grupo de Facebook emergía a la luz. Una idea tan fugaz como la posibilidad de tener estabilidad económica viviendo en Argentina. La idea era sencilla: juntar voluntades masculinas para poder despuntar el vicio de patear la pelota durante una hora en una cancha de fútbol 5.

La idea fundacional, que fue de Ignacio de la Rosa (Nacho o Vikingo), con la ayuda de su inseparable amigo/hermano Daniel Calivares (Dani), quien sumó al profe Gastón Federico Morales (Tonga), era agrupar en un lugar virtual personas dispuestas a jugar al menos una vez a la semana.

El primer partido se jugó el 7 de febrero de 2014 en Al Cubo, de calle Independencia. Convocó a 14 personas.`
  },
  {
    id: 2,
    titulo: "Si 10 años después…",
    fecha: "11 de noviembre de 2023",
    autor: "JMP",
    extracto: "El festejo no fue tan eufórico. Fue un abrazo silencioso entre la vieja escuela y el nuevo panal.",
    contenido: `Van cerca de 5 o 7 minutos, es difícil establecerlo cuando tu cabeza está a mil revoluciones por minuto, por culpa de un corazón que no para de latir. El partido está 0 a 0. Abejas está ante su cuarta final del torneo de medios.

Apenas unos momentos después del primer gol, Agustín quiere salir rápido de un lateral. Momo lo lee rápido y con una simple avivada le saca la pelota y se va mano a mano contra el arquero. Gol. Abejas FC 2, Gurú 0.

Jamás en 10 años Abejas FC había estado tan cerca de ser campeón. Finalmente, a lo lejos se escuchó el “Piiiiiiiiiiiiiiiiiiiiiiiiiii” del árbitro. La alegría era inmensa.

El festejo no fue tan eufórico, ni desbordante. Fue un abrazo silencioso entre los nuevos integrantes del panal y la vieja escuela. Esa que hace 10 años atrás, sin saberlo, comenzó el camino que terminó con el trofeo de oro, en una copa de plata para un equipo que quedará en el bronce de la historia de Abejas FC.`
  }
]

export default function Cronicas() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-1.5 text-xs tracking-[4px] font-medium text-honey-300 border border-honey-300/30 rounded-full mb-6">
              10 AÑOS ABEJAS FC
            </span>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-3px] text-white mb-5">
              CRÓNICAS
            </h1>
            <p className="font-editorial text-xl md:text-2xl text-white/70 max-w-xl leading-tight">
              Los relatos que quedaron en la memoria del enjambre.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de crónicas */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {cronicas.map((cronica, i) => (
              <motion.div
                key={cronica.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(cronica)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-10 cursor-pointer"
              >
                <div className="text-honey-300 text-xs tracking-[3px] mb-3">{cronica.fecha}</div>
                <h3 className="font-display text-5xl tracking-[-2px] text-white mb-6 leading-none">
                  {cronica.titulo}
                </h3>
                <p className="text-lg text-white/70 line-clamp-3 mb-8">
                  {cronica.extracto}
                </p>
                <div className="text-sm text-honey-300 tracking-widest">LEER CRÓNICA →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[300] overflow-y-auto bg-black/95 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
              <button
                onClick={() => setSelected(null)}
                className="fixed top-8 right-8 z-50 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="max-w-3xl mx-auto">
                <div className="text-honey-300 text-sm tracking-[3px] mb-2">{selected.fecha}</div>
                <h1 className="font-display text-[52px] leading-none tracking-[-2px] text-white mb-8">
                  {selected.titulo}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none font-editorial text-white/90 leading-relaxed whitespace-pre-line">
                  {selected.contenido}
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
