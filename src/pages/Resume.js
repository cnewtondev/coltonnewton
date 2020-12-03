import React, { Component } from 'react';
import '../styles/resume.css'
import headShot from '../imgs/circleHeadshot.png'
import { Email, Phone, LocationOn, LinkedIn, School} from '@material-ui/icons'

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='resumeShell'>
                <div className='resumeHeader'>
                    <hr className='resHr'></hr>
                    <p className='customPara'>Resume</p>
                    <hr className='resHr'></hr>
                </div>
                <div className='resume-body'>
            <aside className='resumeLeft'>
                <img src={headShot} alt="headshot" className='headShot'/>
                <div className="contact">
                    <h4><u>Contact</u></h4>
                    <div className="email">
                        <Email className='resIcon' style={{marginRight:'5px', marginTop:'5px !important'}}/>
                        <a className='resh' href="mailto: coltonnewton89@gmail.com">colto...</a>
                    </div>
                    <div className="phone">
                        <Phone className='resIcon' style={{marginRight:'5px'}}/>
                        <a className='resh' href="tel:+8065175289">(806) 517-5289</a>
                    </div>
                    <div className="location">
                        <LocationOn className='resIcon' style={{marginRight:'5px'}}/>
                        <a className='resh' href="https://www.austintexas.gov/">Austin, TX</a>
                    </div>
                    <div className="linkedIn">
                        <LinkedIn className='resIcon' style={{marginRight:'5px'}}/>
                        <a className='resh' href="https://www.linkedin.com/in/colton-newton-b3406b18b/">LinkedIn</a>
                    </div>
                </div>

                <div className="education">
                    <h4><u>Education</u></h4>
                    <div className="aca">
                        <p><b>Full Stack Development</b></p>
                        <School className='resIcon' style={{marginRight:'5px'}}/>
                        <a className='resh' href="https://austincodingacademy.com/">Austin Coding Academy</a>
                        <p><small><b>Austin, TX</b></small>/ 2019-2020</p>
                    </div>
                </div>

                <div className="qualities">
                    <h4><u>Qualities</u></h4>
                        <li>Detail Oriented Listener</li>
                        <li>Clear Speaker</li>
                        <li>Logical Decision Making</li>
                        <li>Highly Efficient</li>
                        <li>Team Commitment</li>
                        <li>Problem Solving</li>
                        <li>Resilient</li>
                </div>
            </aside>
            
            <aside className='resumeRight'>
                
                <div className="experience">
                    <h2>Work</h2>
                    <br/>
                    <div className="freelance">
                        <div className="employer">
                            <b><a className='resh' style={{color: 'rgb(47, 53, 70)'}}>Freelance Developer</a></b>
                            <b><i>2019-Present</i></b>
                        </div>
                        <p className='resDescription'>As a freelance developer, I designed and developed a self-help native application that use's Ionic React Native, Google's serverless, NoSQL firebase complete 
                         with authentication and crash analytics. This application is currently live on the Android Play Store. 
                        </p>
                        <hr/>
                    </div>
                    <div className="tfs">
                        <h4>Resource Specialist/Firefighter</h4>
                        <div className="employer">
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
                        <h4>Route Sales Representative</h4>
                        <div className="employer">
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
                    
                    <div className="skillWrapper">
                        
                        <div className="languages">
                            <h4>Languages</h4>
                            <li>HTML/CSS</li>
                            <li>JavaScript/Node</li>
                            <li>NoSQL</li>
                            <li>Git</li>
                        </div>

                        <div className="webDevelopment">
                        <h2>Skills</h2>
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
            </aside>
        </div>
        <br/>
            </div>
         );
    }
}
 
export default Resume;