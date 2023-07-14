import React from 'react';
import styles from './EventBanner.module.css';

const EventBanner = () => {
  return (
    <>
      <div className={styles.EventBanner}>
        <div className={styles.background}></div>
        {/* text */}
        <div className={styles.wrapText}>
          <h3>우리 집의 주인공은 바로 나</h3>
          <p>고정관념은 버리고 내가 생각하는 아름다움을 표현해 보세요. 감각적인 디자인, 다양한 수납 솔루션, 다채로운 색상의 텍스타일 그리고 대담한 콤비네이션에서 아이디어를 얻어보세요. 나만의 스타일로 우리 집을 꾸며봐요! </p>
        </div>
        {/* progress bar */}
        <div className={styles.wrapProgressBar}>
          <div className={styles.progressBackground}>
            <div className={styles.currentProgress}></div>
          </div>
          <div className={styles.wrapPauseButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" fill="black" fill-opacity="0.6"/>
              <path d="M8 8V33H16.3333V8H8ZM24.6667 8V33H33V8H24.6667Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </div>
        </div>
        {/* img */}
        <div className={styles.wrapImg}>
        {/* 이미지 동적 할당 되어야 하는 부분 / 허나 일단 고정 props 로 받아올예정 */}
          <img src="./img/banner/event_banner1.jpg" alt="eventImg" />
        </div>
        <div className={`${styles.prevButton} ${styles.button}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="black" fill-opacity="0.32"/>
            <path d="M35 15L19 30.5L35 46L41 40.1875L31 30.5L41 20.8125L35 15Z" fill="white" fill-opacity="0.65"/>
          </svg>
        </div>
        <div className={`${styles.nextButton} ${styles.button}`}>
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