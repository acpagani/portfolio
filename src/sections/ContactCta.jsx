import { GoArrowUpRight } from "react-icons/go";
import Reveal from "../components/Reveal";
import Action from "../components/Action";
import { profile } from "../data/profile";
import { useLang } from "../i18n/context";

export default function ContactCta() {
  const { t } = useLang();

  return (
    <section className="relative z-10 py-28" aria-labelledby="contato-title">
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel2 via-panel to-abyss px-7 py-16 sm:px-12">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-azure/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-8">
            <Reveal className="flex items-center gap-4">
              <span className="font-mono text-xs text-azure">06</span>
              <span className="h-px w-16 bg-line" />
              <span className="label">{t.cta.kicker}</span>
            </Reveal>

            <Reveal
              as="h2"
              id="contato-title"
              delay={0.05}
              className="max-w-[16ch] font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1] text-paper"
            >
              {t.cta.title}
            </Reveal>

            <Reveal as="p" delay={0.1} className="max-w-prose text-base leading-relaxed text-muted">
              {t.objective}
            </Reveal>

            <Reveal delay={0.14} className="flex flex-wrap items-center gap-3">
              <Action to="/contact" variant="primary" icon={<GoArrowUpRight className="h-4 w-4" />}>
                {t.common.talk}
              </Action>
              <Action
                href={`mailto:${profile.email}`}
                variant="ghost"
              >
                {profile.email}
              </Action>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
