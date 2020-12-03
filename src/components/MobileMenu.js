import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: '#484848',
    height: 5000
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
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
      <div className='titleDiv'>
          <p className='titlePara'>Menu</p>
        </div>
      <List className='links'>
        <HomeIcon className='mobMenuIcon'/>
        <a className='myLink' href='#homeShell'>Home</a>
        <FolderIcon className='mobMenuIcon'/>
        <a className='myLink'  href='#portfolioShell'>Portfolio</a>
        <DescriptionIcon className='mobMenuIcon'/>
        <a className='mobResLink' href='#mobileResumeShell'>Resume</a>
        
        <a className='desktopResLink'  href='#resumeShell'>Resume</a>
        <AccountBoxIcon className='mobMenuIcon'/>
        <a className='myLink'  href='#contactShell'>Contact</a>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <btn className='menuBtn' onClick={toggleDrawer(anchor, true)}><MenuIcon/></btn>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}