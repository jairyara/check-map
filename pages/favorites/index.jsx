import React from "react";
import styles from "@pages/favorites/favorites.module.css";
import PlaceCard from "@components/PlaceCard/PlaceCard";

const Favorites = () => {
    return (
        <>
            <section className={styles.content}>
                <h2>Favorite places</h2>
                <div className={styles.containerGrid}>
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                </div>
            </section>
        </>
    )
}

export default Favorites;