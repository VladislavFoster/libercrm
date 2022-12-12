import React, {useState} from 'react'
import style from '../../../layout/styles/auth.module.css';

function handleLogin(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://libercrm", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    if(xhttp.readyState === 4 && xhttp.status === 200){
      window.location.href = '/rental'
    }else{  
      console.log('Ошибка')
    }

}

function Inputs() {
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    
    return (
        <div className={style['authBox']}>
              <h1 className={style['heading']}>Авторизация</h1>
              <div className={style['inputs']}>
                    <h5 className={style['heading']}>Логин</h5>
                 
                    <input type="text" onChange={(event)=> setUserName(event.target.value)} value={userName}/>
                    <h5 className={style['heading']}>Пароль</h5>

                    <input type="password" onChange={(event)=> setUserPassword(event.target.value)} value={userPassword}/>
                </div>
                <button onClick={handleLogin}><h5>Войти</h5></button> 
          </div>
              
    )
}

export default Inputs