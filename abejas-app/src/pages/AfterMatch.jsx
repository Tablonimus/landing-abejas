import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Curated epic photos from tercer_tiempo
const gallery = [
  { id: 1, src: '/tercer_tiempo/facebook/Asado 1.jpg', caption: 'Asado post-derrota', date: '2018', tag: 'Fuego' },
  { id: 2, src: '/tercer_tiempo/facebook/After 1.jpg', caption: 'El after que duró hasta el amanecer', date: '2019', tag: 'Caos' },
  { id: 3, src: '/tercer_tiempo/facebook/Abrazo equipo.jfif', caption: 'Abrazo después del gol', date: '2021', tag: 'Hermandad' },
  { id: 4, src: '/tercer_tiempo/facebook/Nacho Asado.jpg', caption: 'Nacho controlando el fuego', date: '2017', tag: 'Leyenda' },
  { id: 5, src: '/tercer_tiempo/facebook/Cumple Nacho.jpg', caption: 'Cumple de Nacho con el equipo', date: '2022', tag: 'Fiesta' },
  { id: 6, src: '/tercer_tiempo/facebook/última cena abeja.jpg', caption: 'La última cena abeja', date: '2023', tag: 'Mística' },
  { id: 7, src: '/tercer_tiempo/facebook/Valhalla barril.jpg', caption: 'Barril en Valhalla', date: '2019', tag: 'Cerveza' },
  { id: 8, src: '/tercer_tiempo/facebook/Davo chori After.jpg', caption: 'Davo con el chori sagrado', date: '2016', tag: 'Memoria' },
  { id: 9, src: '/tercer_tiempo/facebook/Festejo Abejas TDM.jpg', caption: 'Festejo TDM', date: '2022', tag: 'Gloria' },
  { id: 10, src: '/tercer_tiempo/facebook/Guille botella tupper.jpg', caption: 'Guille y la botella legendaria', date: '2018', tag: 'Caos' },
  { id: 11, src: '/tercer_tiempo/facebook/Asado casa Tonga.jpg', caption: 'Asado en casa de Tonga', date: '2020', tag: 'Hogar' },
  { id: 12, src: '/tercer_tiempo/facebook/Migue cerveza.jfif', caption: 'Migue con la pinta perfecta', date: '2017', tag: 'Birra' },
  { id: 13, src: '/tercer_tiempo/facebook/Equipo.jfif', caption: 'El equipo completo', date: '2015', tag: 'Historia' },
  { id: 14, src: '/tercer_tiempo/facebook/Camiseta negra Tonga Ardujpg.jpg', caption: 'Camiseta negra histórica', date: '2016', tag: 'Identidad' },
  { id: 15, src: '/tercer_tiempo/facebook/Pali After.jpg', caption: 'Pali en modo after', date: '2021', tag: 'Energía' },
  { id: 16, src: '/tercer_tiempo/facebook/Fernando y Abeja.jpg', caption: 'Fernet y Abeja', date: '2019', tag: 'Ritual' },
  { id: 17, src: '/tercer_tiempo/facebook/Disco Vlado 1.jpg', caption: 'DJ Kuden en acción', date: '2018', tag: 'Música' },
  { id: 18, src: '/tercer_tiempo/facebook/Nacho Momo Gamba.jfif', caption: 'Nacho y Momo', date: '2022', tag: 'Dúo' },
]

const floatingPhrases = [
  "Por la Nisman", "Illuminati", "Passet", "Por los caídos", 
  "Que viva el after", "La última birra", "Zonda eterno"
]

export default function AfterMatch() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showPhrases] = useState(true)

  const openModal = (index) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)
  const goTo = (newIndex) => {
    if (newIndex < 0) newIndex = gallery.length - 1
    if (newIndex >= gallery.length) newIndex = 0
    setSelectedIndex(newIndex)
  }

  const current = selectedIndex !== null ? gallery[selectedIndex] : null

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* HEADER - Documentary style */}
      <div className="relative pt-20 pb-16 px-6 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-honey-300/30 text-xs tracking-[3px] text-honey-300 mb-6">
            ARCHIVO 2013 — PRESENTE
          </div>
          <h1 className="font-editorial text-[92px] md:text-[120px] leading-none tracking-[-6px] mb-4">
            TERCER<br />TIEMPO
          </h1>
          <p className="text-2xl text-white/70 max-w-md mx-auto">
            El mural de las noches que no terminan.
          </p>
        </div>
      </div>

      {/* MASONRY GALLERY */}
      <div className="container pt-12 pb-24 relative">
        {/* Floating phrases */}
        {showPhrases && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {floatingPhrases.slice(0, 5).map((phrase, i) => (
              <div
                key={i}
                className="absolute text-[10px] uppercase tracking-[3px] text-honey-300/40 font-mono"
                style={{
                  left: `${15 + (i % 3) * 28}%`,
                  top: `${20 + Math.floor(i / 3) * 35}%`,
                  transform: `rotate(${i % 2 === 0 ? -8 : 7}deg)`
                }}
              >
                {phrase}
              </div>
            ))}
          </div>
        )}

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.015 }}
              onClick={() => openModal(index)}
              className="group mb-4 break-inside-avoid cursor-pointer relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/10"
            >
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  loading="lazy"
                />
                
                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
                
                {/* Yellow glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.15),transparent_70%)]" />

                {/* Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs tracking-[1.5px] text-honey-300/90 mb-1">{photo.date}</div>
                      <div className="font-medium text-[15px] leading-tight pr-4">{photo.caption}</div>
                    </div>
                    <div className="text-[10px] px-2.5 py-px rounded bg-white/10 text-white/60 font-mono tracking-widest">
                      {photo.tag}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PREMIUM FULLSCREEN MODAL */}
      <AnimatePresence>
        {current && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
            <div className="relative max-w-[1400px] w-full">
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute -top-2 -right-2 z-50 p-3 text-white/60 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={current.src}
                  alt={current.caption}
                  className="max-h-[88vh] w-full object-contain bg-black"
                />

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-honey-300 text-xs tracking-[2px] mb-1">{current.date} • {current.tag}</div>
                      <div className="text-white text-3xl font-light tracking-tight">{current.caption}</div>
                    </div>
                    <div className="text-right text-xs text-white/50 font-mono">
                      {selectedIndex + 1} / {gallery.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <button 
                onClick={() => goTo(selectedIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-white transition-colors"
              >
                <ChevronLeft size={42} />
              </button>
              <button 
                onClick={() => goTo(selectedIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-white transition-colors"
              >
                <ChevronRight size={42} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
