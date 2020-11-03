import React from 'react';
import HeaderImg from '../Photos/MedicneBottle.jpg'

function SmallCard(props){
    return(
        <div className='smallCard refillCard'>
            <img src={props.img} className='cardImgHeader' />
            <p className='cardText'>{props.text}</p>
        </div>
    )
}

export default SmallCard