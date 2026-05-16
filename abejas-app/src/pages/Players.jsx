import PlayerCard from "../components/players/PlayerCard";
import { Reveal, SectionLabel } from "../components/ui/Reveal";
import { players } from "../data/mocks";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function Players() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const estados = useMemo(
    () => ["Todos", ...new Set(players.map((p) => p.estado))],
    [],
  );

  const filtered = useMemo(() => {
    return players.filter((p) => {
      const matchEstado = filter === "Todos" || p.estado === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.alias.toLowerCase().includes(q) ||
        p.nombre.toLowerCase().includes(q);
      return matchEstado && matchSearch;
    });
  }, [filter, search]);

  return (
    <div className="bg-void min-h-screen">
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <Reveal>
            <div className="mb-10">
              <SectionLabel>Plantel Oficial</SectionLabel>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-pitch-100">
                EL PANAL
              </h1>

              <p className="font-editorial text-lg md:text-xl text-pitch-300 italic max-w-xl leading-relaxed">
                16 leyendas vivas — o casi vivas — de la historia abeja.
                <br />
                <span className="text-honey-300 not-italic">
                  Este es nuestro equipo
                </span>
              </p>
            </div>
          </Reveal>

          {/* Filters - Más grande y visible */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="relative w-full sm:w-auto">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pitch-300">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar jugador..."
                  className="w-full sm:w-80 pl-12 pr-6 py-[15px] bg-pitch-800/70 border border-pitch-600/50 rounded-full text-base text-pitch-100 placeholder-pitch-300 focus:outline-none focus:border-honey-300/60 transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {estados.map((e) => (
                  <button
                    key={e}
                    onClick={() => setFilter(e)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      filter === e
                        ? "bg-honey-300 text-void shadow-[0_0_20px_rgba(250,204,21,0.35)]"
                        : "bg-pitch-800/60 text-pitch-200 border border-pitch-600/40 hover:border-honey-300/50 hover:text-honey-300"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <PlayerCard key={p.id} player={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-pitch-400 text-center py-16 font-editorial italic">
              Ningún jugador coincide con ese filtro.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
