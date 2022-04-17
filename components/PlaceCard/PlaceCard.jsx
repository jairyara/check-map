import React from "react";
import styles from "./placeCard.module.css";

const PlaceCard = () => {
    return (
        <article className={styles.placeCard}>
            <div className={styles.map}></div>
            <div className={styles.info}>
                <h4>New Place</h4>
                <p><span className="material-icons-outlined">favorite_border</span></p>
                <p>Location</p>
            </div>
        </article>
    )
}

export default PlaceCard;