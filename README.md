# PEDRON ADVOGADOS — Site Institucional

Site institucional do escritório **PEDRON ADVOGADOS**, desenvolvido com foco em
qualidade visual, performance, acessibilidade e facilidade de manutenção.

A identidade visual é baseada na marca existente: **preto** como cor principal,
**dourado** como destaque e **branco/creme** para contraste, com tipografia
serifada nos títulos e sans-serif nos textos.

---

## 1. Stack e decisões técnicas

| Item | Escolha | Motivo |
| --- | --- | --- |
| Build | **Vite 6** | Rapidez no desenvolvimento e build otimizado |
| UI | **React 18 + TypeScript** | Componentização e segurança de tipos |
| Estilo | **Tailwind CSS 4** (com `@theme`) | Design system centralizado em variáveis de projeto |
| Ícones | **Lucide React** | Conjunto discreto e consistente |
| Rotas | **React Router 6** | Páginas institucionais (privacidade, aviso legal, 404) |
| Fontes | **@fontsource** (Cormorant Garamond + Inter) | Fontes hospedadas localmente (sem requisições externas) |

Sem dependências além das necessárias. Nenhuma biblioteca de animação foi
adicionada: as revelações ao rolar usam `IntersectionObserver` nativo.

---

## 2. Estrutura do site (seções da página inicial)

1. **Header** — navegação fixa com menu responsivo
2. **Hero** — imagem institucional, logotipo oficial, mensagem e botão de contato
3. **O Escritório** — apresentação institucional
4. **Áreas de Atuação** — estrutura visual preparada (conteúdo a validar)
5. **Nossas Unidades** — Cidreira e Magistério (Balneário Pinhal), cada uma com
   fotografias próprias, endereço, telefone e link para o Google Maps
6. **Atendimento em Capão da Canoa** — atendimento regional por telefone
   (não é unidade física)
7. **Região de Atuação** — fotografias aéreas ilustrativas
8. **Diferenciais** — postura institucional de trabalho
9. **Equipe** — os dois profissionais do escritório
10. **Contato** — formulário, unidades, plantão, redes sociais e mapas
11. **Footer** — dados institucionais, navegação e contatos

---

## 3. Estrutura do projeto

```
.
├── index.html                  # Meta tags, Open Graph, JSON-LD, favicon
├── vercel.json                 # Rewrites de SPA + cache de assets (Vercel)
├── public/
│   ├── _redirects              # Rewrites de SPA (Netlify / Cloudflare Pages)
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/                 # Imagens — ver LEIA-ME.txt
│       ├── logo/               # Logotipo oficial
│       ├── cidreira/           # Fotos da Unidade Cidreira
│       ├── magisterio/         # Fotos da Unidade Magistério
│       ├── institucional/      # Hero, imagens institucionais e fotos aéreas
│       └── equipe/             # Retratos dos profissionais
└── src/
    ├── config/
    │   └── site.ts             # ⭐ CONFIGURAÇÃO CENTRAL (dados editáveis)
    ├── components/
    │   ├── ui/                 # Button, SectionHeading, Media, Reveal, PendingTag, PageHeader
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── PracticeAreas.tsx
    │   ├── Units.tsx               # Nossas Unidades
    │   ├── RegionalAttendance.tsx  # Atendimento em Capão da Canoa
    │   ├── AerialGallery.tsx       # Região de atuação (fotos aéreas)
    │   ├── Differentials.tsx
    │   ├── Team.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Logo.tsx
    │   ├── Layout.tsx
    │   ├── ScrollManager.tsx
    │   └── WhatsAppFloat.tsx
    ├── pages/                  # Home, Privacy, LegalNotice, NotFound
    ├── hooks/                  # useActiveSection
    ├── lib/                    # cn, useSeo, contact (links e formatação)
    ├── index.css               # Tema (cores, tipografia), base e utilitários
    ├── App.tsx                 # Rotas
    └── main.tsx                # Ponto de entrada + fontes
```

---

## 4. Instalação e execução

Requisitos: **Node.js 18+** (testado com Node 24) e npm.

```bash
npm install        # instala as dependências
npm run dev        # ambiente de desenvolvimento (http://localhost:5173)
npm run build      # verificação de tipos + build de produção (gera /dist)
npm run preview    # pré-visualiza o resultado do build
npm run typecheck  # apenas a verificação de tipos
```

