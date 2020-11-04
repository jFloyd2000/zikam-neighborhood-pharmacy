import React from 'react';

/** Navbar.js
 * 
 * Allows user to navigate to common pages in the site
 * Also houses the logo so the site is easily reconizable
 */

function Navbar(props){
    return(
        <div className='NavBar'>
            <ul className='NavBarList'>
                <li className="NavElement Hoverable">Reviews</li>
                <li className="NavElement Hoverable">RX Coupons</li>
                <li className="NavElement Hoverable">Health News</li>
                <li className="NavElement Hoverable">Services</li>
                <li className="NavElement selected">Home</li>
            </ul>
        </div>
    )
}

export default Navbar