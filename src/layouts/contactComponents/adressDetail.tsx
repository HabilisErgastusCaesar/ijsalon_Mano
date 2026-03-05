import styles from './adressDetail.module.css'

export const AdressDetail = () => {
    return (<div className={styles.container}>
        <section>
        <label className={styles.label}>bezoek adres</label>
        <span>
            <label>City</label>
            <label>Roosendaal</label>
        </span>
        <span>
            <label>Straat</label>
            <label>StationStraat</label>
        </span>
        <span>
            <label>postcode</label>
            <label>1105MP</label>
        </span>
        </section>
        <section>
        <label className={styles.label}>socials</label>
        <span>
            <a href="https://www.facebook.com">facebook</a>
            <a href="https://www.instagram.com">insta</a>
        </span>
        </section>
    </div>)
}