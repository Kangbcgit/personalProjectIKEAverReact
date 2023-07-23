import React, { Component } from 'react';
import styles from './MainBanner.module.scss';

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      videoStatus: false,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      // 예시로 count 값을 1씩 증가
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 3000); // 1초마다 실행되도록 설정
    window.addEventListener('scroll', this.videoHandle);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    window.removeEventListener('scroll', this.videoHandle);
  }
  componentDidUpdate(prevProps, prevState) {
    // count 값이 4일 경우 1로 돌아가도록 설정합니다.
    if (this.state.count > 4) {
      this.setState({ count: 1 });
    }
  }

  videoHandle = () => {
    let scrollY = window.scrollY;
    let info = document.querySelector('.info');
    let infoTop = info.getBoundingClientRect().top;
    if (infoTop <= 0) {
      this.setState({videoStatus: true});
    } else {
      this.setState({videoStatus: false});
    }
  }

  render() {
    return (
      <section className={styles.mainBanner}>
        <div className={styles.wrapBanner}>
          <div className={styles.wrapBackgroundContent}>
            <img src={`img/main_banner_${this.state.count}.jpg`} />
            <video src="vid/Nytillverkad_launch_30s_16x9.mp4" autoPlay loop muted className={`${this.state.videoStatus ? styles.active : ''}`}></video>
          </div>
          <div className={styles.wrapText}>
            IKEA furniture
          </div>
        </div>
      </section>
    ) 
  }
}
export default MainBanner