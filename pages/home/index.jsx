import React from "react";
import styles from "@pages/home/home.module.css";
import PlaceCard from "@components/PlaceCard/PlaceCard";

const Home = () => {

    return(
        <>
            <section className={styles.content}>
                <h2>Discover new places</h2>
                <div className={styles.containerGrid}>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                    <PlaceCard/>
                </div>
            </section>
        </>
    )
}

export default Home;