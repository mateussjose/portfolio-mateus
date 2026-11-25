export const personalInfo = {
  name: 'MATEUS BISPO',
  role: 'COMPUTER SCIENCE STUDENT',
  tagline: 'CONSTRUINDO ENQUANTO APRENDO.',
  domain: 'DOMAIN SYSTEMS // WEB // EMBEDDED',
  focus: 'NEXT.JS + APPLICATIONS',
  location: 'RECIFE, BRAZIL',
  email: 'mateusjosee379@gmail.com',
  github: 'https://github.com/mateussjose',
  linkedin: 'https://www.linkedin.com/in/mateus-oliveira-172492213',
};

export const education = [
  {
    number: '01',
    code: 'EDU_01 // CURRENT',
    period: '2024 — PRESENT',
    title: 'Ciência da Computação',
    description: 'Formação em andamento com foco em fundamentos de computação, algoritmos, estruturas de dados, redes, desenvolvimento de software e resolução de problemas.',
    tags: ['COMPUTING', 'ALGORITHMS', 'SOFTWARE'],
  },
  {
    number: '02',
    code: 'EDU_02 // COMPLETED',
    period: 'TECHNICAL EDUCATION',
    title: 'Desenvolvimento de Sistemas',
    description: 'Formação técnica com experiência prática em programação, desenvolvimento de aplicações, banco de dados e fundamentos de engenharia de software.',
    tags: ['PROGRAMMING', 'WEB', 'DATABASE'],
  },
  {
    number: '03',
    code: 'EDU_03 // COMPLETED',
    period: 'ADMINISTRATION EDUCATION',
    title: 'Auxiliar Administrativo',
    description: 'Formação técnica com ênfase teórica em princípios da administração e dinâmicas organizacionais, unida à vivência prática em escritório voltada para a organização de processos, controle de informações e resolução de demandas operacionais.',
    tags: ['MANAGEMENT', 'LAUNCH', 'DIGITIZATION'],
  },
];

export const extracurriculars = [
  {
    number: '01',
    code: 'ACTIVITY_01',
    title: 'JUVENTUDE CODE',
    description: 'Participação na ideação e no desenvolvimento de uma solução tecnológica direcionada aos desafios reais da Comunidade do Pilar. A experiência no bootcamp uniu sólida fundamentação teórica e execução prática, exigindo trabalho em equipe, pensamento analítico e estruturação de projetos para construir uma proposta de impacto social focada nas necessidades locais.',
    tags: ['BOOTCAMP', 'PORTO DIGITAL', 'SEBRAE'],
  },
  {
    number: '02',
    code: 'ACTIVITY_02',
    title: 'IA PARA APRENDER',
    description: 'Capacitação focada no estudo e na exploração de metodologias para integrar ferramentas de Inteligência Artificial como instrumentos de apoio ao processo de aprendizagem. A oficina forneceu diretrizes teóricas e práticas sobre como utilizar a IA na rotina de estudos para otimizar pesquisas, organizar conceitos complexos e fundamentar a construção do conhecimento de maneira crítica, ética e eficiente.',
    tags: ['OFICINA', 'UNICAP'],
  },
];

export const skillGroups = [
  {
    title: 'DESENVOLVIMENTO',
    icon: '⌘',
    skills: [
      { number: '01', name: 'JavaScript', detail: 'ES6+, Async, Web', status: 'LANGUAGE READY' },
      { number: '02', name: 'Next.js', detail: 'App Router, SSR, Optimization', status: 'FRAMEWORK READY' },
      { number: '03', name: 'React', detail: 'Hooks, State Flow, Components', status: 'LIBRARY READY' },
      { number: '04', name: 'Python', detail: 'Computer Vision, Sockets, Scripting', status: 'LANGUAGE VERIFIED' },
      { number: '05', name: 'Java', detail: 'POO, Concurrency, Algorithms', status: 'LANGUAGE VERIFIED' },
      { number: '06', name: 'C', detail: 'Data Structures, Graphs, Algorithms', status: 'LANGUAGE VERIFIED' },
    ],
  },
  {
    title: 'FERRAMENTAS E SISTEMAS',
    icon: '⚒',
    skills: [
      { number: '07', name: 'Git', detail: 'Branching, Rebase, Workflows', status: 'VCS VERIFIED' },
      { number: '08', name: 'GitHub', detail: 'Projects, Collaboration, CI/CD', status: 'PLATFORM VERIFIED' },
      { number: '09', name: 'VS Code', detail: 'Development, Debugging', status: 'EDITOR VERIFIED' },
      { number: '10', name: 'Raspberry Pi', detail: 'GPIO, Embedded Linux, Sensors', status: 'HARDWARE VERIFIED' },
      { number: '11', name: 'Figma', detail: 'Interface Design', status: 'THEORY VERIFIED' },
      { number: '12', name: 'Canva', detail: 'Branding', status: 'THEORY VERIFIED' },
    ],
  },
];

export const projects = [
  {
    number: '01',
    code: 'PRJ_01',
    category: 'INTERACTIVE WEB APP',
    name: 'Jogo da Forca',
    description: 'Jogo em React com palavras aleatórias, controle de erros, letras usadas e estados de vitória/derrota.',
    technologies: ['Next.js', 'React', 'JavaScript'],
    route: '/projetos/forca',
  },
  {
    number: '02',
    code: 'PRJ_02',
    category: 'API REST',
    name: 'Next Car',
    description: 'Sistema desenvolvido para gerenciamento e venda de carros seminovos.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    number: '03',
    code: 'PRJ_03',
    category: 'COMPUTER VISION / EMBEDDED',
    name: 'Andador Inteligente',
    description: 'Projeto acadêmico com Raspberry Pi, sensores, visão computacional, GPS e comunicação de alertas integrados a um andador articulado.',
    technologies: ['Python', 'YOLOv8', 'Raspberry Pi'],
  },
  {
    number: '04',
    code: 'PRJ_04',
    category: 'DESIGN / INTERFACE',
    name: 'Next Investment',
    description: 'Projeto gráfico para desenvolvimento de um aplicativo de planejamento e educação financeira.',
    technologies: ['Figma'],
  },
];
