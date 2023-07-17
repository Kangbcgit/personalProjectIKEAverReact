import React, { Component, useEffect} from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  useEffect(() => {}, []);

    const { Inner, wrapLogo, wrapSideIcons, wrapGnb, subMenu } = styles;
    return(
    <header>
      <div className={`${Inner} inner`}>
        <div className={wrapLogo}>
          <img src="img/icon/logoWhite.svg" alt="logoImage" />
        </div>
        <div className={wrapGnb}>
          <a href="#">모든 제품</a>
          <a href="#">공간별 쇼핑하기</a>
          <a href="#">홈 액세서리</a>
          <a href="#">서비스</a>
          <a href="#">혜택</a>
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