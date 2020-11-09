import React from 'react';
import '../Styles/FormElement.css'

function Name(){
    return(
        <div>
            <h4 className='headingA'>Name<span className='star'>*</span></h4>
            <div className='flex'>
                <div>
                    <input type='text' className='basicEle'></input>
                    <h6 className='headingB'>First</h6>
                </div>
                <div>
                    <input type='text' className='basicEle'></input>
                    <h6 className='headingB'>Last</h6>
                </div>
            </div>
        </div>
    )
}

function Email(){
    return(
        <div>
            <h4 className='headingA'>Email<span className='star'>*</span></h4>
            <input type='text' className='basicEle'></input>
        </div>
    )
}

function Phone(){
    return(
        <div>
            <h4 className='headingA'>Phone</h4>
            <div className='flex'>
                (
                <input type='text' className='basicEle phone'></input>
                )
                <input type='text' className='basicEle phone'></input>
                -
                <input type='text' className='basicEle phone'></input>
            </div>
        </div>
    )
}

function Message(){
    return(
        <div>
            <h4 className='headingA'>Message</h4>
            <textarea className='basicEle message' />
        </div>
    )
}

function Number(){
    return(
        <div>
            <h4 className='headingA'>Number</h4>
            <input type='text' className='basicEle'></input>
        </div>
    )
}

function FormElement(props){
    return(
        <div className='formEle'>
            <Name />
            <Email />
            <Phone />
            <Message />
            <Number />
            <input type='button' className='btn' value='Submit' />
        </div>
    )
}


export default FormElement