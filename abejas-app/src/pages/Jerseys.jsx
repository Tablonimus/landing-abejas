import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/Reveal'

export default function Jerseys() {
  // Placeholder de camisetas (hasta que tengas las imágenes reales)
  const jerseys = [
    {
      id: 1,
      year: '2014',
      name: 'Primera camiseta',
      desc: 'La primera remera oficial del equipo. Negra con detalles amarillos.',
      image: '/images/placeholder-jersey.jpg',
    },
    {
      id: 2,
      year: '2016',
      name: 'Camiseta negra clásica',
      desc: 'La icónica camiseta negra que usamos durante varios años.',
      image: '/images/placeholder-jersey.jpg',
    },
    {
      id: 3,
      year: '2018',
      name: 'Camiseta amarilla',
      desc: 'Versión amarilla que usamos en partidos especiales.',
      image: '/images/placeholder-jersey.jpg',
    },
    {
      id: 4,
      year: '2020',
      name: 'Edición especial',
      desc: 'Camiseta conmemorativa de los 7 años.',
      image: '/images/placeholder-jersey.jpg',
    },
  ]

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Camisetas</SectionLabel>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
              EL MANTO<br />SAGRADO
            </h1>
            <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-6 max-w-xl leading-relaxed">
              10 años de evolución del escudo que nos identifica. 
              Cada camiseta cuenta una parte de nuestra historia.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de camisetas */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jerseys.map((jersey, i) => (
              <motion.div
                key={jersey.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden border border-pitch-600/40 bg-pitch-800/50 hover:border-honey-300/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-pitch-900 flex items-center justify-center">
                  <img
                    src={jersey.image}
                    alt={jersey.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-honey-300 text-sm tracking-[0.2em]">
                      {jersey.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider text-pitch-100 mb-2">
                    {jersey.name}
                  </h3>
                  <p className="text-pitch-300 text-sm leading-relaxed">
                    {jersey.desc}
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
