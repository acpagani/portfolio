// Hoisted transition/variant objects. Inline literals would make Motion
// restart animations on every parent render.

export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_IN = [0.7, 0, 0.84, 0];

export const enter = { duration: 0.42, ease: EASE_OUT };
export const exitFast = { duration: 0.24, ease: EASE_IN };
export const snap = { type: "spring", stiffness: 400, damping: 32 };

/** Parent list: orchestrates children without prop drilling. */
export const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: enter },
};

/** Reveals travel 18px, fire once — never 100px fade-ups. */
export const viewportOnce = { once: true, amount: 0.25 };

/**
 * Route transitions are opacity-only on purpose. A transform on the page
 * wrapper would create a containing block above every pinned ScrollTrigger
 * section and break pinning outright.
 */
export const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.28, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.16, ease: EASE_IN } },
};
