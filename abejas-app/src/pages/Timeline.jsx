import { motion } from 'framer-motion'
import TimelineCard from '../components/timeline/TimelineCard'
import { timeline } from '../data/mocks'
import { Calendar, History } from 'lucide-react'

export default function TimelinePage() {
   return (
     <div className="bg-void min-h-screen">
{/* Header */}
        <section className="relative py-16 md:py-24 lg:py-36 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_-20%,rgba(250,204,21,0.12),transparent)]" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(250,204,21,0.05),transparent)]" />

         <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="inline-flex items-center gap-3 text-honey-300 text-xs uppercase tracking-[0.4em] font-medium mb-6">
               <Calendar size={14} />
               2013 — Presente
               <History size={14} />
             </span>

             <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl lg:text-9xl tracking-tight text-pitch-100 mb-6">
               LÍNEA
               <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey-200 to-honey-400">
                 DEL TIEMPO
               </span>
             </h1>

             <p className="font-editorial text-xl md:text-2xl text-pitch-300 italic max-w-xl mx-auto">
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
