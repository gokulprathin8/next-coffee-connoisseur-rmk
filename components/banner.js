import styles from './banner.module.css'

const Banner = ({handleButtonClick, buttonText}) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Coffee</span>
            <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subTitle}>Discover your local coffee shops!</p>
        <button className={styles.button} onClick={handleButtonClick}>{buttonText}</button>
    </div>
}

export default Banner;