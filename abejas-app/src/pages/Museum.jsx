import { motion } from 'framer-motion'
import JerseyCard from '../components/museum/JerseyCard'
import { Reveal, SectionLabel } from '../components/ui/Reveal'
import { camisetas } from '../data/mocks'
import { Award, Quote, Trophy, Image as ImageIcon } from 'lucide-react'

const museumSections = [
  {
    id: 'jerseys',
    label: 'Camisetas',
    icon: <Award size={16} />,
    desc: '10 años de evolución del manto sagrado',
    path: '/jerseys',
  },
  {
    id: 'frases',
    label: 'Frases célebres',
    icon: <Quote size={16} />,
    desc: 'La fraseología oficial del grupo',
    path: '/quotes',
  },
  {
    id: 'trofeos',
    label: 'Trofeos',
    icon: <Trophy size={16} />,
    desc: 'La Copa de Plata 2023 y el costillar de la gloria',
  },
  {
    id: 'papers',
    label: 'Noticias',
    icon: <ImageIcon size={16} />,
    desc: 'Policiales sin filtro',
    path: '/papers',
  },
  {
    id: 'shields',
    label: 'Escudos Históricos',
    icon: <ImageIcon size={16} />,
    desc: 'La evolución de nuestro emblema',
    path: '/shields',
  },
]

export default function Museum() {
   return (
     <div className="bg-void min-h-screen">
        {/* Header */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(250,204,21,0.12),transparent)]" />

           <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <SectionLabel>MUSEO ABEJAS FC</SectionLabel>
              <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100 mt-4 mb-6">
                ARCHIVO &
                <br />
                <span className="heading-accent">TESOROS</span>
              </h1>
              <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-4 leading-relaxed max-w-xl">
                El archivo oficial del grupo. Cada objeto cuenta una historia.
              </p>
            </motion.div>
         </div>
       </section>

{/* Sub-sections nav */}
        <section className="py-10 max-w-[1200px] mx-auto px-4 sm:px-6">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {museumSections.map((s, i) => (
             <motion.a
               key={s.id}
               href={s.path || '#'}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.08 }}
               whileHover={{ scale: 1.03 }}
               className="flex flex-col items-center text-center p-6 rounded-2xl border border-pitch-600/40 bg-pitch-700/20 hover:bg-pitch-700/50 hover:border-honey-300/25 transition-all duration-400"
             >
               <span className="text-2xl mb-3 text-honey-300">{s.icon}</span>
               <h3 className="font-[Bebas_Neue] text-lg tracking-wider text-pitch-100 mb-1">{s.label}</h3>
               <p className="text-pitch-400 text-xs">{s.desc}</p>
             </motion.a>
           ))}
         </div>
       </section>

{/* Jerseys */}
         <section id="jerseys" className="py-20 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
         <Reveal>
           <SectionLabel>Camisetas históricas</SectionLabel>
           <div className="flex items-baseline justify-between mb-10">
             <h2 className="font-[Bebas_Neue] text-4xl md:text-5xl tracking-wide text-pitch-100 mt-3">
               EL MANTO SAGRADO
             </h2>
           </div>
         </Reveal>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {camisetas.map((kit, i) => (
             <JerseyCard key={kit.anio} kit={kit} index={i} />
           ))}
         </div>
       </section>

{/* TheStar */}
         <section className="py-20 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative rounded-3xl border border-honey-300/20 bg-gradient-to-br from-honey-300/10 via-pitch-700/30 to-void/80 p-10 md:p-14 overflow-hidden"
         >
           <div className="absolute -top-10 -right-10 text-[12rem] opacity-[0.04]">⭐</div>
           <div className="relative z-10 max-w-xl">
             <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] bg-honey-300/15 text-honey-200 rounded-full border border-honey-300/25 mb-6">
               Leyenda
             </span>
             <h3 className="font-[Bebas_Neue] text-4xl md:text-5xl tracking-wider text-pitch-100 mb-4">
               LA ESTRELLA
               <br />
               DEL COSTILLAR
             </h3>
             <p className="font-editorial text-lg text-pitch-200 italic mb-5">
               "En una previa de partido, un grupo de jugadores de Abejas ganó mediante sorteo un costillar. En vez de olvidarlo, lo inmortalizaron: quedó grabado como una estrella sobre el escudo de cada camiseta."
             </p>
             <p className="text-honey-300/70 text-sm">No es un detalle cualquiera.</p>
           </div>
         </motion.div>
       </section>
     </div>
   )
 }
