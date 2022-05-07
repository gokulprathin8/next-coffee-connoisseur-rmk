const getUrlForCoffeeStores = (category) => {
    return `https://api.foursquare.com/v3/places/search?categories=${category}`
}

export const fetchCoffeeStores = async () => {
    const response = await fetch(
        getUrlForCoffeeStores(13032), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': process.env.FOURSQUARE_AUTH_TOKEN
            }
        }
    );
    return await response.json();
}