import React, { Component } from 'react';
import '../styles/header.css'
import Logo from '../imgs/logo.png';
import MobileMenu from './MobileMenu'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
          <div className='headerShell'>
              <img src={Logo} className='logoImg'/>
              <div className='divLinks'>
                  <a className='myLink' href='#homeShell'>Home</a>
                  <a className='myLink'  href='#portfolioShell'>Portfolio</a>
                  <a className='myLink'  href='#resumeShell'>Resume</a>
                  <a className='myLink'  href='#contactShell'>Contact</a>
              </div>
              <MobileMenu className='mobileMenu'/>
          </div>
         );
    }
}
 
export default Header;