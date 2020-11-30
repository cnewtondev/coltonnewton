import React, { Component } from 'react';
import '../styles/card.css'
import Logo from '../imgs/logo.png';
import { Email, Phone, LinkedIn} from '@material-ui/icons'

// const TILT_MAX_ANGLE_X = 25;
const TILT_MAX_ANGLE_Y = 35;
const AUTORESET_ON_LEAVE = true;

class Card extends Component {

  wrapperEl = null;
  width = null;
  height = null;
  left = null;
  top = null;
  clientPosition = {
    x:0,
    y:0,
    xPercentage:0,
    yPercentage:0,
  }
  tiltAngleX = 0;
  tiltAngleY = 0;
  updateAnimationId = null;

  componentDidMount() {
    this.setSizeAndPosition();
    window.addEventListener('deviceorientation', this.onMove);
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.onMove);
  }

  setSizeAndPosition() {
    const rect = this.wrapperEl.getBoundingClientRect();
    this.width = this.wrapperEl.offsetWidth;
    this.height = this.wrapperEl.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  onEnter = (event) => {
    this.wrapperEl.style.willChange = 'transform';
    this.setTransition();
  };

  onMove = (event) => {
    if (this.updateAnimationId) {
      cancelAnimationFrame(this.updateAnimationId);
    }
    this.processInput(event);
    this.update(event.type);
    this.updateAnimationId = requestAnimationFrame(this.renderFrame);
  };

  onLeave = (event) => {
    this.setTransition();
    
    const autoResetEvent = new CustomEvent('autoreset');
    this.onMove(autoResetEvent);
  };

  processInput = (event) => {
    switch (event.type) {
      case 'mousemove':
        this.clientPosition.x = event.clientX;
        this.clientPosition.y = event.clientY;
        break;
      case 'touchmove':
        this.clientPosition.x = event.touches[0].pageX;
        this.clientPosition.y = event.touches[0].pageY;
        break;
      case 'deviceorientation':
        this.processInputDeviceOrientation(event);
        break;
      case 'autoreset':
        if(AUTORESET_ON_LEAVE) {
          this.tiltAngleX = 0;
          this.tiltAngleY = 0;
        }
        break;
    }
  };

  processInputDeviceOrientation = (event) => {
    if (!event.gamma || !event.beta) {
      return;
    }

    const angleX = event.beta; // motion of the device around the x axis in degree in the range:[-180,180]
    const angleY = event.gamma; // motion of the device around the y axis in degree in the range:[-90,90]

    // this.clientPosition.xPercentage = (angleX / TILT_MAX_ANGLE_X) * 100;
    this.clientPosition.yPercentage = (angleY / TILT_MAX_ANGLE_Y) * 100;
  };

  update = (eventType) => {
    if (eventType === 'autoreset') {
      return;
    }

    if (eventType !== 'deviceorientation') {
      const {x, y} = this.clientPosition;
      // calculate client x/y position
      this.clientPosition.xPercentage = ((y - this.top) / this.height) * 200 - 100;
      this.clientPosition.yPercentage = ((x - this.left) / this.width) * 200 - 100;
    }
    // set range [-100,100]
    this.clientPosition.xPercentage = Math.min(Math.max(this.clientPosition.xPercentage, -100), 100);
    this.clientPosition.yPercentage = Math.min(Math.max(this.clientPosition.yPercentage, -100), 100);
    // Calculate tilt angle x/y
    // this.tiltAngleX = (this.clientPosition.xPercentage * TILT_MAX_ANGLE_X) / 100;
    this.tiltAngleY = -((this.clientPosition.yPercentage * TILT_MAX_ANGLE_Y) / 100);
  };

  renderFrame = () => {
    this.wrapperEl.style.transform = `perspective(1000px) rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) scale3d(1.2,1.2,1.2)`;
  };

  setTransition = () => {
    const duration = 1800;
    this.wrapperEl.style.transition = `all ${duration}ms cubic-bezier(.03,.98,.52,.99)`;
    this.transitionTimeoutId = setTimeout(() => {
      this.wrapperEl.style.transition = '';
    }, duration);
  };

  render() {
    return (
      <div className="parallax-tilt-effect"
        ref={el => (this.wrapperEl = el)}
        onMouseEnter={this.onEnter}
        onMouseMove={this.onMove}
        onMouseLeave={this.onLeave}
        onTouchMove={this.onMove}
        onTouchStart={this.onEnter}
        onTouchEnd={this.onLeave}>
        <div className="inner-element-one">
          <div className='cardTitle'>Colton Newton</div>
          <div className='cardName'>Web and Mobile Application Developer</div>
          <img className='cardLogo' src={Logo}/>
        </div>
        <div className='inner-element-two'>
                    <div className="email fallow">
                        <Email className='cardIcon' style={{marginRight:'5px', marginTop:'5px !important'}}/>
                        <a className='cardEmail' href="mailto: coltonnewton89@gmail.com">coltonnewton@gmail.com</a>
                    </div>

                    <div className="phone fallow">
                        <Phone className='cardIcon' style={{marginRight:'5px'}}/>
                        <a className='cardPhone' href="tel:+8065175289">(806) 517-5289</a>
                    </div>
                    
                    <div className="linkedIn fallow">
                        <LinkedIn className='cardIcon' style={{marginRight:'5px'}}/>
                        <a className='cardLinked' href="https://www.linkedin.com/in/colton-newton-b3406b18b/">LinkedIn</a>
                    </div>

        </div>

      </div>
    );
  }
}

export default Card