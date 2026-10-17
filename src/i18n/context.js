import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

/** `{ lang, setLang, t }` — `t` is the whole dictionary for the active language. */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

/**
 * Data entries (projects, skills) carry their English copy in an inline `en`
 * block. Portuguese is the base record; English overlays it field by field, so
 * anything not translated (names, links, images) falls through untouched.
 */
export function localize(item, lang) {
  return lang === "en" && item?.en ? { ...item, ...item.en } : item;
}
