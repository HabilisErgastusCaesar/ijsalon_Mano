import { useState } from 'react';
import styles from './loginScreen.module.css'

export const LoginScreen = ({checkLogin, setCheckLogin}: {checkLogin: any, setCheckLogin: any}) => {
    const [ login, setLogin ] = useState([
        {
            userName: "Romano",
            password: "kak",
            pin: "0000",
            email: "penishaar@gmail.com"
        }
    ]);

    const checkUserNamePassword = (event:any) => {
        event.preventDefault();
        const userName:string = event.target.userName.value;
        const password:string = event.target.password.value;
        login.map((item) => {
            if (item.userName === userName && item.password === password) {
                setCheckLogin((prev: any) => {
                    let newData = {...prev};
                    newData.userName = userName;
                    newData.password = password;
                    return newData
                })
            }
        })
    }

    const checkPin = (event:any) => {
        event.preventDefault();
        const pin:string = event.target.pin.value;
        login.map((item) => {
            if (item.userName === checkLogin.userName && item.password === checkLogin.password) {
                if (item.pin === pin) {
                    setCheckLogin((prev: any) => {
                        let newData = {...prev};
                        newData.pin = pin;
                        newData.email = item.email;
                        return newData
                    });
                }
            }
        })
    }

    console.log(checkLogin)

    return (<>
    {checkLogin.userName === "" && <form method='get' onSubmit={checkUserNamePassword} className={styles.container}>
        <span>
            <label>userName</label>
            <input type='text' required id="userName" />
        </span>
        <span>
            <label>password</label>
            <input type='password' required id="password" />
        </span>
        <button type="submit">login</button>
    </form>}
    {checkLogin.userName !== "" && <form method='get' onSubmit={checkPin} className={styles.container}>
        <span>
            <label>pin</label>
            <input type='text' required id="pin" />
        </span>
        <button type="submit">login</button>
    </form>}
    </>
    )
}