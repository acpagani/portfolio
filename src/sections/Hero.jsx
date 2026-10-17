import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { gsap, SplitText, useGSAP } from "../lib/gsap";
import { profile } from "../data/profile";
import { useLang } from "../i18n/context";
import Action from "../components/Action";

const SUPPORTING = [".hero-eyebrow", ".hero-lede", ".hero-stat", ".hero-cta", ".hero-cue"];

/**
 * Load sequence: masked line reveal on the headline, then the supporting copy.
 * Total budget ~900ms. Splitting waits on document.fonts.ready — measuring line
 * breaks against the fallback font produces visibly wrong lines.
 *
 * Two complementary media queries rather than one object branch: if neither
 * matches (very old browser), no branch runs and the authored CSS leaves
 * everything visible, which is the correct failure mode.
 */
export default function Hero() {
  const root = useRef(null);
  const headline = useRef(null);
  const { t } = useLang();
  const hero = t.hero;

  useGSAP(
    () => {
      const mm = gsap.matchMedia(root);

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([headline.current, ...SUPPORTING], { opacity: 0 });
        gsap.to([headline.current, ...SUPPORTING], {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hide synchronously, before first paint, so nothing flashes while we
        // wait on fonts.
        gsap.set([headline.current, ...SUPPORTING], { opacity: 0 });

        let split;
        let cancelled = false;
        let played = false;
        let safety;

        const reveal = () =>
          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .to(".hero-eyebrow", { opacity: 1, duration: 0.4 }, 0.1)
            .fromTo(".hero-lede", { y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.35)
            .fromTo(
              ".hero-stat",
              { y: 14 },
              { opacity: 1, y: 0, duration: 0.42, stagger: 0.06 },
              "<0.1"
            )
            .fromTo(
              ".hero-cta",
              { y: 12 },
              { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
              "<0.05"
            )
            .to(".hero-cue", { opacity: 1, duration: 0.4 }, "<0.1");

        const run = () => {
          if (cancelled || !headline.current) return;

          split = SplitText.create(headline.current, {
            type: "lines",
            mask: "lines",
            // Re-splits on resize (and after a webfont swap), so line breaks
            // are never measured against a stale layout.
            autoSplit: true,
            onSplit: (self) => {
              gsap.set(headline.current, { opacity: 1 });
              if (played) return gsap.set(self.lines, { yPercent: 0 });
              played = true;

              const support = reveal();
              const lines = gsap.from(self.lines, {
                yPercent: 108,
                duration: 0.72,
                stagger: 0.085,
                ease: "power4.out",
              });

              // If the ticker stalls (backgrounded tab, throttled rAF), the
              // hero must never be left sitting at opacity 0.
              safety = setTimeout(() => {
                lines.progress(1);
                support.progress(1);
              }, 2500);

              return lines;
            },
          });
        };

        if (document.fonts?.ready) document.fonts.ready.then(run);
        else run();

        // SplitText markup must not survive the component — it breaks
        // selection and copy/paste.
        return () => {
          cancelled = true;
          clearTimeout(safety);
          split?.revert();
        };
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-28"
      aria-label={t.a11y.hero}
    >
      <div className="shell flex flex-col gap-8">
        <p className="hero-eyebrow flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-label text-muted">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-azure ring-4 ring-azure/20"
          />
          {hero.eyebrow}
        </p>

        <h1
          ref={headline}
          className="max-w-[20ch] font-display text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[0.96] tracking-[-0.01em] text-paper"
        >
          {hero.lineOne} {hero.lineTwo}{" "}
          <span className="italic text-azure">{hero.lineThree}</span>
        </h1>

        <div className="hairline grid gap-8 pt-8 lg:grid-cols-12 lg:gap-10">
          <p className="hero-lede max-w-prose text-[0.92rem] leading-relaxed text-muted lg:col-span-6">
            {hero.lede}
          </p>

          <dl className="flex flex-wrap gap-x-8 gap-y-5 lg:col-span-5 lg:col-start-8 lg:flex-nowrap lg:justify-end">
            {hero.stats.map((s) => (
              <div key={s.label} className="hero-stat flex min-w-0 flex-col gap-1">
                <dt className="label order-2 whitespace-nowrap">{s.label}</dt>
                <dd className="order-1 font-display text-2xl leading-none text-paper">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Action
            className="hero-cta"
            href="#motor"
            variant="primary"
            icon={<FaArrowDown className="h-3 w-3" />}
          >
            {hero.ctaEngine}
          </Action>
          <Action className="hero-cta" to="/projects" variant="ghost">
            {t.common.projects}
          </Action>
          <Action
            className="hero-cta"
            href={profile.resume}
            download
            variant="quiet"
            icon={<FaArrowDown className="h-3 w-3" />}
          >
            {t.common.resume}
          </Action>
        </div>

        <span
          aria-hidden="true"
          className="hero-cue mt-4 hidden items-center gap-3 font-mono text-[0.6rem] uppercase tracking-label text-muted md:flex"
        >
          <span className="h-px w-12 bg-lineStrong" />
          {hero.cue}
        </span>
      </div>
    </section>
  );
}