---

## 5. Como editar o conteúdo do site

**Todo o conteúdo editável está centralizado em [`src/config/site.ts`].**
Não é necessário alterar componentes para atualizar dados do escritório.

Seções do arquivo:

- `site` — nome, inscrição profissional (OAB/RS), razão social, CNPJ, domínio, e-mail
- `logo` — caminho do logotipo oficial (claro e escuro)
- `images` — Hero, imagens institucionais e fotografias aéreas
- `units` — as duas unidades físicas (nome, endereço, telefone, fotos, mapa)
- `regionalAttendance` — apresentação do atendimento em Capão da Canoa
- `contact` — telefone de plantão, e-mail, horário e endpoint do formulário
- `social` — redes sociais (Instagram e Facebook)
- `attendanceRoutes` — roteamento de atendimento por localidade
- `centralWhatsApp` — estrutura reservada para o WhatsApp central (ver seção 11)
- `navigation` — itens do menu
- `about` — textos institucionais da seção "O Escritório"
- `practiceAreas` — áreas de atuação (atualmente vazio — a validar)
- `differentials` — diferenciais institucionais
- `team` — os dois profissionais
- `seo` — títulos e descrições por página

### Contatos oficiais cadastrados

| Canal | Valor |
| --- | --- |
| Identificação profissional | OAB/RS 58.464 |
| Unidade Cidreira | (51) 99862-2960 |
| Unidade Magistério (Balneário Pinhal) | (51) 99283-1313 |
| Plantão | (51) 99966-6808 |
| Instagram | @pedron_adv |
| Facebook | Pedronadv |

Todos os telefones são convertidos em links clicáveis para dispositivos móveis
(`tel:` e `wa.me`) pela biblioteca [`src/lib/contact.ts`]. **Nenhum e-mail foi
inventado** — o campo permanece vazio e sinalizado como pendente.

### Marcadores de pendência

Enquanto houver qualquer valor vazio, o site exibe marcadores discretos
("A informar", "Imagem pendente", "Conteúdo a confirmar") para facilitar a
revisão interna. Esse comportamento é controlado por:

```ts
// src/config/site.ts
export const showPlaceholders = true   // manter ativado enquanto houver pendências
```

> **Atenção:** não desative globalmente os avisos enquanto ainda existirem
> informações institucionais não confirmadas (logotipo, fotografias, áreas de
> atuação, telefone regional e número central de WhatsApp).

---

## 6. Inserir o logotipo e as fotografias

1. Coloque os arquivos nas pastas indicadas em `public/assets/` — a relação
   completa de nomes está em [`public/assets/LEIA-ME.txt`].
2. Os caminhos já estão pré-configurados em `src/config/site.ts`:

```ts
export const logo = {
  src: '/assets/logo/logo-pedron.png',        // fundos claros
  srcLight: '/assets/logo/logo-pedron-clara.png', // fundos escuros
  alt: 'PEDRON ADVOGADOS',
}

export const images = {
  hero: '/assets/institucional/hero-juridico.jpg',
  office: [
    '/assets/institucional/escritorio-institucional-01.jpg',
    '/assets/institucional/escritorio-institucional-02.jpg',
  ],
  aerial: {
    cidreira: '/assets/institucional/cidade-aerea-cidreira.jpg',
    magisterio: '/assets/institucional/cidade-aerea-magisterio.jpg',
  },
}
```

Enquanto um arquivo não existir, os componentes `Media` e `Logo` exibem
automaticamente um marcador sóbrio de pendência (ou o lockup tipográfico
provisório, no caso do logotipo), **sem quebrar o layout**. Basta inserir o
arquivo com o nome correto e ele passa a ser exibido.

**Regras importantes:**

- As fotografias das duas unidades **não devem ser misturadas**.
- A imagem do Hero é de tema jurídico/institucional e **não** representa uma
  unidade específica.
- As fotografias aéreas são ilustrativas e **não substituem** as fotos das
  unidades.
- Preserve qualidade, proporção e aparência original das fotografias.

---

## 7. Formulário de contato

