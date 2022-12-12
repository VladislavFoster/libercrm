import React, {useState} from 'react'
import style from '../../../layout/styles/auth.module.css';

function Inputs() {
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    
    return (
        
              <div className={style['inputs']}>
                    <h5 className={style['heading']}>Логин</h5>
                    <input type="text" onChange={(event)=> setUserName(event.target.value)} value={userName}/>
                    <h5 className={style['heading']}>Пароль</h5>
                    <input type="password" onChange={(event)=> setUserPassword(event.target.value)} value={userPassword}/>
                </div>
              
    )
}

export default Inputs