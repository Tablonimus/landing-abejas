/* @refresh reset */
import { motion } from 'framer-motion'
import HeroBanner from '../components/sections/HeroBanner'
import QuoteCarousel from '../components/sections/QuoteCarousel'
import StatsStrip from '../components/sections/StatsStrip'
import { Reveal, SectionLabel } from '../components/ui/Reveal'
import { heroQuotes, chronicles, stats, players } from '../data/mocks'
import { ROUTES } from '../constants'
import { Newspaper, Users, Award, ArrowRight, Quote, History } from 'lucide-react'

export default function Home() {
   const featuredPlayers = players.slice(0, 3)

   return (
     <div className="bg-void">
       {/* ── HERO ── */}
       <HeroBanner />

       {/* ── HERO QUOTES CAROUSEL ── */}
       <QuoteCarousel quotes={heroQuotes} />

        {/* ── FEATURED CHRONICLES ── */}
         <section className="py-20 md:py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
           <Reveal>
             <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
               <div>
                 <SectionLabel>Crónicas</SectionLabel>
                 <h2 className="font-[Bebas_Neue] text-4xl md:text-6xl tracking-tight mt-4 text-pitch-100">
                   EL ARCHIVO PERIODÍSTICO
                 </h2>
               </div>
               <a
                 href={ROUTES.CHRONICLES}
                 className="text-honey-300 text-sm font-medium tracking-wide hover:text-honey-200 transition-colors flex items-center gap-2"
               >
                 Ver todas <ArrowRight size={14} />
               </a>
             </div>
           </Reveal>

           <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
             {chronicles.map((c, i) => (
               <motion.article
                 key={c.slug}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group relative rounded-2xl border border-pitch-600/40 bg-pitch-700/50 p-8 md:p-9 hover:border-honey-300/25 transition-all duration-500 overflow-hidden cursor-pointer"
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-honey-300/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                 <div className="relative z-10">
                   <span className="inline-block font-display text-honey-300/50 text-xs tracking-[0.4em] uppercase mb-3">{c.tag}</span>

                   <h3 className="font-[Bebas_Neue] text-2xl md:text-3xl tracking-wider text-pitch-100 mb-2 group-hover:text-honey-200 transition-colors">
                     {c.title}
                   </h3>

                   {c.subtitle && (
                     <p className="font-editorial text-pitch-300 italic text-sm mb-4">{c.subtitle}</p>
                   )}

                   {c.heroQuote && (
                     <blockquote className="border-l-2 border-honey-300/30 pl-4 mb-5">
                       <p className="font-editorial text-pitch-200 text-sm md:text-base italic line-clamp-2">{c.heroQuote}</p>
                     </blockquote>
                   )}

                   <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-pitch-400 font-medium">
                     <span>{c.author}</span>
                     <span className="w-1 h-1 rounded-full bg-pitch-500" />
                     <span>Lee {c.readTime}</span>
                   </div>
                 </div>
               </motion.article>
             ))}
           </div>
         </div>
       </section>

       {/* ── STATS ── */}
       <StatsStrip stats={stats} />

        {/* ── FEATURED PLAYERS ── */}
         <section className="py-20 md:py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
           <Reveal>
             <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
               <div>
                 <SectionLabel>Jugadores</SectionLabel>
                 <h2 className="font-[Bebas_Neue] text-4xl md:text-6xl tracking-tight mt-4 text-pitch-100">
                   PERSONAJES DEL PANAL
                 </h2>
               </div>
               <a
                 href={ROUTES.PLAYERS}
                 className="text-honey-300 text-sm font-medium tracking-wide hover:text-honey-200 transition-colors flex items-center gap-2"
               >
                 Ver todos <ArrowRight size={14} />
               </a>
             </div>
           </Reveal>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
             {featuredPlayers.map((p, i) => (
               <motion.article
                 key={p.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group relative rounded-2xl border border-pitch-600/40 bg-gradient-to-br from-pitch-700/50 to-pitch-800/80 p-6 md:p-8 overflow-hidden hover:border-honey-300/25 transition-all duration-500 cursor-default"
               >
                 {/* Top stripe */}
                 <div className="absolute top-0 left-0 right-0 h-[3px]"
                   style={{ background: `linear-gradient(90deg, ${p.colores?.[0] || '#F59E0B'}, ${p.colores?.[1] || '#1C1917'})` }}
                 />

                 <div className="flex items-end justify-between mb-4">
                   <div
                     className="w-12 h-12 rounded-full flex items-center justify-center font-display text-2xl text-void"
                     style={{ background: `linear-gradient(135deg, ${p.colores?.[0] || '#F59E0B'}, ${p.colores?.[1] || '#1C1917'})` }}
                   >
                     {p.alias.charAt(0)}
                   </div>
                   <span className="text-honey-300/50 text-[10px] font-semibold tracking-wider">{p.rol}</span>
                 </div>

                 <h3 className="font-[Bebas_Neue] text-2xl tracking-wider text-pitch-100 mb-0.5">{p.alias}</h3>
                 <p className="text-pitch-300 text-xs mb-3">{p.nombre}</p>
                 <p className="text-pitch-300 text-sm leading-relaxed line-clamp-3">{p.lore}</p>
               </motion.article>
             ))}
           </div>
         </div>
       </section>

{/* ── SPECS / QUICK LINKS ── */}
        <section className="py-16 md:py-24 lg:py-32 border-t border-pitch-600/30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
           <Reveal>
             <SectionLabel>Explorá el panal</SectionLabel>
             <h2 className="font-[Bebas_Neue] text-4xl md:text-6xl tracking-tight mt-4 mb-14 text-pitch-100">
               TODO LO QUE CONTIENE
             </h2>
           </Reveal>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
             {[
               { icon: <History size={20} />, label: 'Timeline', desc: 'De diciembre de 2013 a hoy', path: ROUTES.TIMELINE, color: 'honey' },
               { icon: <Award size={20} />, label: 'Museo', desc: 'Camisetas, frases, trofeos', path: ROUTES.MUSEUM, color: 'amber' },
                { icon: <Award size={20} />, label: 'Camisetas', desc: 'El manto sagrado', path: '/jerseys', color: 'honey' },
               { icon: <Newspaper size={20} />, label: 'Crónicas', desc: 'El documental escrito', path: ROUTES.CHRONICLES, color: 'stone' },
               { icon: <Users size={20} />, label: 'Jugadores', desc: '16 leyendas vivas', path: ROUTES.PLAYERS, color: 'honey' },
               { icon: <Quote size={20} />, label: 'Frases', desc: 'La fraseología abeja', path: ROUTES.QUOTES, color: 'amber' },
               { icon: <Newspaper size={20} />, label: 'Policiales', desc: 'Las noticias que no van en Deportes', path: ROUTES.PAPERS, color: 'stone' },
             ].map((item, i) => (
               <motion.a
                 key={item.label}
                 href={item.path}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.08 }}
                 whileHover={{ y: -4 }}
                 className="relative rounded-2xl border border-pitch-600/40 bg-pitch-700/20 p-7 md:p-8 hover:bg-pitch-700/50 hover:border-honey-300/20 transition-all duration-400 group"
               >
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                   item.color === 'honey' ? 'bg-honey-300/15 text-honey-200' :
                   item.color === 'amber' ? 'bg-amber-500/15 text-amber-400' :
                   'bg-stone-500/10 text-stone-400'
                 }`}>
                   {item.icon}
                 </div>
                 <h3 className="font-[Bebas_Neue] text-xl tracking-wider text-pitch-100 mb-1 group-hover:text-honey-200 transition-colors">{item.label}</h3>
                 <p className="text-pitch-400 text-xs">{item.desc}</p>
               </motion.a>
             ))}
           </div>
         </div>
       </section>
     </div>
   )
 }
