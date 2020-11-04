import React from 'react';
import Description from '../Description'
import AppBanner from '../AppBanner'
import Location from '../Location'
import BasicOperations from '../BasicOperations'
import Wellness from '../Wellness'

/** AppBanner.js
 * 
 * Provides details of the mobile app
 */

function PageOne(){
    return(
        <div>
      <Description />
      <BasicOperations />
      <AppBanner />
      <Wellness />
      <Location />
        </div>
    )
}

export default PageOne