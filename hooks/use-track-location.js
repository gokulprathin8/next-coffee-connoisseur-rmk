import {useContext, useState} from "react";
import {ACTION_TYPE, StoreContext} from "../pages/_app";

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    // const [latLong, setLatLong] = useState("");

    const {dispatch} = useContext(StoreContext)

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(position);
        // setLatLong(`${latitude},${longitude}`);
        dispatch({
            type: ACTION_TYPE.SET_LAT_LONG,
            payload: {latLong: `${latitude},${longitude}`}
        })
        setLocationErrorMsg("");
    }

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location")
    }

    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
        } else {
            // status.textContent = "Locating..."
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return {
        // latLong,
        locationErrorMsg,
        handleTrackLocation
    }

}

export default useTrackLocation;