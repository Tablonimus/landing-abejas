import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const datos = [
  {
    id: 1,
    category: "Fundación",
    year: "2013",
    question: "¿Cuándo nació Abejas FC?",
    shortAnswer: "El martes 3 de diciembre de 2013.",
    fullAnswer: "El grupo nació originalmente en Facebook, mucho antes de que WhatsApp fuera masivo. Nacho de la Rosa creó el grupo e invitó amigos y conocidos con los que alguna vez había jugado o hablado de fútbol.",
    quote: "Este es el grupo donde se gestó todo.",
    source: "Nacho",
    tags: ["Fundación", "Facebook", "Historia"]
  },
  {
    id: 2,
    category: "Tecnología",
    year: "2013",
    question: "¿Por qué el grupo empezó en Facebook y no en WhatsApp?",
    shortAnswer: "Porque mucha gente todavía no tenía smartphones.",
    fullAnswer: "En 2013 WhatsApp todavía no era masivo y muchos integrantes usaban celulares sin sistema operativo moderno. Por eso la organización inicial se hizo completamente desde Facebook.",
    quote: "Ante la no masividad de WhatsApp...",
    source: "Nacho",
    tags: ["Facebook", "WhatsApp", "Prehistoria"]
  },
  {
    id: 3,
    category: "Primer Partido",
    year: "2014",
    question: "¿Cuándo se jugó el primer partido?",
    shortAnswer: "El 7 de febrero de 2014.",
    fullAnswer: "Aunque la primera convocatoria era para diciembre de 2013, el primer partido real recién pudo jugarse dos meses después, en Al Cubo, sobre calle Independencia.",
    quote: "No me acordaba que jugamos recién dos meses después.",
    source: "Nacho",
    tags: ["Primer Partido", "Al Cubo", "Historia"]
  },
  {
    id: 4,
    category: "Primer Partido",
    year: "2014",
    question: "¿Quiénes jugaron el primer partido?",
    shortAnswer: "Una mezcla de históricos, invitados y hermanos.",
    fullAnswer: "Según la publicación original, participaron Sebastián Salas, Daniel Calivares, Mariano Bustos, Marcelo López, Pablo Baldaccini, Tincho Garnero, Gastón Morales Olivo (+2), Davo Soriano, Yael Todaro, Mati Groli, Topo Rodríguez y Nacho.",
    quote: "Gastón Morales Olivo (+2 intuyo que sus hermanos).",
    source: "Nacho",
    tags: ["Players", "Primer Partido", "Canon"]
  },
  {
    id: 5,
    category: "Economía Argentina",
    year: "2014",
    question: "¿Cuánto costaba jugar al fútbol en 2014?",
    shortAnswer: "50 pesos alcanzaban para cancha y porrón.",
    fullAnswer: "La cancha costaba 420 pesos. La recomendación oficial era llevar 50 pesos para cubrir el partido y también la bebida posterior.",
    quote: "Lleven 50 para el porron/gaseosa/licuado posterior.",
    source: "Nacho",
    tags: ["Argentina", "Economía", "Tercer Tiempo"]
  },
  {
    id: 6,
    category: "Lore",
    year: "2016",
    question: "¿Cómo surgió el nombre Abejas?",
    shortAnswer: "Por unos chicos mirando desde otra cancha.",
    fullAnswer: "Durante un amistoso en La Estanzuela, unos chicos empezaron a gritar: 'Abejas, pasen la pelota'. Cuando les preguntaron por qué, respondieron: 'Por las camisetas'.",
    quote: "Mirá, están jugando Abejas.",
    source: "Daniel Alejandro",
    tags: ["Nombre", "Lore", "Canónico"]
  },
  {
    id: 7,
    category: "Camisetas",
    year: "2016",
    question: "¿Por qué las camisetas son amarillas y negras?",
    shortAnswer: "Porque estaban de oferta.",
    fullAnswer: "Había varios modelos disponibles, incluyendo una camiseta verde estilo Vélez y otra tipo Vasco Da Gama. Pero terminó imponiéndose la amarilla y negra impulsada por la campaña de Nacho.",
    quote: "La campaña más importante de los últimos años.",
    source: "Daniel Alejandro",
    tags: ["Umbro", "Camisetas", "Lore"]
  },
  {
    id: 8,
    category: "Conspiraciones",
    year: "2015",
    question: "¿Quién fue El Maxicano?",
    shortAnswer: "El responsable indirecto de un nuevo grupo.",
    fullAnswer: "A finales de 2015 hubo diferencias internas con un integrante radicado en Norteamérica, conocido como 'El Maxicano', lo que terminó derivando en un nuevo grupo de WhatsApp.",
    quote: "Para no mandarlo al frente.",
    source: "Adrián",
    tags: ["Drama", "WhatsApp", "Lore"]
  },
  {
    id: 9,
    category: "Tercer Tiempo",
    year: "2016",
    question: "¿Qué pasó el día del estreno de la camiseta?",
    shortAnswer: "Terminó 7 a 7 y hubo caos.",
    fullAnswer: "El estreno oficial de la camiseta ocurrió contra el equipo de un expolicía que bailaba salsa y relataba historias sexuales. El partido terminó 7 a 7 y fue suspendido mientras intentaban ubicar telefónicamente al Tonga.",
    quote: "El intento infructuoso de la panadera por ubicar al Tonga.",
    source: "Daniel Alejandro",
    tags: ["Caos", "Lore", "Tercer Tiempo"]
  }
]

export default function Datos() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-1.5 text-xs tracking-[4px] font-medium text-honey-300 border border-honey-300/30 rounded-full mb-6">
              ARCHIVO HISTÓRICO
            </span>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-3px] text-white mb-5">
              DATOS
            </h1>
            <p className="font-editorial text-xl md:text-2xl text-white/70 max-w-xl leading-tight">
              Curiosidades, fechas y verdades del enjambre.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Datos */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {datos.map((dato, i) => (
              <motion.div
                key={dato.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelected(dato)}
                className="group border border-white/10 bg-zinc-950 hover:border-honey-300/30 transition-all duration-300 rounded-2xl p-10 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 text-xs tracking-widest bg-honey-300/10 text-honey-300 rounded-full border border-honey-300/20">
                    {dato.category}
                  </span>
                  <span className="text-xs text-white/50 tracking-widest">{dato.year}</span>
                </div>

                <h3 className="font-display text-3xl tracking-tight text-white mb-3 leading-tight">
                  {dato.question}
                </h3>

                <p className="text-white/80 text-base mb-6">
                  {dato.shortAnswer}
                </p>

                <div className="text-sm text-honey-300 tracking-widest">
                  {dato.source} · Ver más →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[300] overflow-y-auto bg-black/95 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-20 pb-28">
              <button
                onClick={() => setSelected(null)}
                className="fixed top-8 right-8 z-50 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 text-xs tracking-widest bg-honey-300/10 text-honey-300 rounded-full border border-honey-300/20">
                    {selected.category}
                  </span>
                  <span className="text-sm text-white/50">{selected.year}</span>
                </div>

                <h1 className="font-display text-5xl tracking-[-1.5px] text-white leading-none mb-6">
                  {selected.question}
                </h1>

                <p className="font-editorial text-2xl text-white/90 mb-10 tracking-tight">
                  “{selected.quote}”
                </p>

                <div className="prose prose-invert prose-lg max-w-none font-editorial text-white/90 leading-relaxed">
                  {selected.fullAnswer}
                </div>

                <div className="mt-12 text-sm text-white/60">
                  Dicho por: <span className="text-honey-300">{selected.source}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
