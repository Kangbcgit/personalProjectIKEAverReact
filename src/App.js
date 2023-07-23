import Header from './component/Header/Header.jsx';
import Info from './component/Info/Info.jsx';
import MainBanner from './component/MainBanner/MainBanner.jsx';
import HomeFunishingIdeas from './component/HomeFunishingIdeas/HomeFunishingIdeas.jsx';
import EventBanner from './component/EventBanner/EventBanner.jsx';
import StoreLocation from './component/StoreLocation/StoreLocation.jsx';
import Footer from './component/Footer/Footer.jsx';
import { Component } from 'react';
class App extends Component {
  
  render () {
    return (
      <>
        <Header />
        <MainBanner />
        <Info />
        <HomeFunishingIdeas />
        <EventBanner />
        <StoreLocation />
        <Footer />
      </>
    );
  }
}

export default App;
