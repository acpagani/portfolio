import { Link } from "react-router-dom";
import Action from "../components/Action";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n/context";

export default function NotFound() {
  const { t } = useLang();
  const n = t.notFound;

  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center gap-8 pb-20 pt-40">
      <Reveal className="flex items-center gap-4">
        <span className="h-px w-10 bg-azure" />
        <span className="label text-azure">{n.kicker}</span>
      </Reveal>

      <Reveal
        as="h1"
        delay={0.05}
        className="max-w-[16ch] font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] text-paper"
      >
        {n.title}
      </Reveal>

      <Reveal as="p" delay={0.1} className="max-w-prose text-base leading-relaxed text-muted">
        {n.body}
      </Reveal>

      <Reveal delay={0.14} className="flex flex-wrap gap-3">
        <Action to="/" variant="primary">
          {n.home}
        </Action>
        <Action to="/projects" variant="ghost">
          {n.projects}
        </Action>
      </Reveal>

      <Reveal delay={0.18} className="pt-6 font-mono text-[0.65rem] uppercase tracking-label text-muted">
        {n.orTalk}{" "}
        <Link to="/contact" className="link-wipe text-paper">
          /contact
        </Link>
      </Reveal>
    </section>
  );
}
