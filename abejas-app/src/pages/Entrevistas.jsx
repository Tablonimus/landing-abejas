import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const entrevistas = [
  {
    id: 1,
    titulo: "Aporte de Nacho",
    extracto: "“Según las leyes de la aerodinámica, las abejas no deberían poder volar… Pero las abejas no saben de aerodinámica… Y vuelan…”",
    contenido: `Se me ocurre que podríamos arrancar con una frase del tipo:

“Según las leyes de la aerodinámica, las abejas no deberían poder volar, porque la amplitud de sus alas es muy pequeña para conservar en vuelo su enorme cuerpo. Pero las abejas no saben de aerodinámica… Y vuelan…”

Y si nosotros podemos jugar al fútbol, algo que cualquier ley física y de la racionalidad impediría, ¿¡por qué no podría entonces volar una abeja!?`
  },
  {
    id: 2,
    titulo: "Introducción / Historia",
    extracto: "JMP recabando información de los socios fundadores.",
    contenido: `La historia de Abejas FC comienza el 3 de diciembre de 2013, cuando Ignacio de la Rosa crea el grupo de Facebook “Hagamos un partido de fútbol, mierdas…”. La idea era sencilla: juntar voluntades para patear la pelota una vez por semana.

Lo que empezó como una locura, se convirtió en memoria.`
  },
  {
    id: 3,
    titulo: "Anecdotario",
    extracto: "Nacho en colaboración con todos los que quieran aportar.",
    contenido: `Sección de anécdotas del grupo. Se invita a todos a aportar, con especial mención a la memoria prodigiosa del Ardu. Aquí se recopilan las historias más locas, tristes y divertidas de estos 10 años.`
  },
  {
    id: 4,
    titulo: "Abejas FC y un inédito aporte a la integración internacional",
    extracto: "Un mexicano, un chileno, dos haitianos, un gambiano y un fueguino.",
    contenido: `A lo largo de estos 10 años han pasado jugadores de distintas provincias y distintos países por Abejas FC.

- Un mexicano (las relaciones no terminaron de la mejor manera y se desató un conflicto diplomático).
- Un chileno (cuyo nombre —según respondió él mismo— era “chileno”).
- Dos haitianos (con quienes todo terminó en excelentes términos).
- Un gambiano (volvió a Gambia con su gorrita original de Abejas FC).
- Un fueguino (de Río Grande, no de Ushuaia).

Si algo ha caracterizado desde el comienzo a Abejas FC es la heterogeneidad del grupo.`
  },
  {
    id: 5,
    titulo: "Abejas FC en los diarios",
    extracto: "En Policiales, no en Deportes.",
    contenido: `Todo lo que el Zonda no frustró. El conductor fantasma. La suspensión que derivó en un asado.

Tres historias que terminaron en los diarios de todo el país.`
  },
  {
    id: 6,
    titulo: "Lo que el Zonda no frustró",
    extracto: "Viernes 16 de junio de 2017. Bomberos, asado y una historia que llegó a los diarios de todo el país.",
    contenido: `Viernes 16 de junio de 2017. Una noche de partido + asado + Zonda. 

Vecinos del complejo La Platea llamaron a los bomberos porque vieron mucho humo en medio del viento. Cuando llegaron, confirmaron que era un asado. Abejas les ofreció un chori. Lo rechazaron. 

La historia fue noticia nacional.`
  },
  {
    id: 7,
    titulo: "El conductor fantasma",
    extracto: "Otra noche de Zonda, otra historia surrealista que llegó a los diarios.",
    contenido: `Miércoles 4 de octubre de 2017. Un chofer de colectivo fue chocado por una Fiorino blanca… que no tenía conductor. 

La camioneta recorrió dos cuadras, chocó al colectivo y después a un Palio. Cuando el chofer bajó a reclamar, no había nadie en el volante. 

Una seguidilla de hechos raros que terminó en los diarios de todo el país.`
  },
  {
    id: 8,
    titulo: "La suspensión que derivó en un asado",
    extracto: "Nacho se enojó con el Enano y el partido terminó a los 20 minutos.",
    contenido: `Nacho de la Rosa, uno de los más calentones del grupo, se enojó innecesariamente en un partido entre semana con el Enano (Adrián Orrego). 

El partido se suspendió. Esa misma noche Nacho pidió disculpas y pagó un asado para todos los que habían ido a jugar.`
  },
  {
    id: 9,
    titulo: "Los que ya no están entre nosotros",
    extracto: "Yael, Martín, Adrián, Momo y Tino. Todos se fueron de Mendoza, pero siguen siendo parte de Abejas.",
    contenido: `Jugadores históricos que se fueron a vivir al exterior pero que siguen siendo parte del enjambre:

- Yael Todaro: primer presidente de Abejas FC. Se fue a vivir a España.
- Martín Tejerina: se fue a vivir a Irlanda.
- Adrián Orrego: se fue a vivir a España.
- Julián “Momo” Arccidiacono: se fue a España después de la Copa de Plata 2023.
- Santiago “Tino” Olivo: viene y va periódicamente desde Tierra del Fuego.`
  },
  {
    id: 10,
    titulo: "Demasiada información, ¡recién te conocemos!",
    extracto: "G. nos contó demasiadas intimidades de su vida sexual en el segundo partido.",
    contenido: `Un jugador que pasó por Abejas y en dos partidos nos contó más de lo que queríamos saber sobre su vida íntima y sexual. 

Era policía, instructor de salsa y bachata, y tenía una capacidad poco común para contar detalles de su vida de pareja y sus “fechorías”. 

Demasiada información, master.`
  },
  {
    id: 11,
    titulo: "Nadie se atreva a tocar a mi vieja",
    extracto: "Pelea Davo y Tonga.",
    contenido: `Una de las peleas más recordadas del grupo.`
  },
  {
    id: 12,
    titulo: "Frases Abejas",
    extracto: "¡Por la Nisman!, ¡Passet!, ¡Benitez!, ¡Illuminati!!",
    contenido: `El diccionario de frases icónicas de Abejas FC:

- “¡Eh!... ¡¡EHH!! ¡Los goles en contra no se gritan!” (Nacho)
- “Topo, me volvés a ir con la pierna en alto…”
- “Ahora son todos Maradona; después jugamos el torneo y nos comemos los mocos”
- “¡Por la Nisman!”
- “¡Passet!”
- “¡Benitez!”
- “¡¡Illuminati!!” (Juan Pablo Morales)`
  }
]

