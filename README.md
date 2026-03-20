# 🃏 Gwent Codex - Enciclopédia de Cartas de Gwent

Uma aplicação web desenvolvida em **React** inspirada no universo de **The Witcher**, com o objetivo de explorar cartas do jogo **Gwent** por meio de uma interface moderna, filtros interativos e páginas dinâmicas.

O usuário pode navegar entre cartas, pesquisar por nome, filtrar por categoria, visualizar detalhes completos de cada carta e explorar cartas por facção.

---

## 👨‍💻 Autor

**Lucas Silva**  
Estudante de Engenharia de Software

GitHub: [seu-link-aqui]  
LinkedIn: [se quiser colocar]

---

## 🎯 Sobre o Projeto (Trabalho do Bimestre)

Este projeto foi desenvolvido como requisito de avaliação da disciplina, atendendo aos critérios solicitados na atividade.

### ✅ Requisitos atendidos

- ✅ **[2 pontos] Aplicação exibindo dados de API**
- ✅ **[2 pontos] Rotas dinâmicas com links internos**
- ✅ **[2 pontos] README bem estruturado com orientações de uso**
- ✅ **[1 ponto] Código-fonte React corretamente versionado**
- ✅ **[1 ponto] Desenho da arquitetura da aplicação**
- ✅ **[1 ponto] Prints da aplicação**
- ✅ **[1 ponto] Link de acesso à aplicação online**

---

## 🏗️ Arquitetura da Aplicação

A aplicação foi estruturada para que a interface React consuma diretamente os dados da API externa de cartas de Gwent.

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
```
Estrutura do Projeto
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


📂 Funcionalidades

Listagem de cartas consumidas de API externa

Busca de cartas por nome

Filtro por categoria

Exibição de imagens das cartas

Página de detalhes de cada carta

Página dinâmica por facção

Navegação interna entre páginas

Interface inspirada no universo de Gwent


🧭 Rotas da Aplicação

/ → Página inicial

/cards → Lista de cartas

/card/:name → Página de detalhes da carta

/faction/:name → Página de cartas por facção


🚀 Tecnologias Utilizadas

React

React Router DOM

Axios

Vite

CSS

Gwent API


🔌 API utilizada

A aplicação consome dados da API comunitária de Gwent para exibir informações sobre as cartas.


⚙️ Como Instalar e Rodar o Projeto
1. Pré-requisitos

Node.js instalado

npm instalado

2. Clonando o repositório
git clone https://github.com/SEU-USUARIO/gwent-codex.git
cd gwent-codex
3. Instalando as dependências
npm install
4. Rodando o projeto localmente
npm run dev

Depois disso, acesse no navegador:

http://localhost:5173


🌐 Deploy

A aplicação está hospedada online e pode ser acessada no link abaixo:

Acessar aplicação: [coloque seu link da Vercel aqui]

📸 Prints da Aplicação
Tela Inicial

(coloque aqui o print da Home)

Tela de Listagem de Cartas

(coloque aqui o print da listagem)

Busca por Nome

(coloque aqui o print filtrando “Geralt”)

Filtro por Categoria

(coloque aqui o print com uma categoria selecionada)

Detalhes da Carta

(coloque aqui o print da tela de detalhe)

📌 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de desenvolvimento front-end, como:

consumo de API com Axios

componentização

manipulação de estado com React

filtros dinâmicos

rotas dinâmicas com React Router

organização de projeto em pastas

deploy de aplicação web

📁 Repositório

GitHub: [coloque aqui o link do seu repositório]
Serviço de API (Axios)
   ↓
Gwent API
