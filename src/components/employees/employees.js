import React, {useState, useEffect} from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/employees.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'
import closeModal from '../../assets/imgs/closeModal.png'

const data = {
  "employeesName" : '',
  "employeesProfession" : '',
  "employeesPhoneNumber" : '',
  "employeesStage" : '',
  "employeesPassword" : ''
}



async function handleLogin(){
  await fetch('http://libercrmback/books/putEmployees.php', {
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
   fetch('http://libercrmback/books/getEmployees.php', {
      method: 'GET',
      header: {
          'Content-Type': 'charset=utf-8'
      },
  }).then(response => response.text()).then(response => {
    
    employees.push(JSON.parse(response))
  })
}

getInfo()
const employees = [];


const Employees = () => {
  const [addBook, setAddBook] = useState(false)
  const [firstInfo, setFirstInfo] = useState();
  const [secondInfo, setSecondInfo] = useState();
  const [thirdInfo, setThirdInfo] = useState();
  const [fourdInfo, setFourdInfo] = useState();
  const [fifthInfo, setFifthInfo] = useState();
  const [loadState, setLoadState] = useState()
  

  useEffect(()=>{
    data.employeesName = firstInfo
    data.employeesProfession = secondInfo
    data.employeesPhoneNumber = thirdInfo
    data.employeesStage = fourdInfo
    data.employeesPassword = fifthInfo
  }, [fifthInfo, setFifthInfo])

  useEffect(()=>{
    setTimeout(()=>{setLoadState(true)}, 100)
  })
 

  return (
    <div>
      <Header/>
      <Nav/>
      <div className={`${globalStyle['main']} ${style['main']}`}>
      <div className={globalStyle['btnAddContainer']}>
          <button onClick={()=> setAddBook(true)}><h5>Добавить сотрудника</h5></button>
          {addBook ? 
          <div className={globalStyle['modal']}>
            <img src={closeModal} alt="" onClick={() =>setAddBook(false)}/>
            <h2>Введите информацию о сотруднике</h2>
            <input type="text" onChange={event=> setFirstInfo(event.target.value)} value={firstInfo} placeholder="ФИО сотрудника"/>
            <input type="text" onChange={event=> setSecondInfo(event.target.value)} value={secondInfo} placeholder="Профессия сотрудника"/>
            <input type="text" onChange={event=> setThirdInfo(event.target.value)} value={thirdInfo} placeholder="Номер телефона сотрудника"/>
            <input type="text" onChange={event=> setFourdInfo(event.target.value)} value={fourdInfo} placeholder="Стаж сотрудника"/>
            <input type="text" onChange={event=> setFifthInfo(event.target.value)} value={fifthInfo} placeholder="Пароль сотрудника"/>
            <button onClick={handleLogin}>Добавить сотрудника</button>
          </div> 
          
          : ''}
        </div>
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

            {
            employees.map(item=>(
              <div className={style['container']} key={item.id}>
                <div className={style['item']}>
                  <h5>{item.name}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.profession}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.phoneNumber}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.stage}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees