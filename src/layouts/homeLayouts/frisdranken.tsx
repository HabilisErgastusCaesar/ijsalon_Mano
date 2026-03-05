import { useIjssalonContext } from '@/Context/ijssalonContext'

import styles from '../home.module.css'

export const Frisdranken = () => {
    const { selection, setSelection } = useIjssalonContext();
    const frisdranken = selection("frisdranken") ?? ["render"];

    if (frisdranken.length === 0) {
            const fetchData = async() => {
            const responseProfile = await fetch('/api/frisdranken');
            return await responseProfile.json();
        }

        const resData = async () => {
            const profileArray = await fetchData();
            return profileArray;
        };

        resData()
        .catch(error => console.log("kut error"+error))
        .then(item => {
            setSelection("frisdranken")?.(item);
        });
    };
    
    
    return (<>
        {frisdranken[0] !== "render" && Array.isArray(frisdranken) && frisdranken.map((item:any) => {
            return (<section key={item.id} className={styles.item_container}>
                <section>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </section>
                <img src={item.img} alt=""/>
            </section>)
        })}
    </>)
}