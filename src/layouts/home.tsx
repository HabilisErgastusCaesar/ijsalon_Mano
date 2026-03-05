import styles from './home.module.css'
import { IjsSoorten } from './homeLayouts/ijsSoorten';
import { Bakjes } from './homeLayouts/bakjes';
import { Frisdranken } from './homeLayouts/frisdranken';
import { HoorntjesBakjes } from './homeLayouts/hoorntjesBakjes';
import { Strooisels } from './homeLayouts/strooiSels';

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
        <button onClick={() => changePopup("ijssoorten")}>ijssoorten</button>
        {popup.ijssoorten && <IjsSoorten />}
        <button onClick={() => changePopup("strooisels")}>strooisels</button>
        {popup.strooisels && <Strooisels />}
        <button onClick={() => changePopup("hoorntjesBakjes")}>hoorntjes / bakjes</button>
        {popup.hoorntjesBakjes && <HoorntjesBakjes />}
        <button onClick={() => changePopup("frisdranken")}>frisdranken</button>
        {popup.frisdranken && <Frisdranken />}
    </div>)
}