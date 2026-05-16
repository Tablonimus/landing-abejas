import { motion } from 'framer-motion'
import ChronicleCard from '../components/cards/ChronicleCard'
import { Reveal, SectionLabel } from '../components/ui/Reveal'
import { chronicles } from '../data/mocks'

export default function Chronicles() {
  return (
    <div className="bg-void min-h-screen">
      {/* ── HEADER ── */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.09),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <SectionLabel>Crónicas</SectionLabel>

              <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
                EL DOCUMENTAL
                <br />
                <span className="heading-accent">
                  ESCRITO
                </span>
              </h1>

              <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-7 leading-relaxed max-w-xl">
                Cada partido, cada anécdota, cada gol, cada discusión, cada asado y cada tercer tiempo tiene una historia. Esta es la versión escrita.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LISTA DE CRÓNICAS ── */}
      <section className="section section--sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-7">
            {chronicles.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <ChronicleCard chronicle={c} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
