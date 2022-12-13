import React from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/books.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'

const Books = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={`${globalStyle['main']} ${style['main']}`}>
        <div className={style['infoContainer']}>
          <div className={style['infoDescr']}>
            <div className={style['item']}>
              <h5><span>НАЗВАНИЕ </span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>АВТОР </span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>ЖАНР</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>КОЛ-ВО СТРАНИЦ</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>СТАТУС</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
          </div>
          <div className={style['infoItems']}>
            <div className={style['container']}>
              <div className={style['item']}>
                <h5>Какое - то название книги</h5>
              </div>
              <div className={style['item']}>
                <h5>Какой-то автор</h5>
              </div>
              <div className={style['item']}>
                <h5>Такой-то жанр</h5>
              </div>
              <div className={style['item']}>
                <h5>123стр</h5>
              </div>
              <div className={style['item']}>
                <div className={style['green']}><h5>В библиотеке</h5></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books