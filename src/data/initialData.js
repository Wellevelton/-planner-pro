export const initialProjects = [];
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

export const initialFinances = [];

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

export const initialGoals = [];

export const initialCareerPlanning = {
  currentRole: '',
  targetRole: '',
  currentSalary: 0,
  targetSalary: 0,
  timeline: '',
  careerGoals: '',
  skills: '',
  education: '',
  experience: '',
  certifications: '',
  salaryGoals: '',
  developmentPlan: '',
  skillsDetailed: [],
  certificationsDetailed: [],
  courses: [],
  milestones: []
};

export const initialCalendarEvents = [];


export const initialTravels = [];

// Dados das planilhas importadas - restaurado para ficar igual ao que estava antes
export const planilhaFinanceira = [
  {
    mes: '2026-01',
    rendaDev: 3500,
    rendaContab: 2500,
    freelas: 500,
    rendaTotal: 6500,
    gastos: 2500,
    aporte: 4000,
    saldoAcum: 4000
  },
  {
    mes: '2026-02',
    rendaDev: 3600,
    rendaContab: 2500,
    freelas: 600,
    rendaTotal: 6700,
    gastos: 2600,
    aporte: 4100,
    saldoAcum: 8100
  },
  {
    mes: '2026-03',
    rendaDev: 3700,
    rendaContab: 2500,
    freelas: 700,
    rendaTotal: 6900,
    gastos: 2700,
    aporte: 4200,
    saldoAcum: 12300
  },
  {
    mes: '2026-04',
    rendaDev: 3800,
    rendaContab: 2500,
    freelas: 800,
    rendaTotal: 7100,
    gastos: 2800,
    aporte: 4300,
    saldoAcum: 16600
  },
  {
    mes: '2026-05',
    rendaDev: 3900,
    rendaContab: 2500,
    freelas: 900,
    rendaTotal: 7300,
    gastos: 2900,
    aporte: 4400,
    saldoAcum: 21100
  },
  {
    mes: '2026-06',
    rendaDev: 4000,
    rendaContab: 2500,
    freelas: 1000,
    rendaTotal: 7500,
    gastos: 3000,
    aporte: 4500,
    saldoAcum: 25600
  },
  {
    mes: '2026-07',
    rendaDev: 4100,
    rendaContab: 2500,
    freelas: 1100,
    rendaTotal: 7700,
    gastos: 3100,
    aporte: 4600,
    saldoAcum: 30100
  },
  {
    mes: '2026-08',
    rendaDev: 4200,
    rendaContab: 2500,
    freelas: 1200,
    rendaTotal: 7900,
    gastos: 3200,
    aporte: 4700,
    saldoAcum: 34600
  },
  {
    mes: '2026-09',
    rendaDev: 4300,
    rendaContab: 2500,
    freelas: 1300,
    rendaTotal: 8100,
    gastos: 3300,
    aporte: 4800,
    saldoAcum: 39100
  },
  {
    mes: '2026-10',
    rendaDev: 4400,
    rendaContab: 2500,
    freelas: 1400,
    rendaTotal: 8300,
    gastos: 3400,
    aporte: 4900,
    saldoAcum: 43600
  },
  {
    mes: '2026-11',
    rendaDev: 4500,
    rendaContab: 2500,
    freelas: 1500,
    rendaTotal: 8500,
    gastos: 3500,
    aporte: 5000,
    saldoAcum: 48100
  },
  {
    mes: '2026-12',
    rendaDev: 4600,
    rendaContab: 2500,
    freelas: 1600,
    rendaTotal: 8700,
    gastos: 3600,
    aporte: 5100,
    saldoAcum: 52600
  },
  {
    mes: '2027-01',
    rendaDev: 4700,
    rendaContab: 2500,
    freelas: 1700,
    rendaTotal: 8900,
    gastos: 3700,
    aporte: 5200,
    saldoAcum: 57100
  },
  {
    mes: '2027-02',
    rendaDev: 4800,
    rendaContab: 2500,
    freelas: 1800,
    rendaTotal: 9100,
    gastos: 3800,
    aporte: 5300,
    saldoAcum: 61600
  },
  {
    mes: '2027-03',
    rendaDev: 4900,
    rendaContab: 2500,
    freelas: 1900,
    rendaTotal: 9300,
    gastos: 3900,
    aporte: 5400,
    saldoAcum: 66100
  },
  {
    mes: '2027-04',
    rendaDev: 5000,
    rendaContab: 2500,
    freelas: 2000,
    rendaTotal: 9500,
    gastos: 4000,
    aporte: 5500,
    saldoAcum: 70600
  },
  {
    mes: '2027-05',
    rendaDev: 5100,
    rendaContab: 2500,
    freelas: 2100,
    rendaTotal: 9700,
    gastos: 4100,
    aporte: 5600,
    saldoAcum: 75100
  },
  {
    mes: '2027-06',
    rendaDev: 5200,
    rendaContab: 2500,
    freelas: 2200,
    rendaTotal: 9900,
    gastos: 4200,
    aporte: 5700,
    saldoAcum: 79600
  },
  {
    mes: '2027-07',
    rendaDev: 5300,
    rendaContab: 2500,
    freelas: 2300,
    rendaTotal: 10100,
    gastos: 4300,
    aporte: 5800,
    saldoAcum: 84100
  },
  {
    mes: '2027-08',
    rendaDev: 5400,
    rendaContab: 2500,
    freelas: 2400,
    rendaTotal: 10300,
    gastos: 4400,
    aporte: 5900,
    saldoAcum: 88600
  },
  {
    mes: '2027-09',
    rendaDev: 5500,
    rendaContab: 2500,
    freelas: 2500,
    rendaTotal: 10500,
    gastos: 4500,
    aporte: 6000,
    saldoAcum: 93100
  },
  {
    mes: '2027-10',
    rendaDev: 5600,
    rendaContab: 2500,
    freelas: 2600,
    rendaTotal: 10700,
    gastos: 4600,
    aporte: 6100,
    saldoAcum: 97600
  },
  {
    mes: '2027-11',
    rendaDev: 5700,
    rendaContab: 2500,
    freelas: 2700,
    rendaTotal: 10900,
    gastos: 4700,
    aporte: 6200,
    saldoAcum: 102100
  },
  {
    mes: '2027-12',
    rendaDev: 5800,
    rendaContab: 2500,
    freelas: 2800,
    rendaTotal: 11100,
    gastos: 4800,
    aporte: 6300,
    saldoAcum: 106600
  },
  {
    mes: '2028-01',
    rendaDev: 5900,
    rendaContab: 2500,
    freelas: 2900,
    rendaTotal: 11300,
    gastos: 4900,
    aporte: 6400,
    saldoAcum: 111100
  },
  {
    mes: '2028-02',
    rendaDev: 6000,
    rendaContab: 2500,
    freelas: 3000,
    rendaTotal: 11500,
    gastos: 5000,
    aporte: 6500,
    saldoAcum: 115600
  },
  {
    mes: '2028-03',
    rendaDev: 6100,
    rendaContab: 2500,
    freelas: 3100,
    rendaTotal: 11700,
    gastos: 5100,
    aporte: 6600,
    saldoAcum: 120100
  },
  {
    mes: '2028-04',
    rendaDev: 6200,
    rendaContab: 2500,
    freelas: 3200,
    rendaTotal: 11900,
    gastos: 5200,
    aporte: 6700,
    saldoAcum: 124600
  },
  {
    mes: '2028-05',
    rendaDev: 6300,
    rendaContab: 2500,
    freelas: 3300,
    rendaTotal: 12100,
    gastos: 5300,
    aporte: 6800,
    saldoAcum: 129100
  },
  {
    mes: '2028-06',
    rendaDev: 6400,
    rendaContab: 2500,
    freelas: 3400,
    rendaTotal: 12300,
    gastos: 5400,
    aporte: 6900,
    saldoAcum: 133600
  },
  {
    mes: '2028-07',
    rendaDev: 6500,
    rendaContab: 2500,
    freelas: 3500,
    rendaTotal: 12500,
    gastos: 5500,
    aporte: 7000,
    saldoAcum: 138100
  },
  {
    mes: '2028-08',
    rendaDev: 6600,
    rendaContab: 2500,
    freelas: 3600,
    rendaTotal: 12700,
    gastos: 5600,
    aporte: 7100,
    saldoAcum: 142600
  },
  {
    mes: '2028-09',
    rendaDev: 6700,
    rendaContab: 2500,
    freelas: 3700,
    rendaTotal: 12900,
    gastos: 5700,
    aporte: 7200,
    saldoAcum: 147100
  },
  {
    mes: '2028-10',
    rendaDev: 6800,
    rendaContab: 2500,
    freelas: 3800,
    rendaTotal: 13100,
    gastos: 5800,
    aporte: 7300,
    saldoAcum: 151600
  },
  {
    mes: '2028-11',
    rendaDev: 6900,
    rendaContab: 2500,
    freelas: 3900,
    rendaTotal: 13300,
    gastos: 5900,
    aporte: 7400,
    saldoAcum: 156100
  },
  {
    mes: '2028-12',
    rendaDev: 7000,
    rendaContab: 2500,
    freelas: 4000,
    rendaTotal: 13500,
    gastos: 6000,
    aporte: 7500,
    saldoAcum: 160600
  }
];

// Importar dados de viagens do arquivo separado
export { viagensData } from './travelsData.js';
