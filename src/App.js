import logo from './logo.svg';
import './App.css';
import WarningBanner from './Components/WarningBanner'
import Logo from './Components/Logo'
import BlueBanner from './Components/BlueBanner'
import Description from './Components/Description'
import Deck from './Components/Deck'
import AppBanner from './Components/AppBanner'
import DeckB from './Components/DeckB'
import Location from './Components/Location'
import Footer from './Components/footer'


function App() {
  return (
    <div>
      <WarningBanner />
      <BlueBanner/>
      <Description />
      <Deck />
      <AppBanner />
      <DeckB />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
