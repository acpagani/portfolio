import Reveal from "../components/Reveal";
import { manifesto } from "../data/profile";

export default function Manifesto() {
  return (
    <section className="relative z-10 py-28" aria-labelledby="posicao-title">
      <div className="shell flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono text-xs text-azure">01</span>
            <span className="h-px flex-1 bg-line" />
            <span className="label">{manifesto.kicker}</span>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal
              as="h2"
              id="posicao-title"
              delay={0.05}
              className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] text-paper lg:col-span-6"
            >
              {manifesto.title}
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="max-w-prose self-end text-base leading-relaxed text-muted lg:col-span-5 lg:col-start-8"
            >
              {manifesto.body}
            </Reveal>
          </div>
        </div>

        {/* Hairline-divided columns, not cards — keeps the document feel. */}
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {manifesto.points.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 0.07}
              className="flex flex-col gap-4 bg-ink p-7"
            >
              <span className="font-mono text-[0.65rem] tracking-label text-azure">{p.n}</span>
              <h3 className="font-display text-2xl leading-tight text-paper">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
