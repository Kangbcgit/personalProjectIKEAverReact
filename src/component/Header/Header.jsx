import React, { Component, useEffect} from 'react';
import styles from './Header.module.css';
import { useRef } from 'react';

const Gnb = (props) => {
  let eTarget = useRef();
  const { title } = props;
  return (
    <a href="#" ref={eTarget}>{title}</a>
  )
}

const Header = (props) => {
  const { subStatus, setSubStatus } = props;
  function subMenuOn () {
    // setSubStatus(true);
    console.log(subStatus);
  }
    const { Inner, wrapLogo, wrapSideIcons, wrapGnb, subMenu } = styles;
    return(
    <header>
      <div className={`${Inner} inner`}>
        <div className={wrapLogo}>
          <img src="img/icon/logoWhite.svg" alt="logoImage" />
        </div>
        <div onMouseEnter={() => subMenuOn()} className={`${wrapGnb} ${subStatus == true ? 'active' : null}`} >
          <Gnb title='모든 제품'/>
          <Gnb title='공간별 쇼핑하기'/>
          <Gnb title='홈 액세서리'/>
          <Gnb title='서비스'/>
          <Gnb title='혜택'/>
          <div className={subMenu} >
            <div>
              <div className="first">
                <a href="#none">신제품</a>
                <a href="#none">베스트셀러</a>
                <a href="#none">할인 중</a>
                <a href="#none">테마별 제품 보기</a>
                <a href="#none">지속가능한 제품 보기</a>
              </div>
              <div className="second">
              </div>
            </div>
          </div>
        </div>
        <div className={wrapSideIcons}>
          <a href="#">
            <img src="./img/icon/searchWhite.svg" alt="" />
          </a>
          <a href="#">
            <img src="./img/icon/userWhite.svg" alt="" />
          </a>
          <a href="#">
            <img src="./img/icon/basketWhite.svg" alt="" />
          </a>
          <a href="#">
            <img src="./img/icon/heartWhite.svg" alt="" />
          </a>
        </div>
      </div>
      {/* <div className={subMenu}>
        <div>
          <a href="#">신제품</a>
          <a href="#">베스트셀러</a>
          <a href="#">할인 중</a>
          <a href="#">테마별 제품 보기</a>
          <a href="#">지속가능한 제 품 보기</a>
        </div>
      </div> */}
    </header>
    )
}

export default Header