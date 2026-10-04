import Reveal from "./Reveal";

export default function PageHeader({ kicker, title, lede, children, id }) {
  return (
    <header className="shell flex flex-col gap-8 pb-14 pt-36 md:pt-44">
      <Reveal className="flex items-center gap-4">
        <span className="h-px w-10 bg-azure" />
        <span className="label text-azure">{kicker}</span>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal
          as="h1"
          id={id}
          delay={0.05}
          className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] text-paper lg:col-span-7"
        >
          {title}
        </Reveal>
        {lede && (
          <Reveal
            as="p"
            delay={0.1}
            className="max-w-prose self-end text-base leading-relaxed text-muted lg:col-span-5"
          >
            {lede}
          </Reveal>
        )}
      </div>

      {children}
    </header>
  );
}
