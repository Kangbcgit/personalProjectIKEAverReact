import { Component } from 'react';
import styles from './Header.module.scss'

class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isHeaderActive: false,
      isHeaderHide: false,
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.handleHide);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleHide);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 90) {
      this.headerOn();
    } else {
      this.headerOff();
    }
  };

  handleHide = (e) => {
    let scrollY = window.scrollY,
        deltaY = e.deltaY;
    if (scrollY >= 30 && deltaY > 0) {
      this.headerHide();
    } else {
      this.headerUnHide();
    }
  };
  
  headerOn = () => {
    this.setState({ isHeaderActive: true });
  };

  headerOff = () => {
    if (!(window.scrollY >= 90)) {
      this.setState({ isHeaderActive: false });
    }
  };

  headerHide = () => {
    this.setState({ isHeaderHide: true });
  };

  headerUnHide = () => {
    this.setState({ isHeaderHide: false });
  };

  
  dropDown = (e) => {
    e.currentTarget.classList.add(styles.active);
  }
  dropDownReverse = (e) => {
    e.currentTarget.classList.remove(styles.active);
  }

  render () {
    return (
      <header className={`${this.state.isHeaderActive ? styles.active : ''} ${this.state.isHeaderHide ? styles.hide : styles.unHide}`} onMouseOver={e => this.headerOn()} onMouseLeave={e => this.headerOff()}>
        <div className={styles.headerInner}>
          <div className={styles.burger} onClick={e => e.currentTarget.classList.toggle(styles.active)}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className={styles.wrapGnb}>
            <div className={styles.first} onMouseOver={e => this.dropDown(e)} onMouseLeave={e => this.dropDownReverse(e) }>
              <a href="#none">모든 제품</a>
              <div className={styles.subMenu}>
                <a href="#none">신제품</a>
                <a href="#none">베스트셀러</a>
                <a href="#none">카테고리별 제품 보기</a>
                <a href="#none">할인 중</a>
                <a href="#none">테마별 제품 보기</a>
                <a href="#none">지속가능한 제품 보기</a>
              </div>
            </div>
            <div className={styles.second} onMouseOver={e => this.dropDown(e)} onMouseLeave={e => this.dropDownReverse(e) }>
              <a href="#none">공간별 쇼핑하기</a>
              <div className={styles.subMenu}>
                <a href="#none">침실</a>
                <a href="#none">거실</a>
                <a href="#none">주방</a>
                <a href="#none">홈오피스</a>
                <a href="#none">다이닝</a>
                <a href="#none">욕실</a>
                <a href="#none">현관</a>
                <a href="#none">세탁실</a>
                <a href="#none">야외공간</a>
              </div>
            </div>
            <div className={styles.third}>
              <a href="#none">혜택</a>
            </div>
            <a href="#none">홈 액세서리</a>
            <a href="#none">서비스</a>
          </div>
          <a href="index.html" className={styles.wrapLogo}>
            IKEA
          </a>
          <div className={styles.wrapSideIcons}>
            <form className={styles.search} action="">
              <input type="text" placeholder="검색어를 입력하세요!" />
            </form>
            <a href="#none">
              <img src={`${!this.state.isHeaderActive ? `img/icon/icon1.svg` : `img/icon/icon1rv.svg`}`} alt="" />
            </a>
            <a href="#none">
              <img src={`${!this.state.isHeaderActive ? `img/icon/icon2.svg` : `img/icon/icon2rv.svg`}`} alt="" />
            </a>
            <a href="#none">
              <img src={`${!this.state.isHeaderActive ? `img/icon/icon3.svg` : `img/icon/icon3rv.svg`}`} alt="" />
            </a>
            <a href="#none">
              <img src={`${!this.state.isHeaderActive ? `img/icon/icon4.svg` : `img/icon/icon4rv.svg`}`} alt="" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header