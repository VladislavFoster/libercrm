import React from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/employees.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'

const Employees = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={`${globalStyle['main']} ${style['main']}`}>
        <div className={style['infoContainer']}>
          <div className={style['infoDescr']}>
            <div className={style['item']}>
              <h5><span>ФИО </span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>ПРОФЕССИЯ </span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>НОМЕР ТЕЛЕФОНА</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>СТАЖ</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
          </div>
          <div className={style['infoItems']}>
            <div className={style['container']}>
              <div className={style['item']}>
                <h5>ФИО сотрудника</h5>
              </div>
              <div className={style['item']}>
                <h5>Название профессии</h5>
              </div>
              <div className={style['item']}>
                <h5>8-800-555-55-35</h5>
              </div>
              <div className={style['item']}>
                <h5>1 мес</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees