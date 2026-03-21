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
<img width="1295" height="870" alt="Captura de tela 2026-03-21 131227" src="https://github.com/user-attachments/assets/82c016be-b3e1-467f-91c4-fd9eda3f7cbb" />


Listagem de Cartas
<img width="1900" height="974" alt="Captura de tela 2026-03-21 131427" src="https://github.com/user-attachments/assets/ea61d56a-9f9c-47e3-98d3-7f35ce03417b" />


Busca por Nome
<img width="1893" height="936" alt="Captura de tela 2026-03-21 131325" src="https://github.com/user-attachments/assets/87464cdd-9e87-4c88-a499-fe49db9556d2" />


Filtro por Categoria
<img width="363" height="712" alt="Captura de tela 2026-03-21 131438" src="https://github.com/user-attachments/assets/f0f86575-df07-4202-beb0-e5932e17ebb7" />


Detalhes da Carta
<img width="684" height="913" alt="Captura de tela 2026-03-21 131457" src="https://github.com/user-attachments/assets/04fe5a87-96e4-44ce-8059-67143599b0f7" />


🌐 Deploy

A aplicação está disponível online:

👉 https://gwent-api.vercel.app/

📌 Repositório

👉 https://github.com/LucasRS205/gwent-codex

## 📥 Download do APK

Baixe a versão mais recente do aplicativo:

👉 [Download APK](https://github.com/LucasRS205/pokedex_flutter/releases/tag/v1.0)