export default function Entrevistas() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-honey-300 text-xs uppercase tracking-[0.4em] font-medium mb-4">
              10 AÑOS ABEJAS FC
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100 mb-5">
              ENTREVISTAS
            </h1>
            <p className="font-editorial text-lg md:text-xl text-pitch-300 italic max-w-xl leading-relaxed">
              Las voces, las anécdotas y los recuerdos que construyeron el enjambre.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de entrevistas */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrevistas.map((ent, i) => (
              <motion.div
                key={ent.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(ent)}
                className="group cursor-pointer rounded-2xl border border-pitch-600/40 bg-pitch-800/50 p-8 hover:border-honey-300/30 transition-all duration-500"
              >
                <h3 className="font-display text-2xl tracking-wider text-pitch-100 mb-3 group-hover:text-honey-200 transition-colors">
                  {ent.titulo}
                </h3>
                <p className="text-pitch-300 text-sm leading-relaxed line-clamp-3">
                  {ent.extracto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-w-3xl w-full bg-pitch-900 rounded-2xl p-8 md:p-12">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-pitch-400 hover:text-white"
              >
                <X size={28} />
              </button>

              <h2 className="font-display text-4xl tracking-wider text-pitch-100 mb-6">
                {selected.titulo}
              </h2>

              <div className="font-editorial text-pitch-200 text-lg leading-relaxed whitespace-pre-line">
                {selected.contenido}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
