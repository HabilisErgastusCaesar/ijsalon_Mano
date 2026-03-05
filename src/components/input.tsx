import styles from './input.module.css' 
export const Input = ({type, placeholder, id}:{type:string, placeholder:string, id: string}) => {
    return(<input className={styles.input} type={type} placeholder={placeholder} id={id} required/>)
}