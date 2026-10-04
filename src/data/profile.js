export const profile = {
  name: "Arthur Cotrick Pagani",
  initials: "ACP",
  role: "Analista de CRM",
  company: "Itaú Unibanco",
  location: "Jardim Bonfiglioli · Butantã, SP",
  phone: "(11) 94749-8366",
  phoneHref: "https://wa.me/5511947498366",
  email: "arthurpagani00@gmail.com",
  github: "https://github.com/acpagani",
  githubUser: "acpagani",
  linkedin: "https://www.linkedin.com/in/arthur-pagani/",
  siteUrl: "https://me-acp.vercel.app/",
  resume: "/assets/docs/curriculo.pdf",
};

export const hero = {
  eyebrow: "Analista de CRM · Itaú Unibanco",
  lineOne: "Todo time comercial",
  lineTwo: "tem uma fila.",
  lineThree: "Eu escrevo a regra que ordena ela.",
  lede:
    "Desenvolvo os motores de priorização de carteira PJ do Itaú: modelo as regras em SQL, orquestro os pipelines em Python e desenho os critérios junto às áreas de negócio. O resultado sai na tela de quem atende o cliente, não num slide.",
  stats: [
    { value: "PJ", label: "Segmento" },
    { value: "SQL", label: "Onde a regra mora" },
    { value: "2027", label: "Eng. de Software · FIAP" },
  ],
};

export const manifesto = {
  kicker: "Posição",
  title: "Relatório não é decisão.",
  body:
    "Dado que só descreve o passado é caro e confortável. O que muda o número é a regra que entra em produção e reordena o dia de quem vende. É nesse ponto — entre a área de negócio e a query — que eu trabalho.",
  points: [
    {
      n: "01",
      title: "A regra vem antes do dashboard",
      text:
        "Um gráfico conta o que aconteceu. Um motor de priorização define quem o time liga amanhã às nove. Escrever o segundo exige entender por que o primeiro ficou daquele jeito.",
    },
    {
      n: "02",
      title: "Critério se negocia, não se chuta",
      text:
        "Peso de recência, potencial de receita, risco, cobertura. Cada corte desses é uma conversa com quem responde pela carteira — e vira cláusula de SQL só depois de acordado.",
    },
    {
      n: "03",
      title: "Ponta a ponta, ou não é meu",
      text:
        "Da definição do critério ao pipeline que roda sozinho de madrugada. Entrego a lógica inteira: modelagem, orquestração e o que acontece quando a fonte quebra.",
    },
  ],
};

export const engine = {
  kicker: "O motor, por dentro",
  title: "De carteira crua a fila de abordagem",
  steps: [
    {
      n: "01",
      title: "Carteira crua",
      text:
        "Milhares de CNPJs chegam sem hierarquia nenhuma. Todo cliente parece igualmente urgente — que é o mesmo que dizer que nenhum é.",
    },
    {
      n: "02",
      title: "A regra entra",
      text:
        "Recência, potencial, risco e cobertura viram peso. O critério deixa de ser opinião de reunião e passa a ser uma coluna calculada.",
    },
    {
      n: "03",
      title: "A fila sai",
      text:
        "O time comercial abre o sistema e encontra ordem, não uma lista. Primeiro contato do dia definido por um score que alguém consegue explicar.",
    },
  ],
  rows: [
    { id: "a", cnpj: "CNPJ ••• 4192", segment: "Indústria", score: 94, rank: 1 },
    { id: "b", cnpj: "CNPJ ••• 7730", segment: "Varejo", score: 88, rank: 2 },
    { id: "c", cnpj: "CNPJ ••• 2015", segment: "Serviços", score: 81, rank: 3 },
    { id: "d", cnpj: "CNPJ ••• 6604", segment: "Agro", score: 73, rank: 4 },
    { id: "e", cnpj: "CNPJ ••• 3348", segment: "Tecnologia", score: 66, rank: 5 },
    { id: "f", cnpj: "CNPJ ••• 8871", segment: "Construção", score: 58, rank: 6 },
    { id: "g", cnpj: "CNPJ ••• 5127", segment: "Logística", score: 47, rank: 7 },
  ],
};

export const experiences = [
  {
    company: "Itaú Unibanco",
    role: "Analista de CRM Jr.",
    start: "08/2025",
    end: "Atual",
    current: true,
    summary:
      "Desenvolvimento e manutenção dos motores de priorização de carteira para clientes PJ.",
    bullets: [
      "Definição das regras de negócio junto às áreas comerciais, do critério ao corte.",
      "Modelagem dos dados em SQL e orquestração dos pipelines em Python.",
      "Responsável pela lógica ponta a ponta que direciona quais clientes o time aborda e em que ordem.",
    ],
    tags: ["SQL", "Python", "AWS", "CRM"],
  },
  {
    company: "Synplai",
    role: "Desenvolvedor Full-Stack",
    start: "09/2024",
    end: "07/2025",
    current: false,
    summary:
      "Produto ponta a ponta: back-end em Python, front-end em React e camada de IA.",
    bullets: [
      "Desenvolvimento back-end em Python e front-end em React.",
      "Integração e manuseio de APIs, tratamento de dados.",
      "Arquitetura de prompts para Inteligências Artificiais.",
    ],
    tags: ["Python", "React", "APIs", "LLM"],
  },
];

export const education = {
  school: "FIAP — Faculdade de Informática e Administração Paulista",
  course: "Engenharia de Software",
  period: "2024 — 2027",
  status: "6º semestre",
};

export const certifications = [
  { name: "CS50x — Introduction to Computer Science", org: "Harvard Online" },
  { name: "Big Data & Analytics", org: "FIAP" },
  { name: "Business Management & IT Services", org: "FIAP", status: "cursando" },
  { name: "Design Thinking", org: "FIAP" },
  { name: "Salesforce: A Complete Introduction", org: "Udemy" },
];

export const languages = [
  { name: "Português", level: "Nativo", pct: 100 },
  { name: "Inglês", level: "Avançado", pct: 85 },
  { name: "Francês", level: "Básico", pct: 30 },
];

export const objective =
  "Tenho interesse em oportunidades em planejamento estratégico, planejamento comercial e CRM, onde a decisão de negócio é sustentada por dados, e não apenas reportada por eles.";
