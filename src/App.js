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
