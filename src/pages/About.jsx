import GitHubCalendar from "react-github-calendar";
import { motion, useReducedMotion } from "motion/react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Action from "../components/Action";
import { EASE_OUT, viewportOnce } from "../lib/motion";
import {
  certifications,
  education,
  languages,
  objective,
  profile,
} from "../data/profile";

const calendarTheme = {
  light: ["#0B1426", "#14406E", "#1F6FE0", "#4C9EFF", "#A9CBFF"],
  dark: ["#0B1426", "#14406E", "#1F6FE0", "#4C9EFF", "#A9CBFF"],
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHeader
        id="trajetoria-title"
        kicker="Trajetória"
        title="Comecei querendo construir telas. Fiquei pela decisão por trás delas."
        lede={objective}
      />

      <div className="shell grid gap-14 pb-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal as="p" className="max-w-prose text-lg leading-relaxed text-paper/90">
            Entrei em programação aos 14 anos, por um curso de Python, e passei os
            anos seguintes construindo aplicação: front-end, back-end, API, banco.
            Foi um bom caminho — mas em algum momento ficou claro que a parte que
            me segurava acordado não era a interface, e sim a regra que decidia o
            que ela deveria mostrar primeiro.
          </Reveal>
          <Reveal as="p" delay={0.05} className="max-w-prose text-base leading-relaxed text-muted">
            Hoje, no Itaú, esse é literalmente o trabalho: modelar em SQL,
            orquestrar em Python e negociar com as áreas de negócio o critério que
            vai definir a ordem de abordagem de uma carteira PJ inteira. É uma
            posição de fronteira — metade engenharia, metade conversa — e é
            exatamente onde eu quero estar.
          </Reveal>
          <Reveal as="p" delay={0.1} className="max-w-prose text-base leading-relaxed text-muted">
            Fora do horário, mantenho projetos próprios de dados sobre mercado
            financeiro, participo de projetos voluntários e jogo tênis nos fins de
            semana — em geral mal, mas com convicção.
          </Reveal>

          <Reveal delay={0.14} className="flex flex-wrap gap-3 pt-2">
            <Action href={profile.resume} download variant="primary">
              Baixar currículo
            </Action>
            <Action to="/contact" variant="ghost">
              Falar comigo
            </Action>
          </Reveal>
        </div>

        <aside className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
          <Reveal className="flex flex-col gap-4 border-t border-line pt-5">
            <span className="label">Formação</span>
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl leading-tight text-paper">
                {education.course}
              </span>
              <span className="text-sm text-muted">{education.school}</span>
              <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-label text-azure">
                {education.period} · {education.status}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-4 border-t border-line pt-5">
            <span className="label">Idiomas</span>
            <ul className="flex flex-col gap-4">
              {languages.map((l, i) => (
                <li key={l.name} className="flex flex-col gap-2">
                  <span className="flex items-baseline justify-between">
                    <span className="text-sm text-paper">{l.name}</span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                      {l.level}
                    </span>
                  </span>
                  <span className="block h-1 overflow-hidden rounded-full bg-lineStrong/40">
                    <motion.span
                      className="block h-full origin-left rounded-full bg-gradient-to-r from-azureDeep to-azure"
                      style={{ width: "100%" }}
                      initial={{ scaleX: reduce ? l.pct / 100 : 0 }}
                      whileInView={{ scaleX: l.pct / 100 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 + i * 0.08 }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>

      <section className="shell pt-20" aria-labelledby="cursos-title">
        <div className="flex flex-col gap-8">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono text-xs text-azure">01</span>
            <span className="h-px flex-1 bg-line" />
            <span className="label">Cursos e certificações</span>
          </Reveal>

          <h2 id="cursos-title" className="sr-only">
            Cursos e certificações
          </h2>

          <ul className="flex flex-col">
            {certifications.map((c, i) => (
              <Reveal
                as="li"
                key={c.name}
                delay={i * 0.04}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-5 transition-colors duration-150 hover:border-lineStrong"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.65rem] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-paper">{c.name}</span>
                </span>
                <span className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-label text-muted">
                  {c.status && <span className="text-azure">{c.status}</span>}
                  {c.org}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell pt-24" aria-labelledby="github-title">
        <div className="flex flex-col gap-8">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono text-xs text-azure">02</span>
            <span className="h-px flex-1 bg-line" />
            <span className="label">Atividade</span>
          </Reveal>

          <Reveal
            as="h2"
            id="github-title"
            delay={0.05}
            className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-paper"
          >
            Um ano de commits
          </Reveal>

          <Reveal delay={0.1} className="overflow-x-auto rounded-xl border border-line bg-panel/40 p-6">
            <div className="min-w-[46rem] text-muted">
              <GitHubCalendar
                username={profile.githubUser}
                theme={calendarTheme}
                colorScheme="dark"
                fontSize={12}
                blockSize={11}
                labels={{
                  totalCount: "{{count}} contribuições em {{year}}",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
