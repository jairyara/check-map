import React from "react";
import {useRouter} from "next/router";
import Profile from "@components/Profile/Profile";
import styles from "./header.module.css"

const Header = ({title, user}) => {

    const router = useRouter();



    return(
        <header className={styles.header}>
            <h2>{title}</h2>
            <Profile data={user} title={title}/>
        </header>
    )
}

export default Header;