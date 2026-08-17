import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import ChronicleCard from '../components/cards/ChronicleCard'
import { chronicles } from '../data/mocks'

function chronicleFromHash(hash) {
  const slug = hash.replace('#', '')
  return slug ? chronicles.find((c) => c.slug === slug) ?? null : null
}

export default function Cronicas() {
  const location = useLocation()
  const [selected, setSelected] = useState(() => chronicleFromHash(location.hash))

  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-1.5 text-xs tracking-[4px] font-medium text-honey-300 border border-honey-300/30 rounded-full mb-6">
              10 AÑOS ABEJAS FC
            </span>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-3px] text-white mb-5">
              CRÓNICAS
            </h1>
            <p className="font-editorial text-xl md:text-2xl text-white/70 max-w-xl leading-tight">
              Los relatos que quedaron en la memoria del enjambre.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de crónicas */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-10">
            {chronicles.map((c, i) => (
              <div key={c.slug} onClick={() => setSelected(c)} className="cursor-pointer">
                <ChronicleCard chronicle={c} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] overflow-y-auto bg-black/95 backdrop-blur-xl"
          >
            <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-20 pb-28">
              <button
                onClick={() => setSelected(null)}
                className="fixed top-8 right-8 z-50 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="max-w-3xl mx-auto">
                <div className="text-honey-300 text-sm tracking-[3px] mb-2">{selected.date}</div>
                <h1 className="font-display text-[52px] leading-none tracking-[-2px] text-white mb-3">
                  {selected.title}
                </h1>
                {selected.subtitle && (
                  <p className="font-editorial text-xl italic text-white/60 mb-8">{selected.subtitle}</p>
                )}

                {selected.heroQuote && (
                  <blockquote className="border-l-[3px] border-honey-300/40 pl-6 mb-10">
                    <p className="font-editorial text-2xl text-white/90 italic leading-relaxed">
                      {selected.heroQuote}
                    </p>
                  </blockquote>
                )}

                <div className="space-y-8">
                  {selected.sections?.map((s, i) => (
                    <div key={i}>
                      <h4 className="font-display text-2xl tracking-wide text-honey-300 mb-2">{s.heading}</h4>
                      <p className="font-editorial text-lg text-white/90 leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-12 text-sm text-white/50 font-typewriter">Por {selected.author}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
