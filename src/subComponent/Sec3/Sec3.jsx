import React, { Component } from 'react'
import styles from './Sec3.module.scss'

export default class Sec3 extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.wrapText}>
            <h3>이웃의 아이디어를 확인하세요.</h3>
            <p>
              이웃의 홈퍼니싱 아이디어를 구경하고 소통해 보세요.
            </p>
            <div className={styles.button}>
            탐색
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapBox}>
            <div className={styles.box5}></div>
            <div className={styles.box4}></div>
            <div className={styles.box3}></div>
            <div className={styles.box2}></div>
            <div className={styles.box1}></div>
          </div>
        </div>
      </div>
    );
  }
}
