import React from 'react';
import styles from './BestCategori.module.css';

const BestCategori = () => {
  return (
    <div className={styles.BestCategori}>
      <div className={styles.wrapper}>
        <h2>Best Categori</h2>
        <div className={styles.wrapCategoris}>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/bedRoom.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>침실</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/storageFurniture.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>수납</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/homeOffice.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>홈 오피스</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/dining.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>다이닝</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/livingRoom.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>거실</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/kitchen.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>주방</h3>
            </div>
          </a>
          <a href="#none"className={styles.categori}>
            <img src="./img/categori/homeDecor.jpg" alt="" />
            <div className={styles.textWrap}>
              <h3>홈데코</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BestCategori