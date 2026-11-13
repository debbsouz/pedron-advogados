/**
 * ============================================================================
 *  CONFIGURAÇÃO INSTITUCIONAL — PEDRON ADVOGADOS
 * ============================================================================
 *
 *  Este é o único arquivo que precisa ser editado para atualizar os dados do
 *  escritório (unidades, telefones, equipe, áreas de atuação, redes sociais).
 *
 *  COMO PREENCHER
 *  --------------
 *  1. Substitua todo valor marcado com  // PENDENTE  pela informação oficial.
 *  2. Enquanto `showPlaceholders` estiver como `true`, os campos vazios e as
 *     imagens ausentes são exibidos com um marcador discreto, para revisão.
 *  3. Após confirmar todos os dados, altere `showPlaceholders` para `false`.
 *
 *  IMPORTANTE (OAB)
 *  ----------------
 *  Não inserir promessas de resultado, garantias de êxito, superlativos,
 *  números não comprovados ou depoimentos de clientes. A comunicação deve
 *  permanecer informativa, institucional e sóbria.
 * ============================================================================
 */

/** Marcador padrão exibido no lugar de um dado ainda não informado. */
export const PENDING_LABEL = 'A informar'

/**
 * Exibe marcadores visuais em dados e imagens pendentes.
 * MANTER ATIVADO enquanto houver informações não confirmadas.
 */
export const showPlaceholders = true

/** Retorna o valor informado ou o marcador de pendência. */
export function valueOrPending(value?: string | null): string {
  const normalized = (value ?? '').trim()
  return normalized.length > 0 ? normalized : PENDING_LABEL
}

/** Indica se um dado ainda está pendente. */
export function isPending(value?: string | null): boolean {
  return (value ?? '').trim().length === 0
}

/* -------------------------------------------------------------------------- */
/*  Identidade do escritório                                                  */
/* -------------------------------------------------------------------------- */

export const site = {
  name: 'PEDRON ADVOGADOS',
  shortName: 'Pedron',
  monogram: 'P',
  /** Inscrição profissional de referência do escritório. */
  oab: 'OAB/RS 58.464',
  /** PENDENTE — razão social completa para o rodapé e avisos legais. */
  legalName: '',
  /** PENDENTE — CNPJ do escritório. */
  cnpj: '',
  /** PENDENTE — confirmar domínio oficial. Atualizar também em index.html. */
  url: 'https://www.pedronadvogados.com.br',

  tagline: 'Advocacia com técnica, discrição e responsabilidade.',

  description:
    'Escritório de advocacia com atuação consultiva e contenciosa, presente nas unidades de Cidreira e de Balneário Pinhal (Magistério), com atendimento regional.',

  /** PENDENTE — e-mail institucional. Não informado até o momento. */
  email: '',
} as const

/* -------------------------------------------------------------------------- */
/*  Marcas e imagens                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Logotipo oficial — brasão dourado com a letra P e o nome PEDRON ADVOGADOS.
 * Coloque os arquivos em `public/assets/logo/`. Enquanto não existirem, o site
 * exibe automaticamente um lockup tipográfico provisório (sem quebrar a página).
 */
export const logo = {
  /** Versão principal (preta + dourada), para fundos claros. */
  src: '/assets/logo/Pedron-logo.png',
  /** Versão clara (creme + dourada), para fundos escuros. */
  srcLight: '/assets/logo/logo-pedron-clara.png',
  alt: 'PEDRON ADVOGADOS',
} as const

/**
 * Imagens institucionais.
 * Os caminhos já estão preparados: basta inserir os arquivos com os nomes
 * indicados. Se um arquivo não for encontrado, o site exibe o marcador de
 * pendência no lugar da imagem.
 */
export const images = {
  /** Imagem principal do Hero (tema jurídico, institucional, sem identidade de unidade). */
  hero: '/assets/institucional/hero-juridico.jpg',
  /**
   * Fotografias de ambiente/arquitetura usadas na seção "O Escritório".
   * Devem ser institucionais e neutras — sem identificar uma unidade específica,
   * já que o escritório possui dois endereços distintos.
   */
  office: [
    '/assets/institucional/escritorio-institucional-01.jpg',
    '/assets/institucional/escritorio-institucional-02.jpg',
  ],
  /** Registro fotográfico aéreo da região de atuação. */
  aerial: {
    cidreira: '/assets/institucional/cidade-aerea-cidreira.jpg',
    magisterio: '/assets/institucional/cidade-aerea-magisterio.jpg',
  },
} as const

/* -------------------------------------------------------------------------- */
/*  Unidades físicas                                                          */
/* -------------------------------------------------------------------------- */

export type Unit = {
  id: string
  /** Nome exibido no card da unidade. */
  name: string
  /** Complemento do nome (ex.: cidade do balneário). */
  subtitle?: string
  /** Linha de localização resumida. */
  location: string
  /** Endereço completo em uma única linha. */
  address: string
  /** Telefone da unidade, exibido e clicável. */
  phone: string
  /** Fotografias reais e exclusivas desta unidade. */
  images: string[]
  /**
   * Link do Google Maps. Quando vazio, é gerado automaticamente a partir do
   * endereço informado (busca no Google Maps) — sem inventar coordenadas.
   */
  mapLink: string
}

/** As duas unidades físicas do escritório. As imagens não devem ser misturadas. */
export const units: Unit[] = [
  {
    id: 'cidreira',
    name: 'Unidade Cidreira',
    location: 'Cidreira · Rio Grande do Sul',
    address: 'Av. Fausto Borba Prates, 3472, 2º Piso, Centro, Cidreira/RS',
    phone: '(51) 99862-2960',
    images: [
      '/assets/cidreira/escritorio-cidreira-01.jpg',
      '/assets/cidreira/escritorio-cidreira-02.jpg',
    ],
    mapLink: '',
  },
  {
    id: 'magisterio',
    name: 'Unidade Magistério',
    subtitle: 'Balneário Pinhal',
    location: 'Balneário Pinhal · Rio Grande do Sul',
    address: 'Rua Caxias do Sul, 803, Magistério, Balneário Pinhal/RS',
    phone: '(51) 99283-1313',
    images: [
      '/assets/magisterio/escritorio-magisterio-01.jpg',
      '/assets/magisterio/escritorio-magisterio-02.jpg',
    ],
    mapLink: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  Atendimento regional — Capão da Canoa                                     */
/* -------------------------------------------------------------------------- */

/**
 * Capão da Canoa NÃO é uma unidade física.
 * O atendimento é realizado diretamente pelo advogado, por telefone.
 * Não associar endereço, fotografia de filial ou número específico enquanto
 * o canal não for confirmado pelo escritório.
 */
export const regionalAttendance = {
  eyebrow: 'Atendimento Regional',
  title: 'Atendimento em Capão da Canoa',
  description:
    'Clientes de Capão da Canoa são atendidos diretamente pelo advogado responsável, por telefone, com o mesmo acompanhamento dedicado prestado nas unidades do escritório.',
  disclaimer:
    'Capão da Canoa não constitui unidade física do PEDRON ADVOGADOS. O atendimento é realizado de forma remota e individualizada.',
  /** PENDENTE — telefone específico para a região, quando confirmado. */
  phone: '',
} as const

/* -------------------------------------------------------------------------- */
/*  Contato                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  /** Telefone de plantão — canal separado, não é o número central de atendimento. */
  plantao: '(51) 99966-6808',
  /** PENDENTE — e-mail institucional. Não informado até o momento. */
  email: '',
  /** PENDENTE — horário de atendimento. Ex.: 'Segunda a sexta, das 9h às 18h'. */
  hours: '',
  /**
   * PENDENTE — endpoint que recebe os envios do formulário de contato.
   * Enquanto estiver vazio, o formulário encaminha a mensagem pelo WhatsApp
   * da localidade escolhida pelo visitante.
   */
  formEndpoint: '',
} as const

/** Redes sociais oficiais. */
export const social = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@pedron_adv',
    url: 'https://www.instagram.com/pedron_adv/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Pedronadv',
    url: 'https://www.facebook.com/Pedronadv',
  },
] as const

/* -------------------------------------------------------------------------- */
/*  Roteamento de atendimento por localidade                                  */
/* -------------------------------------------------------------------------- */

/**
 * Localidades apresentadas no formulário e no seletor de contato.
 * `whatsapp` define para qual número a mensagem é encaminhada quando o visitante
 * escolhe a localidade.
 *
 * OBS.: Capão da Canoa está encaminhado para o telefone de plantão, único canal
 * telefônico geral disponível no momento. Ajustar quando o escritório definir
 * o canal definitivo da região.
 */
export const attendanceRoutes = [
  { id: 'cidreira', label: 'Cidreira', whatsapp: '(51) 99862-2960' },
  { id: 'pinhal', label: 'Balneário Pinhal', whatsapp: '(51) 99283-1313' },
  { id: 'capao', label: 'Capão da Canoa', whatsapp: '(51) 99966-6808' },
] as const

/* -------------------------------------------------------------------------- */
/*  WhatsApp central — INTEGRAÇÃO FUTURA                                      */
/* -------------------------------------------------------------------------- */

/**
 * Estrutura reservada para a centralização dos atendimentos em um único número
 * de WhatsApp, com mensagem automática de boas-vindas e direcionamento por
 * localidade (WhatsApp Business Platform API + chatbot/distribuição de filas).
 *
 * NADA AQUI É EXECUTADO ENQUANTO `enabled` FOR `false`. Não existe número
 * central simulado: enquanto não for informado, o site mantém os canais
 * atuais (unidades, plantão e formulário).
 *
 * Requisitos técnicos da implementação: ver README, seção 11.
 */
export const centralWhatsApp: {
  enabled: boolean
  number: string
  displayNumber: string
  greeting: string
  routing: { option: string; locality: string; destination: string }[]
} = {
  enabled: false,
  /** PENDENTE — número central no formato E.164 (ex.: '5551999999999'). */
  number: '',
  /** PENDENTE — forma de exibição do número central (ex.: '(51) 99999-9999'). */
  displayNumber: '',
  /** Mensagem inicial apresentada pelo assistente automático. */
  greeting: [
    'Olá! Seja bem-vindo ao PEDRON ADVOGADOS.',
    '',
    'Para qual localidade você deseja atendimento?',
    '',
    '1 - Cidreira',
    '2 - Balneário Pinhal',
    '3 - Capão da Canoa',
    '',
    'Digite o número correspondente à localidade desejada.',
  ].join('\n'),
  /** Direcionamento por opção escolhida na mensagem automática. */
  routing: [
    { option: '1', locality: 'Cidreira', destination: 'Equipe da unidade de Cidreira' },
    { option: '2', locality: 'Balneário Pinhal', destination: 'Equipe da unidade de Magistério' },
    { option: '3', locality: 'Capão da Canoa', destination: 'Atendimento telefônico regional' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  Navegação                                                                 */
/* -------------------------------------------------------------------------- */

export const navigation = [
  { label: 'O Escritório', href: '#escritorio' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
] as const

/* -------------------------------------------------------------------------- */
/*  O Escritório                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Textos institucionais. Revise e ajuste com o posicionamento real do escritório.
 * Não foram fornecidos dados de fundação, tempo de atuação, prêmios ou números —
 * nada disso deve ser inserido sem confirmação.
 */
export const about = {
  eyebrow: 'O Escritório',
  title: 'Uma advocacia construída sobre critério e confiança.',
  paragraphs: [
    'O PEDRON ADVOGADOS atua na assessoria e na consultoria jurídica de pessoas e organizações, orientando cada demanda a partir de uma análise técnica aprofundada e de um entendimento preciso do contexto de seus clientes.',
    'O trabalho é conduzido com discrição, transparência e responsabilidade. Cada caso é tratado de forma individualizada, com acompanhamento próximo e comunicação clara em todas as etapas.',
    'Com unidades em Cidreira e em Balneário Pinhal, o escritório mantém presença regional e atende também clientes de outras localidades, sempre com o mesmo padrão de dedicação.',
  ],
  /** PENDENTE — história, data de fundação e trajetória do escritório. */
  historyNote:
    'História, fundação e trajetória do escritório a serem fornecidas pela instituição para composição desta seção.',
  highlights: [
    { label: 'Atuação', value: 'Consultiva e contenciosa' },
    { label: 'Unidades', value: 'Cidreira e Balneário Pinhal' },
    { label: 'Atendimento', value: 'Individualizado' },
  ],
} as const

/* -------------------------------------------------------------------------- */
/*  Áreas de Atuação                                                          */
/* -------------------------------------------------------------------------- */

export type PracticeArea = {
  id: string
  title: string
  summary: string
  description: string
  /** Identificador do ícone Lucide exibido no card. */
  icon: string
}

/**
 * ATENÇÃO — ÁREAS DE ATUAÇÃO AINDA NÃO VALIDADAS.
 *
 * A lista está intencionalmente vazia: nenhuma especialidade foi confirmada pelo
 * escritório. A seção correspondente no site exibe a estrutura visual preparada,
 * com espaços identificados como "a confirmar".
 *
 * Para publicar, preencha a lista abaixo e remova/ajuste o aviso da seção.
 * Ícones Lucide disponíveis como referência: Scale, Building2, Users,
 * HeartHandshake, Landmark, FileCheck2, Briefcase, Gavel, FileText.
 *
 * Exemplo de item:
 *   {
 *     id: 'civil',
 *     title: 'Direito Civil',
 *     summary: 'Relações civis, contratos e responsabilidade.',
 *     description: 'Descrição objetiva e informativa da atuação.',
 *     icon: 'Scale',
 *   }
 */
export const practiceAreas: PracticeArea[] = []

/** Quantidade de espaços reservados exibidos enquanto `practiceAreas` estiver vazio. */
export const practiceAreasPlaceholderCount = 6

/* -------------------------------------------------------------------------- */
/*  Diferenciais                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Diferenciais institucionais.
 * ATENÇÃO: não inserir números, resultados, prêmios ou estatísticas sem
 * comprovação documental. Os itens abaixo descrevem apenas a postura de
 * trabalho do escritório e devem ser revisados antes da publicação.
 */
export const differentials = [
  {
    id: 'atendimento',
    title: 'Atendimento individualizado',
    description:
      'Cada demanda recebe atenção dedicada, respeitando as particularidades e o contexto de cada cliente.',
    icon: 'UserCheck',
  },
  {
    id: 'tecnica',
    title: 'Rigor técnico',
    description:
      'Análise criteriosa da legislação e da jurisprudência como base de toda orientação prestada.',
    icon: 'BookOpen',
  },
  {
    id: 'transparencia',
    title: 'Comunicação clara',
    description:
      'Informações precisas sobre o andamento de cada caso, sem promessas de resultado e com linguagem acessível.',
    icon: 'MessagesSquare',
  },
  {
    id: 'etica',
    title: 'Conduta ética',
    description:
      'Atuação pautada pelas normas da advocacia, pela integridade profissional e pelo respeito às pessoas.',
    icon: 'ShieldCheck',
  },
  {
    id: 'sigilo',
    title: 'Discrição e confidencialidade',
    description:
      'Tratamento reservado de todas as informações, documentos e estratégias relacionadas aos casos.',
    icon: 'Lock',
  },
  {
    id: 'dedicacao',
    title: 'Dedicação contínua',
    description:
      'Acompanhamento próximo e constante, com atualização permanente sobre o desenvolvimento das demandas.',
    icon: 'Clock',
  },
] as const

/* -------------------------------------------------------------------------- */
/*  Equipe                                                                    */
/* -------------------------------------------------------------------------- */

export type TeamMember = {
  id: string
  /** Nome exibido exatamente como informado pelo escritório. */
  name: string
  /** Inscrição profissional. Deixar vazio quando não confirmada. */
  registration: string
  /** Função ou área — preencher apenas se informado pelo escritório. */
  role: string
  /** Apresentação profissional — preencher apenas com texto aprovado. */
  bio: string
  /** Retrato individual em proporção 3:4. */
  photo: string
}

/**
 * Profissionais apresentados institucionalmente.
 * Somente duas pessoas compõem esta seção. Não adicionar terceiros e não
 * atribuir registros profissionais não confirmados.
 */
export const team: TeamMember[] = [
  {
    id: 'alexandro-pedron',
    name: 'Alexandro Pedron',
    registration: 'OAB/RS 58.464',
    role: '',
    bio: '',
    photo: '/assets/equipe/alexandro-pedron.jpg',
  },
  {
    id: 'taiane-pedron',
    name: 'Taiane Pedron',
    /** PENDENTE — registro profissional não informado. */
    registration: '',
    role: '',
    bio: '',
    photo: '/assets/equipe/taiane-pedron.jpg',
  },
]

/* -------------------------------------------------------------------------- */
/*  SEO / páginas                                                             */
/* -------------------------------------------------------------------------- */

export const seo = {
  home: {
    title: 'PEDRON ADVOGADOS | Advocacia em Cidreira e Balneário Pinhal — OAB/RS 58.464',
    description:
      'O PEDRON ADVOGADOS é um escritório de advocacia com unidades em Cidreira e em Balneário Pinhal (Magistério), atuando com assessoria e consultoria jurídica pautadas pela técnica e pela ética.',
  },
  privacy: {
    title: 'Política de Privacidade | PEDRON ADVOGADOS',
    description:
      'Saiba como o PEDRON ADVOGADOS realiza o tratamento de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
  },
  legal: {
    title: 'Aviso Legal | PEDRON ADVOGADOS',
    description:
      'Informações institucionais e avisos legais sobre o conteúdo publicado no site do PEDRON ADVOGADOS.',
  },
  notFound: {
    title: 'Página não encontrada | PEDRON ADVOGADOS',
    description: 'A página solicitada não foi encontrada.',
  },
} as const
