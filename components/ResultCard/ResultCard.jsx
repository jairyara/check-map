import React, {useState} from "react";
import Button from "@components/Button/Button";
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";
import styles from "./resultCard.module.css";
import mapStyles from "@libs/mapStyles";
import mapStyleContainer from  "@libs/mapContainerStyles"
import center from "@libs/mapSettingsCustom"
import SearchInput from "@components/SearchInput/SearchInput";

const ResultCard = ({mapClick, mapLoad, markers, ref}) => {

    const [selected, setSelected] = useState(null);

    const panTo = React.useCallback(({ lat, lng}) => {
        ref.current.panTo({ lat, lng });
        ref.current.setZoom(18);
    }, []);

    const options = {
        styles: mapStyles,
    }

    return (
        <>
            <div className={styles.searchInput}>
                <SearchInput panTo={panTo} />
            </div>
            <article className={styles.resultCard}>
                <div className={styles.map}>
                    <GoogleMap mapContainerStyle={mapStyleContainer}
                               zoom={11}
                               center={center}
                               options={options}
                               onClick={mapClick}
                               onLoad={mapLoad}>
                        {
                            markers.map(marker => <Marker key={`lat:${marker.lat}-lng:${marker.lng}`}
                                                          position={{lat: marker.lat, lng: marker.lng}}
                                                          onClick={() => setSelected(marker)}/>)
                        }
                        {selected ? (
                            <InfoWindow
                                position={{lat: selected.lat, lng: selected.lng}}
                                onCloseClick={() => setSelected(null)}>
                                <div>
                                    <p className={styles.black}>{`Latitud: ${selected.lat} - Longitud: ${selected.lng}`}</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </GoogleMap>
                </div>
                <section className={styles.dataContainer}>
                    <div>
                        <h1></h1>
                        <h1>Data</h1>
                        <h1>Data</h1>
                    </div>
                    <Button field={`Save as favorite`}/>
                </section>
            </article>
        </>
    )
}

export default ResultCard;