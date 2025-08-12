export const initialProjects = [
  {
    id: 1,
    title: 'Configurar Ambiente React TypeScript',
    description: 'Instalar e configurar projeto React com TypeScript e TailwindCSS',
    status: 'todo',
    priority: 'high',
    category: 'Estudos',
    tags: ['TypeScript', 'React', 'Setup'],
    assignees: ['U'],
    dueDate: '2025-08-15',
    progress: 0,
    estimatedHours: 8,
    actualHours: 0
  },
  {
    id: 2,
    title: 'Implementar Sistema de Autenticação',
    description: 'Desenvolver login/registro com JWT e validação',
    status: 'progress',
    priority: 'high',
    category: 'Estudos',
    tags: ['Authentication', 'JWT', 'Security'],
    assignees: ['U'],
    dueDate: '2025-08-20',
    progress: 60,
    estimatedHours: 12,
    actualHours: 7
  },
  {
    id: 3,
    title: 'Reservas de Hotel Paris',
    description: 'Pesquisar e reservar hotéis na região central de Paris',
    status: 'done',
    priority: 'medium',
    category: 'Viagens',
    tags: ['Paris', 'Hospedagem', 'Booking'],
    assignees: ['U'],
    dueDate: '2025-08-25',
    progress: 100,
    estimatedCost: 800
  },
  // Projetos espelhados das metas
  {
    id: 101,
    title: 'Aprender Next.js 14',
    description: 'Dominar Next.js 14 com App Router, Server Components e novas funcionalidades',
    status: 'progress',
    priority: 'high',
    category: 'Estudos',
    tags: ['Next.js', 'React', 'Fullstack'],
    assignees: ['U'],
    dueDate: '2025-11-30',
    progress: 25,
    estimatedHours: 100,
    actualHours: 25,
    type: 'goal',
    goalId: 1,
    goals: [
      { id: 1, title: 'Configurar projeto Next.js 14', done: true },
      { id: 2, title: 'Aprender App Router', done: true },
      { id: 3, title: 'Implementar Server Components', done: false },
      { id: 4, title: 'Criar API Routes', done: false },
      { id: 5, title: 'Deploy na Vercel', done: false },
      { id: 6, title: 'Otimizar performance', done: false }
    ]
  },
  {
    id: 102,
    title: 'Preparar para Viagem Japão',
    description: 'Organizar viagem de 2 semanas para o Japão com roteiro completo',
    status: 'progress',
    priority: 'medium',
    category: 'Viagens',
    tags: ['Japão', 'Viagem', 'Cultura'],
    assignees: ['U'],
    dueDate: '2026-03-15',
    progress: 40,
    estimatedHours: 30,
    actualHours: 12,
    type: 'goal',
    goalId: 2,
    goals: [
      { id: 1, title: 'Pesquisar destinos (Tóquio, Kyoto, Osaka)', done: true },
      { id: 2, title: 'Calcular orçamento total', done: true },
      { id: 3, title: 'Comprar passagens aéreas', done: false },
      { id: 4, title: 'Reservar hotéis', done: false },
      { id: 5, title: 'Aplicar para visto japonês', done: false },
      { id: 6, title: 'Comprar Japan Rail Pass', done: false },
      { id: 7, title: 'Fazer seguro viagem', done: false }
    ]
  },
  {
    id: 103,
    title: 'Criar App de Gestão Financeira',
    description: 'Desenvolver aplicativo completo para controle de finanças pessoais',
    status: 'todo',
    priority: 'high',
    category: 'Projetos',
    tags: ['App', 'Finanças', 'React Native'],
    assignees: ['U'],
    dueDate: '2025-12-15',
    progress: 15,
    estimatedHours: 150,
    actualHours: 22,
    type: 'goal',
    goalId: 3,
    goals: [
      { id: 1, title: 'Definir funcionalidades principais', done: true },
      { id: 2, title: 'Criar design system', done: false },
      { id: 3, title: 'Desenvolver autenticação', done: false },
      { id: 4, title: 'Implementar dashboard', done: false },
      { id: 5, title: 'Criar sistema de transações', done: false },
      { id: 6, title: 'Adicionar relatórios e gráficos', done: false },
      { id: 7, title: 'Testes e deploy', done: false }
    ]
  },
  {
    id: 104,
    title: 'Preparar para Maratona',
    description: 'Treinar e se preparar para completar uma maratona de 42km',
    status: 'todo',
    priority: 'medium',
    category: 'Saúde',
    tags: ['Corrida', 'Fitness', 'Desafio'],
    assignees: ['U'],
    dueDate: '2026-06-20',
    progress: 10,
    estimatedHours: 200,
    actualHours: 20,
    type: 'goal',
    goalId: 4,
    goals: [
      { id: 1, title: 'Fazer avaliação médica', done: true },
      { id: 2, title: 'Comprar tênis adequados', done: false },
      { id: 3, title: 'Iniciar treinos de 5km', done: false },
      { id: 4, title: 'Aumentar para 10km', done: false },
      { id: 5, title: 'Treinar 21km (meia maratona)', done: false },
      { id: 6, title: 'Completar 30km', done: false },
      { id: 7, title: 'Fazer maratona completa', done: false }
    ]
  },
  {
    id: 105,
    title: 'Aprender Python Avançado',
    description: 'Dominar Python para análise de dados e machine learning',
    status: 'progress',
    priority: 'high',
    category: 'Estudos',
    tags: ['Python', 'Data Science', 'ML'],
    assignees: ['U'],
    dueDate: '2026-02-28',
    progress: 35,
    estimatedHours: 120,
    actualHours: 42,
    type: 'goal',
    goalId: 5,
    goals: [
      { id: 1, title: 'Revisar Python básico', done: true },
      { id: 2, title: 'Aprender Pandas e NumPy', done: true },
      { id: 3, title: 'Estudar Matplotlib e Seaborn', done: false },
      { id: 4, title: 'Aprender Scikit-learn', done: false },
      { id: 5, title: 'Projeto de análise de dados', done: false },
      { id: 6, title: 'Implementar modelo de ML', done: false }
    ]
  }
];

export const initialFinances = [
  // Janeiro 2026 - Educação
  { id: 1, description: 'Curso de React Avançado', amount: -750, category: 'Educação', date: '2026-01-15', type: 'expense' },
  { id: 2, description: 'Livros de Programação', amount: -200, category: 'Educação', date: '2026-01-20', type: 'expense' },
  
  // Fevereiro 2026 - Viagem
  { id: 3, description: 'Passagem para São Paulo', amount: -450, category: 'Viagem', date: '2026-02-10', type: 'expense' },
  { id: 4, description: 'Hospedagem Hotel', amount: -800, category: 'Viagem', date: '2026-02-12', type: 'expense' },
  
  // Março 2026 - Moradia
  { id: 5, description: 'Aluguel', amount: -1200, category: 'Moradia', date: '2026-03-05', type: 'expense' },
  { id: 6, description: 'Conta de Luz', amount: -180, category: 'Moradia', date: '2026-03-15', type: 'expense' },
  
  // Abril 2026 - Alimentação
  { id: 7, description: 'Supermercado Mensal', amount: -600, category: 'Alimentação', date: '2026-04-08', type: 'expense' },
  { id: 8, description: 'Restaurantes', amount: -350, category: 'Alimentação', date: '2026-04-20', type: 'expense' },
  
  // Maio 2026 - Transporte
  { id: 9, description: 'Combustível', amount: -280, category: 'Transporte', date: '2026-05-12', type: 'expense' },
  { id: 10, description: 'Uber/Táxi', amount: -150, category: 'Transporte', date: '2026-05-25', type: 'expense' },
  
  // Junho 2026 - Lazer
  { id: 11, description: 'Cinema e Shows', amount: -200, category: 'Lazer', date: '2026-06-10', type: 'expense' },
  { id: 12, description: 'Jogos e Hobbies', amount: -120, category: 'Lazer', date: '2026-06-18', type: 'expense' },
  
  // Julho 2026 - Saúde
  { id: 13, description: 'Consulta Médica', amount: -300, category: 'Saúde', date: '2026-07-05', type: 'expense' },
  { id: 14, description: 'Farmácia', amount: -150, category: 'Saúde', date: '2026-07-15', type: 'expense' },
  
  // Agosto 2026 - Emergência
  { id: 15, description: 'Reparo do Carro', amount: -500, category: 'Emergência', date: '2026-08-08', type: 'expense' },
  { id: 16, description: 'Fundo de Emergência', amount: -300, category: 'Emergência', date: '2026-08-20', type: 'expense' },
  
  // Receitas distribuídas
  { id: 17, description: 'Salário Desenvolvedor', amount: 3500, category: 'Educação', date: '2026-01-30', type: 'income' },
  { id: 18, description: 'Freelance Projeto', amount: 800, category: 'Educação', date: '2026-02-28', type: 'income' },
  { id: 19, description: 'Salário Desenvolvedor', amount: 4200, category: 'Educação', date: '2026-06-30', type: 'income' },
  { id: 20, description: 'Freelance Website', amount: 1000, category: 'Educação', date: '2026-07-30', type: 'income' }
];

export const initialBudget = {
  monthly: {
    planned: 9500,
    actual: 9250,
    target: 10000,
    categories: {
      'Educação': { planned: 500, actual: 299.90, target: 600 },
      'Viagem': { planned: 2000, actual: 450.00, target: 2500 },
      'Moradia': { planned: 1200, actual: 1200.00, target: 1200 },
      'Alimentação': { planned: 800, actual: 350.00, target: 700 },
      'Transporte': { planned: 400, actual: 280.00, target: 350 },
      'Lazer': { planned: 300, actual: 150.00, target: 400 },
      'Emergência': { planned: 500, actual: 0.00, target: 500 }
    }
  }
};

export const initialGoals = [
  {
    id: 1,
    title: 'Aprender Next.js 14',
    description: 'Dominar Next.js 14 com App Router, Server Components e novas funcionalidades',
    category: 'Estudos',
    deadline: '2025-11-30',
    progress: 25,
    type: 'goal',
    goals: [
      { id: 1, title: 'Configurar projeto Next.js 14', done: true },
      { id: 2, title: 'Aprender App Router', done: true },
      { id: 3, title: 'Implementar Server Components', done: false },
      { id: 4, title: 'Criar API Routes', done: false },
      { id: 5, title: 'Deploy na Vercel', done: false },
      { id: 6, title: 'Otimizar performance', done: false }
    ],
    estimatedHours: 100,
    tags: ['Next.js', 'React', 'Fullstack']
  },
  {
    id: 2,
    title: 'Preparar para Viagem Japão',
    description: 'Organizar viagem de 2 semanas para o Japão com roteiro completo',
    category: 'Viagens',
    deadline: '2026-03-15',
    progress: 40,
    type: 'goal',
    goals: [
      { id: 1, title: 'Pesquisar destinos (Tóquio, Kyoto, Osaka)', done: true },
      { id: 2, title: 'Calcular orçamento total', done: true },
      { id: 3, title: 'Comprar passagens aéreas', done: false },
      { id: 4, title: 'Reservar hotéis', done: false },
      { id: 5, title: 'Aplicar para visto japonês', done: false },
      { id: 6, title: 'Comprar Japan Rail Pass', done: false },
      { id: 7, title: 'Fazer seguro viagem', done: false }
    ],
    estimatedHours: 30,
    tags: ['Japão', 'Viagem', 'Cultura']
  },
  {
    id: 3,
    title: 'Criar App de Gestão Financeira',
    description: 'Desenvolver aplicativo completo para controle de finanças pessoais',
    category: 'Projetos',
    deadline: '2025-12-15',
    progress: 15,
    type: 'goal',
    goals: [
      { id: 1, title: 'Definir funcionalidades principais', done: true },
      { id: 2, title: 'Criar design system', done: false },
      { id: 3, title: 'Desenvolver autenticação', done: false },
      { id: 4, title: 'Implementar dashboard', done: false },
      { id: 5, title: 'Criar sistema de transações', done: false },
      { id: 6, title: 'Adicionar relatórios e gráficos', done: false },
      { id: 7, title: 'Testes e deploy', done: false }
    ],
    estimatedHours: 150,
    tags: ['App', 'Finanças', 'React Native']
  },
  {
    id: 4,
    title: 'Preparar para Maratona',
    description: 'Treinar e se preparar para completar uma maratona de 42km',
    category: 'Saúde',
    deadline: '2026-06-20',
    progress: 10,
    type: 'goal',
    goals: [
      { id: 1, title: 'Fazer avaliação médica', done: true },
      { id: 2, title: 'Comprar tênis adequados', done: false },
      { id: 3, title: 'Iniciar treinos de 5km', done: false },
      { id: 4, title: 'Aumentar para 10km', done: false },
      { id: 5, title: 'Treinar 21km (meia maratona)', done: false },
      { id: 6, title: 'Completar 30km', done: false },
      { id: 7, title: 'Fazer maratona completa', done: false }
    ],
    estimatedHours: 200,
    tags: ['Corrida', 'Fitness', 'Desafio']
  },
  {
    id: 5,
    title: 'Aprender Python Avançado',
    description: 'Dominar Python para análise de dados e machine learning',
    category: 'Estudos',
    deadline: '2026-02-28',
    progress: 35,
    type: 'goal',
    goals: [
      { id: 1, title: 'Revisar Python básico', done: true },
      { id: 2, title: 'Aprender Pandas e NumPy', done: true },
      { id: 3, title: 'Estudar Matplotlib e Seaborn', done: false },
      { id: 4, title: 'Aprender Scikit-learn', done: false },
      { id: 5, title: 'Projeto de análise de dados', done: false },
      { id: 6, title: 'Implementar modelo de ML', done: false }
    ],
    estimatedHours: 120,
    tags: ['Python', 'Data Science', 'ML']
  }
];

