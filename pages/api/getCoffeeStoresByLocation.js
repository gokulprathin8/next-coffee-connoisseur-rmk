import {fetchCoffeeStores} from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {

    try {
        const {latLong, limit} = req.query;
        console.log(latLong, limit);
        const fetchedCoffeeStores = await fetchCoffeeStores();
        res.status(200)
        res.json(fetchedCoffeeStores);
    } catch (err) {
        console.error(`Error: ${err}`);
    }



}

export default getCoffeeStoresByLocation;