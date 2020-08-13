import React from 'react';
import logo from './logo.svg';
import './App.css';

import Aboutme from './pages/aboutme';
import Contact from './pages/contact';
import Projects from './pages/projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Aboutme} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/projects' component={Projects} />
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
