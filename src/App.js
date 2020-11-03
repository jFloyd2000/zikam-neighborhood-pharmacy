import './App.css';
import WarningBanner from './Components/WarningBanner'
import Description from './Components/Description'
import AppBanner from './Components/AppBanner'
import Location from './Components/Location'
import Footer from './Components/footer'
import Navbar from './Components/Navbar'
import BasicOperations from './Components/BasicOperations'
import Wellness from './Components/Wellness'

/** App.js
 * 
 * Provides entry point for all of the components
 * and orders each element on the page
 */



function App() {
  return (
    <div>
      {/* Warning Banner announces site warnings */}
      <WarningBanner />
      {/* Navbar allows user to navigate the site*/}
      <Navbar />
      {/* Description gives breif company description*/}
      <Description />
      {/* Basic Operations allows user to perform common operations */}
      <BasicOperations />
      {/* App Banner gives user details about the app*/}
      <AppBanner />
      {/* Wellness provides users with links to pages about wellness classes*/}
      <Wellness />
      {/* Location provides the location of both storefronts*/}
      <Location />
      {/* Footer provides final details*/}
      <Footer />
    </div>
  );
}

export default App;
