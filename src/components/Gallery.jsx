import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { EASE_OUT, EASE_IN } from "../lib/motion";
import { useLang } from "../i18n/context";

/**
 * User-driven only — nothing autoplays. The frame has a fixed aspect ratio so
 * swapping images never shifts the page (which would also desync ScrollTrigger).
 */
export default function Gallery({ images, name }) {
  const [[index, dir], setState] = useState([0, 0]);
  const reduce = useReducedMotion();
  const { t } = useLang();
  const g = t.project.gallery;

  if (!images?.length) return null;

  const go = (next, direction) =>
    setState([(next + images.length) % images.length, direction]);

  const variants = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 28 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.34, ease: EASE_OUT } },
    exit: (d) => ({
      opacity: 0,
      x: reduce ? 0 : d * -20,
      transition: { duration: 0.22, ease: EASE_IN },
    }),
  };

  return (
    <div
      className="flex flex-col gap-3"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1, -1);
        if (e.key === "ArrowRight") go(index + 1, 1);
      }}
    >
      <div
        className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-abyss"
        role="region"
        aria-roledescription={g.roleDescription}
        aria-label={g.label(name)}
      >
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={g.alt(name, index + 1, images.length)}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(index + 1, 1);
              else if (info.offset.x > 60) go(index - 1, -1);
            }}
            className="absolute inset-0 h-full w-full cursor-grab object-contain active:cursor-grabbing"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label={g.prev}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-paper backdrop-blur transition-[color,border-color] duration-150 hover:border-azure hover:text-azure"
            >
              <MdChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label={g.next}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-paper backdrop-blur transition-[color,border-color] duration-150 hover:border-azure hover:text-azure"
            >
              <MdChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        )}

        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[0.62rem] text-muted backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {images.length > 1 && (
        <ul className="flex flex-wrap gap-2">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={g.goTo(i + 1)}
                aria-current={i === index}
                className={`h-14 w-20 overflow-hidden rounded-md border transition-colors duration-150 ${
                  i === index ? "border-azure" : "border-line hover:border-lineStrong"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`h-full w-full object-cover transition-opacity duration-150 ${
                    i === index ? "opacity-100" : "opacity-55"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
