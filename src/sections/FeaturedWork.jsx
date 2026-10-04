import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Action from "../components/Action";
import { listVariants, itemVariants, viewportOnce } from "../lib/motion";
import projects from "../data/projects.json";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative z-10 py-28" aria-labelledby="trabalho-title">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          id="trabalho-title"
          index="04"
          kicker="Trabalho"
          title="Quatro problemas de ordenar coisas"
          lede="Pós-venda, patrimônio, órbita, laboratório. Muda o domínio, permanece a pergunta: o que merece atenção primeiro?"
        />

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {featured.map((p, i) => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-start">
          <Action to="/projects" variant="ghost" icon={<GoArrowUpRight className="h-4 w-4" />}>
            Todos os projetos
          </Action>
        </div>
      </div>
    </section>
  );
}
