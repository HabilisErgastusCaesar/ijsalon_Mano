"use client";

import styles from "./../page.module.css";
import { LoginScreen } from "@/layouts/admin/loginScreen";
import { LoggedScreen } from "@/layouts/admin/loggedScreen";

import { useState } from "react";

export default function Home() {
    const [ checkLogin, setCheckLogin ] = useState({
        userName: "",
        password: "",
        pin: "",
        email: ""
    })

    return (
        <div>
        <main className={styles.main}>
            <h1>admin</h1>
            {checkLogin.pin === "" && <LoginScreen checkLogin={checkLogin} setCheckLogin={setCheckLogin} />}
            {checkLogin.userName !== "" && checkLogin.pin !== "" && <LoggedScreen checkLogin={checkLogin} />}
        </main>
        </div>
    );
}