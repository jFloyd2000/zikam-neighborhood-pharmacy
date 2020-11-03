import React from 'react';
import ZikamLogo from '../Photos/ZikamLogo.png'

/** Navbar.js
 * 
 * Allows user to navigate to common pages in the site
 * Also houses the logo so the site is easily reconizable
 */

function Navbar(props){
    return(
        <div className='NavBar'>
            <ul className='NavBarList'>
                <li><img src={ZikamLogo} className="navBarPhoto" /></li>
                <li className="NavElement selected">Home</li>
                <li className="NavElement Hoverable">Services</li>
                <li className="NavElement Hoverable">Health News</li>
                <li className="NavElement Hoverable">RX Coupons</li>
                <li className="NavElement Hoverable">Reviews</li>
            </ul>
        </div>
    )
}

export default Navbar