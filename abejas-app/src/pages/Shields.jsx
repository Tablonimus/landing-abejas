import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/Reveal'

export default function Shields() {
  const shields = [
    {
      id: 1,
      year: '2013',
      name: 'Escudo Original',
      desc: 'El primer escudo que usamos cuando el grupo recién nacía.',
      image: '/images/placeholder-shield.jpg',
    },
    {
      id: 2,
      year: '2016',
      name: 'Escudo Clásico',
      desc: 'La versión que usamos durante varios años y se volvió icónica.',
      image: '/images/placeholder-shield.jpg',
    },
    {
      id: 3,
      year: '2019',
      name: 'Escudo Actual',
      desc: 'El escudo que usamos actualmente, más pulido y definido.',
      image: '/images/placeholder-shield.jpg',
    },
    {
      id: 4,
      year: '2023',
      name: 'Edición Especial',
      desc: 'Versión conmemorativa de los 10 años.',
      image: '/images/placeholder-shield.jpg',
    },
  ]

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Escudos</SectionLabel>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
              ESCUDOS<br />HISTÓRICOS
            </h1>
            <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-6 max-w-xl leading-relaxed">
              Cada escudo representa una etapa de nuestra historia. 
              Del primer dibujo hecho a mano hasta el emblema actual.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de escudos */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shields.map((shield, i) => (
              <motion.div
                key={shield.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden border border-pitch-600/40 bg-pitch-800/50 hover:border-honey-300/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-pitch-900 flex items-center justify-center">
                  <img
                    src={shield.image}
                    alt={shield.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-honey-300 text-sm tracking-[0.2em]">
                      {shield.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider text-pitch-100 mb-2">
                    {shield.name}
                  </h3>
                  <p className="text-pitch-300 text-sm leading-relaxed">
                    {shield.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
