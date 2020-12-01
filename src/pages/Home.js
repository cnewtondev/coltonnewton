import React, { Component } from 'react';
import '../styles/typewriter'
import '../styles/home.css'
import electOne from '../imgs/electOne.png'
import electTwo from '../imgs/electTwo.png'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='homeShell'>
                
                <div className='homeHeader'>
                    <hr className='customHr'></hr>
                    <p className='customPara'>Colton Newton</p>
                    <hr className='customHr'></hr>
                </div>

                <div className='homeCenter'>
                    <p>Web and Mobile Application Developer</p>
                        <h1>
                        <a className="typewrite" data-period="1000" data-type='[ "Responsive Web Applications", "Serverless Backend Development", "Adobe Design", "React and Ionic Frameworks", "Authentication", "Hosting and Analytics", "Git and Much More" ]'>
                        <span class="wrap"></span>
                        </a>
                        </h1>
                    <img className='electOneImg' src={electOne}/>
                    <img className='electTwo' src={electTwo}/>
                </div>
            </div>
         );
    }
}
 
export default Home;