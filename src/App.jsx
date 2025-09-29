import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import questions from "./Data/questions";
import styles from "./App.module.css";

export default function App() {

  // Estados principais
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  // Timer do quiz
  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, [current, finished]);

  // Resposta do usuário
  const handleAnswer = (selected) => {
    const q = questions[current];
    const correct = selected === q.answer;

    // Salva a resposta
    setAnswers([
      ...answers,
      {
        question: q.question,
        selected,
        answer: q.answer,
        points: q.points,
        correct,
        time,
      },
    ]);

    // Vai para a próxima questão e deixa o timer zerado
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTime(0);
    } 

    else {
      setFinished(true);
    }
  };

  // Reinicia o quiz
  const restartQuiz = () => {
    setCurrent(0);
    setTime(0);
    setAnswers([]);
    setFinished(false);
  };


  return (
    <div className={styles.app}>
      {!finished ? (
        <>
          <Header current={current + 1} total={questions.length} time={time} />
          <QuestionCard
            question={questions[current].question}
            options={questions[current].options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <ScoreBoard answers={answers} onRestart={restartQuiz} />
      )}
    </div>
  );
}