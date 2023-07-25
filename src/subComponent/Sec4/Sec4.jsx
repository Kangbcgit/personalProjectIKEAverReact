import React, { Component } from 'react'
import styles from './Sec4.module.scss'

export default class Sec4 extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.wrapImg}>
            <img src="./img/subPage/subImg1.jpg" alt="family photo" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapText}>
            <h3>구매하고, 조립하고, 배치하고, 공유하세요.</h3>
            <p>
              가족과 함께 하는 시간을 아름답게 꾸미고 공유하세요.
            </p>
            <div className={styles.button}>
            탐색
            </div>
          </div>
        </div>
      </div>
    )
  }
}
