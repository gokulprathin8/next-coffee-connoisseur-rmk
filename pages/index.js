import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner";
import Card from "../components/card";

import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
    return {
        props: {
            coffeeStores
        }
    }
}

export default function Home(props) {
    const handleOnBannerBtnClick = () => {
        console.log('button clicked');
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
            buttonText="View stores nearby"
            handleButtonClick={handleOnBannerBtnClick}
        />
          <div className={styles.heroImage}>
              <Image src="/static/hero-image.png" width={700} height={400} alt="hero-image"/>
          </div>
          {coffeeStores.length > 0 && <div>
              <h2 className={styles.heading2}>Toronto Store</h2>
              <div className={styles.cardLayout}>
                  {props.coffeeStores.map(coffeeStore => {
                      return (
                          <Card
                              key={coffeeStore.id}
                              imageURL={coffeeStore.imgUrl}
                              name={coffeeStore.name}
                              href={`/coffee-store/${coffeeStore.id}`}
                              className={styles.card}
                          />
                      )
                  })}
              </div>
          </div>}

      </main>
    </div>
  )
}
