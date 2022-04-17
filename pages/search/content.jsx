import React from "react";
import SearchInput from "@components/SearchInput/SearchInput";
import ResultCard from "@components/ResultCard/ResultCard";
import styles from "./search.module.css";

const Content = () => {
    return (
        <section className={styles.content}>
            <h2>Search new places</h2>
            <SearchInput />
            <ResultCard />
        </section>
    )
}

export default Content;