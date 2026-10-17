import { useMemo } from "react";
import { localize, useLang } from "./context";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

/** Projects in the active language. `kind` keeps its Portuguese value as a key. */
export function useProjects() {
  const { lang } = useLang();
  return useMemo(() => projectsData.map((p) => localize(p, lang)), [lang]);
}

/** Skills in the active language. `skillCategory` keeps its Portuguese value as a key. */
export function useSkills() {
  const { lang } = useLang();
  return useMemo(() => skillsData.map((s) => localize(s, lang)), [lang]);
}
