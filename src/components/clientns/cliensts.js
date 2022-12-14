import React, {useState} from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/clients.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'
import closeModal from '../../assets/imgs/closeModal.png'


const Cliensts = () => {
  const [addBook, setAddBook] = useState(false)
  const [firstInfo, setFirstInfo] = useState();
  const [secondInfo, setSecondInfo] = useState();
  const [thirdInfo, setThirdInfo] = useState();
  const [fourdInfo, setFourdInfo] = useState();
  const [fifthInfo, setFifthInfo] = useState();
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={`${globalStyle['main']} ${style['main']}`}>
      <div className={globalStyle['btnAddContainer']}>
          <button onClick={()=> setAddBook(true)}><h5>Добавить клиента</h5></button>
          {addBook ? 
          <div className={globalStyle['modal']}>
            <img src={closeModal} alt="" onClick={() =>setAddBook(false)}/>
            <h2>Введите информацию о клиента</h2>
            <input type="text" onChange={event=> setFirstInfo(event.target.value)} value={firstInfo} placeholder="ФИО клиента"/>
            <input type="text" onChange={event=> setSecondInfo(event.target.value)} value={secondInfo} placeholder="Номер телефона клиента"/>
            <button>Добавить клиента</button>
          </div> 
          
          : ''}
        </div>
        <div className={style['infoContainer']}>
          <div className={style['infoDescr']}>
            <div className={style['item']}>
              <h5><span>ФИО</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>НОМЕР ТЕЛЕФОНА</span></h5>
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
                <h5>ФИО клиента</h5>
              </div>
              <div className={style['item']}>
                <h5>8-800-555-55-35</h5>
              </div>
              <div className={style['item']}>
                <div className={style['green']}><h5>Книги сданы</h5></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cliensts