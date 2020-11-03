import React from 'react';
import ZikamLogo from '../Photos/ZikamLogo.png'

function BlueBanner(props){
    return(
        <div className='blueBanner'>
            <ul className='NavBar'>
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

export default BlueBanner 