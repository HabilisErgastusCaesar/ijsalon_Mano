import styles from './p.module.css'

export const P = ({text}:{text:String}) => {
    return <p className={styles.container}>{text}</p>
}