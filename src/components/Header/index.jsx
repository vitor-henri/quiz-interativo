import styles from "./Header.module.css";


export default function Header({ current, total, time }) {
    // Component de cabeçalho com informações do quiz
    return (
        <header className={styles.header}>
            <h1>Quiz Interativo</h1>
            <div className={styles.info}>
                <span>Questão {current} / {total}</span>
                <span>Timer: {time}s</span>
            </div>
        </header>
    );
}