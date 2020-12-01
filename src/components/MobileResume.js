import React, { Component } from 'react';
import '../styles/mobileResume.css'
import MobileResDrawer from './MobileResDrawer'

class MobileResume extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='mobileResumeShell'>
                <MobileResDrawer/>
                <p className='myPara'> hello</p>
            </div>
         );
    }
}
 
export default MobileResume;