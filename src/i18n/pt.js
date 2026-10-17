// Todo o texto do site em português. en.js precisa ter exatamente o mesmo
// formato — em desenvolvimento, uma checagem no console avisa se divergirem.
// Dados que não mudam entre idiomas (datas, scores, links) ficam em
// src/data/profile.js.

const pt = {
  locale: "pt-BR",

  meta: {
    title: "Arthur Cotrick Pagani — Analista de CRM",
    description:
      "Arthur Cotrick Pagani — Analista de CRM no Itaú. Desenho as regras de priorização que decidem quais clientes o time comercial aborda, e em que ordem.",
  },

  a11y: {
    skip: "Pular para o conteúdo",
    home: "Arthur Cotrick Pagani — início",
    mainNav: "Principal",
    footerNav: "Rodapé",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    navDialog: "Navegação",
    direct: "Direto",
    language: "Idioma",
    hero: "Apresentação",
  },

  nav: {
    home: "Início",
    about: "Trajetória",
    projects: "Projetos",
    contact: "Contato",
  },

  common: {
    resume: "Currículo",
    downloadResume: "Baixar currículo",
    talk: "Falar comigo",
    projects: "Projetos",
    allProjects: "Todos os projetos",
  },

  location: "Jardim Bonfiglioli · Butantã, SP",
  phone: "(11) 94749-8366",
  objective:
    "Tenho interesse em oportunidades em planejamento estratégico, planejamento comercial e CRM, onde a decisão de negócio é sustentada por dados, e não apenas reportada por eles.",

  hero: {
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
    ctaEngine: "Ver o motor por dentro",
    cue: "Role para ver a fila se formar",
  },

  manifesto: {
    kicker: "Posição",
    title: "Relatório não é decisão.",
    body:
      "Dado que só descreve o passado é caro e confortável. O que muda o número é a regra que entra em produção e reordena o dia de quem vende. É nesse ponto — entre a área de negócio e a query — que eu trabalho.",
    points: [
      {
        title: "A regra vem antes do dashboard",
        text:
          "Um gráfico conta o que aconteceu. Um motor de priorização define quem o time liga amanhã às nove. Escrever o segundo exige entender por que o primeiro ficou daquele jeito.",
      },
      {
        title: "Critério se negocia, não se chuta",
        text:
          "Peso de recência, potencial de receita, risco, cobertura. Cada corte desses é uma conversa com quem responde pela carteira — e vira cláusula de SQL só depois de acordado.",
      },
      {
        title: "Ponta a ponta, ou não é meu",
        text:
          "Da definição do critério ao pipeline que roda sozinho de madrugada. Entrego a lógica inteira: modelagem, orquestração e o que acontece quando a fonte quebra.",
      },
    ],
  },

  engine: {
    kicker: "O motor, por dentro",
    title: "De carteira crua a fila de abordagem",
    steps: [
      {
        title: "Carteira crua",
        text:
          "Milhares de CNPJs chegam sem hierarquia nenhuma. Todo cliente parece igualmente urgente — que é o mesmo que dizer que nenhum é.",
      },
      {
        title: "A regra entra",
        text:
          "Recência, potencial, risco e cobertura viram peso. O critério deixa de ser opinião de reunião e passa a ser uma coluna calculada.",
      },
      {
        title: "A fila sai",
        text:
          "O time comercial abre o sistema e encontra ordem, não uma lista. Primeiro contato do dia definido por um score que alguém consegue explicar.",
      },
    ],
    stage: "Carteira PJ · fila de abordagem",
    score: "score",
    disclaimer: "Dados ilustrativos · a lógica real é proprietária",
    idPrefix: "CNPJ",
    segments: {
      industry: "Indústria",
      retail: "Varejo",
      services: "Serviços",
      agro: "Agro",
      tech: "Tecnologia",
      construction: "Construção",
      logistics: "Logística",
    },
  },

  experience: {
    kicker: "Experiência",
    title: "Onde a regra encontrou produção",
    lede:
      "Dois anos entre produto e dado: de construir a aplicação inteira a decidir o que ela deve priorizar.",
    present: "Atual",
    items: {
      itau: {
        role: "Analista de CRM Jr.",
        summary:
          "Desenvolvimento e manutenção dos motores de priorização de carteira para clientes PJ.",
        bullets: [
          "Definição das regras de negócio junto às áreas comerciais, do critério ao corte.",
          "Modelagem dos dados em SQL e orquestração dos pipelines em Python.",
          "Responsável pela lógica ponta a ponta que direciona quais clientes o time aborda e em que ordem.",
        ],
      },
      synplai: {
        role: "Desenvolvedor Full-Stack",
        summary:
          "Produto ponta a ponta: back-end em Python, front-end em React e camada de IA.",
        bullets: [
          "Desenvolvimento back-end em Python e front-end em React.",
          "Integração e manuseio de APIs, tratamento de dados.",
          "Arquitetura de prompts para Inteligências Artificiais.",
        ],
      },
    },
  },

  work: {
    kicker: "Trabalho",
    title: "Quatro problemas de ordenar coisas",
    lede:
      "Pós-venda, patrimônio, órbita, laboratório. Muda o domínio, permanece a pergunta: o que merece atenção primeiro?",
  },

  toolbox: {
    kicker: "Ferramental",
    title: "A caixa de ferramentas, sem inflar a lista",
    lede: "Listadas por uso real, não por curso assistido.",
    // As chaves são as categorias gravadas em skills.json.
    categories: {
      "Dados & Cloud": { label: "Dados & Cloud", note: "Onde o trabalho realmente acontece hoje." },
      Linguagens: { label: "Linguagens", note: "O que eu leio e escrevo sem consultar a documentação." },
      "Back-end": { label: "Back-end", note: "APIs, serviços e a camada que sustenta o dado." },
      "Front-end": { label: "Front-end", note: "De onde eu vim, e ainda uso quando o dado precisa de tela." },
      Ferramentas: { label: "Ferramentas", note: "Versionamento, automação e o que roda sozinho." },
    },
  },

  cta: {
    kicker: "Próximo passo",
    title: "Tem uma fila que ninguém sabe ordenar?",
  },

  about: {
    kicker: "Trajetória",
    title: "Comecei querendo construir telas. Fiquei pela decisão por trás delas.",
    paragraphs: [
      "Entrei em programação aos 14 anos, por um curso de Python, e passei os anos seguintes construindo aplicação: front-end, back-end, API, banco. Foi um bom caminho — mas em algum momento ficou claro que a parte que me segurava acordado não era a interface, e sim a regra que decidia o que ela deveria mostrar primeiro.",
      "Hoje, no Itaú, esse é literalmente o trabalho: modelar em SQL, orquestrar em Python e negociar com as áreas de negócio o critério que vai definir a ordem de abordagem de uma carteira PJ inteira. É uma posição de fronteira — metade engenharia, metade conversa — e é exatamente onde eu quero estar.",
      "Fora do horário, mantenho projetos próprios de dados sobre mercado financeiro, participo de projetos voluntários e jogo tênis nos fins de semana — em geral mal, mas com convicção.",
    ],
    educationLabel: "Formação",
    course: "Engenharia de Software",
    semester: "6º semestre",
    languagesLabel: "Idiomas",
    languages: { pt: "Português", en: "Inglês", fr: "Francês" },
    levels: { native: "Nativo", advanced: "Avançado", basic: "Básico" },
    certsLabel: "Cursos e certificações",
    certStatus: { inProgress: "cursando" },
    activityLabel: "Atividade",
    activityTitle: "Um ano de commits",
    calendar: {
      months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      totalCount: "{{count}} contribuições em {{year}}",
      legend: { less: "Menos", more: "Mais" },
    },
  },

  kinds: { Pessoal: "Pessoal", Acadêmico: "Acadêmico" },

  projects: {
    kicker: "Projetos",
    title: "O que eu já construí",
    lede:
      "Projetos entre faculdade, Harvard e madrugadas próprias. Alguns viraram produto, outros viraram lição. Os dois estão aqui.",
    filterGroup: "Filtrar por origem",
    all: "Tudo",
    sortLabel: "Ordem",
    sortGroup: "Ordenar projetos",
    sorts: { recent: "Recentes", az: "A–Z" },
    listTitle: "Lista de projetos",
    count: (n) => (n === 1 ? "1 projeto exibido" : `${n} projetos exibidos`),
    empty: "Nada por aqui com esse filtro.",
  },

  project: {
    about: "Sobre o projeto",
    live: "Ver ao vivo",
    code: "Código",
    context: "Contexto",
    tech: "Tecnologias",
    next: "Próximo",
    nextNav: "Próximo projeto",
    cardAlt: (name) => `Interface do projeto ${name}`,
    gallery: {
      label: (name) => `Imagens do projeto ${name}`,
      roleDescription: "carrossel",
      prev: "Imagem anterior",
      next: "Próxima imagem",
      goTo: (i) => `Ir para a imagem ${i}`,
      alt: (name, i, n) => `${name} — imagem ${i} de ${n}`,
    },
  },

  contact: {
    kicker: "Contato",
    title: "Escreva. Eu respondo.",
    lede:
      "Vaga, projeto, uma pergunta sobre priorização de carteira ou só uma discordância bem argumentada. Tudo cabe no formulário.",
    formTitle: "Formulário de contato",
    name: "Nome",
    email: "E-mail",
    emailPlaceholder: "voce@exemplo.com",
    message: "Mensagem",
    errors: {
      name: "Preciso saber com quem estou falando.",
      email: "Esse e-mail não parece válido.",
      message: "Escreva ao menos uma frase — prometo ler.",
    },
    send: "Enviar mensagem",
    sending: "Enviando",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    sent: "Mensagem enviada. Respondo assim que der — normalmente no mesmo dia.",
    failed: "Algo falhou no envio. Me chame direto em",
    baseLabel: "Base",
    remote: "Aberto a remoto e híbrido",
    channels: "Canais",
  },

  notFound: {
    kicker: "Erro 404",
    title: "Essa rota não entrou na fila.",
    body:
      "A página que você procurou não existe, mudou de endereço ou nunca chegou a ser publicada. Nenhuma das três é culpa sua.",
    home: "Voltar ao início",
    projects: "Ver projetos",
    orTalk: "Ou fale comigo em",
  },

  footer: {
    tagline: "Analista de CRM no Itaú Unibanco. Regras de priorização, SQL e pipelines. São Paulo.",
    pages: "Páginas",
    find: "Onde me achar",
    builtWith: "Construído com React, GSAP e Motion",
  },
};

export default pt;
