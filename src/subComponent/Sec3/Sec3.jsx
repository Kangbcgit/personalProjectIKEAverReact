import React, { Component } from "react";
import styles from "./Sec3.module.scss";

export default class Sec3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniSec3: false,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", this.setAni);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.setAni);
  }

  setAni = () => {
    if (this.props.parent <= -100) {
      this.setState({ aniSec3: true });
    }
  };
  render() {
    return (
      <div
        className={`${styles.wrapper} ${
          this.state.aniSec3 ? styles.active : ""
        }`}
      >
        <div className={styles.left}>
          <div className={styles.wrapText}>
            <h3>이웃의 아이디어를 확인하세요.</h3>
            <p>이웃의 홈퍼니싱 아이디어를 구경하고 소통해 보세요.</p>
            <div className={styles.button}>탐색</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapBox}>
            <div className={styles.box5}>
              <img src="./img/subPage/subMain5.jpg" alt="" />
            </div>
            <div className={styles.box4}>
              <img src="./img/subPage/subMain6.jpg" alt="" />
            </div>
            <div className={styles.box3}>
              <img src="./img/subPage/subMain7.jpg" alt="" />
            </div>
            <div className={styles.box2}>
              <img src="./img/subPage/subMain8.jpg" alt="" />
            </div>
            <div className={styles.box1}>
              <img src="./img/subPage/subMain9.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
