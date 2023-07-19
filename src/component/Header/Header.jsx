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
    setSubStatus(true);
  }
  function subMenuOff () {
    setSubStatus(false);
  }
    const { Inner, wrapLogo, wrapSideIcons, wrapGnb, subMenu, active } = styles;
    return(
    <header>
      <div className={`${Inner} inner`}>
        <div className={wrapLogo}>
          <img src="img/icon/logoWhite.svg" alt="logoImage" />
        </div>
        <div onMouseOver={() => subMenuOn()} onMouseLeave={() => subMenuOff()} className={wrapGnb} >
          <Gnb title='모든 제품'/>
          <Gnb title='공간별 쇼핑하기'/>
          <Gnb title='홈 액세서리'/>
          <Gnb title='서비스'/>
          <Gnb title='혜택'/>
          <div className={`${subMenu} ${subStatus == true ? 
          active : ''}`} onMouseOver={() => subMenuOn()} onMouseLeave={() => subMenuOff()}>
            <div className="first">
              <a href="#none">신제품</a>
              <a href="#none">베스트셀러</a>
              <a href="#none">할인 중</a>
              <a href="#none">테마별 제품 보기</a>
              <a href="#none">지속가능한 제품 보기</a>
            </div>
            <div className="second">
              <a href="#none">침실</a>
              <a href="#none">거실</a>
              <a href="#none">주방</a>
              <a href="#none">홈오피스</a>
              <a href="#none">욕실</a>
              <a href="#none">다이닝</a>
              <a href="#none">현관</a>
              <a href="#none">베란다/야외공간</a>
              <a href="#none">세탁실</a>
              <a href="#none">어린이 IKEA</a>
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