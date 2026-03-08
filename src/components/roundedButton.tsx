import styles from './roundedButton.module.css'

type RoundedButtonProps = {
  text: string;
  buttonState: Boolean;
  func: (arg: string) => void;
  arg: string;
};

export const RoundedButton = ({ text, buttonState, func, arg }: RoundedButtonProps) => {
    return <div className={styles.container}>
        <button className={buttonState ? styles.roundedButton_True : styles.roundedButton_False} onClick={() => func(arg)}>
        <label>{text}</label>
    </button>
    <div className={buttonState ? styles.background_True : styles.background_False} />
    </div>
}