O formulário possui validação no lado do cliente (nome, e-mail, **localidade**,
mensagem e consentimento). A localidade é escolhida entre as opções de
`attendanceRoutes` (Cidreira, Balneário Pinhal, Capão da Canoa). O envio
funciona em dois modos:

- **Sem backend (padrão):** a mensagem é preparada e encaminhada pelo WhatsApp
  do canal correspondente à localidade escolhida.
- **Com backend:** defina `contact.formEndpoint` em `src/config/site.ts` com a
  URL que receberá um `POST` em JSON (ex.: serviço de formulários ou API própria).

---

## 8. SEO, performance e acessibilidade

- Meta title/description, canonical, Open Graph e Twitter Card em `index.html`,
  atualizados por página via o hook `useSeo`.
- JSON-LD (`LegalService`) com `areaServed` (Cidreira, Balneário Pinhal e
  Capão da Canoa), `sameAs` (Instagram/Facebook) e `department` (Unidade
  Cidreira e Unidade Magistério).
- HTML semântico (`header`, `main`, `section`, `article`, `nav`, `footer`, `dl`).
- `favicon.svg`, `site.webmanifest`, `robots.txt` e `sitemap.xml`.
- Imagens com `loading="lazy"` e `decoding="async"` (a imagem do Hero é `eager`).
- Foco visível, navegação por teclado, link "Ir para o conteúdo" e rótulos ARIA.
- Respeito a `prefers-reduced-motion`.
- Fontes hospedadas localmente, com `font-display: swap`.

### Integração futura de análise de tráfego

Em `index.html` há um bloco comentado pronto para **Google Analytics / GTM**:
descomente e insira o identificador de medição.

### Google Search Console

1. Publique o site no domínio definitivo.
2. Submeta `https://SEU-DOMINIO/sitemap.xml`.
3. Valide a propriedade por registro DNS TXT ou arquivo HTML.
4. Atualize o domínio em `index.html`, `public/robots.txt`, `public/sitemap.xml`
   e em `src/config/site.ts` (`site.url`).

---

## 9. Publicação

O build gera arquivos estáticos em `dist/`. Qualquer hospedagem estática funciona.
Como o site usa roteamento no cliente, é necessário redirecionar rotas para
`index.html` — já configurado para:

- **Vercel:** `vercel.json`
- **Netlify / Cloudflare Pages:** `public/_redirects`

Comando de build: `npm run build` · Diretório de publicação: `dist`

> O site **não é publicado automaticamente**. A publicação só deve ocorrer após
> a revisão das pendências listadas na seção 10.

---

## 10. ⚠️ O que falta preencher / confirmar antes da publicação

Os itens abaixo **não foram inventados** e estão sinalizados no site com
marcadores de pendência. Preencha em `src/config/site.ts` (e nos arquivos
indicados).

### Informações institucionais

| # | Informação | Onde preencher |
| --- | --- | --- |
| 1 | **Logotipo oficial** (versão clara e escura) | `public/assets/logo/` → `logo` |
| 2 | **Fotografias reais de cada unidade** (Cidreira e Magistério) | `public/assets/cidreira/`, `magisterio/` → `units[].images` |
| 3 | **Fotografias aéreas** da região | `public/assets/institucional/` → `images.aerial` |
| 4 | **Retratos dos profissionais** | `public/assets/equipe/` → `team[].photo` |
| 5 | **E-mail institucional** | `contact.email` / `site.email` |
| 6 | **Horário de atendimento** | `contact.hours` |
| 7 | **Áreas de atuação reais** — a lista está vazia e **a validar** | `practiceAreas` |
| 8 | **Registro profissional da Dra. Taiane Pedron** (não informado) | `team[1].registration` |
| 9 | **Telefone específico de Capão da Canoa** (canal regional) | `regionalAttendance.phone` |
| 10 | **Razão social e CNPJ** | `site.legalName`, `site.cnpj` |
| 11 | **Domínio oficial** do site | `index.html`, `robots.txt`, `sitemap.xml`, `site.url` |
| 12 | **História/trajetória** do escritório (se desejado) | `about.historyNote` |
| 13 | **Biografias e funções** dos profissionais (se desejado) | `team[].role`, `team[].bio` |

### Técnicos / recomendados

