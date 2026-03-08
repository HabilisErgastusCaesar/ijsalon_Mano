import { useIjssalonContext } from '@/Context/ijssalonContext'
import { ItemList } from '@/components/itemsList';
import styles from './itemListLayout.module.css';

import { useState, useEffect } from 'react';

type listItem = {
    state: Boolean;
    arg: String;
    nav: String;
}

export const ItemListLayout = ({state, arg, nav}:listItem) => {
    const [open, setOpen] = useState(false);
    const { selection } = useIjssalonContext();
    
    const setCalc = () => {
        if (state) {
            const height = selection(`${arg}`)?.length;
            const column = 1;
            if (height) return (height / column) * 125;
            return 0;
        }
        return 0;
    }
    
    const calc = setCalc();

    const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        const debouncedFunction = function(this: any, ...args: Parameters<T>) {
            if (timeout) clearTimeout(timeout);
                timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };

        debouncedFunction.cancel = () => {
            if (timeout) {
            clearTimeout(timeout);
            timeout = null;
            }
        };

        return debouncedFunction;
    };

    useEffect(() => {
        const debouncedSetOpenFalse = debounce(() => setOpen(false), 2000);

        if (state) {
            setOpen(true);
            debouncedSetOpenFalse.cancel();
        } else {
            debouncedSetOpenFalse();
        }

        return () => {
            debouncedSetOpenFalse.cancel();
        };
    }, [state]);

    return (<div className={styles.container} style={{
        position: "relative",
        height: state ? `${calc}px` : "0px",
        overflow: "hidden",
        transition: "height 2s"
    }}>
        {open && <ItemList arg={arg} nav={nav} />}
    </div>)
}