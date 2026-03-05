"use client";

import { NavigationBar } from "../layouts/navigationBar";
import { Homerig } from "../layouts/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NavigationBar />
        <Homerig />
      </main>
    </div>
  );
}
