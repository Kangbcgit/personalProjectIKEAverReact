import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header.jsx';
import Info from './component/Info/Info.jsx';
import MainBanner from './component/MainBanner/MainBanner.jsx';
import HomeFunishingIdeas from './component/HomeFunishingIdeas/HomeFunishingIdeas.jsx';
import EventBanner from './component/EventBanner/EventBanner.jsx';
import StoreLocation from './component/StoreLocation/StoreLocation.jsx';
import Footer from './component/Footer/Footer.jsx';
import { Component } from 'react';
import Collector from './subComponent/Collector.jsx';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollLock: true,
      currentScrollY: 0,
    };
  }

  // componentDidMount () {
  //   window.addEventListener('wheel', this.scrollLock, { passive : false })
  // }
  // componentWillUnmount () {
  //   window.removeEventListener('wheel', this.scrollLock, { passive : false })
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.currentScrollY !== this.state.currentScrollY) {

  //   }
  // }
  
  // scrollLock = (e) => {
  //   if (this.state.scrollLock == true) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     if (e.deltaY > 0) {
  //       this.calcCurruntY(true)
  //     } else if (e.deltaY < 0) {
  //       this.calcCurruntY(false)
  //     }
  //   }
  // }
  // calcCurruntY = (boolean) => {
  //   if(boolean) {
  //     this.setState(prevState => 
  //       ({currentScrollY: prevState.currentScrollY + 100})
  //     );
  //       console.log(this.state.currentScrollY);
  //   } else {
  //     this.setState(prevState => 
  //       ({currentScrollY: prevState.currentScrollY - 100})
  //     );
  //   }
  // }
  
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <MainBanner />
              <Info />
              <HomeFunishingIdeas />
              <EventBanner />
              <StoreLocation />
              <Footer />
            </>
          }>
          </Route>
          <Route path='/sub' element={<Collector />}>
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
