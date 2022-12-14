import React, {useState, useEffect} from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';
import style from '../../layout/styles/books.module.css'
import arrowNavImg from '../../assets/imgs/arrowNavImg.png'
import closeModal from '../../assets/imgs/closeModal.png'

const data = {
  "bookName" : '',
  "bookAuthor" : '',
  "bookGanre" : "",
  "bookPages" : ""
}

async function handleLogin(){
  await fetch('http://libercrmback/books/putBooks.php', {
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
   fetch('http://libercrmback/books/getBooks.php', {
      method: 'GET',
      header: {
          'Content-Type': 'charset=utf-8'
      },
  }).then(response => response.text()).then(response => {
    
    books.push(JSON.parse(response))
  })
}
getInfo()
const books = [];

const Books = () => {
  const [addBook, setAddBook] = useState(false)
  const [firstInfo, setFirstInfo] = useState();
  const [secondInfo, setSecondInfo] = useState();
  const [thirdInfo, setThirdInfo] = useState();
  const [fourdInfo, setFourdInfo] = useState();

  const [loadState, setLoadState] = useState()

  useEffect(()=>{
    data.bookName = firstInfo
    data.bookAuthor = secondInfo
    data.bookGanre = thirdInfo
    data.bookPages = fourdInfo
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
          <button onClick={()=> setAddBook(true)}><h5>Добавить книгу</h5></button>
          {addBook ? 
          <div className={globalStyle['modal']}>
            <img src={closeModal} alt="" onClick={() =>setAddBook(false)}/>
            <h2>Введите информацию о книге</h2>
            <input type="text" onChange={event=> setFirstInfo(event.target.value)} value={firstInfo} placeholder="Название книги"/>
            <input type="text" onChange={event=> setSecondInfo(event.target.value)} value={secondInfo} placeholder="Автор книги"/>
            <input type="text" onChange={event=> setThirdInfo(event.target.value)} value={thirdInfo} placeholder="Жанр книги"/>
            <input type="text" onChange={event=> setFourdInfo(event.target.value)} value={fourdInfo} placeholder="Колличесвто страниц"/>
            <button onClick={handleLogin}>Добавить книгу</button>
          </div> 
          
          : ''}
        </div>
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
            {books.map(item=>(
              <div className={style['container']} key={item.key}>
                <div className={style['item']}>
                  <h5>{item.title}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.author}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.genre}</h5>
                </div>
                <div className={style['item']}>
                  <h5>{item.pages}</h5>
                </div>
                <div className={style['item']}>
                  <div className={style['green']}><h5>В библиотеке</h5></div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books