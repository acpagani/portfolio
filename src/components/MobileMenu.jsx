import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, EASE_IN } from "../lib/motion";
import { profile } from "../data/profile";

const panel = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: EASE_OUT, staggerChildren: 0.04, delayChildren: 0.06 },
  },
  out: { opacity: 0, transition: { duration: 0.2, ease: EASE_IN } },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.34, ease: EASE_OUT } },
  out: { opacity: 0, transition: { duration: 0.14 } },
};

const reducedLine = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.28 } },
  out: { opacity: 0, transition: { duration: 0.14 } },
};

export default function MobileMenu({ links, onClose, returnFocusTo }) {
  const panelRef = useRef(null);
  const reduce = useReducedMotion();

  // Focus moves in on open, is trapped while open, and returns to the trigger.
  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;

    const previouslyFocused = document.activeElement;
    // Captured now: reading the ref during cleanup would be a stale-node risk.
    const restoreTarget = returnFocusTo?.current || previouslyFocused;
    const focusables = () =>
      Array.from(
        node.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // `scrollbar-gutter: stable` on :root keeps this from shifting the page.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (restoreTarget && typeof restoreTarget.focus === "function") {
        restoreTarget.focus();
      }
    };
  }, [onClose, returnFocusTo]);

  const item = reduce ? reducedLine : line;

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navegação"
      variants={panel}
      initial="hidden"
      animate="show"
      exit="out"
      className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/95 px-[var(--shell-pad)] pb-12 pt-28 backdrop-blur-xl"
    >
      <nav>
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <motion.li key={l.to} variants={item} className="border-b border-line">
              <NavLink
                to={l.to}
                end={l.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-baseline gap-5 py-5 font-display text-4xl transition-colors duration-150 ${
                    isActive ? "text-azure" : "text-paper"
                  }`
                }
              >
                <span className="font-mono text-[0.65rem] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div variants={item} className="flex flex-col gap-2">
        <span className="label">Direto</span>
        <a href={`mailto:${profile.email}`} className="link-wipe w-fit text-sm text-paper">
          {profile.email}
        </a>
        <a
          href={profile.phoneHref}
          target="_blank"
          rel="noreferrer"
          className="link-wipe w-fit text-sm text-paper"
        >
          {profile.phone}
        </a>
      </motion.div>
    </motion.div>
  );
}
