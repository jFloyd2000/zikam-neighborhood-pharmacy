import React from 'react';
import SmallCard from './SmallCard'
import DiabetesImg from '../Photos/Diabetes.jpeg'
import SmokingImg from '../Photos/cigarette.jpg'
import ScaleImg from '../Photos/Scale.jpeg'
import BloodPressImg from '../Photos/BloodPressure.jpeg'
import Cholesterol from '../Photos/cheerios.jpeg'
import Inhaler from '../Photos/inhaler.jpg'

/** Wellness.js
 * 
 * Provides links to information about 
 * the wellness classes in the form of SmallCard
 */

function DeckB(){
    return(
        <div>
            <h1>Wellness Classes</h1>
            <div className='deck'>
                <SmallCard img={DiabetesImg} text="Diabetes" />
                <SmallCard img={SmokingImg} text="Quit Smoking" />
                <SmallCard img={ScaleImg} text="Weight Loss" />
                <SmallCard img={BloodPressImg} text="High Blood Pressure" />
                <SmallCard img={Cholesterol} text="High Cholesterol" />
                <SmallCard img={Inhaler} text="Ashtma" />
            </div>
        </div>
    )
}

export default DeckB