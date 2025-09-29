const questions = 
[
    {
    id: 1,
    question: "Qual hook é usado para gerenciar estados em componentes funcionais?",
    options: ["useEffect", "useState", "useProps", "useClass"],
    answer: "useState",
    points: 2
    },

    {
    id: 2,
    question: "Qual hook é usado para efeitos colaterais no React?",
    options: ["useMemo", "useEffect", "useReducer", "useRef"],
    answer: "useEffect",
    points: 3
    },

    {
    id: 3,
    question: "Qual é a forma correta de passar dados entre componentes?",
    options: ["Hooks", "Props", "State", "Redux"],
    answer: "Props",
    points: 1
    },

    {
    id: 4,
    question: "Qual extensão normalmente é usada para arquivos de componentes React?",
    options: [".js", ".jsx", ".html", ".css"],

    answer: ".jsx",
    points: 1
    },

    {
    id: 5,
    question: "Qual comando cria um novo projeto React com Vite?",
    options: [
    "npx create-react-app",
    "npm init vite@latest",
    "npm install vite",
    "npx react-vite"
    ],
    answer: "npm init vite@latest",
    points: 2
    },

    {
    id: 6,
    question: "Qual hook pode ser usado para armazenar valores entre renderizações sem causar re-render?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useRef",
    points: 4
    },

    {
    id: 7,
    question: "Qual hook é mais indicado para memorizar valores derivados de cálculos caros?",
    options: ["useReducer", "useMemo", "useEffect", "useCallback"],
    answer: "useMemo",
    points: 5
    },

    {
    id: 8,
    question: "Qual hook é usado para funções que precisam ser memorizadas?",
    options: ["useEffect", "useCallback", "useMemo", "useState"],
    answer: "useCallback",
    points: 4
    },

    {
    id: 9,
    question: "Em React, como chamamos o processo de atualizar a interface quando o estado muda?",
    options: ["Binding", "Re-renderização", "Rebuild", "Patch"],
    answer: "Re-renderização",
    points: 3
    },

    {
    id: 10,
    question: "Qual ferramenta é usada para inspecionar o estado e props de componentes React no navegador?",
    options: ["Redux DevTools", "React DevTools", "Chrome Inspector", "VitePlugin"],
    answer: "React DevTools",
    points: 2
    }
]

export default questions