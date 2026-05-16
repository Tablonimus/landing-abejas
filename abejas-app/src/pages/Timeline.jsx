import { motion } from 'framer-motion'
import TimelineCard from '../components/timeline/TimelineCard'
import { SectionLabel } from '../components/ui/Reveal'
import { timeline } from '../data/mocks'

export default function TimelinePage() {
   return (
     <div className="bg-void min-h-screen">
{/* Header */}
        <section className="relative py-16 md:py-24 lg:py-36 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_-20%,rgba(250,204,21,0.12),transparent)]" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(250,204,21,0.05),transparent)]" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <SectionLabel>Línea del Tiempo</SectionLabel>

              <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
                LÍNEA
                <br />
                <span className="heading-accent">DEL TIEMPO</span>
              </h1>

              <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-7 leading-relaxed max-w-xl">
                "Según las leyes de la aerodinámica, las abejas no deberían poder volar. Pero las abejas no saben de aerodinámica… Y vuelan."
              </p>
            </motion.div>
         </div>
       </section>

{/* Timeline */}
        <section className="py-12 md:py-20 max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line - hidden on mobile, shown on md+ */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-honey-300/50 via-pitch-600/30 to-transparent md:transform md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-16">
              {timeline.map((event, i) => (
                <TimelineCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>
     </div>
   )
 }
