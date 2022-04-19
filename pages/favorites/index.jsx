import React from "react";
import styles from "@pages/favorites/favorites.module.css";
import PlaceCard from "@components/PlaceCard/PlaceCard";

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/v1/favorites');
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const Favorites = ({ data }) => {
    return (
        <>
            <section className={styles.content}>
                <h2>Favorite places</h2>
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

export default Favorites;