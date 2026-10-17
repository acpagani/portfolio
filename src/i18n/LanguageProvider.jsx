import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ScrollTrigger } from "../lib/gsap";
import { LanguageContext } from "./context";
import pt from "./pt";
import en from "./en";

const DICTIONARIES = { pt, en };
const STORAGE_KEY = "acp-lang";

/** Saved choice first, then the browser: Portuguese for pt-*, English otherwise. */
function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* storage blocked (private mode, sandboxed iframe) — fall through */
  }
  const preferred = (navigator.languages?.[0] || navigator.language || "pt").toLowerCase();
  return preferred.startsWith("pt") ? "pt" : "en";
}

/** Dev-only: flag any key that exists in one dictionary but not the other. */
function checkShape(a, b, path = "") {
  const problems = [];
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    const p = path ? `${path}.${k}` : k;
    if (!(k in a) || !(k in b)) problems.push(`missing ${p}`);
    else if (typeof a[k] !== typeof b[k]) problems.push(`type mismatch ${p}`);
    else if (Array.isArray(a[k]) && a[k].length !== b[k].length) problems.push(`length mismatch ${p}`);
    else if (a[k] && typeof a[k] === "object") problems.push(...checkShape(a[k], b[k], p));
  }
  return problems;
}

if (import.meta.env.DEV) {
  const problems = checkShape(pt, en);
  if (problems.length) console.warn("[i18n] pt.js and en.js are out of sync:\n" + problems.join("\n"));
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);
  const firstRun = useRef(true);

  const setLang = useCallback((next) => {
    if (next === "pt" || next === "en") setLangState(next);
  }, []);

  useEffect(() => {
    const t = DICTIONARIES[lang];
    document.documentElement.lang = t.locale;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    // Text length changes section heights; every ScrollTrigger (the pinned
    // engine scene included) has to re-measure against the new layout.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: DICTIONARIES[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
