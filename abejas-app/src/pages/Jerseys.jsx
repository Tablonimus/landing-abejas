import JerseyCard from '../components/museum/JerseyCard'
import { SectionLabel } from '../components/ui/Reveal'
import { camisetas } from '../data/mocks'

export default function Jerseys() {
  return (
    <div className="bg-void min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <SectionLabel>Camisetas</SectionLabel>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
              EL MANTO<br />SAGRADO
            </h1>
            <p className="font-editorial text-lg md:text-xl text-pitch-300 italic mt-6 max-w-xl leading-relaxed">
              10 años de evolución del manto sagrado.
              Cada camiseta cuenta una parte de nuestra historia.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de camisetas */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {camisetas.map((kit, i) => (
              <JerseyCard key={kit.id} kit={kit} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
