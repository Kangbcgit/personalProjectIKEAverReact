import React, { Component } from 'react'
import styles from './EventBanner.module.scss'

export default class EventBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgNum: 1,
      textData: {
        text1: {
          h3: '우리 집의 주인공은 바로 나',
          p: '고정관념은 버리고 내가 생각하는 아름다움을 표현해 보세요. 감각적인 디자인, 다양한 수납 솔루션, 다채로운 색상의 텍스타일 그리고 대담한 콤비네이션에서 아이디어를 얻어보세요. 나만의 스타일로 우리 집을 꾸며봐요!'
        },
        text2: {
          h3: '전기세 걱정 없이 온종일 시원하게',
          p: '하루종일 습하고 더운 요즘, 체감온도를 낮춰주는 IKEA 쿨링 제품으로 에너지도 절약하고 환경 보호에도 동참해 보세요.'
        },
        text3: {
          h3: '비즈니스 인테리어 디자인 서비스 할인 혜택',
          p: '7월 4일부터 21일까지, 비즈니스 인테리어 디자인 서비스 구매 후 500만원 이상 구매 시 총 구매 금액의 5%를 할인해드려요!'
        },
        text4: {
          h3: '매주 목요일 오후 2시, IKEA Live!',
          p: '매주 다른 주제의 IKEA Live를 통해 다양한 홈퍼니싱 아이디어를 알아보고 마응메 드는 제품을 쇼핑하세요. 라이브 중 공개되는 🎁스페셜 할인 쿠폰🎁의 기회도 놓치지 마세요!'
        }
      },
      pause: false,
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.areaChanger, 2750);
  }
  areaChanger = () => {
    this.setState({imgNum: this.state.imgNum >= 4 ? 1 : this.state.imgNum + 1});
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  srcCommonImg = () => {
    return `./img/banner/event_banner${this.state.imgNum}.jpg`;
  };

  progressChanger = () => {
    return `${100 * 0.25 * this.state.imgNum}%`;
  };
  pauseControll =  () => {
    const { pause } = this.state;
    this.setState({ pause: !pause }); 
    if (!this.state.pause) {
      this.slidePause();
    } else {
      this.slideStart();
    }
  };

  slidePause = () => {
    clearInterval(this.slideInterval);
  };

  slideStart = () => {
    this.slideInterval = setInterval(this.areaChanger, 2750);
  };


  render() {
    return (
      <section className={styles.eventBanner}>
      <div className={styles.wrapper}>
        <a href="#none" className={styles.background}>
          <img src={this.srcCommonImg()} alt="" />
        </a>
        <div className={styles.wrapText}>
          <h3>{this.state.textData[`text${this.state.imgNum}`].h3}</h3>
          <p>{this.state.textData[`text${this.state.imgNum}`].p}</p>
        </div>
        <div className={styles.wrapProgressBar}>
          <div className={styles.progressBackground}>
            <div className={styles.currentProgress} style={{width: this.progressChanger()}}></div>
          </div>
          <div className={styles.wrapPauseButton} onClick={() => this.pauseControll()}>
            <img src={`${!this.state.pause ? './img/icon/pause.svg' : './img/icon/play.svg'}`} alt="pause icon" />
          </div>
        </div>
        <div className={styles.wrapImg}>
          <img src={this.srcCommonImg()} alt="eventImg" />
        </div>
        <div className={`${styles.prevButton} ${styles.button}`} onClick={e => this.areaChanger()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="black" fill-opacity="0.32" />
            <path d="M35 15L19 30.5L35 46L41 40.1875L31 30.5L41 20.8125L35 15Z" fill="white" fill-opacity="0.65" />
          </svg>
        </div>
        <div className={`${styles.nextButton} ${styles.button}`} onClick={e => this.areaChanger()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="black" fill-opacity="0.32" />
            <path d="M25 15L19 20.8125L29 30.5L19 40.1875L25 46L41 30.5L25 15Z" fill="white" fill-opacity="0.79" />
          </svg>
        </div>
      </div>
  </section>
    )
  }
}
