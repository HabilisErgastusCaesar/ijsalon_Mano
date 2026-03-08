import { useIjssalonContext } from "@/Context/ijssalonContext";
import styles from './itemsList.module.css'
import { HFor } from "./hFor";
import { P } from "./p";

import Image from "next/image";

type itemList = {
    arg: String;
    nav: String;
}

export const ItemList = ({arg, nav}:itemList) => {
    const { selection, setSelection } = useIjssalonContext();
    const items = selection(`${arg}`) ?? ["render"];
    const getData = () => {
        const fetchData = async() => {
            const responseProfile = await fetch(`/api/${nav}`);
            return await responseProfile.json();
        }

        const resData = async () => {
            const profileArray = await fetchData();
            return profileArray;
        };

        resData()
        .catch(error => console.log("kut error"+error))
        .then(item => {
            setSelection(`${arg}`)?.(item);
        });
    }
    
    if (items.length === 0) getData();

    return (<>
        {items[0] !== "render" && items.map((item: any) => {
            return (<section key={item.id} className={styles.item_container}>
                <section>
                    <HFor text={item.title} />
                    <P text={item.description} />
                </section>
                <Image src={item.img} alt="" 
                width={100} height={100} 
                style={{borderTopRightRadius: "10px"}} />
            </section>)
        })}
    </>)
}