import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// import coffeeStoresData from '../../data/coffee-stores.json';
import Head from "next/head";
import styles from '../../styles/coffee-stores.module.css';
import cls from 'classnames';
import {fetchCoffeeStores} from "../../lib/coffee-stores";

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
    const coffeeStores = await fetchCoffeeStores();

    return {
        props: {
            coffeeStores: coffeeStores.find(coffeeStore => {
                return coffeeStore.fsq_id === params.id;
            })
        }
    }
}

export async function getStaticPaths() {
    const coffeeStores = await fetchCoffeeStores();
    const paths = coffeeStores.map(coffeeStore => {
        return {
            params: {
                id: coffeeStore.fsq_id
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

    const handleUpVoteButton = () => {};

    return <div className={styles.layout}>
        <Head>
            <title>{props.coffeeStores.name}</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.col1}>
                <div className={styles.backToHomeLink}>
                    <Link href="/" scroll={false}>← Back to home</Link>
                </div>
                <div className={styles.nameWrapper}>
                    <p className={styles.name}>{props.coffeeStores.name}</p>
                </div>
                <Image src={props.coffeeStores.imgUrl} width={600} height={360} className={styles.storeImg} alt="store-image" />
            </div>

            <div className={cls('glass', styles.col2)}>
                <div className={styles.iconWrapper}>
                    <Image src="/static/icons/places.svg" width={24} height={24} />
                    <p className={styles.text}>{props.coffeeStores.location.address}</p>
                </div>

                <div className={styles.iconWrapper}>
                    <Image src="/static/icons/nearMe.svg" width={24} height={24} />
                    <p className={styles.text}>{props.coffeeStores.location.locality}</p>
                </div>

                <div className={styles.iconWrapper}>
                    <Image src="/static/icons/star.svg" width={24} height={24} />
                    <p className={styles.text}>1</p>
                </div>

                <button className={styles.upvoteButton} onClick={handleUpVoteButton}>Up Vote!</button>
            </div>
        </div>
    </div>
}

export default CoffeeStore;