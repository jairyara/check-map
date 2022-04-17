import React from "react";
import Button from "@components/Button/Button";
import styles from "./resultCard.module.css";

const ResultCard = () => {
    return (
        <article className={styles.resultCard}>
            <div className={styles.map}></div>
            <section className={styles.dataContainer}>
                <div>
                    <h1>Data</h1>
                    <h1>Data</h1>
                    <h1>Data</h1>
                    <h1>Data</h1>
                    <h1>Data</h1>
                </div>
                <Button field={`Save as favorite`}/>
            </section>
        </article>
    )
}

export default ResultCard;