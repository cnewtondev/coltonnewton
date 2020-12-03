import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import DrawerTwo from '@material-ui/core/DrawerTwo';
import List from '@material-ui/core/List';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import headShot from '../imgs/circleHeadshot.png'
import { Email, Phone, LocationOn, LinkedIn, School} from '@material-ui/icons'


import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MobileResDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='resMobileLeft'>
      <img src={headShot} alt="headshot" className='mobHeadShot'/>
      <div className="contact">
                    <h4><u>Contact</u></h4>
                    <div className="email">
                        <Email className='resIconTwo' style={{marginRight:'5px', marginTop:'5px !important'}}/>
                        <a className='reshTwo' href="mailto: coltonnewton89@gmail.com">coltonewton89@gmail.com</a>
                    </div>
                    <div className="phone">
                        <Phone className='resIconTwo' style={{marginRight:'5px'}}/>
                        <a className='reshTwo' href="tel:+8065175289">(806) 517-5289</a>
                    </div>
                    <div className="location">
                        <LocationOn className='resIconTwo' style={{marginRight:'5px'}}/>
                        <a className='reshTwo' href="https://www.austintexas.gov/">Austin, TX</a>
                    </div>
                    <div className="linkedIn">
                        <LinkedIn className='resIconTwo' style={{marginRight:'5px'}}/>
                        <a className='reshTwo' href="https://www.linkedin.com/in/colton-newton-b3406b18b/">LinkedIn</a>
                    </div>
                </div>
                <div className="education">
                    <h4><u>Education</u></h4>
                    <div className="aca">
                        <p><b>Full Stack Development</b></p>
                        <School className='resIconTwo' style={{marginRight:'5px'}}/>
                        <a className='reshTwo' href="https://austincodingacademy.com/">Austin Coding Academy</a>
                        <p><small><b>Austin, TX</b></small>/ 2019-2020</p>
                    </div>
                </div>

                <div className="qualities">
                    <h4><u>Qualities</u></h4>
                        <li>Detail Oriented Listener</li>
                        <li>Clear Speaker</li>
                        <li>Logical Decision Making</li>
                        <li>Highly Efficient</li>
                        <li>Team Leadership and Commitment</li>
                        <li>Problem Solving</li>
                        <li>Resilient</li>
                </div>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='resDrawerBtn' onClick={toggleDrawer(anchor, true)}><DragHandleIcon className='dragIcon'/></div>
          <DrawerTwo anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </DrawerTwo>
        </React.Fragment>
      ))}
    </div>
  );
}