import { useIjssalonContext } from "@/Context/ijssalonContext";
import styles from '../home.module.css'

export const IjsSoorten = () => {
    const { selection ,setSelection } = useIjssalonContext();
    const ice = selection("ice") ?? ["render"];
    const getData = () => {
        const fetchData = async() => {
            const responseProfile = await fetch('/api/ijsSoorten');
            return await responseProfile.json();
        }

        const resData = async () => {
            const profileArray = await fetchData();
            return profileArray;
        };

        resData()
        .catch(error => console.log("kut error"+error))
        .then(item => {
            setSelection("ice")?.(item);
        });
    }
    
    if (ice.length === 0) {
        getData()

    }

    return (<>
        {ice[0] !== "render" && ice.map((item: any) => {
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