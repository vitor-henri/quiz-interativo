# 🎯 Quiz Interativo em React

## 📌 Objetivo
Este projeto tem como objetivo criar um **quiz interativo** utilizando **React**, onde o usuário poderá responder 10 questões, visualizar o tempo gasto em cada uma e conferir seu desempenho ao final.

A atividade aplica os seguintes conhecimentos:
- `useState` e `useEffect`
- Passagem de `props`
- CSS Modules
- Componentes por responsabilidade
- Manipulação de tempo e estado

---

## 📂 Estrutura do Projeto

src/
├─ components/
│ ├─ Header/
│ │ ├─ index.jsx
│ │ └─ Header.module.css
│ ├─ QuestionCard/
│ │ ├─ index.jsx
│ │ └─ QuestionCard.module.css
│ ├─ ScoreBoard/
│ │ ├─ index.jsx
│ │ └─ ScoreBoard.module.css
├─ data/
│ └─ questions.js
├─ App.jsx
├─ App.module.css
├─ main.jsx


---

## 🧩 Componentes

### 🔹 `Header`
Exibe:
- Título do quiz  
- Questão atual / total de questões  
- Timer da questão  

### 🔹 `QuestionCard`
Responsável por exibir:
- Enunciado da questão  
- Alternativas (A, B, C, D, E) como botões clicáveis  
- Ao clicar, chama a próxima questão e guarda a resposta  

### 🔹 `ScoreBoard`
Exibe o resultado final do quiz:
- Enunciado da questão  
- Resposta do usuário x Resposta correta  
- Pontos da questão  
- Tempo gasto em cada questão  
- Resumo com pontuação final, menor tempo e percentual de acertos  
- Botão para **reiniciar o quiz**

---

## ⚙️ Funcionalidades
✅ 10 questões, cada uma com 5 opções  
✅ Timer por questão, reiniciando ao avançar  
✅ Registro de respostas, tempo e pontuação  
✅ Tabela final com desempenho detalhado  
✅ Destaque em **verde** para acertos e **vermelho** para erros  
✅ Botão de **reinício** do quiz  

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/quiz-react.git
cd quiz-react

2. Instale as dependências

npm install

3. Execute o servidor de desenvolvimento

npm run dev

O projeto estará disponível em http://localhost:5173/

(Vite).
📝 Tecnologias Utilizadas

    React

Vite

    CSS Modules

📖 Exemplo de Questão

{
  "id": 1,
  "question": "Qual hook é usado para gerenciar estados em componentes funcionais?",
  "options": ["useEffect", "useState", "useProps", "useClass"],
  "answer": "useState",
  "points": 2
}

👨‍💻 Autor

Desenvolvido por Vitor Henrique Fonseca
