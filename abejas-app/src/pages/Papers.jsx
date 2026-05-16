import { motion } from 'framer-motion'
import PaperClip from '../components/cards/PaperCard'
import { SectionLabel } from '../components/ui/Reveal'
import { policiales } from '../data/mocks'

export default function Papers() {
   return (
     <div className="bg-void min-h-screen">
{/* Header */}
        <section className="relative py-16 md:py-24 lg:py-36 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(250,204,21,0.1),transparent)]" />

         <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <SectionLabel>Abejas en los diarios</SectionLabel>
             <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl lg:text-9xl tracking-tight text-pitch-100 mt-4 mb-6">
               POLICIALES
             </h1>
             <p className="font-editorial text-xl text-pitch-300 italic max-w-lg mx-auto">
               Abejas FC no es noticia en Deportes. O casi nunca.
               <br />
               <span className="text-honey-300 not-italic">Su lugar es en Policiales.</span>
             </p>
           </motion.div>
         </div>
       </section>

{/* Papers clip strip */}
        <section className="py-12 md:py-20 max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
            {policiales.map((paper, i) => (
              <PaperClip key={paper.id} paper={paper} index={i} />
            ))}
          </div>
        </section>
     </div>
   )
 }
