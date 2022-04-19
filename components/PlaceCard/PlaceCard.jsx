import React, {useState} from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import mapStyleContainer from "@libs/mapContainerStyles";
import center from "@libs/mapSettingsCustom";
import styles from "./placeCard.module.css";
import mapStyles from "@libs/mapStyles";

const PlaceCard = ({items}) => {
    const {city, country, lat, lng, fav} = items;

    const [favorite, setFavorite] = useState(fav);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyBImPnQEdLu6rr6ie4FLNJw6q2oouxa_wc",
        libraries: ["places"],
    });

    const latitude = Number(lat);
    const longitude = Number(lng);

    const center = {
        lat: latitude,
        lng: longitude,
    }

    const options = {
        styles: mapStyles,
    }

    if (loadError) return 'Error'
    if (!isLoaded) return 'Loading...'

    return (
        <article className={styles.placeCard}>
            <div className={styles.map}>
                <GoogleMap mapContainerStyle={mapStyleContainer}
                           zoom={11}
                           center={center}
                           options={options}>

                </GoogleMap>
            </div>
            <div className={styles.info}>
                <h4>{city}</h4>
                <p>
                    <span onClick={() => {
                        setFavorite(!favorite);
                    }} className={`${favorite === true ? styles.filled : ''} material-icons-outlined ${styles.favorite}`}>
                        {
                            favorite === true ? 'favorite' : 'favorite_border'
                        }
                    </span>
                </p>
                <p>{country}</p>
            </div>
        </article>
    )
}

export default PlaceCard;