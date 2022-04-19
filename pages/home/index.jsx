import React from "react";
import styles from "@pages/home/home.module.css";
import PlaceCard from "@components/PlaceCard/PlaceCard";

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/v1/discover');
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const Home = ({ data }) => {

    return(
        <>
            <section className={styles.content}>
                <h2>Discover new places</h2>
                <div className={styles.containerGrid}>
                    {
                        data.map((items) => (
                            <PlaceCard items={items} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home;