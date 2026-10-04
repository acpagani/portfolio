# Portfólio — Arthur Cotrick Pagani

Portfólio pessoal de Arthur Cotrick Pagani, Analista de CRM no Itaú Unibanco.

O eixo do site é o próprio trabalho: **regras de priorização**. Toda a narrativa,
a identidade visual e a animação principal partem da mesma ideia — transformar
uma carteira crua e sem hierarquia numa fila de abordagem ordenada.

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Estrutura

```
src/
  components/   Header, menu mobile, cards, galeria, botões, chips
  sections/     Blocos da home (Hero, Manifesto, PriorityEngine, ...)
  pages/        Uma por rota
  data/         profile.js, projects.json, skills.json — todo o conteúdo
  lib/          Registro do GSAP, escalas de easing/variants, navegação
```

O conteúdo vive inteiramente em `src/data`. Para atualizar experiência,
formação, projetos ou tecnologias, basta editar esses arquivos — nenhum
componente precisa ser tocado.

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Hero, posicionamento, o motor de priorização, experiência, projetos em destaque, ferramental e CTA |
| `/about` | Trajetória, formação, certificações, idiomas e atividade no GitHub |
| `/projects` | Todos os projetos, com filtro por origem e ordenação |
| `/projects/:id` | Detalhe do projeto, com galeria e stack |
| `/contact` | Formulário (EmailJS) e canais diretos |

## Identidade

- **Paleta** — azul-marinho quase preto (`ink`/`abyss`), superfícies em azul
  profundo (`panel`), acento em azul claro (`azure`/`frost`) e off-white (`paper`).
- **Tipografia** — Instrument Serif (display), Inter Tight (texto) e
  JetBrains Mono (rótulos e dados).
- **Motivo recorrente** — índices em mono, filetes de 1px e badges de rank: a
  linguagem de uma fila ordenada.

## Animação

Segue uma regra simples: **um momento coreografado por página, microinterações
discretas no resto.**

- **GSAP + ScrollTrigger** — cena assinatura (`sections/PriorityEngine.jsx`):
  uma seção fixada onde linhas de carteira chegam espalhadas, se ordenam por
  rank e recebem score. O DOM autoral já é o estado final, então a seção
  continua correta e legível se o JS não rodar. A cena só é montada em telas
  `≥ 1024px` sem `prefers-reduced-motion`.
- **GSAP + SplitText** — revelação por linhas do título da home, com `autoSplit`
  para resistir a resize e troca de webfont.
- **Motion** — transições de rota, menu mobile, indicador de nav (`layoutId`),
  reveals em viewport, reordenação da grade de projetos e a galeria do projeto.

Regras seguidas em todo o projeto: apenas `transform` e `opacity` são animados;
reveals disparam uma única vez; saídas são ~70% mais rápidas que entradas; todas
as cenas têm caminho para `prefers-reduced-motion`; o menu mobile tem focus
trap, `Escape` e trava de scroll sem deslocar o layout.

## Dependências principais

| Pacote | Uso |
|---|---|
| `react` + `react-router-dom` | Base e roteamento |
| `motion` | Animação de componentes, gestos e transições de rota |
| `gsap` + `@gsap/react` | ScrollTrigger, SplitText e a cena fixada |
| `@emailjs/browser` | Envio do formulário de contato |
| `react-github-calendar` | Histórico de commits em `/about` |
| `react-icons` | Ícones |
| `tailwindcss` | Estilização |
