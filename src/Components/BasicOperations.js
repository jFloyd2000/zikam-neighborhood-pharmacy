import React from 'react';
import SmallCard from './SmallCard'
import RefillImg from '../Photos/MedicneBottle.jpg'
import transferImg from '../Photos/Transfer.png'
import CovidImg from '../Photos/Covid.jpg'

/** BasicOperations.js
 * 
 * Gives users acess to common operations
 * using the SmallCard class
 */

function Deck(){
    return(
        <div className='deck'>
            <SmallCard img={RefillImg} text="Refill" />
            <SmallCard img={transferImg} text="Transfer" />
            <SmallCard img={CovidImg} text="Covid-19 Supplies" />
        </div>
    )
}

export default Deck