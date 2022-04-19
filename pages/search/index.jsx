import React, {useState} from "react";
import {useLoadScript } from "@react-google-maps/api";
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import SearchInput from "@components/SearchInput/SearchInput";
import ResultCard from "@components/ResultCard/ResultCard";
import styles from "@pages/search/search.module.css";

const Search = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyBImPnQEdLu6rr6ie4FLNJw6q2oouxa_wc",
        libraries: ["places"],
    });

    const [markers, setMarkers] = useState([]);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current, {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    return(
        <>
            <section className={styles.content}>
                <h2>Search new places</h2>
                <p>{loadError ? 'Error' : '' }</p>
                {!isLoaded ? 'Loading maps' : <ResultCard mapClick={onMapClick} mapLoad={onMapLoad} markers={markers} ref={mapRef} />}
            </section>
        </>
    )
}

export default Search;