import React from "react";
import Logo from "@components/Logo/Logo";
import Nav from "@components/Navigation/Nav";
import NavItems from "@components/NavigationItems/NavItems";
import styles from "./aside.module.css";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Logo/>
            <Nav/>
            <div>
                <NavItems link={`logout`} icon={`logout`} name={`Logout`}/>
            </div>
        </aside>
    )
}

export default Aside;

