import React from 'react';

/** WarningBanner.js
 * 
 * Provides user with a link to information
 * about the Medicare Annual Election Period
 */

function WarningBanner(){
    return(
        <div className="WarningBanner"><p>Medicare Annual Election Period is Oct 15 - Dec 7. 
            <span className="fakeLink">Click Here</span> to learn more.</p></div>
    )
}

export default WarningBanner