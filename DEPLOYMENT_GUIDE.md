# 🚀 Guia de Deploy - Planner Pro

## 📋 Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com)
- Conta no [Neon](https://neon.tech) (PostgreSQL)

## 🔧 Passo a Passo

### 1. Preparar Repositório GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Planner Pro with backend integration"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/planner-pro.git
git branch -M main
git push -u origin main
```

### 2. Configurar Banco de Dados (Neon)

1. Acesse [neon.tech](https://neon.tech)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a URL de conexão PostgreSQL
5. Guarde para usar no Vercel

### 3. Configurar Google OAuth

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto ou selecione existente
3. Ative as APIs:
   - Google+ API
   - Google Calendar API
4. Configure OAuth 2.0:
   - **Application type:** Web application
   - **Name:** Planner Pro
   - **Authorized JavaScript origins:**
     - `https://planner-pro.vercel.app` (frontend)
     - `http://localhost:5173` (desenvolvimento)
   - **Authorized redirect URIs:**
     - `https://planner-pro-backend.vercel.app/api/auth/google/callback`
     - `http://localhost:3000/api/auth/google/callback`

### 4. Deploy no Vercel

#### Frontend
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe o repositório GitHub
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (raiz do projeto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em "Deploy"

#### Backend
1. No Vercel, crie outro projeto
2. Importe o mesmo repositório
3. Configure:
   - **Framework Preset:** Node.js
   - **Root Directory:** `./backend`
   - **Build Command:** `npm install && npm run db:generate`
   - **Output Directory:** `./`
   - **Install Command:** `npm install`
   - **Dev Command:** `npm run dev`

### 5. Configurar Variáveis de Ambiente

#### Frontend (Vercel)
```env
VITE_API_URL=https://planner-pro-backend.vercel.app/api
```

#### Backend (Vercel)
```env
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=sua-chave-secreta-jwt-super-segura
GOOGLE_CLIENT_ID=seu-google-client-id
GOOGLE_CLIENT_SECRET=seu-google-client-secret
CORS_ORIGIN=https://planner-pro.vercel.app
NODE_ENV=production
```

### 6. Configurar Banco de Dados

Após o deploy do backend, execute:

```bash
# Acesse o terminal do Vercel ou use Vercel CLI
vercel env pull .env

# Execute os comandos do banco
npm run db:generate
npm run db:push
npm run db:seed
```

### 7. Testar Aplicação

1. Acesse o frontend: `https://planner-pro.vercel.app`
2. Teste o login com dados de teste:
   - Email: `teste@planner.com`
   - Senha: `123456`
3. Teste o login com Google
4. Verifique se os dados estão sendo salvos no banco

## 🔗 URLs Finais

- **Frontend:** `https://planner-pro.vercel.app`
- **Backend:** `https://planner-pro-backend.vercel.app`
- **API Health:** `https://planner-pro-backend.vercel.app/api/health`

## 🛠️ Comandos Úteis

### Desenvolvimento Local
```bash
# Frontend
npm run dev

# Backend
cd backend
npm run dev
```

### Deploy Manual
```bash
# Frontend
vercel --prod

# Backend
cd backend
vercel --prod
```

### Banco de Dados
```bash
cd backend
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Criar tabelas
npm run db:seed      # Popular dados iniciais
```

## 🚨 Troubleshooting

### Erro de CORS
- Verifique se `CORS_ORIGIN` está configurado corretamente
- Confirme se as URLs do frontend e backend estão corretas

### Erro de Banco de Dados
- Verifique se `DATABASE_URL` está correto
- Confirme se o banco Neon está ativo
- Execute `npm run db:push` para criar tabelas

### Erro de Google OAuth
- Verifique se as URLs de redirecionamento estão corretas
- Confirme se as credenciais Google estão configuradas
- Teste o fluxo OAuth localmente primeiro

### Erro de Build
- Verifique se todas as dependências estão instaladas
- Confirme se os scripts no `package.json` estão corretos
- Verifique os logs do Vercel para detalhes

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Vercel
2. Teste localmente primeiro
3. Confirme todas as variáveis de ambiente
4. Abra uma issue no GitHub

---

**🎉 Deploy concluído! Seu Planner Pro está online!**
