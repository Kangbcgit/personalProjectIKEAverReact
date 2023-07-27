import React, { Component } from "react";
import styles from "./Info.module.scss";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResize: false,
      currentInfoAni: false,
    };
  }

  componentDidMount() {
    this.innerCheck();
    window.addEventListener("resize", this.innerCheck);
    window.addEventListener("scroll", this.infoAni);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.innerCheck);
    window.addEventListener("scroll", this.infoAni);
  }

  innerCheck = () => {
    if (window.innerWidth <= 768) {
      this.setState({ isResize: true });
    } else {
      this.setState({ isResize: false });
    }
  };
  hardCoding = () => {
    let str = !this.state.isResize ? (
      <Dummy />
    ) : (
      `예산은 적지만 큰 꿈을 가진 사람들에게 좋은 내구성, 합리적인 가격을 갖춘 지속가능한 홈퍼니싱 솔루션을 제공하죠. IKEA는 세상에 관심이 많고, 사람들의 삶에 긍정적인 영향을 미치고자 합니다.`
    );

    return str;
  };

  infoAni = () => {
    let info = document.querySelector(`.${styles.info}`);
    console.log(info);
    let infoTop = info.getBoundingClientRect().top;
    if (
      infoTop + window.innerHeight >= 0 &&
      this.state.currentInfoAni == false
    ) {
      this.setState({ currentInfoAni: !this.state.currentInfoAni });
    }
  };

  render() {
    return (
      <section
        className={`${styles.info} info ${
          this.state.currentInfoAni ? styles.active : ""
        }`}
      >
        <div className={styles.wrapText}>
          <h2>IKEA의 비전</h2>
          <p>{this.hardCoding()}</p>
          <div className={styles.wrapButtons}>
            <a href="#none" className={`${styles.button} ${styles.first}`}>
              서비스
            </a>
            <a href="#none" className={`${styles.button} ${styles.second}`}>
              브랜드 소개
            </a>
            <a href="#none" className={`${styles.button} ${styles.third}`}>
              IKEA 역사
            </a>
          </div>
        </div>
      </section>
    );
  }
}
class Dummy extends Component {
  render() {
    return (
      <>
        예산은 적지만 큰 꿈을 가진 사람들에게 좋은 디자인과 우수한 성능,
        <br /> 내구성, 합리적인 가격을 갖춘 지속가능한 홈퍼니싱 솔루션을
        <br /> 제공하죠. IKEA는 세상에 관심이 많고, 사람들의 삶에
        <br /> 긍정적인 영향을 미치고자 합니다.
      </>
    );
  }
}

export default Info;
