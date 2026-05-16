import { motion } from 'framer-motion'
import { ROUTES } from '../../constants'
import './HeroBanner.css'

const backgroundImages = [
  '/src/assets/images/ultimacena.jpg',
  '/src/assets/images/Abeja viendo Abejas.jpg',
  '/src/assets/images/Yaelo y Davo revolución.jpg',
  '/src/assets/images/cumplenacho.jpg',
]

const floatingMemories = [
  { src: '/src/assets/images/cumplenacho.jpg', x: '5%', y: '14%', rotate: -5, delay: 0.5, size: 'w-[200px] md:w-[260px]' },
  { src: '/src/assets/images/ultimacena.jpg', x: '84%', y: '10%', rotate: 4, delay: 1.8, size: 'w-[180px] md:w-[240px]' },
  { src: '/src/assets/images/Abeja viendo Abejas.jpg', x: '80%', y: '56%', rotate: -3, delay: 2.6, size: 'w-[220px] md:w-[290px]' },
]

export default function HeroBanner() {
  return (
    <section className="hero-banner pt-[80px] md:pt-[90px]">
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.14 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [1.14, 1.05, 1.08, 1.14] 
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              delay: index * 19,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Deep cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/72 to-black/96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(0,0,0,0.6)_0%,transparent_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/55" />
      </div>

      {/* LARGER CINEMATIC POLAROIDS */}
      {floatingMemories.map((memory, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block z-10 ${memory.size} rounded-2xl border-[9px] border-white/90 shadow-[0_30px_70px_rgba(0,0,0,0.65)] overflow-hidden`}
          style={{ left: memory.x, top: memory.y }}
          initial={{ opacity: 0, y: 80, rotate: memory.rotate }}
          animate={{ 
            opacity: [0.6, 0.9, 0.6],
            y: [0, -30, 0],
            rotate: memory.rotate 
          }}
          transition={{
            duration: 13 + i,
            repeat: Infinity,
            delay: memory.delay,
            ease: 'easeInOut'
          }}
        >
          <img src={memory.src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65" />
        </motion.div>
      ))}

      {/* CONTENT - Documentary style */}
      <div className="relative z-20 container text-center pt-12 pb-20">
        {/* Eyebrow */}
        <div className="mb-14 md:mb-16">
          <span className="inline-block px-4 py-1 text-[10px] tracking-[3px] font-medium text-honey-300 border border-honey-300/40 rounded-full">
            DESDE 2013 • BARRIO • FÚTBOL • MEMORIA
          </span>
        </div>

        {/* TÍTULO GIGANTE */}
        <div className="-space-y-3 md:-space-y-5 mb-7">
          <h1 className="hero-title">ABEJAS</h1>
          <h1 className="hero-title-fc">FC</h1>
        </div>

        {/* FRASE centrada con comillas amarillas grandes */}
        <div className="max-w-[620px] mx-auto mb-14 text-center">
          <div className="hero-quote mb-1">“</div>
          <p className="hero-phrase">
            Un equipo que no debería existir.<br />
            Y sin embargo, vuela.
          </p>
          <div className="hero-quote mt-1">”</div>
        </div>

        {/* BOTONES con lógica UX/UI clara */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={ROUTES.TIMELINE} className="hero-cta-primary">
            VER LA HISTORIA
          </a>
          <a href={ROUTES.CHRONICLES} className="hero-cta-secondary">
            LEER LAS CRÓNICAS
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div className="text-[10px] tracking-[4px] text-white/35">SCROLL TO ENTER</div>
        <div className="w-px h-11 bg-gradient-to-b from-white/25 to-transparent" />
      </motion.div>
    </section>
  )
}
