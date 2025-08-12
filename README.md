# Planner Pro - Organizador Pessoal

Uma aplicação React completa para planejamento pessoal, incluindo gerenciamento de projetos, calendário, finanças, carreira e viagens.

## 🚀 Funcionalidades

- **📋 Projetos**: Kanban board com drag & drop para gerenciar tarefas
- **📅 Calendário**: Visualização mensal com eventos e metas
- **💰 Finanças**: Controle de transações, orçamento e planejamento financeiro
- **💼 Carreira**: Planejamento profissional com skills e certificações
- **✈️ Viagens**: Organização de viagens com custos e detalhes
- **⚙️ Configurações**: Perfil do usuário e preferências

## 🛠️ Tecnologias

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Lucide React** - Ícones
- **LocalStorage** - Persistência de dados

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho da aplicação
│   ├── Navigation.jsx  # Navegação entre abas
│   ├── tabs/           # Componentes das abas principais
│   └── modals/         # Modais da aplicação
├── hooks/              # Hooks personalizados
│   └── useStoredState.js # Hook para persistir dados
├── utils/              # Utilitários e funções auxiliares
│   └── formatters.js   # Formatação de dados
├── data/               # Dados iniciais da aplicação
│   └── initialData.js  # Dados mock para demonstração
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd planner-pro
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige problemas do linter

## 📱 Como Usar

### Projetos
- Arraste e solte projetos entre as colunas (A Fazer, Em Progresso, Concluído)
- Clique em "Novo Projeto" para adicionar tarefas
- Visualize progresso, prioridade e datas de vencimento

### Calendário
- Navegue entre os meses
- Clique em uma data para adicionar eventos
- Visualize metas e objetivos

### Finanças
- Acompanhe receitas e despesas
- Visualize orçamento mensal por categoria
- Analise projeções financeiras

### Carreira
- Defina metas profissionais
- Acompanhe desenvolvimento de skills
- Planeje certificações e cursos

### Viagens
- Organize destinos e custos
- Visualize dados de viagens planejadas
- Acompanhe orçamentos e atividades

## 🔧 Personalização

### Adicionar Novas Funcionalidades

1. Crie novos componentes em `src/components/`
2. Adicione novas abas em `src/components/tabs/`
3. Atualize a navegação em `src/components/Navigation.jsx`
4. Adicione dados iniciais em `src/data/initialData.js`

### Modificar Estilos

- Edite `src/index.css` para estilos globais
- Use classes Tailwind CSS nos componentes
- Modifique `tailwind.config.js` para customizar o tema

### Persistência de Dados

- O hook `useStoredState` salva automaticamente no localStorage
- Dados são sincronizados entre abas
- Backup automático dos dados do usuário

## 🎨 Design System

### Cores
- **Primária**: Azul (#3B82F6)
- **Sucesso**: Verde (#10B981)
- **Aviso**: Amarelo (#F59E0B)
- **Erro**: Vermelho (#EF4444)
- **Fundo**: Cinza escuro (#111827)

### Componentes
- Cards com bordas arredondadas
- Gradientes para elementos de destaque
- Hover effects e transições suaves
- Layout responsivo para diferentes telas

## 📊 Dados de Exemplo

A aplicação inclui dados mock para demonstração:
- 3 projetos de exemplo
- 6 transações financeiras
- 4 metas e objetivos
- 3 viagens planejadas
- Dados de carreira completos
- Projeções financeiras até 2028

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servir Build
```bash
npm run preview
```

### Deploy em Serviços
- **Vercel**: Conecte o repositório Git
- **Netlify**: Arraste a pasta `dist`
- **GitHub Pages**: Configure o workflow de deploy

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**wellevelton silva**
- Desenvolvedor Frontend
- Especialista em React e TypeScript

## 🆘 Suporte

Se encontrar problemas ou tiver dúvidas:
1. Verifique se todas as dependências estão instaladas
2. Confirme que está usando Node.js 16+
3. Limpe o cache: `npm run clean` ou delete `node_modules`
4. Abra uma issue no repositório

---

**Planner Pro** - Organize sua vida de forma inteligente! 🚀


