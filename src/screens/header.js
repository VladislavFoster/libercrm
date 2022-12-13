import React from 'react';
import globalStyle from '../layout/styles/globalStyle.module.css'
import userImg from '../assets/imgs/userImg.png';
import arrow from '../assets/imgs/arrow.png';
import logo from '../assets/imgs/logo.png'

function Header() {
  return (
    <div className={globalStyle['header']}>
        <div className={globalStyle['logoContainer']}>
            <img src={logo} alt="" className={globalStyle['logo']}/>
            <h4>LiberCRM</h4>
        </div>
        
        <div className={globalStyle['userInfo']}>
            <img src={userImg} alt="" className={globalStyle['userImg']}/>
            <h5>Имя пользователя</h5>
        </div>
    </div>
  )
}

export default Header