import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/Reveal'
import PhotoPlaceholder from '../components/ui/PhotoPlaceholder'
import { escudos } from '../data/mocks'

export default function Shields() {
  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <SectionLabel>Escudos</SectionLabel>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
              ESCUDOS<br />HISTÓRICOS
            </h1>
            <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-6 max-w-xl leading-relaxed">
              Cada escudo representa una etapa de nuestra historia.
              Este archivo se está armando con el material real del grupo.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de escudos */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          {escudos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto text-center rounded-3xl border border-pitch-600/40 bg-pitch-700/20 px-10 py-20"
            >
              <span className="text-4xl">🐝</span>
              <h3 className="font-display text-2xl tracking-wider text-pitch-100 mt-5 mb-3">
                ARCHIVO EN CONSTRUCCIÓN
              </h3>
              <p className="text-pitch-300 text-sm leading-relaxed">
                Todavía no cargamos los escudos históricos reales del equipo. En cuanto tengamos las fechas, nombres e imágenes, este archivo se completa acá.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {escudos.map((shield, i) => (
                <motion.div
                  key={shield.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden border border-pitch-600/40 bg-pitch-800/50 hover:border-honey-300/30 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3]">
                    <PhotoPlaceholder label={shield.anio} icon="🛡️" />
                  </div>
                  <div className="p-9">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-honey-300 text-sm tracking-[0.2em]">
                        {shield.anio}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl tracking-wider text-pitch-100 mb-2">
                      {shield.nombre}
                    </h3>
                    <p className="text-pitch-300 text-sm leading-relaxed">
                      {shield.historia}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
