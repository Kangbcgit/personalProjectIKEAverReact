import React from 'react';
import styles from './StoreLocation.module.css';

const StoreLocation = () => {
  return (
    <div className={styles.StoreLocation}>
      <div className={styles.wrapper}>
        <h3>IKEA Location</h3>
        <div className={styles.wrapItems}>
          <div className={styles.item}>
            <img src="./img/store/dongBusan.jpg" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./img/store/giheung.jpg" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./img/store/goyang.jpg" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./img/store/wangmyeong.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation