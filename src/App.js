import './App.css';
import WarningBanner from './Components/WarningBanner'
import PageOne from './Components/Pages/PageOne'
import Footer from './Components/footer'
import {BrowserRouter as Router,Route,
  Redirect,Switch, Link} from 'react-router-dom';
import Medicare from './Components/Pages/MedicarePage'
import Navbar from './Components/Navbar'

/** App.js
 * 
 * Provides entry point for all of the components
 * and orders each element on the page
 */



function App() {
  return (
    <div>
      <a href='/medicare' className='noUnderline'><WarningBanner /></a>
      <Navbar />
      <Router>
          <Switch>
            <Route exact path="/"><PageOne /></Route>
            <Route path="/Medicare"><Medicare /></Route>
            <Redirect from='/zikam-neighborhood-pharmacy' to='/' />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
