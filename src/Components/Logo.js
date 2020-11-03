import React from 'react';
import ZikamLogo from '../Photos/ZikamLogo.png'

function Logo(){
    return(
        <div className="WhiteBanner">
            <img src={ZikamLogo} className="TopLogo" />
        </div>
    )
}

export default Logo