export const initialCareerPlanning = {
  currentRole: 'Desenvolvedor Frontend Jr',
  targetRole: 'Tech Lead',
  currentSalary: 8000,
  targetSalary: 15000,
  timeline: '18 meses',
  careerGoals: 'Tornar-me Tech Lead em uma empresa de tecnologia, liderando equipes e projetos inovadores. Desenvolver expertise em arquitetura de sistemas e gestão de pessoas.',
  skills: 'React/Next.js, TypeScript, Node.js, AWS, Liderança, Arquitetura de Sistemas, Scrum, Git, Docker, Kubernetes',
  education: 'Bacharelado em Ciência da Computação - Universidade XYZ (2020-2024)\nPós-graduação em Desenvolvimento Web - Instituto ABC (2024)',
  experience: 'Desenvolvedor Frontend Jr - Empresa XYZ (2023-presente)\nEstagiário de Desenvolvimento - Startup ABC (2022-2023)\nProjetos freelancer em React e Node.js (2021-2022)',
  certifications: 'AWS Solutions Architect (em andamento)\nScrum Master (planejado)\nReact Developer Certification (concluído)',
  salaryGoals: 'Meta atual: R$ 8.000\nMeta 6 meses: R$ 10.000\nMeta 1 ano: R$ 12.000\nMeta 18 meses: R$ 15.000',
  developmentPlan: '1. Completar certificação AWS Solutions Architect\n2. Aprofundar conhecimentos em TypeScript e arquitetura\n3. Participar de projetos open source\n4. Desenvolver habilidades de liderança\n5. Buscar oportunidades de mentoria\n6. Networking em eventos de tecnologia',
  skillsDetailed: [
    { name: 'React/Next.js', current: 7, target: 9, category: 'Frontend', priority: 'high' },
    { name: 'TypeScript', current: 6, target: 9, category: 'Frontend', priority: 'high' },
    { name: 'Node.js/Express', current: 5, target: 8, category: 'Backend', priority: 'medium' },
    { name: 'AWS/Cloud', current: 3, target: 8, category: 'DevOps', priority: 'high' },
    { name: 'Liderança', current: 4, target: 9, category: 'Soft Skills', priority: 'high' },
    { name: 'Arquitetura', current: 4, target: 8, category: 'Técnicas', priority: 'medium' }
  ],
  certificationsDetailed: [
    { name: 'AWS Solutions Architect', status: 'planned', deadline: '2025-11-30', cost: 300 },
    { name: 'Scrum Master', status: 'in_progress', deadline: '2025-09-15', cost: 800 }
  ],
  courses: [
    { name: 'React Avançado', status: 'completed', cost: 299.90, rating: 9 },
    { name: 'TypeScript Masterclass', status: 'in_progress', cost: 199, rating: null },
    { name: 'AWS Fundamentals', status: 'planned', cost: 150, rating: null }
  ],
  milestones: [
    { milestone: 'Certificação Scrum', date: '2025-09-15', status: 'in_progress' },
    { milestone: 'Projeto Full-Stack', date: '2025-10-30', status: 'planned' },
    { milestone: 'AWS Certification', date: '2025-11-30', status: 'planned' },
    { milestone: 'Promoção para Pleno', date: '2025-12-15', status: 'planned' },
    { milestone: 'Tech Lead Role', date: '2026-02-01', status: 'planned' }
  ]
};

