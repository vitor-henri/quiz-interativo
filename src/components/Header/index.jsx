import styles from "./Header.module.css";


export default function Header({ current, total, time }) {
    // Component de cabeçalho com informações do quiz
    return (
        <header className={styles.header}>
            <h1>Quiz Interativo</h1>
            <div className={styles.info}>
                <span>Questão {current} / {total}</span>
                <span>Tempo ⏳: {time}s</span>
            </div>
        </header>
    );
}