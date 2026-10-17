import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { engineRows } from "../data/profile";
import { useLang } from "../i18n/context";

/**
 * The one signature moment of the site.
 *
 * The authored DOM is the *finished* state: rows already in rank order, scores
 * already filled. That way the section is correct and readable if JS never
 * runs. GSAP then animates backwards from a scattered, unranked start — raw
 * portfolio → business rule → the queue the commercial team actually works.
 *
 * Pinned scrub only on large screens without a reduced-motion preference;
 * everywhere else the section is plain content that scrolls normally.
 */

// Fixed permutation: row i begins at the slot of row SCRAMBLE[i], so the sort
// step visibly swaps positions instead of just settling in place.
const SCRAMBLE = [4, 0, 6, 2, 5, 1, 3];
// Deterministic scatter — no Math.random, so refresh measurements stay stable.
const CHAOS = [
  [-34, -96], [26, 58], [-18, 132], [38, -142], [-30, 88], [22, -58], [-26, 30],
];

export default function PriorityEngine() {
  const root = useRef(null);
  const stage = useRef(null);
  const rows = useRef([]);
  const { t } = useLang();
  const engine = t.engine;

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root);

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const rowEls = rows.current.filter(Boolean);
          if (!rowEls.length) return;

          const bars = gsap.utils.toArray(".pe-bar", stage.current);
          const ranks = gsap.utils.toArray(".pe-rank", stage.current);
          const idles = gsap.utils.toArray(".pe-idle", stage.current);
          const steps = gsap.utils.toArray(".pe-step", root.current);
          const marks = gsap.utils.toArray(".pe-mark", root.current);

          // Offsets are read at build time and again on every refresh, so the
          // scene survives resizes and late-loading fonts.
          const slotOffset = (i) =>
            rowEls[SCRAMBLE[i]].offsetTop - rowEls[i].offsetTop;

          // Roll the authored "finished" state back to the scene's start.
          // Anything the timeline hasn't reached yet holds these values, and
          // scrubbing backwards reverses into them.
          gsap.set(bars, { scaleX: 0 });
          gsap.set(ranks, { opacity: 0 });
          gsap.set(idles, { opacity: 1 });
          gsap.set(".pe-lead", { opacity: 0 });
          gsap.set(steps, { opacity: 0.3 });
          gsap.set(marks, { scaleY: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=2400",
              pin: true,
              anticipatePin: 1,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          // 1 — raw portfolio: everything scattered, nothing ranked.
          tl.fromTo(
            rowEls,
            {
              y: (i) => CHAOS[i % CHAOS.length][1],
              x: (i) => CHAOS[i % CHAOS.length][0],
              opacity: 0.22,
              scale: 0.96,
            },
            {
              y: (i) => slotOffset(i),
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: { each: 0.04, from: "random", amount: 0.3 },
            },
            0
          )
            // 2 — the rule lands: rows travel to their authored rank order.
            .to(
              rowEls,
              {
                y: 0,
                duration: 1.1,
                stagger: { each: 0.05, from: "edges", amount: 0.35 },
              },
              1.15
            )

            // 3 — the queue: scores fill, ranks resolve, first contact lights up.
            .to(idles, { opacity: 0, duration: 0.25, stagger: 0.03 }, 2.45)
            .to(ranks, { opacity: 1, duration: 0.35, stagger: 0.04 }, 2.5)
            .to(
              bars,
              {
                scaleX: (i, el) => Number(el.dataset.fill),
                duration: 0.7,
                stagger: { each: 0.05, amount: 0.3 },
              },
              2.5
            )
            .to(".pe-lead", { opacity: 1, duration: 0.4 }, 2.9);

          // The step list stays readable throughout; only emphasis moves.
          steps.forEach((step, i) => {
            const at = i * 1.15;
            tl.to(step, { opacity: 1, duration: 0.3 }, at)
              .to(marks[i], { scaleY: 1, duration: 0.3 }, at);
            if (i < steps.length - 1) {
              tl.to(step, { opacity: 0.3, duration: 0.3 }, at + 1.05).to(
                marks[i],
                { scaleY: 0, duration: 0.3 },
                at + 1.05
              );
            }
          });

          // Late layout shifts (webfonts) would otherwise offset the pin.
          document.fonts?.ready.then(() => ScrollTrigger.refresh());
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="motor"
      aria-labelledby="motor-title"
      className="relative z-10 flex min-h-[100svh] items-center py-24 lg:py-0"
    >
      <div className="shell grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Narrative column */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-azure">02</span>
            <span className="h-px flex-1 bg-line lg:max-w-16" />
            <span className="label">{engine.kicker}</span>
          </div>

          <h2
            id="motor-title"
            className="font-display text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] text-paper"
          >
            {engine.title}
          </h2>

          <ol className="flex flex-col gap-6">
            {engine.steps.map((s, i) => (
              <li key={i} className="pe-step relative flex gap-5 pl-5">
                <span className="absolute left-0 top-1 h-full w-px bg-line" aria-hidden="true">
                  <span className="pe-mark absolute inset-0 block origin-top bg-azure" />
                </span>
                <span className="mt-1 font-mono text-[0.65rem] text-azure">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="text-base font-medium text-paper">{s.title}</span>
                  <span className="max-w-md text-sm leading-relaxed text-muted">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Stage */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-panel/40 p-4 backdrop-blur-[2px] sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <span className="label">{engine.stage}</span>
              <span className="font-mono text-[0.6rem] text-muted">{engine.score}</span>
            </div>

            <ol ref={stage} className="flex flex-col gap-2">
              {engineRows.map((r, i) => (
                <li
                  key={r.id}
                  ref={(el) => (rows.current[i] = el)}
                  className="relative grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 rounded-lg border border-line bg-panel/80 px-3 py-3 sm:gap-4 sm:px-4"
                >
                  {/* first-contact highlight, opacity-only */}
                  {r.rank === 1 && (
                    <span
                      aria-hidden="true"
                      className="pe-lead pointer-events-none absolute inset-0 rounded-lg border border-azure/70 bg-azure/[0.07]"
                    />
                  )}

                  <span className="relative flex h-7 w-7 items-center justify-center rounded border border-lineStrong font-mono text-xs">
                    <span className="pe-idle absolute text-muted opacity-0" aria-hidden="true">
                      —
                    </span>
                    <span className="pe-rank text-azure">{r.rank}</span>
                  </span>

                  <span className="flex min-w-0 flex-col">
                    <span className="truncate font-mono text-[0.78rem] text-paper">
                      {engine.idPrefix} ••• {r.tail}
                    </span>
                    <span className="truncate text-[0.72rem] text-muted">
                      {engine.segments[r.segment]}
                    </span>
                  </span>

                  <span className="flex items-center gap-3">
                    <span className="relative block h-1 w-16 overflow-hidden rounded-full bg-lineStrong/40 sm:w-32">
                      <span
                        className="pe-bar absolute inset-0 block origin-left rounded-full bg-gradient-to-r from-azureDeep to-azure"
                        data-fill={r.score / 100}
                        style={{ transform: `scaleX(${r.score / 100})` }}
                      />
                    </span>
                    <span className="w-7 text-right font-mono text-[0.72rem] text-paper">
                      {r.score}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-4 border-t border-line pt-3 font-mono text-[0.6rem] uppercase tracking-label text-muted">
              {engine.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
