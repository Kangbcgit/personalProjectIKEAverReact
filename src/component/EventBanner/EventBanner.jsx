import React, { useState } from 'react';
import styles from './EventBanner.module.css';

const EventBanner = () => {
  const [imgNum, NumCalc] = useState(1),
        srcCommonImg = `./img/banner/event_banner${imgNum}.jpg`,
        dummy = `${100 *(0.25 * imgNum)}%`
  const [currentProgress, setCurrentProgress] = useState(`${100 *(0.25)}%`);
  /** prev,next 버튼을 누를 시 boolean == true ? right : left*/
  function areaChanger (action) {

  // 1. 배경 이미지 변경 ,이미지 박스 이미지 변경
    srcChanger(action);
    console.log(imgNum)
  // 3. textWrap 안의 p, h2 변경
    // textChanger();
  // 4. progressbar 진행도 변경
    progressChanger();
  }
  /** src를 변경하라고 order를 내리는 함수 imgNumAdd,imgNumMinus 호출 */
  function srcChanger(action) {
    if (action) {
      imgNumAdd();
    } else {
      imgNumMinus();
    }
  }
  /** srcChanger에 의해 호출되어 최대값 판별후 imgNum을 NumCalc메소드로 바꿔주는 함수*/
  function imgNumMinus () {
    if (imgNum <= 1) {
      NumCalc(4);
    } else {
      NumCalc(imgNum + 1);
    }
  }
  /** srcChanger에 의해 호출되어 최솟값 판별후 imgNum을 NumCalc메소드로 바꿔주는 함수*/
  function imgNumAdd () {
    if (imgNum >= 4) {
      NumCalc(1);
    } else {
      NumCalc(imgNum + 1);
    }
  }
  function progressChanger() {
    setCurrentProgress(`${100 *(0.25 * (imgNum))}%`);
  }
  /** 자동 슬라이드 중지 */
  function slidePause () {
  }
  /** 자동 슬라이드 시작 */
  function slideStart () {
    setInterval(areaChanger(true), 300);
  }

  return (
    <>
      <div className={styles.EventBanner}>
        <div className={styles.background}>
          <img src={srcCommonImg} alt="backgroundBlurImg" />
        </div>
        {/* text */}
        <div className={styles.wrapText}>
          <h3>우리 집의 주인공은 바로 나</h3>
          <p>고정관념은 버리고 내가 생각하는 아름다움을 표현해 보세요. 감각적인 디자인, 다양한 수납 솔루션, 다채로운 색상의 텍스타일 그리고 대담한 콤비네이션에서 아이디어를 얻어보세요. 나만의 스타일로 우리 집을 꾸며봐요! </p>
        </div>
        {/* progress bar */}
        <div className={styles.wrapProgressBar}>
          <div className={styles.progressBackground}>
            <div className={styles.currentProgress} style={{width: currentProgress }}></div>
          </div>
          <div className={styles.wrapPauseButton} >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" fill="black" fill-opacity="0.6"/>
              <path d="M8 8V33H16.3333V8H8ZM24.6667 8V33H33V8H24.6667Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </div>
        </div>
        {/* img */}
        <div className={styles.wrapImg}>
        {/* 이미지 동적 할당 되어야 하는 부분 / 허나 일단 고정 props 로 받아올예정 */}
          <img src={srcCommonImg} alt="eventImg" />
        </div>
        <div className={`${styles.prevButton} ${styles.button}`} onClick={() => areaChanger(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="black" fill-opacity="0.32"/>
            <path d="M35 15L19 30.5L35 46L41 40.1875L31 30.5L41 20.8125L35 15Z" fill="white" fill-opacity="0.65"/>
          </svg>
        </div>
        <div className={`${styles.nextButton} ${styles.button}`} onClick={() => areaChanger(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="black" fill-opacity="0.32"/>
            <path d="M25 15L19 20.8125L29 30.5L19 40.1875L25 46L41 30.5L25 15Z" fill="white" fill-opacity="0.79"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default EventBanner