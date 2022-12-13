import React from 'react'
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';

const Cliensts = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={globalStyle['main']}></div>
    </div>
  )
}

export default Cliensts