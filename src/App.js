import './App.css';
import WarningBanner from './Components/WarningBanner'
import PageOne from './Components/Pages/PageOne'
import Footer from './Components/footer'

/** App.js
 * 
 * Provides entry point for all of the components
 * and orders each element on the page
 */



function App() {
  return (
    <div>
      <WarningBanner />
      <PageOne />
      <Footer />
    </div>
  );
}

export default App;
