import React from "react";
import Link from "next/link"
import Head from "next/head";
import Logo from "@components/Logo/Logo";
import Button from "@components/Button/Button";
import styles from "./login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login - CheckMap</title>
            </Head>
            <div className={styles.container__wrapper}>
                <figure className={styles.container__wrapper_img}>
                    <Logo/>
                </figure>
                <h1 className={styles.container__wrapper_title}>Login</h1>
                <form className={styles.container__wrapper_form}>
                    <label htmlFor="user">user</label>
                    <input name='user' id='user' type="text" placeholder='e.g: adaLovelace' required/>
                    <label htmlFor="password">password</label>
                    <input name='password' id='password' type="password" placeholder='Your secure password' required/>
                    <Link href="/">
                        <a>Forgot password?</a>
                    </Link>
                    <Button field='Login' />
                </form>
            </div>
        </div>
    )
}

export default Login;