import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PhotoPlaceholder from '../components/ui/PhotoPlaceholder'

const entrevistas = [
  {
    id: 1,
    chapter: "Capítulo 01",
    archive: "Archivo 2013",
    name: "Nacho de la Rosa",
    nickname: "El Fundador",
    role: "Fundador",
    era: "Los comienzos",
    year: "2013",
    duration: "08:24",
    quote: "Nadie pensó que duraríamos tanto.",
    shortDescription: "Cómo un grupo improvisado terminó convirtiéndose en una historia de 10 años.",
    story: "Todo empezó casi sin querer. Un grupo de amigos, una cancha y la necesidad de hacer algo distinto. Nacho de la Rosa creó el grupo de Facebook que daría origen a Abejas FC. Lo que nació como una idea loca terminó convirtiéndose en una de las historias más hermosas del fútbol amateur mendocino.",
    highlightMoments: [
      "Primer partido en El Cubo",
      "Nacimiento del nombre Abejas",
      "Primer tercer tiempo histórico"
    ],
    tags: ["Fundadores", "Historia", "Barrio", "2013"],
    coverImage: "/images/entrevistas/nacho-cover.jpg",
    accentQuote: "Lo importante nunca fue ganar.",
    location: "El Cubo, Godoy Cruz",
    mood: "Nostálgico"
  },
  {
    id: 2,
    chapter: "Capítulo 02",
    archive: "Archivo 2017",
    name: "El Zonda",
    nickname: "La noche de los bomberos",
    role: "Historia colectiva",
    era: "Las locuras",
    year: "2017",
    duration: "12:10",
    quote: "Más que un Zonda hace falta para voltear un asado.",
    shortDescription: "La noche en que los bomberos llegaron al asado de Abejas.",
    story: "Viernes 16 de junio de 2017. Una noche de partido + asado + Zonda. Los vecinos del complejo La Platea vieron humo y llamaron a los bomberos. Cuando llegaron, confirmaron que era un asado. Abejas les ofreció un chori. La historia terminó en los diarios de todo el país.",
    highlightMoments: [
      "El asado con Viento Zonda",
      "La llegada de los bomberos",
      "La oferta del chori rechazada"
    ],
    tags: ["Zonda", "Bomberos", "Asado", "2017"],
    coverImage: "/images/entrevistas/zonda-cover.jpg",
    accentQuote: "El Zonda no pudo con el asado.",
    location: "La Platea, Godoy Cruz",
    mood: "Épico"
  },
  {
    id: 3,
    chapter: "Capítulo 03",
    archive: "Archivo 2017",
    name: "El Conductor Fantasma",
    nickname: "La Fiorino sin conductor",
    role: "Historia colectiva",
    era: "Las locuras",
    year: "2017",
    duration: "09:45",
    quote: "La camioneta chocó sola.",
    shortDescription: "Una Fiorino blanca chocó un colectivo y un auto… sin conductor.",
    story: "Miércoles 4 de octubre de 2017. Una Fiorino blanca chocó un colectivo y después un Palio. Cuando el chofer bajó a reclamar, no había nadie en el volante. Una seguidilla de hechos surrealistas que terminó en los diarios de todo el país.",
    highlightMoments: [
      "La Fiorino sin conductor",
      "La rama que casi mata a la inspectora",
      "La vecina que no podía respirar"
    ],
    tags: ["Zonda", "Accidente", "Surrealismo", "2017"],
    coverImage: "/images/entrevistas/fantasma-cover.jpg",
    accentQuote: "Pasan cosas raras.",
    location: "Perito Moreno y Godoy, Godoy Cruz",
    mood: "Surrealista"
  },
  {
    id: 4,
    chapter: "Capítulo 04",
    archive: "Archivo 2017",
    name: "Nacho de la Rosa",
    nickname: "El Calentón",
    role: "Histórico",
    era: "Las locuras",
    year: "2017",
    duration: "06:30",
    quote: "Se suspendió por calentura innecesaria.",
    shortDescription: "La vez que Nacho se enojó y pagó un asado para disculparse.",
    story: "Nacho se enojó con el Enano en un partido entre semana. El partido se suspendió a los 20 minutos. Esa misma noche pidió disculpas y pagó un asado para todos los que habían ido a jugar.",
    highlightMoments: [
      "El puntinazo que no llegó",
      "El partido suspendido",
      "El asado de disculpa"
    ],
    tags: ["Nacho", "Calentura", "Asado", "2017"],
    coverImage: "/images/entrevistas/nacho2-cover.jpg",
    accentQuote: "Se suspendió por calentura innecesaria.",
    location: "Canchas de La Estanzuela",
    mood: "Humorístico"
  },
  {
    id: 5,
    chapter: "Capítulo 05",
    archive: "Archivo 2013-2023",
    name: "Los que ya no están",
    nickname: "El éxodo abeja",
    role: "Históricos",
    era: "La diáspora",
    year: "2013-2023",
    duration: "10:15",
    quote: "Se fueron, pero siguen siendo parte del enjambre.",
    shortDescription: "Los jugadores que se fueron de Mendoza pero nunca dejaron de ser Abejas.",
    story: "Yael, Martín, Adrián, Momo y Tino. Todos se fueron a vivir al exterior, pero siguen siendo parte de la historia de Abejas FC.",
    highlightMoments: [
      "Yael, primer presidente",
      "Momo después de la Copa de Plata",
      "Tino yendo y viniendo de Tierra del Fuego"
    ],
    tags: ["Diáspora", "Historia", "Amistad"],
    coverImage: "/images/entrevistas/exodo-cover.jpg",
    accentQuote: "Se fueron, pero siguen siendo Abejas.",
    location: "España, Irlanda, Tierra del Fuego",
    mood: "Nostálgico"
  },
  {
    id: 6,
    chapter: "Capítulo 06",
    archive: "Archivo 2015",
    name: "G.",
    nickname: "Demasiada información",
    role: "Efímero",
    era: "Las locuras",
    year: "2015",
    duration: "07:50",
    quote: "¡Demasiada información, master!",
    shortDescription: "El jugador que en dos partidos nos contó más de lo que queríamos saber.",
    story: "G. era policía e instructor de salsa. En su segundo partido con Abejas decidió contarnos detalles extremadamente íntimos de su vida sexual. Fue un agradable jugador, pero dejó una huella anecdótica imborrable.",
    highlightMoments: [
      "El policía instructor de salsa",
      "La charla del segundo partido",
      "50 sombras de Grey versión mendocina"
    ],
    tags: ["Anécdota", "Demasiada información", "Humor"],
    coverImage: "/images/entrevistas/g-cover.jpg",
    accentQuote: "¡Demasiada información, master!",
    location: "Canchas de Godoy Cruz",
    mood: "Humorístico"
  },
  {
    id: 7,
    chapter: "Capítulo 07",
    archive: "Archivo 2013-2023",
    name: "Frases Abejas",
    nickname: "El diccionario del enjambre",
    role: "Colectivo",
    era: "Folklore",
    year: "2013-2023",
    duration: "05:40",
    quote: "¡Por la Nisman! ¡Passet! ¡Benitez! ¡Illuminati!!",
    shortDescription: "El diccionario de frases que solo los abeja entendemos.",
    story: "De '¡Por la Nisman!' a '¡Illuminati!!', pasando por '¡Passet!' y '¡Benitez!'. Un lenguaje propio que nació en las canchitas y se convirtió en parte de nuestra identidad.",
    highlightMoments: [
      "¡Por la Nisman!",
      "¡Illuminati!! de Juan Pablo",
      "La enajenación de Nacho con el Topo"
    ],
    tags: ["Frases", "Folklore", "Identidad"],
    coverImage: "/images/entrevistas/frases-cover.jpg",
    accentQuote: "El lenguaje que solo los abeja entendemos.",
    location: "Todas las canchitas",
    mood: "Divertido"
  }
]

