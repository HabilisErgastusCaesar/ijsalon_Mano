import styles from './home.module.css'
import { ItemListLayout } from './homeLayouts/itemListLayout';

import { RoundedButton } from '@/components/roundedButton';

import { useState, useRef, useEffect } from 'react'


export const Homerig = () => {
    const containerRef = useRef<any>(null);

    const [ resize , setResize] = useState(false);

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

    const changePopup = (type: string) => {
        setPopup((prev:any) => ({
            ...prev,
            [type]: !prev[type] 
        }));
    };

    
    useEffect(() => {
        if (!containerRef.current) return () => {};

        const handleScroll = () => {
            const pos = containerRef.current?.scrollTop ?? 0;
            if (pos < 50 && resize) {
                setResize(false);
            } else if (pos >= 50 && pos < 200 && !resize) {
                setResize(true);
            }
        };

        containerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            containerRef.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const element = document.getElementById("heading_img");
        if (!element) return () => {};
        if (resize) element.style.height = "100px";
        
    }, [resize]);

    
    return (<div ref={containerRef} className={styles.container}>
        <div id="heading_img" className={styles.heading_img}>
            <img src="/Romano_ijssalon_placeholder.jpg" alt=""/>
        </div>
        <div className={styles.items_container}>
            <RoundedButton text={"ijssoorten"} buttonState={popup.ijssoorten} func={changePopup} arg={"ijssoorten"} />
            <ItemListLayout state={popup.ijssoorten} arg={"ice"} nav={"ijsSoorten"} />
            <RoundedButton text={"strooisels"} buttonState={popup.strooisels} func={changePopup} arg={"strooisels"} />
            <ItemListLayout state={popup.strooisels} arg={"strooisels"} nav={"strooiSels"} />
            <RoundedButton text={"hoorntjes / bakjes"} buttonState={popup.hoorntjesBakjes} func={changePopup} arg={"hoorntjesBakjes"} />
            <ItemListLayout state={popup.hoorntjesBakjes} arg={"hoorntjes"} nav={"hoorntjesBakjes"} />
            <RoundedButton text={"frisdranken"} buttonState={popup.frisdranken} func={changePopup} arg={"frisdranken"} />
            <ItemListLayout state={popup.frisdranken} arg={"frisdranken"} nav={"frisdranken"} />
        </div>
    </div>)
}