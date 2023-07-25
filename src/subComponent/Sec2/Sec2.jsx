import React, { Component } from 'react'
import styles from './Sec2.module.scss'

export default class Sec2 extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.wrapBox}>
            <div className={styles.box4}></div>
            <div className={styles.box3}></div>
            <div className={styles.box2}></div>
            <div className={styles.box1}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapText}>
            <h3>아이디어 검색</h3>
            <p>
              집이 어떤 분위기면 좋겠나요?  '북유럽 인테리어로 꾸미기'와 같이
              관심 있는 내용을 검색하고 결과를
              확인해 보세요.
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
