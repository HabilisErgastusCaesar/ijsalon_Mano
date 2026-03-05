import { useIjssalonContext } from '@/Context/ijssalonContext'

import styles from '../home.module.css'

export const Strooisels = () => {
    const { selection } = useIjssalonContext();
    const strooisels = selection("strooisels") ?? [];
    
    return (<>
        {strooisels.map((item) => {
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