import React, {useState, useEffect} from 'react';
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/rental.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'
import closeModal from '../../assets/imgs/closeModal.png'

const data = {
  "employeesName" : '',
  "clientName" : '',
  "bookName" : "",
}

async function handleLogin(){
  await fetch('http://libercrmback/rental/putRental.php', {
      method: 'POST',
      body: JSON.stringify(data),
      header: {
          'Content-Type': 'application/json;charset=utf-8'
      },
  }).then(response => response.json()).then(response => {
      if(response === true){
          alert('Новый работник добавлен')
      }else{
          alert('Ошибка')
      }
  })
}

function getInfo(){
   fetch('http://libercrmback/rental/getRental.php', {
      method: 'GET',
      header: {
          'Content-Type': 'charset=utf-8'
      },
  }).then(response => response.text()).then(response => {
    
    info.push(JSON.parse(response))
  })
}
getInfo()
const info = [];

const Rental = () => {
  const [addBook, setAddBook] = useState(false)
  const [firstInfo, setFirstInfo] = useState();
  const [secondInfo, setSecondInfo] = useState();
  const [thirdInfo, setThirdInfo] = useState();

  const [loadState, setLoadState] = useState()

  useEffect(()=>{
    data.employeesName = firstInfo
    data.clientName = secondInfo
    data.bookName = thirdInfo
  }, [thirdInfo, setThirdInfo])

  useEffect(()=>{
    setTimeout(()=>{setLoadState(true)}, 100)
  })
  console.log(data)
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={`${globalStyle['main']} ${style['main']}`}>
      <div className={globalStyle['btnAddContainer']}>
          <button onClick={()=> setAddBook(true)}><h5>Добавить прокат</h5></button>
          {addBook ? 
          <div className={globalStyle['modal']}>
            <img src={closeModal} alt="" onClick={() =>setAddBook(false)}/>
            <h2>Введите информацию о книге</h2>
            <input type="text" onChange={event=> setFirstInfo(event.target.value)} value={firstInfo} placeholder="ФИО ответственного"/>
            <input type="text" onChange={event=> setSecondInfo(event.target.value)} value={secondInfo} placeholder="ФИО клиента"/>
            <input type="text" onChange={event=> setThirdInfo(event.target.value)} value={thirdInfo} placeholder="Название книги"/>
            <button onClick={handleLogin}>Добавить прокат</button>
          </div> 
          
          : ''}
        </div>
        <div className={style['infoContainer']}>
          <div className={style['infoDescr']}>
            <div className={style['item']}>
              <h5><span>ОТВЕТСТВЕННЫЙ</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>КЛИЕНТ</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>КНИГА</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>ДАТА ПОЛУЧЕНИЯ/СДАЧИ</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
            <div className={style['item']}>
              <h5><span>СТАТУС</span></h5>
              <img src={arrowNavImg} alt="" />
            </div>
          </div>
          <div className={style['infoItems']}>
            {info.map(item=>(
              <div className={style['container']} key={item.id}>
              <div className={style['item']}>
                <h5>{item.employees}</h5>
              </div>
              <div className={style['item']}>
                <h5>{item.client}</h5>
              </div>
              <div className={style['item']}>
                <h5>{item.book}</h5>
              </div>
              <div className={style['item']}>
                <h5>123стр</h5>
              </div>
              <div className={style['item']}>
                <div className={style['green']}><h5>Недавно выдано</h5></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rental