# 🃏 Gwent Codex - Enciclopédia de Cartas de Gwent

Uma aplicação web desenvolvida em **React** inspirada no universo de **The Witcher**, com o objetivo de explorar cartas do jogo **Gwent** por meio de uma interface moderna, filtros interativos e páginas dinâmicas.

O usuário pode navegar entre cartas, pesquisar por nome, filtrar por categoria, visualizar detalhes completos de cada carta e explorar cartas por facção.

---

## 👨‍💻 Autor

**Lucas Ramos Silva**  
Estudante de Engenharia de Software

GitHub: https://github.com/LucasRS205 

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
git clone https://github.com/LucasRS205/Gwent-API.git
cd gwent-codex
3. Instalando as dependências
npm install
4. Rodando o projeto localmente
npm run dev

Depois disso, acesse no navegador:

http://localhost:5173


🌐 Deploy

A aplicação está hospedada online e pode ser acessada no link abaixo:

Acessar aplicação: gwent-api.vercel.app

📸 Prints da Aplicação
Tela Inicial

<img width="1281" height="971" alt="Captura de tela 2026-03-20 101016" src="https://github.com/user-attachments/assets/06d760ad-6d6c-4551-92c0-b9a69d322b52" />


Tela de Listagem de Cartas

<img width="1898" height="975" alt="Captura de tela 2026-03-20 101032" src="https://github.com/user-attachments/assets/ef30f41a-16dd-4966-8e77-615d735b11c2" />


Busca por Nome

<img width="1917" height="742" alt="Captura de tela 2026-03-20 101051" src="https://github.com/user-attachments/assets/94033634-a062-4b89-972c-733e133e413f" />


Filtro por Categoria

<img width="295" height="644" alt="Captura de tela 2026-03-20 101110" src="https://github.com/user-attachments/assets/b7993de6-b53b-4437-94d8-5938cfa961f1" />


Detalhes da Carta

<img width="778" height="973" alt="Captura de tela 2026-03-20 101420" src="https://github.com/user-attachments/assets/7766a656-7160-45d7-9fba-d571a1081180" />


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

GitHub: https://github.com/LucasRS205/Gwent-API.git
Serviço de API (Axios)
   ↓
Gwent API
