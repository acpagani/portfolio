import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experiences } from "../data/profile";
import { useLang } from "../i18n/context";

/**
 * The spine draws itself as the section scrolls — the one scrubbed element
 * outside the signature scene, because here the scroll axis *is* the time axis.
 * scaleY only, so it stays composited.
 */
export default function Experience() {
  const root = useRef(null);
  const { t } = useLang();

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root);
      const spine = () => root.current?.querySelector(".xp-spine");

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const el = spine();
        if (el) gsap.set(el, { scaleY: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = spine();
        if (!el) return;
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 72%",
              end: "bottom 82%",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="relative z-10 py-28" aria-labelledby="trajetoria-title">
      <div className="shell flex flex-col gap-16">
        <SectionHeading
          id="trajetoria-title"
          index="03"
          kicker={t.experience.kicker}
          title={t.experience.title}
          lede={t.experience.lede}
        />

        <ol ref={root} className="relative flex flex-col gap-14 pl-8 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[3px] top-2 w-px bg-line sm:left-[7px]"
          >
            <span className="xp-spine absolute inset-0 block origin-top bg-gradient-to-b from-azure to-azure/20" />
          </span>

          {experiences.map((xp, i) => {
            const copy = t.experience.items[xp.id];
            return (
            <Reveal as="li" key={xp.id} delay={i * 0.05} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-8 top-2 h-2 w-2 rounded-full sm:-left-12 ${
                  xp.current ? "bg-azure ring-4 ring-azure/20" : "bg-lineStrong"
                }`}
              />

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl leading-none text-paper">
                    {xp.company}
                  </h3>
                  <span className="font-mono text-[0.68rem] uppercase tracking-label text-azure">
                    {xp.start} — {xp.end ?? t.experience.present}
                  </span>
                </div>

                <p className="font-mono text-[0.72rem] uppercase tracking-label text-muted">
                  {copy.role}
                </p>

                <p className="max-w-prose text-base leading-relaxed text-paper/90">
                  {copy.summary}
                </p>

                <ul className="flex max-w-prose flex-col gap-2">
                  {copy.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-lineStrong" />
                      {b}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {xp.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
