import React, { Component } from 'react'
import styles from './StoreLocation.module.scss'

export default class StoreLocation extends Component {
  render() {
    return (
      <section class={styles.storeLocation}>
        <div class={styles.wrapper}>
          <h3>IKEA Location</h3>
          <div class={styles.wrapItems}>
            <a href="#none" class={styles.item}>
              <img src="./img/store/dongBusan.jpg" alt="" />
            </a>
            <a href="#none" class={styles.item}>
              <img src="./img/store/giheung.jpg" alt="" />
            </a>
            <a href="#none" class={styles.item}>
              <img src="./img/store/goyang.jpg" alt="" />
            </a>
            <a href="#none" class={styles.item}>
              <img src="./img/store/wangmyeong.jpg" alt="" />
            </a>
          </div>
        </div>
      </section>
    )
  }
}
