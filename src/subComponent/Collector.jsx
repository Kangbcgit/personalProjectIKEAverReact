import React, { Component } from "react";
import Header from "../component/Header/Header";
import Sec1 from "./Sec1/Sec1";
import Sec2 from "./Sec2/Sec2";
import Sec3 from "./Sec3/Sec3";
import Sec4 from "./Sec4/Sec4";
import Footer from "../component/Footer/Footer";
import styles from "./Collector.module.scss";
import { throttle } from "lodash";

export default class Collector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentY: 0,
    };

    // 쓰로틀링된 이벤트 핸들러 생성
    this.throttledTransformPages = throttle(this.transformPages, 1000, {
      trailing: false,
    });
    // trailing: false로 설정하면 타이머가 끝난 후 마지막 호출을 무시
  }

  componentDidMount() {
    window.addEventListener("wheel", this.throttledTransformPages);
    window.addEventListener("touchstart", this.transformPages);
    window.addEventListener("touchmove", this.transformPages);
    window.addEventListener("touchend", this.transformPages);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.throttledTransformPages);
    window.removeEventListener("touchstart", this.transformPages);
    window.removeEventListener("touchmove", this.transformPages);
    window.removeEventListener("touchend", this.transformPages);
  }

  transformPages = (e) => {
    let subMenu = document.querySelector(
      `.${styles.subMenu}`
    ).firstElementChild;
    if (e.deltaY > 0 && this.state.currentY >= -200) {
      this.minusCurrentY();
    } else if (e.deltaY < 0 && this.state.currentY <= -100) {
      this.plusCurrentY();
    }
  };
  minusCurrentY = () => {
    this.setState((prevState) => ({ currentY: prevState.currentY - 100 }));
  };
  plusCurrentY = () => {
    this.setState((prevState) => ({ currentY: prevState.currentY + 100 }));
  };

  componentDidUpdate(prevProps, prevState) {
    let subMenu = document.querySelector(
      `.${styles.subMenu}`
    ).firstElementChild;
    if (prevState.currentY !== this.state.currentY) {
      subMenu.style.cssText = `transform: translateY(${this.state.currentY}vh)`;
    }
  }

  render() {
    return (
      <div className={styles.subMenu}>
        <div className={styles.wrap}>
          <Header sub={true} />
          <Sec1 minusCurrentY={this.minusCurrentY} />
          <Sec2 parent={this.state.currentY} />
          <Sec3 parent={this.state.currentY} />
          <Sec4 parent={this.state.currentY} />
          <Footer />
        </div>
      </div>
    );
  }
}
