import React from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./searchInput.module.css";

const SearchInput = ({panTo}) => {

    const {ready, value, suggestions: {status, data}, setValue , clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 4.60971, lng: () => -74.08175},
            radius: 1000 * 20
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.form}>
            <Combobox onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions();

                try {
                    const results = await  getGeocode({address});
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo(lat, lng);
                } catch (err) {
                    console.error(err);
                }
            }}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Enter a location"
                />
                <span className="material-icons">search</span>

                <ComboboxPopover className={styles.popOver}>
                    {status === "OK" && data.map(({id, description}) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default SearchInput;