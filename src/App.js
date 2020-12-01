import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { LabelImportant } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Portfolio/>
      {/* <Resume/>
      <Contact/> */}
    </div>
  );
}

export default App;
