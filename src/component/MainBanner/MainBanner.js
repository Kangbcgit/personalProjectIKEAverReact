import React from 'react'
import styles from './MainBanner.module.css'

const MainBanner = () => {
  return (
    <section class={styles.MainBanner}>
      <div class={styles.WrapBanner}>
        <div class={styles.WrapBackgroundContent}>
          <img src="img/main_banner_1.jpg" />
          <video src="vid/Nytillverkad_launch_30s_16x9.mp4" autoplay loop muted></video>
        </div>
        <div class={styles.WrapText}>
          IKEA furniture
        </div>
      </div>
    </section>
  )
}

export default MainBanner