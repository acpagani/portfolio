import { Suspense, useEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { ScrollTrigger } from "./lib/gsap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { pageVariants } from "./lib/motion";
import { useLang } from "./i18n/context";

function Page() {
  // Freeze the route this page was mounted for. A live <Outlet/> would switch
  // to the *next* route while this page plays its exit animation — and on a
  // first visit that next route is a lazy chunk landing mid-exit. Its motion
  // components then register inside the exiting presence tree, never finish an
  // exit of their own, and AnimatePresence (mode="wait") waits forever: the
  // old page sits at opacity 0 and the new one never mounts.
  const outlet = useOutlet();
  const [frozenOutlet] = useState(outlet);

  // Runs once per page instance (the key is the pathname), so the exiting page
  // never jumps to the top mid-fade.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // The incoming route changes document height; without this, every
    // ScrollTrigger on the new page measures against the old layout.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <motion.main
      id="conteudo"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      {/* Route chunks are prefetched on idle (see main.jsx), so this fallback
          is almost never seen; a flashed skeleton would be worse than it. */}
      <Suspense fallback={<div className="min-h-[60svh]" />}>{frozenOutlet}</Suspense>
    </motion.main>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const { t } = useLang();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-azure focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-label focus:text-ink"
      >
        {t.a11y.skip}
      </a>

      <Header />

      {/* mode="wait" keeps exactly one page mounted, so no route ever inherits
          another's ScrollTriggers. */}
      <AnimatePresence mode="wait" initial={false}>
        <Page key={pathname} />
      </AnimatePresence>

      <Footer />
    </MotionConfig>
  );
}
