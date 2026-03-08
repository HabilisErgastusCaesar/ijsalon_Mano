import styles from './contactForm.module.css'

import { Input } from '@/components/input';
import Form from 'next/form'

export const ContactForm = () => {
    const pushToBackend = (event:any) => {
        event.preventDefault();
        const voorname:string = event.target.voorname.value;
        const achtername:string = event.target.achtername.value;
        const email:string = event.target.email.value;
        const message:string = event.target.message.value;
        alert(`de naam is ${voorname} met de achternaam ${achtername} de email is ${email} the message is ---- ${message}`);
    };

    return(<Form action="GET" onSubmit={pushToBackend} className={styles.container}>
        <section className={styles.head_section}>
        <section className={styles.info_section}>
            <h1>Neem contact op</h1>
            <p>Vragen? Opmerkingen? Twijfel niet om contact op te nemen.</p>
            <p>Heeft u vragen, vul het contactformulier in en wij nemen zo spoedig mogelijk contact met u op.</p>
        </section>
        <section className={styles.form_section}>
            <span>
                <label>voornaam</label>
                <Input type="text" placeholder='verplicht' id="voorname" />
            </span>
            <span>
                <label>achternaam</label>
                <Input type="text" placeholder='verplicht' id="achtername" />
            </span>
            <span>
                <label>email</label>
                <Input type="email" placeholder='verplicht' id="email" />
            </span>
        </section>
        </section>
        <textarea id="message" required placeholder='verplicht veld --------->'></textarea>
        <button type="submit" >accept</button>
    </Form>)
}