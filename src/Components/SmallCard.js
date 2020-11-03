import React from 'react';
import HeaderImg from '../Photos/MedicneBottle.jpg'

/** SmallCard.js
 * 
 * Blueprint for creating a small card.
 * The small card is used as a descriptive link
 * to another page
 */

function SmallCard(props){
    return(
        <div className='smallCard'>
            <img src={props.img} className='cardImgHeader' />
            <p className='cardText'>{props.text}</p>
        </div>
    )
}

export default SmallCard