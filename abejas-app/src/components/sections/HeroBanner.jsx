import { motion } from 'framer-motion'
import { ROUTES } from '../../constants'
import './HeroBanner.css'

// Importar imágenes correctamente con Vite
import hero1 from '../../assets/images/ultimacena.jpg'
import hero2 from '../../assets/images/Abeja viendo Abejas.jpg'
import hero3 from '../../assets/images/Yaelo y Davo revolución.jpg'
import hero4 from '../../assets/images/cumplenacho.jpg'

const backgroundImages = [hero1, hero2, hero3, hero4]

const floatingMemories = [
  { src: hero4, x: '5%', y: '14%', rotate: -5, delay: 0.5, size: 'w-[200px] md:w-[260px]' },
  { src: hero1, x: '84%', y: '10%', rotate: 4, delay: 1.8, size: 'w-[180px] md:w-[240px]' },
  { src: hero2, x: '80%', y: '56%', rotate: -3, delay: 2.6, size: 'w-[220px] md:w-[290px]' },
  { src: hero3, x: '8%', y: '68%', rotate: 6, delay: 3.4, size: 'w-[190px] md:w-[250px]' },
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
              duration: 7,
              repeat: Infinity,
              delay: index * 7,
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
        <div className="mb-16 md:mb-20">
          <span className="inline-block !px-4 py-1 text-[15px] tracking-[3px] font-medium text-honey-300 border border-honey-300/40 rounded-full">
           BARRIO • FUTBOL • ASADO • MEMORIA
          </span>
        </div>
        <div className='h-6'></div>
        {/* TÍTULO GIGANTE - Estructura limpia */}
        <div className="mt-10 md:mt-14 mb-8 flex flex-col items-center">
          <h1 className="hero-title mb-1">ABEJAS</h1>
          <h1 className="hero-title-fc">FC</h1>
        </div>

        {/* FRASE con quotes en posición editorial */}
        <div className="mb-14 text-center">
          <p className="hero-phrase inline-flex items-start justify-center max-w-[620px]">
            <span className="hero-quote -mr-2">“</span>
            <span className="leading-tight">
              Un equipo que no debería existir.<br />
              Y sin embargo, vuela.
            </span>
            <span className="hero-quote self-end -ml-2 -mb-2">”</span>
          </p>
        </div>
      <div className='h-10'></div>
        {/* BOTONES con lógica UX/UI clara */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={ROUTES.TIEMPO} className="hero-cta-primary">
            VER LA HISTORIA
          </a>
          <a href="/datos" className="hero-cta-secondary">
            DATOS
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div className="text-[10px] tracking-[4px] text-honey-300/85">DESLIZA PARA ENTRAR</div>
        <div className="w-px h-11 bg-gradient-to-b from-honey-300/65 to-transparent" />
      </motion.div>
    </section>
  )
}
