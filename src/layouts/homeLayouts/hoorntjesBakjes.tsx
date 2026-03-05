import { useIjssalonContext } from '@/Context/ijssalonContext'

import styles from '../home.module.css'

export const HoorntjesBakjes = () => {
    const { selection, setSelection } = useIjssalonContext();
    const hoorntjes = selection("hoorntjes") ?? ["render"];

    if (hoorntjes.length === 0) {
            const fetchData = async() => {
            const responseProfile = await fetch('/api/hoorntjesBakjes');
            return await responseProfile.json();
        }

        const resData = async () => {
            const profileArray = await fetchData();
            return profileArray;
        };

        resData()
        .catch(error => console.log("kut error"+error))
        .then(item => {
            setSelection("hoorntjes")?.(item);
        });
    };

    return (<>
        {hoorntjes.map((item) => {
            return (<section key={(item as any).id} className={styles.item_container}>
                <section>
                    <h4>{(item as any).title}</h4>
                    <p>{(item as any).description}</p>
                </section>
                <img src={(item as any).img} alt=""/>
            </section>)
        })}
    </>)
}