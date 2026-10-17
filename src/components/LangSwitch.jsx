import { motion } from "motion/react";
import { useLang } from "../i18n/context";

// Each option names itself in its own language — someone who can't read the
// current one still recognises theirs.
const OPTIONS = [
  { id: "pt", short: "PT", name: "Português" },
  { id: "en", short: "EN", name: "English" },
];

/**
 * Two-option segmented control. The active pill travels between options via a
 * shared layoutId (a transform, so it stays composited), matching the nav and
 * the project filters. Under reduced motion MotionConfig makes it snap.
 */
export default function LangSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className="relative flex items-center rounded-full border border-line p-0.5"
    >
      {OPTIONS.map((o) => {
        const active = o.id === lang;
        return (
          <button
            key={o.id}
            type="button"
            lang={o.id === "pt" ? "pt-BR" : "en"}
            aria-label={o.name}
            aria-pressed={active}
            onClick={() => setLang(o.id)}
            className={`relative flex h-8 min-w-[2.5rem] items-center justify-center rounded-full px-2.5 font-mono text-[0.65rem] uppercase tracking-label transition-colors duration-150 ${
              active ? "text-ink" : "text-muted hover:text-paper"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-azure"
                transition={{ type: "spring", stiffness: 460, damping: 36 }}
              />
            )}
            {o.short}
          </button>
        );
      })}
    </div>
  );
}
