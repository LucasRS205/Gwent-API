# 🃏 Gwent Codex - Enciclopédia de Cartas de Gwent

Aplicação web desenvolvida em **React** que consome uma API externa para exibir cartas do jogo **Gwent**, presente no universo de **The Witcher**.

O usuário pode explorar cartas, pesquisar por nome, filtrar por categoria, visualizar detalhes completos e navegar por facções através de rotas dinâmicas.

---

## 👨‍💻 Autor

**Lucas Silva**  
Estudante de Engenharia de Software  

GitHub: https://github.com/LucasRS205  

---

## 🎯 Sobre o Projeto (Trabalho do Bimestre)

Este projeto foi desenvolvido como requisito de avaliação da disciplina, atendendo aos critérios solicitados.

### ✅ Requisitos atendidos

- ✅ **[2 pontos] Aplicação exibindo dados de API**
- ✅ **[2 pontos] Rotas dinâmicas com links internos**
- ✅ **[2 pontos] README bem estruturado**
- ✅ **[1 ponto] Código-fonte React versionado**
- ✅ **[1 ponto] Arquitetura da aplicação**
- ✅ **[1 ponto] Prints da aplicação**
- ✅ **[1 ponto] Link da aplicação online**

---

## 🏗️ Arquitetura da Aplicação

A aplicação foi estruturada para consumir diretamente os dados da API externa e renderizá-los na interface React.

### Fluxo da aplicação

```text
Usuário
   ↓
Interface React
   ↓
React Router
   ↓
Páginas (Home, Cards, CardDetails, Faction)
   ↓
Serviço de API (Axios)
   ↓
Gwent API
```

📂 Estrutura do Projeto
```
src/
├── pages/
│   ├── Home.jsx
│   ├── Cards.jsx
│   ├── CardDetails.jsx
│   └── Faction.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

📂 Funcionalidades

•🃏 Listagem de cartas de Gwent

•🔍 Busca de cartas por nome

•🎯 Filtro por categoria

•🏹 Navegação por facções

•📄 Página de detalhes da carta

•🧭 Rotas dinâmicas

•🖼️ Exibição de imagens das cartas

•🔗 Navegação interna entre páginas


🧭 Rotas da Aplicação
```

/ → Página inicial

/cards → Lista de cartas

/card/:name → Detalhes da carta

/faction/:name → Cartas por facção
```

🚀 Tecnologias Utilizadas

•React

•React Router DOM

•Axios

•Vite

•CSS

•Gwent API

🔌 API utilizada

A aplicação consome dados da API comunitária de Gwent:

•👉 https://api.gwent.one/

⚙️ Como Rodar o Projeto
1. Pré-requisitos
```
Node.js instalado
```
```
npm instalado
```

2. Clonar o repositório
git clone https://github.com/LucasRS205/gwent-codex.git
cd gwent-codex
3. Instalar dependências
npm install
4. Rodar o projeto
npm run dev
5. Acessar no navegador
http://localhost:5173


📸 Prints da Aplicação
Tela Inicial

Listagem de Cartas

Busca por Nome

Filtro por Categoria

Detalhes da Carta

🌐 Deploy

A aplicação está disponível online:

👉 https://gwent-api.vercel.app/

📌 Repositório

👉 https://github.com/LucasRS205/gwent-codex

## 📥 Download do APK

Baixe a versão mais recente do aplicativo:

👉 [Download APK](https://github.com/LucasRS205/pokedex_flutter/releases/tag/v1.0)
