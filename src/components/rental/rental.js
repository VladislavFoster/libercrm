import React from 'react';
import Header from '../../screens/header';
import Nav from '../../screens/nav';
import globalStyle from '../../layout/styles/globalStyle.module.css';

const Rental = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={globalStyle['main']}>
        <h1>test</h1>
      </div>
    </div>
  )
}

export default Rental