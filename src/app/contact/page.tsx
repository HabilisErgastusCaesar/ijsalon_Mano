"use client";

import { NavigationBar } from "../../layouts/navigationBar";
import { Contact } from "../../layouts/contact";
import styles from "../page.module.css";

const ContactPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <NavigationBar />
        <Contact />
      </main>
    </div>
  );
}


export default ContactPage