// Dados que não mudam entre idiomas: links, datas, números, nomes próprios.
// Todo o texto traduzível vive em src/i18n/pt.js e src/i18n/en.js.

export const profile = {
  name: "Arthur Cotrick Pagani",
  initials: "ACP",
  phoneHref: "https://wa.me/5511947498366",
  email: "arthurpagani00@gmail.com",
  github: "https://github.com/acpagani",
  githubUser: "acpagani",
  linkedin: "https://www.linkedin.com/in/arthur-pagani/",
  siteUrl: "https://me-acp.vercel.app/",
  resume: "/assets/docs/curriculo.pdf",
};

/** Linhas da cena do motor. `segment` é chave de t.engine.segments. */
export const engineRows = [
  { id: "a", tail: "4192", segment: "industry", score: 94, rank: 1 },
  { id: "b", tail: "7730", segment: "retail", score: 88, rank: 2 },
  { id: "c", tail: "2015", segment: "services", score: 81, rank: 3 },
  { id: "d", tail: "6604", segment: "agro", score: 73, rank: 4 },
  { id: "e", tail: "3348", segment: "tech", score: 66, rank: 5 },
  { id: "f", tail: "8871", segment: "construction", score: 58, rank: 6 },
  { id: "g", tail: "5127", segment: "logistics", score: 47, rank: 7 },
];

/** `id` é chave de t.experience.items; `end: null` significa atual. */
export const experiences = [
  {
    id: "itau",
    company: "Itaú Unibanco",
    start: "08/2025",
    end: null,
    current: true,
    tags: ["SQL", "Python", "AWS", "CRM"],
  },
  {
    id: "synplai",
    company: "Synplai",
    start: "09/2024",
    end: "07/2025",
    current: false,
    tags: ["Python", "React", "APIs", "LLM"],
  },
];

export const education = {
  school: "FIAP — Faculdade de Informática e Administração Paulista",
  period: "2024 — 2027",
};

/** `status` é chave de t.about.certStatus. */
export const certifications = [
  { name: "CS50x — Introduction to Computer Science", org: "Harvard Online" },
  { name: "Big Data & Analytics", org: "FIAP" },
  { name: "Business Management & IT Services", org: "FIAP", status: "inProgress" },
  { name: "Design Thinking", org: "FIAP" },
  { name: "Salesforce: A Complete Introduction", org: "Udemy" },
];

/** `id` e `level` são chaves de t.about.languages / t.about.levels. */
export const languages = [
  { id: "pt", level: "native", pct: 100 },
  { id: "en", level: "advanced", pct: 85 },
  { id: "fr", level: "basic", pct: 30 },
];
