import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from '../../data/coffee-stores.json';
import Head from "next/Head";

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    return {
        props: {
            coffeeStores: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id === parseInt(params.id, 10);
            })
        }
    }
}

export function getStaticPaths() {
    const paths = coffeeStoresData.map(coffeeStore => {
        return {
            params: {
                id: coffeeStore.id.toString()
            }
        }
    })
    return {
        paths:  paths,
        fallback: true
    }
}

const CoffeeStore = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    console.log(router, router.query.id);
    return <div>
        <Head>
            <title>{props.coffeeStores.name}</title>
        </Head>
        <div>Coffee Store</div>
        <Link href="/" scroll={false}>Back to home</Link>
        <Link href="/coffee-store/1" scroll={false}>Go to a dynamic page</Link>
        <p>{props.coffeeStores.name}</p>
        <p>{props.coffeeStores.address}</p>
    </div>
}

export default CoffeeStore;