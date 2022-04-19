import React from "react";
import Aside from "@components/Aside/Aside";
import {useRouter} from "next/router";
import Head from "next/head";
import Header from "@components/Header/HeaderDahsboard";
import styles from "./layout.module.css";

const Layout = ({ children }) => {

    const router = useRouter();
    let route = router.pathname;
    let namePage = route.slice(1);
    let name = namePage.charAt(0).toUpperCase() + namePage.slice(1);

    return(
        <>
            <Head>
                <title>{name} - CheckMap</title>
            </Head>
            <div className={route !== '/login' ? styles.layout : styles.login}>
                {
                    route !== '/login' ? <Aside/> : null
                }
                {
                    route !== '/login' ? <Header title={name} user={`Connor Mitchell`} /> : null
                }
                <main>
                    { children }
                </main>
            </div>
        </>
    )
}

export default Layout;