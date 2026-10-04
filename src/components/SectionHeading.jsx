import Reveal from "./Reveal";

/**
 * The recurring section masthead: a mono index, a rule that runs to the edge,
 * and a serif statement. The rule is what makes the page read like a document
 * rather than a stack of cards.
 */
export default function SectionHeading({ index, kicker, title, lede, id }) {
  return (
    <header className="flex flex-col gap-6">
      <Reveal className="flex items-center gap-4">
        <span className="font-mono text-xs text-azure">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="label">{kicker}</span>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal
          as="h2"
          id={id}
          delay={0.06}
          className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-paper lg:col-span-7"
        >
          {title}
        </Reveal>
        {lede && (
          <Reveal
            as="p"
            delay={0.12}
            className="max-w-prose self-end text-[0.95rem] leading-relaxed text-muted lg:col-span-5"
          >
            {lede}
          </Reveal>
        )}
      </div>
    </header>
  );
}
