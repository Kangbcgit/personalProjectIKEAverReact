import Header from './component/Header/Header.jsx';
import MainBanner from './component/MainBanner/MainBanner.jsx';
import Info from './component/Info/Info.jsx';
import HomeFunishingIdeas from './component/HomeFunishingIdeas/HomeFunishingIdeas.jsx';
import EventBanner from './component/EventBanner/EventBanner.jsx';
import BestCategori from './component/BestCategori/BestCategori.jsx';
import StoreLocation from './component/StoreLocation/StoreLocation.jsx';
import Footer from './component/Footer/Footer.jsx';
import { Component } from 'react';
import { useState } from 'react';
const App = () => {
  const [subStatus, setSubStatus] = useState(false);

  return (
    <>
      <Header subStatus={subStatus} setSubStatus={setSubStatus} />
      <MainBanner />
      <Info say='hello'/>
      <HomeFunishingIdeas />
      <EventBanner />
      <BestCategori />
      <StoreLocation />
      <Footer />
    </>
  );
}

export default App;
