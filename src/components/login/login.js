import React from 'react';
import bg from '../../assets/imgs/bgAuthImg.png';
import style from '../../layout/styles/auth.module.css';

const Login = () => {
  return (
    <div className={style['main']}>
        <div className={style['authBox']}>
            <h1 className={style['heading']}>Авторизация</h1>
            <div className={style['inputs']}>
                <h5 className={style['heading']}>Логин</h5>
                <input type="text" />
                <h5 className={style['heading']}>Пароль</h5>
                <input type="text" />
            </div>
            <button><h5>Войти</h5></button>
        </div>
        <img src={bg} alt="" />
    </div>
  )
}

export default Login