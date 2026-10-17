import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import MobileMenu from "./MobileMenu";
import LangSwitch from "./LangSwitch";
import { NAV_LINKS } from "../lib/nav";
import { useLang } from "../i18n/context";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const lastY = useRef(0);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => setOpen(false), [pathname]);

  // Hysteresis: only hide after 80px of continuous downward scroll, show on any
  // upward movement. Without the threshold the bar flickers on trackpads.
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
    const delta = y - lastY.current;
    if (y < 120) {
      setHidden(false);
      lastY.current = y;
      return;
    }
    if (delta > 80) {
      setHidden(true);
      lastY.current = y;
    } else if (delta < -12) {
      setHidden(false);
      lastY.current = y;
    }
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.28, ease: EASE_OUT }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-colors duration-200 ${
            scrolled && !open
              ? "border-b border-line bg-ink/80 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <div className="shell flex items-center justify-between py-4">
            <Link
              to="/"
              className="group flex items-baseline gap-2.5"
              aria-label={t.a11y.home}
            >
              <span className="font-display text-2xl leading-none tracking-tight text-paper">
                ACP
              </span>
              <span className="hidden font-mono text-[0.6rem] uppercase tracking-label text-muted transition-colors duration-150 group-hover:text-azure sm:inline">
                CRM · Itaú
              </span>
            </Link>

            <div className="flex items-center gap-3">
            <nav className="hidden md:block" aria-label={t.a11y.mainNav}>
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.end}
                      className={({ isActive }) =>
                        `relative block px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label transition-colors duration-150 ${
                          isActive ? "text-paper" : "text-muted hover:text-paper"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.span
                              layoutId="nav-pill"
                              className="absolute inset-0 -z-10 rounded-full border border-lineStrong bg-panel"
                              transition={{ type: "spring", stiffness: 420, damping: 34 }}
                            />
                          )}
                          {t.nav[l.key]}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <LangSwitch />

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 hover:bg-panel md:hidden"
            >
              <span className="relative block h-3.5 w-6">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.26, ease: EASE_OUT }}
                  className="absolute left-0 top-0 block h-[2px] w-6 origin-center bg-paper"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.26, ease: EASE_OUT }}
                  className="absolute bottom-0 left-0 block h-[2px] w-6 origin-center bg-paper"
                />
              </span>
            </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <MobileMenu
            key="mobile-menu"
            links={NAV_LINKS}
            onClose={() => setOpen(false)}
            returnFocusTo={triggerRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}