export default function Entrevistas() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-1.5 text-xs tracking-[4px] font-medium text-honey-300 border border-honey-300/30 rounded-full mb-6">
              10 AÑOS ABEJAS FC
            </span>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-3px] text-white mb-5">
              ENTREVISTAS
            </h1>
            <p className="font-editorial text-xl md:text-2xl text-white/70 max-w-xl leading-tight">
              Las voces que construyeron el enjambre.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de entrevistas */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {entrevistas.map((ent, i) => (
              <motion.div
                key={ent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.015 }}
                onClick={() => setSelected(ent)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 cursor-pointer"
              >
                {/* Cover image */}
                <div className="relative h-80 overflow-hidden">
                  <PhotoPlaceholder icon="🎤" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
                  
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1 text-xs tracking-[2px] bg-white/10 text-white/90 rounded-full backdrop-blur">
                      {ent.chapter}
                    </span>
                    <span className="px-3 py-1 text-xs tracking-[2px] bg-white/10 text-white/90 rounded-full backdrop-blur">
                      {ent.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-honey-300 text-xs tracking-[2px] mb-1">{ent.archive}</div>
                    <h3 className="font-display text-4xl tracking-[-1.5px] text-white leading-none mb-1">
                      {ent.name}
                    </h3>
                    <p className="text-white/70 text-sm tracking-wide">{ent.nickname}</p>
                  </div>
                </div>

                <div className="p-9">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-0.5 text-[10px] font-bold tracking-widest bg-honey-300/10 text-honey-300 rounded-full">
                      {ent.role}
                    </span>
                    <span className="text-xs text-white/50">{ent.duration}</span>
                  </div>

                  <p className="font-editorial text-lg text-white/90 leading-tight mb-4">
                    “{ent.quote}”
                  </p>

                  <p className="text-sm text-white/60 line-clamp-3">
                    {ent.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL VIEW - Premium */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[300] overflow-y-auto bg-black/95 backdrop-blur-xl">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-28">
              <button
                onClick={() => setSelected(null)}
                className="fixed top-8 right-8 z-50 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Hero */}
              <div className="relative h-[420px] rounded-3xl overflow-hidden mb-12">
                <PhotoPlaceholder icon="🎤" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 text-xs tracking-[3px] bg-white/10 rounded-full">{selected.chapter}</span>
                    <span className="px-4 py-1 text-xs tracking-[3px] bg-white/10 rounded-full">{selected.year}</span>
                  </div>
                  <h1 className="font-display text-[72px] leading-none tracking-[-4px] text-white mb-2">
                    {selected.name}
                  </h1>
                  <p className="text-2xl text-white/80 tracking-tight">{selected.nickname}</p>
                </div>
              </div>

              {/* Quote destacada */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="font-editorial text-4xl leading-tight text-white/90 tracking-tight">
                  “{selected.quote}”
                </p>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 justify-center mb-16">
                {selected.tags.map((tag, i) => (
                  <span key={i} className="px-5 py-1.5 text-sm tracking-widest bg-white/5 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Relato completo */}
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-invert prose-lg max-w-none font-editorial text-white/90 leading-relaxed">
                  {selected.story}
                </div>
              </div>

              {/* Momentos destacados */}
              <div className="max-w-3xl mx-auto mt-20">
                <h4 className="text-xs tracking-[4px] text-honey-300 mb-6">MOMENTOS DESTACADOS</h4>
                <ul className="space-y-3 text-lg text-white/80">
                  {selected.highlightMoments.map((moment, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-honey-300 mt-1">→</span>
                      {moment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
