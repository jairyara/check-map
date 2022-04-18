import React from "react";
import styles from "@pages/search/search.module.css";
import SearchInput from "@components/SearchInput/SearchInput";
import ResultCard from "@components/ResultCard/ResultCard";

const Search = () => {

    return(
        <>
            <section className={styles.content}>
                <h2>Search new places</h2>
                <SearchInput />
                <ResultCard />
            </section>
        </>
    )
}

export default Search;