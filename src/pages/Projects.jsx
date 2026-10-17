import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { EASE_OUT } from "../lib/motion";
import { useLang } from "../i18n/context";
import { useProjects } from "../i18n/data";

// Filter values are the `kind` keys stored in projects.json; labels come from t.kinds.
const FILTERS = ["all", "Pessoal", "Acadêmico"];
const SORTS = ["recent", "az"];

const layoutTransition = { duration: 0.35, ease: EASE_OUT };

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const reduce = useReducedMotion();
  const { t } = useLang();
  const projects = useProjects();

  const visible = useMemo(() => {
    const list = projects.filter((p) => filter === "all" || p.kind === filter);
    return sort === "az"
      ? [...list].sort((a, b) => a.name.localeCompare(b.name, t.locale))
      : [...list].sort((a, b) => Number(b.year) - Number(a.year) || b.id - a.id);
  }, [projects, filter, sort, t.locale]);

  return (
    <>
      <PageHeader
        id="projetos-title"
        kicker={t.projects.kicker}
        title={t.projects.title}
        lede={t.projects.lede}
      >
        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label={t.projects.filterGroup}>
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
                  {f === "all" ? t.projects.all : t.kinds[f]}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="label">{t.projects.sortLabel}</span>
            <div className="flex gap-1.5" role="group" aria-label={t.projects.sortGroup}>
              {SORTS.map((s) => {
                const active = s === sort;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSort(s)}
                    aria-pressed={active}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-label transition-colors duration-150 ${
                      active
                        ? "border-azure text-azure"
                        : "border-line text-muted hover:border-lineStrong hover:text-paper"
                    }`}
                  >
                    {t.projects.sorts[s]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="shell pb-10">
        <h2 className="sr-only">{t.projects.listTitle}</h2>
        <p aria-live="polite" className="sr-only">
          {t.projects.count(visible.length)}
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
            {t.projects.empty}
          </p>
        )}
      </div>
    </>
  );
}
