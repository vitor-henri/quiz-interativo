import styles from "./ScoreBoard.module.css";


export default function ScoreBoard({ answers, onRestart }) {
    const totalScore = answers.reduce((acc, a) => a.correct ? acc + a.points : acc, 0);
    const totalCorrect = answers.filter(a => a.correct).length;
    const minTime = Math.min(...answers.map(a => a.time));
    const percent = ((totalCorrect / answers.length) * 100).toFixed(1);


    return (
        <div className={styles.board}>
            <h2>Resultado</h2>
            <p>Pontuação Final: {totalScore}</p>
            <p>Menor tempo de resposta: {minTime}s</p>
            <p>Acertos: {totalCorrect} / {answers.length} ({percent}%)</p>


            <div className={styles.list}>
                {answers.map((a, i) => (
                    <div key={i} className={`${styles.card} ${a.correct ? styles.correct : styles.wrong}`}>
                        <h3>{a.question}</h3>
                        <p>Sua resposta: {a.selected}</p>
                        <p>Correta: {a.answer}</p>
                        <p>Pontos: {a.points}</p>
                        <p>Tempo: {a.time}s</p>
                    </div>
                ))}
            </div>


            <button onClick={onRestart}>Reiniciar Quiz</button>
        </div>
    );
}