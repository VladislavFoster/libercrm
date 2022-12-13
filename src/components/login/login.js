import React from 'react';
import bg from '../../assets/imgs/bgAuthImg.png';
import style from '../../layout/styles/auth.module.css';
import Inputs from './inputs/inputs';


const Login = () => {

  

  // const generateUser = useMemo(()=>{createUser(userName, userSurname)}, [userName, userSurname])
  // console.log(generateUser)



  

  return (
    
      <div className={style['main']}>
          
              <Inputs/>
            
          <img src={bg} alt="" />
      </div>

   
  )
}

export default Login