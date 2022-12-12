import React, {useState, useMemo, useCallback, useRef} from 'react';
import bg from '../../assets/imgs/bgAuthImg.png';
import style from '../../layout/styles/auth.module.css';
import Inputs from './inputs/inputs';

function createUser(name, surName){
  return{
    name, surName
  }
}


const Login = () => {



  // const generateUser = useMemo(()=>{createUser(userName, userSurname)}, [userName, userSurname])
  // console.log(generateUser)

  const handlerLogin = useCallback(()=>{
    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://libercrm", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    

    if(xhttp.readyState == 4 && xhttp.status == 200){
      window.location.href = '/rental'
    }else{  
      console.log('Ошибка')
    }
  })

  

  return (
    
      <div className={style['main']}>
          <div className={style['authBox']}>
              <h1 className={style['heading']}>Авторизация</h1>
              <Inputs/>
            <button onClick={handlerLogin()}><h5>Войти</h5></button> 
          </div>
          <img src={bg} alt="" />
      </div>

   
  )
}

export default Login