export const initialCalendarEvents = [
  {
    id: 1,
    title: 'Estudar React',
    description: 'Revisar hooks e context',
    date: '2025-08-10',
    startTime: '09:00',
    endTime: '11:00',
    category: 'Estudos',
    type: 'study'
  },
  {
    id: 2,
    title: 'Reunião de Projeto',
    description: 'Alinhamento sobre novas funcionalidades',
    date: '2025-08-10',
    startTime: '14:00',
    endTime: '15:30',
    category: 'Trabalho',
    type: 'meeting'
  },
  // Eventos das metas
  {
    id: 101,
    title: '🎯 Aprender Next.js 14',
    description: 'Dominar Next.js 14 com App Router, Server Components e novas funcionalidades',
    date: '2025-11-30',
    category: 'Estudos',
    type: 'goal',
    goalId: 1,
    priority: 'high'
  },
  {
    id: 102,
    title: '🎯 Preparar para Viagem Japão',
    description: 'Organizar viagem de 2 semanas para o Japão com roteiro completo',
    date: '2026-03-15',
    category: 'Viagens',
    type: 'goal',
    goalId: 2,
    priority: 'medium'
  },
  {
    id: 103,
    title: '🎯 Criar App de Gestão Financeira',
    description: 'Desenvolver aplicativo completo para controle de finanças pessoais',
    date: '2025-12-15',
    category: 'Projetos',
    type: 'goal',
    goalId: 3,
    priority: 'high'
  },
  {
    id: 104,
    title: '🎯 Preparar para Maratona',
    description: 'Treinar e se preparar para completar uma maratona de 42km',
    date: '2026-06-20',
    category: 'Saúde',
    type: 'goal',
    goalId: 4,
    priority: 'medium'
  },
  {
    id: 105,
    title: '🎯 Aprender Python Avançado',
    description: 'Dominar Python para análise de dados e machine learning',
    date: '2026-02-28',
    category: 'Estudos',
    type: 'goal',
    goalId: 5,
    priority: 'high'
  }
];

export const initialTravels = [
  { 
    id: 1, 
    destination: 'Paris, França', 
    startDate: '2025-09-15', 
    endDate: '2025-09-20', 
    status: 'planned', 
    budget: 2500,
    actualCost: 450,
    activities: ['Torre Eiffel', 'Louvre', 'Arco do Triunfo'],
    accommodation: 'Hotel Central Paris',
    transportation: 'Voo + Metrô',
    photos: 0,
    rating: 0,
    weather: 'Ensolarado, 22°C',
    currency: 'EUR',
    documents: ['Passaporte', 'Seguro Viagem']
  },
  { 
    id: 2, 
    destination: 'Barcelona, Espanha', 
    startDate: '2025-09-21', 
    endDate: '2025-09-25', 
    status: 'researching', 
    budget: 1800,
    actualCost: 0,
    activities: ['Sagrada Familia', 'Park Güell', 'Las Ramblas'],
    accommodation: 'A definir',
    transportation: 'A definir',
    photos: 0,
    rating: 0,
    weather: 'Parcialmente nublado, 25°C',
    currency: 'EUR',
    documents: ['Em análise']
  },
  { 
    id: 3, 
    destination: 'Roma, Itália', 
    startDate: '2025-10-10', 
    endDate: '2025-10-15', 
    status: 'wishlist', 
    budget: 2200,
    actualCost: 0,
    activities: ['Coliseu', 'Vaticano', 'Fontana di Trevi'],
    accommodation: 'A pesquisar',
    transportation: 'A pesquisar',
    photos: 0,
    rating: 0,
    weather: 'Previsão: Ameno, 18°C',
    currency: 'EUR',
    documents: ['Passaporte necessário']
  }
];

