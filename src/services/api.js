const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://planner-gwt6msj20-sobreiras-projects.vercel.app/api'
  : 'http://localhost:3000/api';

// Função para obter token do localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Função para fazer requisições autenticadas
const authenticatedRequest = async (endpoint, options = {}) => {
  const token = getToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (response.status === 401) {
      // Token expirado ou inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload();
      return null;
    }

    return response;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Autenticação
export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  googleAuth: async (code) => {
    const response = await fetch(`${API_BASE_URL}/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    return response.json();
  },
};

// Projetos
export const projectsAPI = {
  getAll: async () => {
    const response = await authenticatedRequest('/projects');
    return response.json();
  },

  create: async (projectData) => {
    const response = await authenticatedRequest('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
    return response.json();
  },

  update: async (id, projectData) => {
    const response = await authenticatedRequest(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await authenticatedRequest(`/projects/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

// Metas
export const goalsAPI = {
  getAll: async () => {
    const response = await authenticatedRequest('/goals');
    return response.json();
  },

  create: async (goalData) => {
    const response = await authenticatedRequest('/goals', {
      method: 'POST',
      body: JSON.stringify(goalData),
    });
    return response.json();
  },

  update: async (id, goalData) => {
    const response = await authenticatedRequest(`/goals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(goalData),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await authenticatedRequest(`/goals/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Sub-goals
  createSubGoal: async (goalId, subGoalData) => {
    const response = await authenticatedRequest(`/goals/${goalId}/subgoals`, {
      method: 'POST',
      body: JSON.stringify(subGoalData),
    });
    return response.json();
  },

  updateSubGoal: async (goalId, subGoalId, subGoalData) => {
    const response = await authenticatedRequest(`/goals/${goalId}/subgoals/${subGoalId}`, {
      method: 'PUT',
      body: JSON.stringify(subGoalData),
    });
    return response.json();
  },

  deleteSubGoal: async (goalId, subGoalId) => {
    const response = await authenticatedRequest(`/goals/${goalId}/subgoals/${subGoalId}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

// Finanças
export const financesAPI = {
  getAll: async () => {
    const response = await authenticatedRequest('/finances');
    return response.json();
  },

  create: async (financeData) => {
    const response = await authenticatedRequest('/finances', {
      method: 'POST',
      body: JSON.stringify(financeData),
    });
    return response.json();
  },

  update: async (id, financeData) => {
    const response = await authenticatedRequest(`/finances/${id}`, {
      method: 'PUT',
      body: JSON.stringify(financeData),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await authenticatedRequest(`/finances/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Planejamento Financeiro
  getFinancialPlanning: async () => {
    const response = await authenticatedRequest('/finances/planning');
    return response.json();
  },

  updateFinancialPlanning: async (planningData) => {
    const response = await authenticatedRequest('/finances/planning', {
      method: 'PUT',
      body: JSON.stringify(planningData),
    });
    return response.json();
  },

  importCSV: async (csvData, type) => {
    const response = await authenticatedRequest('/finances/import', {
      method: 'POST',
      body: JSON.stringify({ csvData, type }),
    });
    return response.json();
  },
};

// Viagens
export const travelsAPI = {
  getAll: async () => {
    const response = await authenticatedRequest('/travels');
    return response.json();
  },

  create: async (travelData) => {
    const response = await authenticatedRequest('/travels', {
      method: 'POST',
      body: JSON.stringify(travelData),
    });
    return response.json();
  },

  update: async (id, travelData) => {
    const response = await authenticatedRequest(`/travels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(travelData),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await authenticatedRequest(`/travels/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  importCSV: async (csvData) => {
    const response = await authenticatedRequest('/travels/import', {
      method: 'POST',
      body: JSON.stringify({ csvData }),
    });
    return response.json();
  },
};

// Carreira
export const careerAPI = {
  getAll: async () => {
    const response = await authenticatedRequest('/career');
    return response.json();
  },

  create: async (careerData) => {
    const response = await authenticatedRequest('/career', {
      method: 'POST',
      body: JSON.stringify(careerData),
    });
    return response.json();
  },

  update: async (id, careerData) => {
    const response = await authenticatedRequest(`/career/${id}`, {
      method: 'PUT',
      body: JSON.stringify(careerData),
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await authenticatedRequest(`/career/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

// Google Calendar
export const calendarAPI = {
  getEvents: async () => {
    const response = await authenticatedRequest('/calendar/events');
    return response.json();
  },

  createEvent: async (eventData) => {
    const response = await authenticatedRequest('/calendar/events', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  updateEvent: async (id, eventData) => {
    const response = await authenticatedRequest(`/calendar/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  deleteEvent: async (id) => {
    const response = await authenticatedRequest(`/calendar/events/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  sync: async () => {
    const response = await authenticatedRequest('/calendar/sync', {
      method: 'POST',
    });
    return response.json();
  },
};

// Usuário
export const userAPI = {
  getProfile: async () => {
    const response = await authenticatedRequest('/user/profile');
    return response.json();
  },

  updateProfile: async (profileData) => {
    const response = await authenticatedRequest('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    return response.json();
  },

  updateSettings: async (settingsData) => {
    const response = await authenticatedRequest('/user/settings', {
      method: 'PUT',
      body: JSON.stringify(settingsData),
    });
    return response.json();
  },
};

export default {
  auth: authAPI,
  projects: projectsAPI,
  goals: goalsAPI,
  finances: financesAPI,
  travels: travelsAPI,
  career: careerAPI,
  calendar: calendarAPI,
  user: userAPI,
};
