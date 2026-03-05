"use client";

import { NavigationBar } from "../../layouts/navigationBar";
import { Info } from "../../layouts/info";
import styles from "../page.module.css";

const InfoPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <NavigationBar />
        <Info />
      </main>
    </div>
  );
}


export default InfoPage