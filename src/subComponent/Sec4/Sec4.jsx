import React, { Component } from "react";
import styles from "./Sec4.module.scss";

export default class Sec4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniSec4: false,
    };
  }
  componentDidMount() {
    window.addEventListener("wheel", this.setAni);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.setAni);
  }

  setAni = () => {
    if (this.props.parent <= -200) {
      this.setState({ aniSec4: true });
    }
  };
  render() {
    return (
      <div
        className={`${styles.wrapper} ${
          this.state.aniSec4 ? styles.active : ""
        }`}
      >
        <div className={styles.left}>
          <div className={styles.wrapImg}>
            <img src="./img/subPage/subMain.jpg" alt="familyphoto" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapText}>
            <h3>구매하고, 조립하고, 배치하고, 공유하세요.</h3>
            <p>가족과 함께 하는 시간을 아름답게 꾸미고 공유하세요.</p>
            <div className={styles.button}>탐색</div>
          </div>
        </div>
      </div>
    );
  }
}
