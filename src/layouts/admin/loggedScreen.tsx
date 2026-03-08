import { ItemListLayout } from "../homeLayouts/itemListLayout"
import { RoundedButton } from "@/components/roundedButton"
import { EditAddButtonLayout } from "./editAddButtonLayout"
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
        <RoundedButton text={"ijssoorten"} buttonState={popup.ijssoorten} func={changePopup} arg={"ijssoorten"} />
        <ItemListLayout state={popup.ijssoorten} arg={"ice"} nav={"ijsSoorten"} />
        {addPopup.ijssoorten && <Add selection={"ice"} />}
        <EditAddButtonLayout />
        <RoundedButton text={"strooisels"} buttonState={popup.strooisels} func={changePopup} arg={"strooisels"} />
        <ItemListLayout state={popup.strooisels} arg={"strooisels"} nav={"strooiSels"} />
        {addPopup.strooisels && <Add selection={"strooisels"} />}
        <EditAddButtonLayout />
        <RoundedButton text={"hoorntjes / bakjes"} buttonState={popup.hoorntjesBakjes} func={changePopup} arg={"hoorntjesBakjes"} />
        <ItemListLayout state={popup.hoorntjesBakjes} arg={"hoorntjes"} nav={"hoorntjesBakjes"} />
        {addPopup.hoorntjesBakjes && <Add selection={"hoorntjes"} />}
        <EditAddButtonLayout />
        <RoundedButton text={"frisdranken"} buttonState={popup.frisdranken} func={changePopup} arg={"frisdranken"} />
        <ItemListLayout state={popup.frisdranken} arg={"frisdranken"} nav={"frisdranken"} />
        {addPopup.frisdranken && <Add selection={"frisdranken"} />}
        <EditAddButtonLayout />
    </div>)
}