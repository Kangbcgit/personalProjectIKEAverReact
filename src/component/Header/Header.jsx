import { Component } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isHeaderActive: false,
      isHeaderHide: false,
      isBurgerActive: false,
      currentAccordion: false,
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.handleHide);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleHide);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    if (this.props.sub === true) {
      this.headerOn();
      return;
    }
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
    if (this.props.sub !== true) {
      if (!(window.scrollY >= 90)) {
        this.setState({ isHeaderActive: false });
      }
    }
  };
  /* 
    click 이벤트 로 handler 함수 발동
    hanlder함수는 this.state.currentAtag 의 값을 현재 누른 녀석으로 바꿈.
  */

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

  burgerActive = (e) => {
    e.currentTarget.classList.toggle(styles.active);
    if(e.currentTarget.classList.contains(styles.active)) {
      this.setState({isBurgerActive: true});
    } else {
      this.setState({isBurgerActive: false});
    }
  }
  accordionHandler = (e) => {
    if(this.state.currentAccordion == e.currentTarget) {
      this.setState({currentAccordion: false});
    } else {
      
    }
  }

  render () {
    return (
      <header className={`${this.state.isHeaderActive ? styles.active : ''} ${this.state.isHeaderHide && !this.state.isBurgerActive ? styles.hide : styles.unHide}`} onMouseOver={e => this.headerOn()} onMouseLeave={e => this.headerOff()}>
        <div className={styles.headerInner}>
          <div className={styles.responsive}>
            <div className={styles.burger} onClick={this.burgerActive}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className={styles.burgerMenu}>
                <a href="#none" className='title' onClick={this.accordionHandler}>모든 제품</a>
                <div className={styles.accordion}>
                  <a href="#none">신제품</a>
                  <a href="#none">베스트셀러</a>
                  <a href="#none">카테고리별 제품 보기</a>
                  <a href="#none">할인 중</a>
                  <a href="#none">테마별 제품 보기</a>
                  <a href="#none">지속가능한 제품 보기</a>
                </div>
                <a href="#none" className='title'>공간별 쇼핑하기</a>
                <div className={styles.accordion}>
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
                <a href="#none">혜택</a>
                <div className={styles.accordion}>
                  
                </div>
                <a href="#none">홈 액세서리</a>
                <div className={styles.accordion}>
                  
                </div>
                <Link to='./sub'>아이디어</Link>
                <div className={styles.accordion}>
                  
                </div>
            </div>
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
              <Link to='./sub'>아이디어</Link>
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