| # | Item | Onde preencher |
| --- | --- | --- |
| 14 | **Número central de WhatsApp** (ver seção 11) | `centralWhatsApp` |
| 15 | Imagem Open Graph 1200×630 px | `public/assets/og-image.jpg` + `index.html` |
| 16 | Endpoint do formulário de contato (se houver backend) | `contact.formEndpoint` |
| 17 | Link/mapa alternativo por unidade (se houver) | `units[].mapLink` |
| 18 | Canal do encarregado de dados (DPO) | página Política de Privacidade |
| 19 | Revisão jurídica da Política de Privacidade e do Aviso Legal | `src/pages/Privacy.tsx`, `src/pages/LegalNotice.tsx` |
| 20 | ID do Google Analytics / GTM | `index.html` (bloco comentado) |
| 21 | Desativar os marcadores de pendência | `showPlaceholders = false` |

---

## 11. Integração futura — WhatsApp centralizado

> **Status:** planejada, **não implementada**. Nenhum número central simulado e
> nenhum chatbot fictício foram adicionados. A estrutura abaixo está apenas
> **preparada** para receber a integração.

### Experiência desejada

O visitante clica em **"Fale conosco"**, entra em contato por **um único número
central** e é recebido por um assistente automático com a mensagem:

```
Olá! Seja bem-vindo ao PEDRON ADVOGADOS.

Para qual localidade você deseja atendimento?

1 - Cidreira
2 - Balneário Pinhal
3 - Capão da Canoa

Digite o número correspondente à localidade desejada.
```

Após a escolha:

| Opção | Localidade | Direcionamento |
| --- | --- | --- |
| 1 | Cidreira | Equipe da unidade de Cidreira |
| 2 | Balneário Pinhal | Equipe da unidade de Magistério |
| 3 | Capão da Canoa | Atendimento telefônico regional |

O **telefone de plantão** permanece identificado separadamente, como canal
distinto.

### O que já está pronto no projeto

- `centralWhatsApp` em [`src/config/site.ts`] com `enabled`, `number`,
  `displayNumber`, `greeting` (mensagem acima) e `routing` (opções 1/2/3).
- O componente [`WhatsAppFloat.tsx`] verifica `centralWhatsApp.enabled`:
  - `false` (atual) → **não** abre número algum; direciona para a seção de contato;
  - `true` → usa `getWhatsAppLink(centralWhatsApp.number, centralWhatsApp.greeting)`.

### Requisitos técnicos para a implementação

1. **Número central** no formato **E.164** (ex.: `5551999999999`), com
   `displayNumber` para exibição. Preencher `centralWhatsApp.number` e
   `displayNumber`, e definir `enabled: true`.
2. **WhatsApp Business Platform API (Cloud API)** com conta comercial
   verificada (Meta Business Manager) e número dedicado à central.
3. **Webhook** público (HTTPS) para receber eventos de mensagem
   (`messages`, `statuses`), com verificação de token.
4. **Solução de chatbot / menu** que apresente a `greeting` e interprete as
   respostas `1`, `2` e `3`, encaminhando para a fila/atendente correspondente
   conforme `centralWhatsApp.routing`.
5. **Distribuição de atendimentos** por fila ou equipe (ex.: roteamento por
   número de destino, etiquetas ou múltiplos atendentes).
6. **Janela de 24h e templates** aprovados (HSM) para mensagens iniciadas pelo
   escritório fora da janela de atendimento.
7. **LGPD:** informar na Política de Privacidade o uso do WhatsApp no tratamento
   de dados, base legal e retenção das conversas.
8. **Fallback:** enquanto a integração não estiver ativa, o site mantém os
   canais atuais (telefones das unidades, plantão e formulário) e o botão
   flutuante direciona para a seção de contato.

---

## 12. Conformidade com as normas da OAB

A comunicação foi redigida para atender ao Código de Ética e Disciplina da OAB
e ao Provimento nº 205/2021 do Conselho Federal da OAB:

- sem promessas de resultado, garantias de êxito ou superlativos;
- sem números, prêmios ou estatísticas não comprovadas;
- sem linguagem sensacionalista, depoimentos ou captação indevida de clientela;
- texto informativo, institucional e sóbrio.

**Ao substituir os conteúdos provisórios, mantenha essas diretrizes.**
