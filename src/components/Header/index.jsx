import { useEffect } from "react";
import styles from "./Header.module.css";


export default function Header({ current, total, time }) {
    useEffect(() => {
        // Poderia ser expandido com lógica adicional
    }, [current]);


    return (
        <header className={styles.header}>
            <h1>Quiz React</h1>
            <div className={styles.info}>
                <span>Questão {current} / {total}</span>
                <span>⏱ {time}s</span>
            </div>
        </header>
    );
}