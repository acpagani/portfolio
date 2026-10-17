import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SkillChip from "../components/SkillChip";
import { useLang } from "../i18n/context";
import { useSkills } from "../i18n/data";

const ORDER = ["Dados & Cloud", "Linguagens", "Back-end", "Front-end", "Ferramentas"];

export default function Toolbox() {
  const { t } = useLang();
  const skills = useSkills();

  return (
    <section className="relative z-10 py-28" aria-labelledby="ferramentas-title">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          id="ferramentas-title"
          index="05"
          kicker={t.toolbox.kicker}
          title={t.toolbox.title}
          lede={t.toolbox.lede}
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
                  <h3 className="font-display text-2xl leading-none text-paper">
                    {t.toolbox.categories[cat].label}
                  </h3>
                  <p className="max-w-xs text-[0.8rem] leading-relaxed text-muted">
                    {t.toolbox.categories[cat].note}
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
