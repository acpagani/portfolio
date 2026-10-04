import { motion, useReducedMotion } from "motion/react";
import { enter, viewportOnce } from "../lib/motion";

/**
 * One-shot in-view reveal. Travel is small (18px) and the animation fires once —
 * re-animating on every scroll pass is noise. Under reduced motion only the
 * opacity remains, which keeps the cue without the vestibular trigger.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  y = 18,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...enter, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
