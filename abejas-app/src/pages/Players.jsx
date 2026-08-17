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
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
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

          {/* Filtros y Búsqueda - Diseño Premium */}
          <Reveal>
            <div className="mb-14">
              {/* Buscador principal */}
              <div className="relative max-w-2xl mb-8">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-honey-300/70">
                  <Search size={22} />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar leyendas del grupo..."
                  className="w-full h-16 md:h-20 pl-16 pr-8 text-lg bg-pitch-900/80 border border-pitch-700/60 rounded-2xl text-white placeholder:text-pitch-400 focus:outline-none focus:border-honey-300/60 focus:ring-1 focus:ring-honey-300/30 transition-all duration-300 backdrop-blur-lg"
                />
              </div>

              {/* Filtros */}
              <div className="flex flex-wrap gap-3">
                {estados.map((e) => (
                  <button
                    key={e}
                    onClick={() => setFilter(e)}
                    className={`px-8 py-3.5 rounded-full text-sm font-semibold tracking-[1px] uppercase transition-all duration-300 ${
                      filter === e
                        ? "bg-honey-300 text-black shadow-[0_0_24px_rgba(250,204,21,0.4)]"
                        : "bg-pitch-900/70 text-pitch-200 border border-pitch-700/50 hover:border-honey-300/40 hover:text-honey-300"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p, i) => (
              <PlayerCard key={p.id} player={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-pitch-400 text-center py-20 font-editorial italic">
              Ningún jugador coincide con ese filtro.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
