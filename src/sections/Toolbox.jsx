import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SkillChip from "../components/SkillChip";
import skills from "../data/skills.json";

const ORDER = ["Dados & Cloud", "Linguagens", "Back-end", "Front-end", "Ferramentas"];

const NOTES = {
  "Dados & Cloud": "Onde o trabalho realmente acontece hoje.",
  "Linguagens": "O que eu leio e escrevo sem consultar a documentação.",
  "Back-end": "APIs, serviços e a camada que sustenta o dado.",
  "Front-end": "De onde eu vim, e ainda uso quando o dado precisa de tela.",
  "Ferramentas": "Versionamento, automação e o que roda sozinho.",
};

export default function Toolbox() {
  return (
    <section className="relative z-10 py-28" aria-labelledby="ferramentas-title">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          id="ferramentas-title"
          index="05"
          kicker="Ferramental"
          title="A caixa de ferramentas, sem inflar a lista"
          lede="Listadas por uso real, não por curso assistido."
        />

        <div className="flex flex-col">
          {ORDER.map((cat, i) => {
            const items = skills.filter((s) => s.skillCategory === cat);
            if (!items.length) return null;
            return (
              <Reveal
                key={cat}
                delay={i * 0.04}
                className="grid gap-6 border-t border-line py-8 lg:grid-cols-12 lg:gap-10"
              >
                <div className="flex flex-col gap-2 lg:col-span-3">
                  <h3 className="font-display text-2xl leading-none text-paper">{cat}</h3>
                  <p className="max-w-xs text-[0.8rem] leading-relaxed text-muted">
                    {NOTES[cat]}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-4">
                  {items.map((s) => (
                    <li key={s.id}>
                      <SkillChip {...s} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
