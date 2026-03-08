import styles from './hFor.module.css'

export const HFor = ({text}:{text:String}) => {
    return <h4 className={styles.container}>{text}</h4>
}