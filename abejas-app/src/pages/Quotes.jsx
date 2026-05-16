import { motion } from 'framer-motion'
import QuoteCard from '../components/cards/QuoteCard'
import { SectionLabel } from '../components/ui/Reveal'
import { frases } from '../data/mocks'

export default function Quotes() {
  return (
    <div className="bg-void min-h-screen">
<section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.09),transparent)]" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
           >
             <SectionLabel>Frases históricas</SectionLabel>
 
             <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
               FRASEOLOGÍA
               <br />
               <span className="heading-accent">ABEJA</span>
             </h1>
 
             <p className="font-editorial text-pitch-300 italic text-base md:text-lg mt-6 max-w-xl leading-relaxed">
               Del grito de gol al insulto más elaborado: cada frase tiene historia, contexto y un momento exacto en que nació.
             </p>
           </motion.div>
        </div>
      </section>

<section className="section section--sm">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {frases.map((f, i) => (
              <QuoteCard key={f.id} frase={f.frase} autor={f.autor} contexto={f.contexto} tag={f.tag} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