// Dados das planilhas importadas - 30 meses completos (2026-01 a 2028-06)
export const planilhaFinanceira = [
  { mes: '2026-01', rendaDev: 3500, rendaContab: 2500, freelas: 500, rendaTotal: 6500, gastos: 2500, aporte: 4000, saldoAcum: 4000 },
  { mes: '2026-02', rendaDev: 3500, rendaContab: 2500, freelas: 500, rendaTotal: 6500, gastos: 2512.5, aporte: 3987.5, saldoAcum: 8023.5 },
  { mes: '2026-03', rendaDev: 3500, rendaContab: 2500, freelas: 500, rendaTotal: 6500, gastos: 2525.0625, aporte: 3974.9375, saldoAcum: 12070.65 },
  { mes: '2026-04', rendaDev: 3500, rendaContab: 2500, freelas: 500, rendaTotal: 6500, gastos: 2537.8125, aporte: 3962.1875, saldoAcum: 16032.84 },
  { mes: '2026-05', rendaDev: 3500, rendaContab: 2500, freelas: 500, rendaTotal: 6500, gastos: 2550.703125, aporte: 3949.296875, saldoAcum: 19982.14 },
  { mes: '2026-06', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2563.128133, aporte: 5136.871867, saldoAcum: 25555.5 },
  { mes: '2026-07', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2575.703133, aporte: 5124.296867, saldoAcum: 30679.8 },
  { mes: '2026-08', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2588.328133, aporte: 5111.671867, saldoAcum: 35791.47 },
  { mes: '2026-09', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2601.003133, aporte: 5098.996867, saldoAcum: 40890.47 },
  { mes: '2026-10', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2613.728133, aporte: 5086.271867, saldoAcum: 45976.74 },
  { mes: '2026-11', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2626.503133, aporte: 5073.496867, saldoAcum: 51050.24 },
  { mes: '2026-12', rendaDev: 4200, rendaContab: 2500, freelas: 1000, rendaTotal: 7700, gastos: 2639.328133, aporte: 5060.671867, saldoAcum: 56110.91 },
  { mes: '2027-01', rendaDev: 5500, rendaContab: 2500, freelas: 1500, rendaTotal: 9500, gastos: 2654.19453, aporte: 6845.80547, saldoAcum: 66895.96 },
  { mes: '2027-02', rendaDev: 5500, rendaContab: 2500, freelas: 1500, rendaTotal: 9500, gastos: 2667.19453, aporte: 6832.80547, saldoAcum: 73728.77 },
  { mes: '2027-03', rendaDev: 5500, rendaContab: 2500, freelas: 1500, rendaTotal: 9500, gastos: 2680.19453, aporte: 6819.80547, saldoAcum: 80561.57 },
  { mes: '2027-04', rendaDev: 5500, rendaContab: 2500, freelas: 1500, rendaTotal: 9500, gastos: 2693.19453, aporte: 6806.80547, saldoAcum: 87368.38 },
  { mes: '2027-05', rendaDev: 5500, rendaContab: 2500, freelas: 1500, rendaTotal: 9500, gastos: 2706.19453, aporte: 6793.80547, saldoAcum: 94162.18 },
  { mes: '2027-06', rendaDev: 6500, rendaContab: 2500, freelas: 2000, rendaTotal: 11000, gastos: 2721.216268, aporte: 8278.783732, saldoAcum: 106108.87 },
  { mes: '2027-07', rendaDev: 6500, rendaContab: 0, freelas: 2000, rendaTotal: 8500, gastos: 2734.216268, aporte: 5765.783732, saldoAcum: 111874.65 },
  { mes: '2027-08', rendaDev: 6500, rendaContab: 0, freelas: 2000, rendaTotal: 8500, gastos: 2747.216268, aporte: 5752.783732, saldoAcum: 117627.44 },
  { mes: '2027-09', rendaDev: 6500, rendaContab: 0, freelas: 2000, rendaTotal: 8500, gastos: 2760.216268, aporte: 5739.783732, saldoAcum: 123367.22 },
  { mes: '2027-10', rendaDev: 6500, rendaContab: 0, freelas: 2000, rendaTotal: 8500, gastos: 2773.216268, aporte: 5726.783732, saldoAcum: 129094.00 },
  { mes: '2027-11', rendaDev: 6500, rendaContab: 0, freelas: 2000, rendaTotal: 8500, gastos: 2786.216268, aporte: 5713.783732, saldoAcum: 134807.78 },
  { mes: '2027-12', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2803.88004, aporte: 7696.11996, saldoAcum: 151707.34 },
  { mes: '2028-01', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2816.88004, aporte: 7683.11996, saldoAcum: 159390.46 },
  { mes: '2028-02', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2829.88004, aporte: 7670.11996, saldoAcum: 167060.58 },
  { mes: '2028-03', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2842.88004, aporte: 7657.11996, saldoAcum: 174717.70 },
  { mes: '2028-04', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2855.88004, aporte: 7644.11996, saldoAcum: 182361.82 },
  { mes: '2028-05', rendaDev: 8000, rendaContab: 0, freelas: 2500, rendaTotal: 10500, gastos: 2868.88004, aporte: 7631.11996, saldoAcum: 189992.94 },
  { mes: '2028-06', rendaDev: 10000, rendaContab: 0, freelas: 3000, rendaTotal: 13000, gastos: 2889.054933, aporte: 10110.94507, saldoAcum: 212081.09 }
];

// Importar dados de viagens do arquivo separado
export { viagensData } from './travelsData.js';
