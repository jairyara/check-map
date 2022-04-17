import React from "react";
import Aside from "@components/Aside/Aside";
import {useRouter} from "next/router";
import Head from "next/head";
import Header from "@components/Header/HeaderDahsboard";
import styles from "./layout.module.css";

const Layout = ({ children }) => {

    const router = useRouter();

    const namePage = router.pathname.slice(1)

    const name = namePage.charAt(0).toUpperCase() + namePage.slice(1);

    const profile = "Connor Mitchell";

    return(
        <>
            <Head>
                <title>{name} - CheckMap</title>
            </Head>
            <div className={styles.layout}>
                <Aside />
                <Header title={name} user={profile} />
                <main>
                    { children }
                </main>
            </div>
        </>
    )
}

export default Layout;