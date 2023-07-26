import React, { Component } from 'react';
import styles from './Sec1.module.scss'
import Sec1Rows from './Sec1Rows';

export default class Sec1 extends Component {

  constructor(props) {
    super(props);
    const { first, second, third, fourth, fifth, sixth, seventh } = styles;
    this.state = {
      order: [
        first, second, third, fourth, fifth, sixth, seventh
      ]
    }
  }
  

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.bottomBar}>
            <span>
              형식은 다음과 같습니다 <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
          <div className={styles.bgGrid}>
              {this.state.order.map((item, index) => (
                <Sec1Rows order={item}
                src1={`./img/subPage/subMain${2 * index + 1}.jpg`}
                src2={`./img/subPage/subMain${2 * index + 2}.jpg`}
                 />
              ))}
          </div>
          <div className={styles.wrapText}>
            <h1>
              다음
              <br />
              <span>홈 인테리어 아이디어를 찾아보세요</span>
            </h1>
          </div>
          <div className={styles.downAngle} onClick={this.props.minusCurrentY}><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        </div>
      </>
    )
  }
}
