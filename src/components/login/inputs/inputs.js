import React, {useEffect, useState} from 'react'
import style from '../../../layout/styles/auth.module.css';

const data = {
    "userName" : '',
    "userPassword" : ''
}



async function handleLogin(){
    await fetch('http://libercrmback/auth.php', {
        method: 'POST',
        body: JSON.stringify(data),
        header: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }).then(response => response.json()).then(response => {
        if(response === true){
            document.location.href = 'http://localhost:3000/rental'
        }else{
            alert('Пользователь не найден')
            console.log(response)
        }
    })
}

function Inputs() {
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()

    useEffect(()=>{
        data.userName = userName;
        data.userPassword = userPassword;
    }, [userName, userPassword])

    // console.log(data)
    
    return (
        <div className={style['authBox']}>
              <h1 className={style['heading']}>Авторизация</h1>
              <div className={style['inputs']}>
                    <h5 className={style['heading']}>Логин</h5>
                 
                    <input type="text" onChange={(event)=> setUserName(event.target.value)} value={userName} name="userName"/>
                    <h5 className={style['heading']}>Пароль</h5>

                    <input type="password" onChange={(event)=> setUserPassword(event.target.value)} value={userPassword} name="userPassword"/>
                </div>
                <button onClick={handleLogin}><h5>Войти</h5></button> 
        </div>
              
    )
}

export default Inputs