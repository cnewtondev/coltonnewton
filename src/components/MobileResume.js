import React, { Component } from 'react';
import '../styles/mobileResume.css'
import MobileResDrawer from './MobileResDrawer'

class MobileResume extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='mobileResumeShell'>
                <div className="experience">
                <MobileResDrawer/>
                <div className='resumeHeader'>
                    <hr className='resHr'></hr>
                    <p className='customPara'>Resume</p>
                    <hr className='resHr'></hr>
                </div>
                    <h2>Work</h2>
                    <br/>
                    <div className="freelance">
                        <div className='mobileResTitle'>
                        <b><a className='resh' style={{color: 'rgb(47, 53, 70)'}}>Freelance Developer</a></b>
                            <b><i>2019-Present</i></b>
                        </div>
                            
                        
                        <p className='resDescription'>As a freelance developer, I designed and developed a self-help native application that use's Ionic React Native, Google's serverless, NoSQL firebase complete 
                         with authentication and crash analytics. This application is currently live on the Android Play Store along side the Apple App Store. 
                        </p>
                        <hr/>
                    </div>
                    <div className="tfs">
                    <div className='mobileResTitle'>
                    <h4>Resource Specialist/Firefighter</h4>                       
                        <b><a className='resh' href="https://tfsweb.tamu.edu/" style={{color: 'rgb(47, 53, 70)'}}>Texas Forest Service</a></b>
                        <b><i>2015-2019</i></b> 
                    </div>
                           
                                            
                        <p className='resDescription'>Served as a wildland firefighter for the Texas Forest Service. Titles included wildland EMT, single resource boss trainee,
                        academy instructor, and honor guard member. Under these titles, I was responsible for protecting federal, state, and local resources by
                        assigning/receiving, deligating, or carrying out operationial orders implemented in a team or incident command/chain of command
                        system. These responsiblites allowed me to earn the "Texas State Initial Attack Crew Leadership Award" in 2017.
                        </p>
                        <hr/>
                    </div>

                    <div className="farmerBros">
                    <div className='mobileResTitle'>
                    <h4>Route Sales Representative</h4>                        
                            <b><a className='resh' href="https://www.farmerbros.com/" style={{color: 'rgb(47, 53, 70)'}}>Farmer Brothers</a></b>
                            <b><i>2012-2015</i></b>
                    </div>
                        
                        
                        <p className='resDescription'>At Farmer Brothers I serviced multiple accounts and proposed new products to maximize revenue. This process gained new accounts 
                            through succcessful business to business networking. I was also able to improve sales for other branches during time of low employment
                            by mapping more productive and time efficient routes leading to rehabilitation of customer relations.
                        </p>
                        <hr/>
                    </div>
                </div>

                <div className="Skills">
                    
                    <div className="skillWrapperTwo">
                    <h2>Skills</h2>
                        
                        <div className="languages">
                            <h4>Languages</h4>
                            <li>HTML/CSS</li>
                            <li>JavaScript/Node</li>
                            <li>NoSQL</li>
                            <li>Git</li>
                        </div>

                        <div className="webDevelopment">
                        
                            <h4>Web Development</h4>
                            <li>React+Redux</li>
                            <li>Responsive/Mobile Development</li>
                            <li>Material-ui</li>
                            <li>Serverless Backend Development</li>
                            <li>Authentication</li>                           
                        </div>
                        <div className="technologies">
                            <h4>Technologies</h4>
                            <li>Continuous Intergration</li>
                            <li>Web/Mobile App Deployment</li>
                            <li>Hosting and Analytics</li>
                            <li>Cloud Services</li>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MobileResume;