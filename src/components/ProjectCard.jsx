import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCover from "./ProjectCover";
import skills from "../data/skills.json";

const nameOf = (id) => skills.find((s) => s.id === id)?.skillName;

export default function ProjectCard({ project, index }) {
  const stack = [
    ...project.skills.map(nameOf).filter(Boolean),
    ...(project.extraStack || []),
  ].slice(0, 4);

  return (
    <article className="lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel/60">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-abyss">
        {project.imageUrlBanner ? (
          <img
            src={project.imageUrlBanner}
            alt={`Interface do projeto ${project.name}`}
            loading="lazy"
            width="800"
            height="500"
            className="h-full w-full object-cover object-top transition-transform duration-[400ms] ease-out4 [@media(hover:hover)]:group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectCover
            slug={project.slug}
            label={project.role}
            className="h-full w-full transition-transform duration-[400ms] ease-out4 [@media(hover:hover)]:group-hover:scale-[1.04]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-label text-muted">
          <span>
            {String(index + 1).padStart(2, "0")} · {project.year}
          </span>
          <span className="text-azure/80">{project.kind}</span>
        </div>

        <h3 className="flex items-start justify-between gap-3 font-display text-2xl leading-tight text-paper">
          {/* The anchor wraps the heading and stretches over the card, so
              middle-click, focus and screen readers all behave. */}
          <Link
            to={`/projects/${project.id}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-4"
          >
            {project.name}
          </Link>
          <GoArrowUpRight
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-[transform,color] duration-200 ease-out4 [@media(hover:hover)]:group-hover:-translate-y-0.5 [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:text-azure"
          />
        </h3>

        <p className="text-sm leading-relaxed text-muted">{project.subtitle}</p>

        <ul className="mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-3 font-mono text-[0.62rem] uppercase tracking-wider text-muted/80">
          {stack.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-lineStrong">
                  /
                </span>
              )}
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
