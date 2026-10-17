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
  data/         profile.js, projects.json, skills.json — dados
  i18n/         pt.js, en.js — todo o texto do site, nos dois idiomas
  lib/          Registro do GSAP, escalas de easing/variants, navegação
```

Nenhum componente precisa ser tocado para atualizar conteúdo:

- **Texto** (títulos, parágrafos, botões, rótulos) fica em `src/i18n/pt.js` e
  `src/i18n/en.js`. Os dois arquivos precisam ter exatamente o mesmo formato —
  em desenvolvimento, o console avisa se uma chave existir em um e não no outro.
- **Dados que não mudam com o idioma** (datas, links, scores, tags) ficam em
  `src/data/profile.js`, uma vez só.
- **Projetos e skills** ficam em `projects.json` e `skills.json`. O registro
  base é em português; a versão em inglês vai num bloco `"en"` dentro do
  próprio item, com apenas os campos que mudam (`subtitle`, `intro`,
  `description`, ...). O que não estiver no bloco cai no valor em português.

## Idiomas

O botão `PT | EN` no topo troca o site inteiro. Na primeira visita, o idioma
vem do navegador (português para `pt-*`, inglês para o resto); depois disso
vale a escolha salva no `localStorage`. A troca atualiza `<html lang>`, o
`<title>` e a meta description, e preserva o estado das páginas — filtros de
projetos e texto digitado no formulário continuam onde estavam.

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
