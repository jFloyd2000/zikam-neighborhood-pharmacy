import React from 'react';
import PhoneImg from '../Photos/Phone.png'

/** AppBanner.js
 * 
 * Provides details of the mobile app
 */

function AppBanner(){
    return(
        <div className='AppBanner'>
            <div className='appOverlay'>
            <p className='appTxt'>Download our free mobile app from the App Store and Google Play Store to get<br/>
            <ul>
                <li>Prescription Refills</li>
                <li>Medication Reminders</li>
                <li>Refill Reminders</li>
                <li>Touch-to-Call</li>
                <li>Medication Information</li>
                <li>And Much More</li>
            </ul></p>
            </div>
        </div>
    )
}

export default AppBanner