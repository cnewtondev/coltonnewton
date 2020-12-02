import React, { Component } from 'react';
import '../styles/portfolio.css'
import ACA from '../imgs/aca.png'
import smallOne from '../imgs/smallBusinessOne.jpeg'
import smallTwo from '../imgs/smallBusinessTwo.jpeg'
import fakeOne from '../imgs/fakeCarsOne.jpeg'
import fakeTwo from '../imgs/fakeCarsTwo.jpeg'
import androidApple from '../imgs/androidApple.png'
import selfOne from '../imgs/selfOne.png'
import selfTwo from '../imgs/selfTwo.png'


class Portfolio extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='portfolioShell'>
                <div className='resumeHeader'>
                    <hr className='resHr'></hr>
                    <p className='customPara'>Portfolio</p>
                    <hr className='resHr'></hr>
                    </div>
                    <div className='acaDiv'>
                    <p className='customPara'>ACA Projects</p>
                    <img className='acaLogo' alt='ACA logo' src={ACA}/>
                    <div className='smallBusiness'>
                        <h4><a href='https://smallbusiness-7eee4.web.app/' className='portLinks'>Small Business Web App</a></h4>
                        <div className='imageLine'>
                            <img className='smallImg' alt='pic of website' src={smallOne}/>
                            <img className='smallImg' alt='pic of website' src={smallTwo}/>
                        </div>
                    </div>
                    <div className='fakeCars'>
                    <h4><a href='https://carsapp-7b26b.web.app/' className='portLinks'>Fake Cars Web App</a></h4>
                    <div className='imageLine'>
                            <img className='smallImg' alt='pic of website' src={fakeOne}/>
                            <img className='smallImg' alt='pic of website' src={fakeTwo}/>
                        </div>
                    </div>
                </div>
                <div className='mobileDiv'>
                    <p className='customPara'>Native Apps</p>
                    <img className='androidApple' alt='android and apple logo' src={androidApple}/>
                    <div className='selfteckLinks'>
                        <a className='selfLink' href='https://play.google.com/store/apps/details?id=io.selfteck.starter'>Selfteck On Android</a>
                        <a className='selfLink' href='https://apps.apple.com/us/app/selfteck/id1539801566#?platform=iphone'>Selfteck On IOS</a>
                        </div>
                    <div className='imageLineTwo'>
                            <img className='smallImgTwo' alt='pic of app' src={selfOne}/>
                            <img className='smallImgTwo' alt='pic of app'  src={selfTwo}/>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;