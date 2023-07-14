import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={`${styles.Inner} inner`}>
        <div className='wrap-logo'>
          <img src="img/icon/logo_reverse.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header