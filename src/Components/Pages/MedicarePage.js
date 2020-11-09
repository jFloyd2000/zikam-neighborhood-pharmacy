import React from 'react';
import '../../Styles/Medicare.css';
import medicareImg from '../../Photos/medicare.jpg'
import Form from '../MedicareForm'

function MedicarePage(){
    return(
        <div>
            <h1 className='title'>Medicare Open Enrollment</h1>
                <div className='flex'>
                    <div className='eHealthParagraph'>
                        <h2>Find Affordable Medicare Prescription Drug Plans</h2>
                        <p>We have partnered with eHealth, a licensed health insurance agency to provide a free, 
                        no obligation review of your Medicare coverage.
                        <br /><br />
                        eHealth helps people find Medicare insurance coverage that works for their personal needs. 
                        Research, compare and enroll in Medicare insurance plans that cover your doctors, the 
                        prescription drugs you take, and that are accepted at your pharmacy.
                        <br /><br />
                        eHealth’s mission is to help everyone find affordable Medicare coverage through its website 
                        technology, consumer advocacy, and personalized customer assistance.
                        <br /><br />
                        <span className='bold'>Shop online or speak to a licensed insurance agent on the phone.</span></p>
                    </div>
                    <div>
                        <img src={medicareImg} className='medicareImg'/>
                    </div>
                <Form />
                </div>
        </div>
    )
}

export default MedicarePage