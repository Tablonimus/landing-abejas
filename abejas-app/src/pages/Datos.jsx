import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const datos = [
  {
    id: 1,
    chapter: "Capítulo 01",
    archive: "3 de diciembre de 2013",
    name: "Nacho de la Rosa",
    nickname: "El Vikingo",
    role: "Fundador",
    year: "2013",
    quote: "El grupo lo armamos el Nacho y yo y lo sumamos al Tonga.",
    shortDescription: "El día que se creó el grupo de Facebook que originó todo.",
    story: "El día martes 3 de diciembre se armó el grupo. Y se comenzó con la tarea titánica de tratar de armar un fulbito para el día siguiente. El grupo se creó el martes 3 de diciembre de 2013. La primera convocatoria para partido fue para el 4/12/2013, pero se pospuso varios meses. Recién el 7/2/2014 pudimos jugar el primer partido en Al Cubo.",
    highlightMoments: [
      "Creación del grupo de Facebook",
      "Primer partido en Al Cubo",
      "Los primeros 14 jugadores"
    ],
    tags: ["Fundadores", "2013", "Origen"],
    coverImage: "/images/datos/nacho.jpg"
  },
  {
    id: 2,
    chapter: "Capítulo 02",
    archive: "2014 - 2016",
    name: "Daniel Alejandro Calivares",
    nickname: "Dani",
    role: "Co-creador",
    year: "2014",
    quote: "Me quebré en marzo de 2014 y subí la foto al grupo.",
    shortDescription: "La primera baja seria de la historia.",
    story: "El grupo lo armamos el Nacho y yo y lo sumamos al Tonga. El primer partido 2014, comenzamos a jugar en canchitas de calle Independencia y después cambiamos a La Platea. Al poco tiempo de empezar a jugar, me quebré.",
    highlightMoments: [
      "Cambio a La Platea",
      "La primera lesión importante",
      "Consolidación del grupo"
    ],
    tags: ["Fundadores", "Lesión", "Historia"],
    coverImage: "/images/datos/dani.jpg"
  },
  {
    id: 3,
    chapter: "Capítulo 03",
    archive: "2016",
    name: "Gastón Morales (Tonga)",
    nickname: "El Profe",
    role: "Profesor de Educación Física",
    year: "2016",
    quote: "La única que seguro sé, porque compré las camisetas.",
    shortDescription: "La llegada de las primeras camisetas oficiales.",
    story: "A finales de 2015 Gastón Morales ve una oferta en Umbro. Se compraron de un modelo de Umbro ya existente. Había varias alternativas, pero ganó la propuesta amarillo y negra. El nombre Abejas surge porque unos chicos de la cancha de al lado gritaron “Mirá están jugando Abejas” y así surgió el nombre.",
    highlightMoments: [
      "Primera camiseta Umbro",
      "Nacimiento del nombre Abejas",
      "Consolidación del plantel"
    ],
    tags: ["Camisetas", "Identidad", "2016"],
    coverImage: "/images/datos/tonga.jpg"
  }
]

export default function Datos() {
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
              DATOS
            </h1>
            <p className="font-editorial text-xl md:text-2xl text-white/70 max-w-xl leading-tight">
              Los números, las fechas y los detalles que construyeron la historia.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datos.map((dato, i) => (
              <motion.div
                key={dato.id}
                whileHover={{ scale: 1.015 }}
                onClick={() => setSelected(dato)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={dato.coverImage} 
                    alt={dato.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
                  
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1 text-xs tracking-[2px] bg-white/10 text-white/90 rounded-full backdrop-blur">
                      {dato.chapter}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-4xl tracking-[-1.5px] text-white leading-none mb-1">
                      {dato.name}
                    </h3>
                    <p className="text-white/70 text-sm tracking-wide">{dato.nickname}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-editorial text-lg text-white/90 leading-tight mb-4">
                    “{dato.quote}”
                  </p>
                  <p className="text-sm text-white/60 line-clamp-3">
                    {dato.shortDescription}
                  </p>
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
            <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
              <button
                onClick={() => setSelected(null)}
                className="fixed top-8 right-8 z-50 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-[52px] leading-none tracking-[-2px] text-white mb-4">
                  {selected.name}
                </h1>
                <p className="text-2xl text-white/80 mb-10">{selected.nickname}</p>

                <div className="prose prose-invert prose-lg max-w-none font-editorial text-white/90 leading-relaxed">
                  {selected.story}
                </div>

                <div className="mt-12">
                  <h4 className="text-xs tracking-[4px] text-honey-300 mb-4">MOMENTOS DESTACADOS</h4>
                  <ul className="space-y-2 text-white/80">
                    {selected.highlightMoments.map((m, i) => (
                      <li key={i}>→ {m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
