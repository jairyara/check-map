import React from "react";
import styles from "./searchInput.module.css";

const SearchInput = () => {
    return (
        <form className={styles.form}>
            <div>
                <input type="text" placeholder='Search'/>
                <span className="material-icons">search</span>
            </div>
        </form>
    )
}

export default SearchInput;