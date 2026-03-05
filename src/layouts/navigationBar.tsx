import styles from './navigationBar.module.css'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const NavigationBar = () => {
    const [ popup, setPopup ] = useState<boolean>(false);
    
    const router = useRouter();

    const changeNav = (type:string) => {
        if (type === "home") {
            router.push(`/`)
        } else {
            router.push(`/${type}`);
        }
    };

    return (<div className={styles.container}>
        <button onClick={() => setPopup(!popup)}><img src="/menu_button.png" alt="open nav"/></button>
        {popup && <div className={styles.menu}>
            <button onClick={() => setPopup(false)} className={styles.openedPopup} />
                <div className={styles.nav_button}>
                    <button onClick={() => changeNav("home")}>Home</button>
                    <button onClick={() => changeNav("info")}>info</button>
                    <button onClick={() => changeNav("contact")}>contact</button>
                </div>
            <button onClick={() => setPopup(false)} className={styles.openedPopup} />
        </div>}
        <h1 className={styles.heading}>ijssalon Mano</h1>
    </div>)
}