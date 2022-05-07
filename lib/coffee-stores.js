// initialize unsplash js
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
})

const getUrlForCoffeeStores = (category) => {
    return `https://api.foursquare.com/v3/places/search?categories=${category}`
}

export const fetchCoffeeStores = async () => {
    const photos = await unsplashApi.search.getPhotos({
        query: 'coffee stores',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait'
    });

    console.log(photos)

    const response = await fetch(
        getUrlForCoffeeStores(13032), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': process.env.FOURSQUARE_AUTH_TOKEN
            }
        }
    );
    const data = await response.json();
    return data.results;
}