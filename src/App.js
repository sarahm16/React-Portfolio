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
      <Route exact path='/' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
