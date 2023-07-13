import Header from './component/Header/Header.js';
import MainBanner from './component/MainBanner/MainBanner.js';
import Info from './component/Info/Info.js';
import HomeFunishingIdeas from './component/HomeFunishingIdeas/HomeFunishingIdeas.js';
import EventBanner from './component/EventBanner/EventBanner.js';
function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <Info say='hello'/>
      <HomeFunishingIdeas />
      <EventBanner />
    </>
  );
}

export default App;
