import React from 'react';
import globalStyle from '../layout/styles/globalStyle.module.css';

function Nav() {
  return (
    <div className={globalStyle['nav']}>
        <div className={globalStyle['navItems']}>
            <div className={globalStyle['navItem']}><a href="/rental">Прокат</a></div>
            <div className={globalStyle['navItem']}><a href="/books">Книги</a></div>
            <div className={globalStyle['navItem']}><a href="/clients">Сотрудники</a></div>
            <div className={globalStyle['navItem']}><a href="/employees">Клиенты</a></div>
        </div>
    </div>
  )
}

export default Nav