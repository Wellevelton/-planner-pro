# 🚀 Backend - Planner Pro

Backend completo para o Planner Pro com autenticação, banco de dados PostgreSQL e integração com Google Calendar.

## 🛠️ Tecnologias

- **Node.js** - Runtime
- **Express.js** - Framework web
- **Prisma** - ORM
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **Google APIs** - Integração

## 🚀 Configuração

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Banco de Dados

#### Opção A: Neon (Recomendado)
1. Acesse [neon.tech](https://neon.tech)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a URL de conexão
5. Configure no arquivo `.env`:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

#### Opção B: PostgreSQL Local
1. Instale PostgreSQL
2. Crie um banco de dados
3. Configure a URL no `.env`

### 3. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo:
```bash
cp env.example .env
```

Configure as variáveis:
```env
# Database
DATABASE_URL="sua-url-do-postgresql"

# JWT
JWT_SECRET="sua-chave-secreta-jwt"

# Google OAuth (opcional)
GOOGLE_CLIENT_ID="seu-google-client-id"
GOOGLE_CLIENT_SECRET="seu-google-client-secret"

# Server
PORT=3000
NODE_ENV=production

# CORS
CORS_ORIGIN="https://seu-frontend.vercel.app"
```

### 4. Configurar Banco

```bash
# Gerar cliente Prisma
npm run db:generate

# Criar tabelas no banco
npm run db:push

# Popular com dados iniciais
npm run db:seed
```

### 5. Executar

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Deploy no Vercel
npm run deploy
```

## 📊 Estrutura do Banco

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

## 🔐 Autenticação

### Usuário de Teste
- **Email:** teste@planner.com
- **Senha:** 123456

### Endpoints
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Fazer login
- `POST /api/auth/google` - Login com Google

## 📡 API Endpoints

### Projetos
- `GET /api/projects` - Listar projetos
- `POST /api/projects` - Criar projeto
- `PUT /api/projects/:id` - Atualizar projeto
- `DELETE /api/projects/:id` - Deletar projeto

### Metas
- `GET /api/goals` - Listar metas
- `POST /api/goals` - Criar meta
- `PUT /api/goals/:id` - Atualizar meta
- `DELETE /api/goals/:id` - Deletar meta

### Finanças
- `GET /api/finances` - Listar transações
- `POST /api/finances` - Criar transação
- `GET /api/finances/planning` - Planejamento financeiro
- `POST /api/finances/import` - Importar CSV

### Viagens
- `GET /api/travels` - Listar viagens
- `POST /api/travels` - Criar viagem
- `POST /api/travels/import` - Importar CSV

### Calendário
- `GET /api/calendar/events` - Listar eventos
- `POST /api/calendar/events` - Criar evento
- `POST /api/calendar/sync` - Sincronizar com Google

## 🔧 Scripts Disponíveis

- `npm run dev` - Executar em desenvolvimento
- `npm start` - Executar em produção
- `npm run deploy` - Deploy no Vercel
- `npm run db:generate` - Gerar cliente Prisma
- `npm run db:push` - Criar tabelas no banco
- `npm run db:seed` - Popular dados iniciais

## 🌐 Deploy

### Vercel
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Variáveis de Ambiente no Vercel
- `DATABASE_URL`
- `JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `CORS_ORIGIN`

## 📝 Logs

O sistema gera logs detalhados para:
- Requisições HTTP
- Erros de autenticação
- Operações no banco
- Integração com Google APIs

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique os logs
2. Confirme as variáveis de ambiente
3. Teste a conexão com o banco
4. Abra uma issue no repositório

---

**Desenvolvido com ❤️ para o Planner Pro!**
