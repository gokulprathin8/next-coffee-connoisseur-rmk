// initialize unsplash js
import {createApi} from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
})

const getUrlForCoffeeStores = (category) => {
    return `https://api.foursquare.com/v3/places/search?categories=${category}`
}

const getListOfCoffeeStorePhotos = async () => {
    const photos = await unsplashApi.search.getPhotos({
        query: 'coffee shop',
        perPage: 10
    });

    const unsplashResults = photos.response.results;
    return unsplashResults.map(result => result.urls['small']);
}

export const fetchCoffeeStores = async () => {


    const photos = await getListOfCoffeeStorePhotos();
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

    return data.results.map((resp, idx) => {
        return {
            ...resp,
            imgUrl: photos[idx]
        }
    });
}