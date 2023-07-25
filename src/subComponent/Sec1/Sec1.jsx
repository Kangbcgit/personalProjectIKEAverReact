import React, { Component } from 'react';
import styles from './Sec1.module.scss'
import Sec1Rows from './Sec1Rows';

export default class Sec1 extends Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.bottomBar}>
            <span>
              형식은 다음과 같습니다 <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
          <div className={styles.bgGrid}>
            <div className={styles.first}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.second}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.third}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.fourth}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.fifth}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.sixth}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
            <div className={styles.seventh}>
              <Sec1Rows itemFirst={styles.itemFirst} itemSecond={styles.itemSecond} />
            </div>
          </div>
          <div className={styles.wrapText}>
            <h1>
              다음
              <br />
              <span>홈 인테리어 아이디어를 찾아보세요</span>
            </h1>
          </div>
          <div className={styles.downAngle}><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        </div>
      </>
    )
  }
}
