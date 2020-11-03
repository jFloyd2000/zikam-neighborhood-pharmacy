import React from 'react';
import PhoneImg from '../Photos/Phone.png'

function AppBanner(){
    return(
        <div className='card2'>
            <img src={PhoneImg} className='phoneImg'/>
            <p className='phoneTxt'>Download our free mobile app from the App Store and Google Play Store to get<br/>
            <ul className='appList'>
                <li>Prescription Refills</li>
                <li>Medication Reminders</li>
                <li>Refill Reminders</li>
                <li>Touch-to-Call</li>
                <li>Medication Information</li>
                <li>And Much More</li>
            </ul></p>
        </div>
    )
}

export default AppBanner