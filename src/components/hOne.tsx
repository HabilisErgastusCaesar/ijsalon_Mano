import styles from './hOne.module.css'

export const HOne = ({text}:{text:string}) => {
    return <h1 className={styles.hOne}>{text}</h1>
}