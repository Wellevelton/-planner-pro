# 🚀 Planner Pro

Um aplicativo completo de planejamento pessoal com backend integrado, autenticação e sincronização com Google Calendar.

## ✨ Funcionalidades

### 📊 **Gestão de Projetos**
- Criação e acompanhamento de projetos
- Definição de prioridades e status
- Controle de progresso

### 🎯 **Sistema de Metas**
- Metas principais com sub-objetivos
- Cálculo automático de progresso
- Categorização e priorização

### 💰 **Planejamento Financeiro**
- Controle de receitas e despesas
- Projeções financeiras
- Importação de planilhas CSV
- Orçamento por categoria

### ✈️ **Planejamento de Viagens**
- Organização de viagens
- Controle de custos
- Importação de dados via CSV
- Cálculos automáticos

### 💼 **Planejamento de Carreira**
- Cursos e certificações
- Milestones profissionais
- Integração com finanças

### 📅 **Google Calendar**
- Sincronização automática
- Criação de eventos
- Integração completa

## 🛠️ Tecnologias

### Frontend
- **React 18** - Framework principal
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **React Hooks** - Gerenciamento de estado

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework web
- **Prisma** - ORM
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **Google APIs** - Integração

### Deploy
- **Vercel** - Frontend e Backend
- **Neon** - Banco de dados PostgreSQL

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Vercel
- Conta no Neon (PostgreSQL)

### Frontend
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Backend
```bash
# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp env.example .env

# Executar em desenvolvimento
npm run dev

# Deploy no Vercel
vercel --prod
```

## 🔧 Configuração

### Variáveis de Ambiente (Backend)
```env
DATABASE_URL="postgresql://..."
JWT_SECRET="seu-jwt-secret"
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"
CORS_ORIGIN="https://seu-frontend.vercel.app"
```

### Variáveis de Ambiente (Frontend)
```env
VITE_API_URL="https://seu-backend.vercel.app/api"
```

## 📱 Uso

1. **Acesse o aplicativo**
2. **Faça login** ou registre-se
3. **Configure seu perfil**
4. **Comece a planejar!**

### 🔐 Dados de Teste
- **Email:** `teste@planner.com`
- **Senha:** `123456`

## 🔗 Links

- **Frontend:** https://planner-gwt6msj20-sobreiras-projects.vercel.app
- **Backend:** https://backend-9rwjcunr2-sobreiras-projects.vercel.app
- **API Docs:** https://backend-9rwjcunr2-sobreiras-projects.vercel.app/api/health

## 📁 Estrutura do Projeto

```
planner-pro/
├── src/
│   ├── components/          # Componentes React
│   │   ├── tabs/           # Abas principais
│   │   ├── modals/         # Modais
│   │   └── Header.jsx      # Cabeçalho
│   ├── services/           # Serviços de API
│   │   └── api.js         # Centralização de API calls
│   ├── data/              # Dados iniciais
│   │   ├── initialData.js # Dados zerados para teste
│   │   └── travelsData.js # Dados de viagens
│   ├── hooks/             # Hooks customizados
│   │   └── useStoredState.js
│   └── App.jsx            # Componente principal
├── backend/
│   ├── prisma/            # Schema do banco
│   │   ├── schema.prisma  # Modelos do banco
│   │   └── seed.js        # Dados iniciais
│   ├── server-complete.js # Servidor Express
│   ├── package.json       # Dependências do backend
│   ├── env.example        # Exemplo de variáveis
│   └── README.md          # Documentação do backend
├── DEPLOYMENT_GUIDE.md    # Guia de deploy
├── README.md              # Este arquivo
└── package.json           # Dependências do frontend
```

## 🚀 Deploy

### Deploy Rápido
1. **Fork** este repositório
2. Configure as variáveis de ambiente no Vercel
3. Deploy automático

### Deploy Manual
Veja o [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) para instruções detalhadas.

## 🔐 Autenticação

### Login Local
- Email e senha
- Dados de teste disponíveis

### Login Google
- OAuth 2.0 integrado
- Sincronização com Google Calendar

## 📊 Banco de Dados

### Tabelas Principais
- **users** - Usuários do sistema
- **projects** - Projetos
- **goals** - Metas e objetivos
- **sub_goals** - Sub-objetivos das metas
- **finances** - Transações financeiras
- **financial_planning** - Planejamento financeiro
- **travels** - Viagens
- **career_items** - Itens de carreira
- **calendar_events** - Eventos do calendário

## 🔧 Scripts Disponíveis

### Frontend
```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
```

### Backend
```bash
npm run dev          # Desenvolvimento
npm start            # Produção
npm run deploy       # Deploy no Vercel
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Criar tabelas
npm run db:seed      # Popular dados iniciais
```

## 🤝 Contribuição

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:
1. Verifique a [documentação do backend](backend/README.md)
2. Consulte o [guia de deploy](DEPLOYMENT_GUIDE.md)
3. Abra uma issue no GitHub

## 🎯 Roadmap

- [ ] Notificações push
- [ ] App mobile (React Native)
- [ ] Integração com mais calendários
- [ ] Relatórios avançados
- [ ] Backup automático
- [ ] Modo offline

---

**Desenvolvido com ❤️ para organizar sua vida!**

### 📞 Contato

- **GitHub:** [@seu-usuario](https://github.com/seu-usuario)
- **Email:** seu-email@exemplo.com

---

**⭐ Se este projeto te ajudou, deixe uma estrela!**


