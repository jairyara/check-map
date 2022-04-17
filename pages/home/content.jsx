import React from "react";
import PlaceCard from "@components/PlaceCard/PlaceCard";
import styles from "./home.module.css";

const Content = () => {
    return (
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
    )
}

export default Content;