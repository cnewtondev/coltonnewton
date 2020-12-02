import React, { Component } from 'react';
import Card from '../components/Card'
import MobileCard from '../components/MobileCard'
import '../styles/contact.css'

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='contactShell'>
                <div className='contactBody'>
                    <div className='contactHeader'>
                        <hr className='contactHr'></hr>
                        <p className='customPara'>Contact</p>
                        <hr className='contactHr'></hr>
                    </div>

                    <Card/>
                    <MobileCard/>
                </div>
            </div>
         );
    }
}
 
export default Contact;