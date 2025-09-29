import styles from "./QuestionCard.module.css";


export default function QuestionCard({ question, options, onAnswer }) {
    const alternativas = ["A", "B", "C", "D", "E"];


    return (
        <div className={styles.card}>
            <h2>{question}</h2>
            <div className={styles.options}>
                {options.map((opt, i) => (
                    <button key={i} onClick={() => onAnswer(opt)}>
                        {alternativas[i]}) {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}