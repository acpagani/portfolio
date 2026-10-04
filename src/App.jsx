import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { ScrollTrigger } from "./lib/gsap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { pageVariants } from "./lib/motion";

function Page() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // The incoming route changes document height; without this, every
    // ScrollTrigger on the new page measures against the old layout.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <motion.main
      id="conteudo"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      {/* Route chunks are small and cached; a flashed skeleton would be
          worse than the blank frame it replaces. */}
      <Suspense fallback={<div className="min-h-[60svh]" />}>
        <Outlet />
      </Suspense>
    </motion.main>
  );
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-azure focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-label focus:text-ink"
      >
        Pular para o conteúdo
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
