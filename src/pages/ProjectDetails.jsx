import { Link, Navigate, useParams } from "react-router-dom";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Gallery from "../components/Gallery";
import ProjectCover from "../components/ProjectCover";
import SkillChip from "../components/SkillChip";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n/context";
import { useProjects, useSkills } from "../i18n/data";

export default function ProjectDetails() {
  const { id } = useParams();
  const { t } = useLang();
  const projects = useProjects();
  const skills = useSkills();
  const idx = projects.findIndex((p) => String(p.id) === String(id));

  if (idx === -1) return <Navigate to="/projects" replace />;

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const images = project.imageUrlBanner
    ? [project.imageUrlBanner, ...project.imageUrls]
    : project.imageUrls;

  return (
    <article className="pb-10">
      <div className="shell pb-10 pt-32 md:pt-36">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-label text-muted transition-colors duration-150 hover:text-azure"
        >
          <GoArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-150 ease-out4 group-hover:-translate-x-1"
          />
          {t.common.projects}
        </Link>
      </div>

      <header className="shell flex flex-col gap-6 pb-10">
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-label text-muted">
          <span className="text-azure">{t.kinds[project.kind]}</span>
          <span aria-hidden="true" className="h-px w-6 bg-lineStrong" />
          <span>{project.year}</span>
          <span aria-hidden="true" className="h-px w-6 bg-lineStrong" />
          <span>{project.role}</span>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.05}
          className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] text-paper"
        >
          {project.name}
        </Reveal>

        <Reveal as="p" delay={0.1} className="max-w-prose text-lg leading-relaxed text-paper/90">
          {project.intro}
        </Reveal>
      </header>

      <div className="shell">
        <Reveal>
          {images.length > 0 ? (
            <Gallery images={images} name={project.name} />
          ) : (
            <ProjectCover
              slug={project.slug}
              label={project.subtitle}
              className="aspect-[16/9] w-full rounded-xl border border-line"
            />
          )}
        </Reveal>
      </div>

      <div className="shell grid gap-14 pt-16 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2 className="label">{t.project.about}</h2>
          {/* Descrições longas podem quebrar em parágrafos com "\n\n"; as de
              um bloco só continuam saindo como um único <p>. */}
          <div className="flex max-w-prose flex-col gap-4">
            {project.description.split("\n\n").map((par) => (
              <p key={par.slice(0, 32)} className="text-base leading-[1.75] text-muted">
                {par}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-azure px-6 py-3 font-mono text-[0.7rem] uppercase tracking-label text-ink transition-[transform,background-color] duration-150 ease-out4 [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:bg-frost active:scale-[0.97]"
              >
                {t.project.live}
                <GoArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-lineStrong px-6 py-3 font-mono text-[0.7rem] uppercase tracking-label text-paper transition-[transform,color,border-color] duration-150 ease-out4 [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:border-azure [@media(hover:hover)]:hover:text-azure active:scale-[0.97]"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" />
                {t.project.code}
              </a>
            )}
          </div>
        </div>

        <aside className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
          <div className="flex flex-col gap-3 border-t border-line pt-5">
            <span className="label">{t.project.context}</span>
            <div className="flex items-center gap-3">
              {project.institutionImage && (
                <img
                  src={project.institutionImage}
                  alt=""
                  aria-hidden="true"
                  width="36"
                  height="36"
                  className="h-9 w-9 rounded-md object-contain"
                />
              )}
              <span className="text-sm text-paper">{project.institution}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-5">
            <span className="label">{t.project.tech}</span>
            <ul className="grid grid-cols-2 gap-2">
              {project.skills.map((sid) => {
                const s = skills.find((x) => x.id === sid);
                return s ? (
                  <li key={sid}>
                    <SkillChip {...s} compact />
                  </li>
                ) : null;
              })}
            </ul>
            {project.extraStack?.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-1">
                {project.extraStack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>

      <nav className="shell pt-24" aria-label={t.project.nextNav}>
        <Link
          to={`/projects/${next.id}`}
          className="lift group flex items-center justify-between gap-6 rounded-xl border border-line bg-panel/50 p-7"
        >
          <span className="flex flex-col gap-2">
            <span className="label">{t.project.next}</span>
            <span className="font-display text-3xl leading-none text-paper">{next.name}</span>
          </span>
          <GoArrowUpRight
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-muted transition-[color,transform] duration-200 ease-out4 [@media(hover:hover)]:group-hover:translate-x-1 [@media(hover:hover)]:group-hover:text-azure"
          />
        </Link>
      </nav>
    </article>
  );
}
