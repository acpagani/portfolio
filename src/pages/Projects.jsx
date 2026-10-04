import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { EASE_OUT } from "../lib/motion";
import projects from "../data/projects.json";

const FILTERS = ["Tudo", "Pessoal", "Acadêmico"];
const SORTS = [
  { id: "recent", label: "Recentes" },
  { id: "az", label: "A–Z" },
];

const layoutTransition = { duration: 0.35, ease: EASE_OUT };

export default function Projects() {
  const [filter, setFilter] = useState("Tudo");
  const [sort, setSort] = useState("recent");
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    const list = projects.filter((p) => filter === "Tudo" || p.kind === filter);
    return sort === "az"
      ? [...list].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
      : [...list].sort((a, b) => Number(b.year) - Number(a.year) || b.id - a.id);
  }, [filter, sort]);

  return (
    <>
      <PageHeader
        id="projetos-title"
        kicker="Projetos"
        title="O que eu já construí"
        lede="Projetos entre faculdade, Harvard e madrugadas próprias. Alguns viraram produto, outros viraram lição. Os dois estão aqui."
      >
        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por origem">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`relative rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-label transition-colors duration-150 ${
                    active ? "text-ink" : "text-muted hover:text-paper"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-azure"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  {f}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="label">Ordem</span>
            <div className="flex gap-1.5" role="group" aria-label="Ordenar projetos">
              {SORTS.map((s) => {
                const active = s.id === sort;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSort(s.id)}
                    aria-pressed={active}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-label transition-colors duration-150 ${
                      active
                        ? "border-azure text-azure"
                        : "border-line text-muted hover:border-lineStrong hover:text-paper"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="shell pb-10">
        <h2 className="sr-only">Lista de projetos</h2>
        <p aria-live="polite" className="sr-only">
          {visible.length === 1 ? "1 projeto exibido" : `${visible.length} projetos exibidos`}
        </p>

        {/* `layout` on the items is what makes re-sorting travel instead of
            cross-fade. Filtered-out cards simply unmount: pairing popLayout
            with layout here leaves exiting cards stuck mid-animation, and an
            exit that nobody waits for buys nothing. */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.li
              key={p.id}
              layout={!reduce}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                layout: layoutTransition,
                duration: 0.32,
                ease: EASE_OUT,
                delay: Math.min(i * 0.04, 0.24),
              }}
            >
              <ProjectCard project={p} index={i} />
            </motion.li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="py-16 text-center text-sm text-muted">
            Nada por aqui com esse filtro.
          </p>
        )}
      </div>
    </>
  );
}
