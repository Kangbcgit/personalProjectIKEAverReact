import React from 'react'
import styles from './MainBanner.module.css'

const MainBanner = () => {
  return (
    <section className={styles.MainBanner}>
      <div className={styles.WrapBanner}>
        <div className={styles.WrapBackgroundContent}>
          <img src="img/main_banner_1.jpg" />
          <video src="vid/Nytillverkad_launch_30s_16x9.mp4" autoPlay loop muted></video>
        </div>
        <div className={styles.WrapText}>
          IKEA furniture
        </div>
      </div>
    </section>
  )
}

export default MainBanner