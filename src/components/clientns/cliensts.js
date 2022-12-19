import React, {useState, useEffect} from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/clients.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'
import closeModal from '../../assets/imgs/closeModal.png'

const data = {
  "clientName" : '',
  "clientPhoneNumber" : ''
}

async function handleLogin(){
  await fetch('http://libercrmback/clients/putClients.php', {
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
   fetch('http://libercrmback/clients/getClients.php', {
      method: 'GET',
      header: {
          'Content-Type': 'charset=utf-8'
      },
  }).then(response => response.text()).then(response => {
    clients.push(JSON.parse(response))
  })
}
getInfo()
const clients = [];

const Cliensts = () => {
  const [addBook, setAddBook] = useState(false)
  const [firstInfo, setFirstInfo] = useState();
  const [secondInfo, setSecondInfo] = useState();
  const [loadState, setLoadState] = useState()

  useEffect(()=>{
    data.clientName = firstInfo
    data.clientPhoneNumber = secondInfo
  }, [secondInfo, setSecondInfo])

  useEffect(()=>{
    setTimeout(()=>{setLoadState(true)}, 100)
  })

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
            <button onClick={handleLogin}>Добавить клиента</button>
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
            
            {
              clients.map(item=>(
                item.map(param=>(
                  <div className={style['container']} key={param.id}>
                      <div className={style['item']}>
                          <h5>{param.name}</h5>
                      </div>
                      <div className={style['item']}>
                          <h5>{param.phone}</h5>
                      </div>
                      <div className={style['item']}>
                          <div className={style['green']}><h5>Книги сданы</h5></div>
                      </div>
                  </div>
                ))
                
                
              )
              
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cliensts