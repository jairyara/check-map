import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import styles from "./navItems.module.css";

const NavItems = ({link, icon, name}) => {

    const router = useRouter();



    return(
        <li className={styles.listItem}>
            <Link href={`/${link}`}>
                <a className={router.pathname === `/${link}` ? `${styles.active}`: ''}>
                    <span className="material-icons">{icon}</span>
                    <span>{name}</span>
                </a>
            </Link>
        </li>
    )
}

export default NavItems;