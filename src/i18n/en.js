// Every string on the site, in English. Must mirror pt.js key for key — in
// development a console check flags any drift between the two.

const en = {
  locale: "en",

  meta: {
    title: "Arthur Cotrick Pagani — CRM Analyst",
    description:
      "Arthur Cotrick Pagani — CRM Analyst at Itaú. I design the prioritization rules that decide which clients the sales team approaches, and in what order.",
  },

  a11y: {
    skip: "Skip to content",
    home: "Arthur Cotrick Pagani — home",
    mainNav: "Main",
    footerNav: "Footer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navDialog: "Navigation",
    direct: "Direct",
    language: "Language",
    hero: "Introduction",
  },

  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },

  common: {
    // The PDF is the Portuguese résumé; say so rather than surprise anyone.
    resume: "Resume (PT)",
    downloadResume: "Download resume (PT)",
    talk: "Talk to me",
    projects: "Projects",
    allProjects: "All projects",
  },

  location: "São Paulo, Brazil",
  phone: "+55 11 94749-8366",
  objective:
    "I'm interested in roles in strategic planning, sales planning and CRM — where business decisions are backed by data, not just reported by it.",

  hero: {
    eyebrow: "CRM Analyst · Itaú Unibanco",
    lineOne: "Every sales team",
    lineTwo: "has a queue.",
    lineThree: "I write the rule that orders it.",
    lede:
      "I build the business-portfolio prioritization engines at Itaú: I model the rules in SQL, orchestrate the pipelines in Python and design the criteria with the business teams. The result lands on the screen of whoever is talking to the client — not in a slide deck.",
    stats: [
      { value: "B2B", label: "Segment" },
      { value: "SQL", label: "Where the rule lives" },
      { value: "2027", label: "Software Eng. · FIAP" },
    ],
    ctaEngine: "Look inside the engine",
    cue: "Scroll to watch the queue form",
  },

  manifesto: {
    kicker: "Stance",
    title: "A report is not a decision.",
    body:
      "Data that only describes the past is expensive and comfortable. What moves the number is the rule that ships to production and reorders the day of whoever sells. That's where I work — between the business team and the query.",
    points: [
      {
        title: "The rule comes before the dashboard",
        text:
          "A chart tells you what happened. A prioritization engine decides who the team calls tomorrow at nine. Writing the second means understanding why the first looks the way it does.",
      },
      {
        title: "Criteria get negotiated, not guessed",
        text:
          "Recency weight, revenue potential, risk, coverage. Every one of those cuts is a conversation with whoever owns the portfolio — and only becomes a SQL clause once it's agreed.",
      },
      {
        title: "End to end, or it isn't mine",
        text:
          "From defining the criterion to the pipeline that runs on its own overnight. I deliver the whole logic: modeling, orchestration, and what happens when the source breaks.",
      },
    ],
  },

  engine: {
    kicker: "Inside the engine",
    title: "From raw portfolio to call queue",
    steps: [
      {
        title: "Raw portfolio",
        text:
          "Thousands of companies arrive with no hierarchy at all. Every client looks equally urgent — which is the same as saying none of them is.",
      },
      {
        title: "The rule kicks in",
        text:
          "Recency, potential, risk and coverage become weights. The criterion stops being a meeting-room opinion and becomes a computed column.",
      },
      {
        title: "The queue comes out",
        text:
          "The sales team opens the system and finds an order, not a list. The day's first call, set by a score someone can actually explain.",
      },
    ],
    stage: "Business portfolio · call queue",
    score: "score",
    disclaimer: "Illustrative data · the real logic is proprietary",
    idPrefix: "Acct",
    segments: {
      industry: "Manufacturing",
      retail: "Retail",
      services: "Services",
      agro: "Agribusiness",
      tech: "Technology",
      construction: "Construction",
      logistics: "Logistics",
    },
  },

  experience: {
    kicker: "Experience",
    title: "Where the rule met production",
    lede:
      "Two years between product and data: from building the entire application to deciding what it should prioritize.",
    present: "Present",
    items: {
      itau: {
        role: "Junior CRM Analyst",
        summary:
          "Building and maintaining the portfolio prioritization engines for business clients.",
        bullets: [
          "Defining the business rules with the sales teams, from criterion to cut-off.",
          "Modeling the data in SQL and orchestrating the pipelines in Python.",
          "Owning the end-to-end logic that decides which clients the team approaches, and in what order.",
        ],
      },
      synplai: {
        role: "Full-Stack Developer",
        summary:
          "Product end to end: Python back-end, React front-end and an AI layer.",
        bullets: [
          "Back-end development in Python and front-end in React.",
          "API integration and handling, data processing.",
          "Prompt architecture for AI systems.",
        ],
      },
    },
  },

  work: {
    kicker: "Work",
    title: "Four problems about ordering things",
    lede:
      "After-sales, wealth, orbit, lab. The domain changes; the question stays: what deserves attention first?",
  },

  toolbox: {
    kicker: "Toolkit",
    title: "The toolbox, without padding the list",
    lede: "Listed by actual use, not by courses watched.",
    categories: {
      "Dados & Cloud": { label: "Data & Cloud", note: "Where the work actually happens today." },
      Linguagens: { label: "Languages", note: "What I read and write without checking the docs." },
      "Back-end": { label: "Back-end", note: "APIs, services and the layer that holds the data." },
      "Front-end": { label: "Front-end", note: "Where I came from — still my tool when data needs a screen." },
      Ferramentas: { label: "Tools", note: "Versioning, automation and whatever runs on its own." },
    },
  },

  cta: {
    kicker: "Next step",
    title: "Got a queue nobody knows how to order?",
  },

  about: {
    kicker: "About",
    title: "I started out wanting to build screens. I stayed for the decision behind them.",
    paragraphs: [
      "I got into programming at 14 through a Python course, and spent the following years building applications: front-end, back-end, APIs, databases. It was a good path — but at some point it became clear that what kept me up at night wasn't the interface. It was the rule deciding what it should show first.",
      "Today, at Itaú, that's literally the job: modeling in SQL, orchestrating in Python and negotiating with the business teams the criterion that sets the call order for an entire business portfolio. It's a boundary role — half engineering, half conversation — and it's exactly where I want to be.",
      "Off the clock, I run my own data projects on financial markets, take part in volunteer projects and play tennis on weekends — usually badly, but with conviction.",
    ],
    educationLabel: "Education",
    course: "Software Engineering",
    semester: "6th semester",
    languagesLabel: "Languages",
    languages: { pt: "Portuguese", en: "English", fr: "French" },
    levels: { native: "Native", advanced: "Advanced", basic: "Basic" },
    certsLabel: "Courses & certifications",
    certStatus: { inProgress: "in progress" },
    activityLabel: "Activity",
    activityTitle: "A year of commits",
    calendar: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      totalCount: "{{count}} contributions in {{year}}",
      legend: { less: "Less", more: "More" },
    },
  },

  kinds: { Pessoal: "Personal", Acadêmico: "Academic" },

  projects: {
    kicker: "Projects",
    title: "What I've built",
    lede:
      "Projects across college, Harvard and late nights of my own. Some became products, others became lessons. Both are here.",
    filterGroup: "Filter by origin",
    all: "All",
    sortLabel: "Order",
    sortGroup: "Sort projects",
    sorts: { recent: "Recent", az: "A–Z" },
    listTitle: "Project list",
    count: (n) => (n === 1 ? "1 project shown" : `${n} projects shown`),
    empty: "Nothing here with this filter.",
  },

  project: {
    about: "About the project",
    live: "View live",
    code: "Code",
    context: "Context",
    tech: "Technologies",
    next: "Next",
    nextNav: "Next project",
    cardAlt: (name) => `${name} project interface`,
    gallery: {
      label: (name) => `${name} project images`,
      roleDescription: "carousel",
      prev: "Previous image",
      next: "Next image",
      goTo: (i) => `Go to image ${i}`,
      alt: (name, i, n) => `${name} — image ${i} of ${n}`,
    },
  },

  contact: {
    kicker: "Contact",
    title: "Write. I'll answer.",
    lede:
      "A role, a project, a question about portfolio prioritization or just a well-argued disagreement. It all fits in the form.",
    formTitle: "Contact form",
    name: "Name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    errors: {
      name: "I need to know who I'm talking to.",
      email: "That email doesn't look valid.",
      message: "Write at least one sentence — I promise to read it.",
    },
    send: "Send message",
    sending: "Sending",
    copy: "Copy email",
    copied: "Email copied",
    sent: "Message sent. I'll reply as soon as I can — usually the same day.",
    failed: "Something went wrong while sending. Reach me directly at",
    baseLabel: "Based in",
    remote: "Open to remote and hybrid",
    channels: "Channels",
  },

  notFound: {
    kicker: "Error 404",
    title: "This route didn't make the queue.",
    body:
      "The page you're looking for doesn't exist, has moved, or was never published. None of the three is your fault.",
    home: "Back to home",
    projects: "See projects",
    orTalk: "Or talk to me at",
  },

  footer: {
    tagline: "CRM Analyst at Itaú Unibanco. Prioritization rules, SQL and pipelines. São Paulo.",
    pages: "Pages",
    find: "Where to find me",
    builtWith: "Built with React, GSAP and Motion",
  },
};

export default en;
