import { Bakjes } from "../homeLayouts/bakjes"
import { Frisdranken } from "../homeLayouts/frisdranken"
import { HoorntjesBakjes } from "../homeLayouts/hoorntjesBakjes"
import { IjsSoorten } from "../homeLayouts/ijsSoorten"
import { Strooisels } from "../homeLayouts/strooiSels"
import { Add } from "./add"
import styles from '../home.module.css'

import { useState } from "react"

export const LoggedScreen = ({checkLogin}:{checkLogin:any}) => {
    interface popup {
        ijssoorten: Boolean,
        strooisels: Boolean,
        hoorntjesBakjes: Boolean,
        frisdranken: Boolean,
    }

    const [ popup, setPopup ] = useState<popup>({
        ijssoorten: true,
        strooisels: false,
        hoorntjesBakjes: false,
        frisdranken: false,
    });

    const [ addPopup, setAddPopup ] = useState<popup>({
        ijssoorten: false,
        strooisels: false,
        hoorntjesBakjes: false,
        frisdranken: false,
    });

    const changePopup = (type: string) => {
        setPopup((prev:any) => ({
            ...prev,
            [type]: !prev[type] 
        }));
    };

    const changeAddPopup = (type: string) => {
        setAddPopup((prev:any) => ({
            ...prev,
            [type]: !prev[type] 
        }));
    };

    return (<div className={styles.container}>
        <h1>{checkLogin.userName}</h1>
        <button onClick={() => changePopup("ijssoorten")}>ijssoorten</button>
        {popup.ijssoorten && <IjsSoorten />}
        {addPopup.ijssoorten && <Add selection={"ice"} />}
        <span style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
        }}>
            <button style={{
                width: "40%",
            }}>edit</button>
            <button style={{
                width: "40%",
            }} onClick={() => changeAddPopup("ijssoorten")}>add</button>
        </span>
        <button onClick={() => changePopup("strooisels")}>strooisels</button>
        {popup.strooisels && <Strooisels />}
        {addPopup.strooisels && <Add selection={"strooisels"} />}
        <span style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
        }}>
            <button style={{
                width: "40%",
            }}>edit</button>
            <button style={{
                width: "40%",
            }} onClick={() => changeAddPopup("strooisels")}>add</button>
        </span>
        <button onClick={() => changePopup("hoorntjesBakjes")}>hoorntjes bakjes</button>
        {popup.hoorntjesBakjes && <HoorntjesBakjes />}
        {addPopup.hoorntjesBakjes && <Add selection={"hoorntjes"} />}
        <span style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
        }}>
            <button style={{
                width: "40%",
            }}>edit</button>
            <button style={{
                width: "40%",
            }} onClick={() => changeAddPopup("hoorntjes")}>add</button>
        </span>
        <button onClick={() => changePopup("frisdranken")}>frisdranken</button>
        {popup.frisdranken && <Frisdranken />}
        {addPopup.frisdranken && <Add selection={"frisdranken"} />}
        <span style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
        }}>
            <button style={{
                width: "40%",
            }}>edit</button>
            <button style={{
                width: "40%",
            }} onClick={() => changePopup("frisdranken")}>add</button>
        </span>
    </div>)
}