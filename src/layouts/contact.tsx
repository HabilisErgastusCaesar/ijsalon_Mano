import { ContactForm } from "./contactComponents/contactForm"
import { AdressDetail } from "./contactComponents/adressDetail"

import styles from './contact.module.css'

export const Contact = () => {
    return (<div className={styles.container}>
        <div id="heading_img" className={styles.heading_img}>
            <img src="/ice_cream/aardbijern.webp" alt=""/>
        </div>
        <div className={styles.items_container}>
            <ContactForm />
            <AdressDetail />
        </div>
    </div>)
}