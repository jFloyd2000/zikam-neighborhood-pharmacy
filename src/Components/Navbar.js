import React, { useState } from 'react';

/** Navbar.js
 * 
 * Allows user to navigate to common pages in the site
 * Also houses the logo so the site is easily reconizable
 */



 function NavEle(){
     return(
        <ul className='NavBarList'>
        <li className="NavElement Hoverable">Reviews</li>
        <li className="NavElement Hoverable">RX Coupons</li>
        <li className="NavElement Hoverable">Health News</li>
        <li className="NavElement Hoverable">Services</li>
        <li className="NavElement selected"><a href='/' className='noUnderline whiteTxt'>Home</a></li>
    </ul>
     )
 }

function Navbar(props){
    const [showMenu, setShowMenu] = useState(false);

    let menu = <div></div>;
   
    if(showMenu){
        menu = <NavEle />
    }
    else{
        menu = <div></div>
    }

    return(
        <div className='NavBar'>
            <div className='navButton' onClick={() => setShowMenu(!showMenu)}>
            </div>
            {menu}
        </div>
    )
}

export default Navbar