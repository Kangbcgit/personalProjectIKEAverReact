import React, { Component } from 'react'
import styles from './Footer.module.scss'

export default class Footer extends Component {
  render() {
    return (
    <footer>
      <div class={styles.wrapper}>
        <div class={styles.first}>
          <div class={`${styles.firstTop} ${styles.firstFloor}`}>
            &copy;Inter IKEA Systems B.V 1999-2023
          </div>
          <div class={styles.firstBottom}>
            IKEA 코리아주소 : (우) 14352 경기도 광명시 일직로 17 IKEA광명점<br />
            사업자 등록번호 : 106-86-82871 <a href="#none">사업자정보확인</a><br />
            대표자 : 프레드릭 요한손 TEL : 1670-w4532<br />
            통신판매업 신고 : 2018-경기광명-0209 
            <form action="#">
              <select name="languages" id="lang">
                <option value="korean" selected>한국어</option>
                <option value="english">English</option>
              </select>
            </form>
          </div>
        </div>
        <div class={styles.second}>
          <div class={`${styles.secondTop} ${styles.firstFloor}`}>
            <a href="#none">개인정보처리방침</a>
            <a href="#none">쿠키정책</a>
            <a href="#none">쿠키설정</a>
            <a href="#none">웹사이트 이용약관</a>
            <a href="#none">Responsible disclosure</a>
          </div>
          <div class={styles.secondBottom}>
            <div class={styles.ikeaFamily}>
              <a href='#' class={styles.title}>IKEA FAMILY</a>
              <div class={styles.desc}>
                지금 IKEA Family에 무료로 가입하고<br />
                다양한 멤버 전용 혜택을 누리세요.
              </div>
            </div>
            <div class={styles.ikeaBusiness}>
              <a href='#' class={styles.title}>IKEA Business Network</a>
              <div class={styles.desc}>
                여러분의 더 나은 비즈니스 환경을 위한<br />
                다양한 혜택들을 받으세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
