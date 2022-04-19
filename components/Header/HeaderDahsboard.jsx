import React from "react";
import Profile from "@components/Profile/Profile";
import styles from "./header.module.css"

const Header = ({title, user}) => {
    return(
        <header className={styles.header}>
            <h2>{title}</h2>
            <Profile data={user} title={title}/>
        </header>
    )
}

export default Header;