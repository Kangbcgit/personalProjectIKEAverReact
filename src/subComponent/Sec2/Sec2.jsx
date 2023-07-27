import React, { Component } from "react";
import styles from "./Sec2.module.scss";

export default class Sec2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniSec2: false,
    };
  }

  componentDidMount() {
    window.addEventListener("wheel", this.setAni);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.setAni);
  }

  setAni = () => {
    if (this.props.parent <= 0) {
      this.setState({ aniSec2: true });
    }
  };
  render() {
    return (
      <div
        className={`${styles.wrapper} ${
          this.state.aniSec2 ? styles.active : ""
        }`}
      >
        <div className={styles.left}>
          <div className={styles.wrapBox}>
            <div className={styles.box4}>
              <img src="./img/subPage/subMain1.jpg" alt="" />
            </div>
            <div className={styles.box3}>
              <img src="./img/subPage/subMain2.jpg" alt="" />
            </div>
            <div className={styles.box2}>
              <img src="./img/subPage/subMain3.jpg" alt="" />
            </div>
            <div className={styles.box1}>
              <img src="./img/subPage/subMain4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapText}>
            <h3>아이디어 검색</h3>
            <p>
              집이 어떤 분위기면 좋겠나요? '북유럽 인테리어로 꾸미기'와 같이
              관심 있는 내용을 검색하고 결과를 확인해 보세요.
            </p>
            <div className={styles.button}>탐색</div>
          </div>
        </div>
      </div>
    );
  }
}
