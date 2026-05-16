import { motion } from 'framer-motion'
import { ROUTES } from '../../constants'

const backgroundImages = [
  '/src/assets/images/ultimacena.jpg',
  '/src/assets/images/Abeja viendo Abejas.jpg',
  '/src/assets/images/Yaelo y Davo revolución.jpg',
  '/src/assets/images/cumplenacho.jpg',
]

const floatingMemories = [
  { src: '/src/assets/images/cumplenacho.jpg', x: '12%', y: '22%', rotate: -8, delay: 0.4 },
  { src: '/src/assets/images/ultimacena.jpg', x: '78%', y: '18%', rotate: 6, delay: 1.1 },
  { src: '/src/assets/images/Abeja viendo Abejas.jpg', x: '85%', y: '68%', rotate: -4, delay: 2.3 },
]

export default function HeroBanner() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* CINEMATIC BACKGROUND LAYERS */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.08 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [1.08, 1.02, 1.05, 1.08] 
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: index * 14,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0.3)_0%,transparent_70%)]" />
      </div>

      {/* FLOATING PHOTO MEMORIES - Polaroid style */}
      {floatingMemories.map((memory, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block z-10 w-28 h-28 md:w-36 md:h-36 rounded-sm border-[6px] border-white/90 shadow-2xl overflow-hidden"
          style={{ left: memory.x, top: memory.y }}
          initial={{ opacity: 0, y: 40, rotate: memory.rotate }}
          animate={{ 
            opacity: [0.75, 0.95, 0.75],
            y: [0, -18, 0],
            rotate: memory.rotate 
          }}
          transition={{
            duration: 9 + i,
            repeat: Infinity,
            delay: memory.delay,
            ease: 'easeInOut'
          }}
        >
          <img 
            src={memory.src} 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        </motion.div>
      ))}

      {/* CONTENT - Documentary style */}
      <div className="relative z-20 container text-center pt-12 pb-20">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 text-[10px] tracking-[3px] font-medium text-honey-300 border border-honey-300/40 rounded-full">
            DESDE 2013 • BARRIO • FÚTBOL • MEMORIA
          </span>
        </div>

        {/* Main Headline - Editorial & Massive */}
        <h1 className="font-editorial text-[92px] md:text-[120px] leading-[0.82] tracking-[-4.5px] text-white mb-6">
          ABEJAS<br />FC
        </h1>

        {/* Emotional Subtitle */}
        <p className="max-w-xl mx-auto text-2xl md:text-[28px] leading-tight text-white/90 tracking-[-0.4px] mb-3 font-light">
          Un equipo que no debería existir.<br />Y sin embargo, vuela.
        </p>

        <p className="text-honey-300/70 text-sm tracking-[1.5px] mb-10">— El documental interactivo</p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={ROUTES.TIMELINE} 
            className="px-9 py-4 rounded-full bg-honey-300 hover:bg-honey-400 active:bg-honey-500 transition-all text-black font-medium tracking-wider text-sm"
          >
            VER LA HISTORIA
          </a>
          <a 
            href={ROUTES.CHRONICLES} 
            className="px-9 py-4 rounded-full border border-white/30 hover:bg-white/5 transition-all text-white text-sm tracking-wider"
          >
            LEER LAS CRÓNICAS
          </a>
        </div>
      </div>

      {/* Subtle scroll hint */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] tracking-[2px] text-white/50 z-20"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        SCROLL PARA ENTRAR
        <div className="w-px h-8 bg-white/40" />
      </motion.div>
    </section>
  )
}
