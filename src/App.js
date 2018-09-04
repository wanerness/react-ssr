import React, { Component } from 'react';

// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Routes from "./Route";



import './App.css';




class App extends Component {
  render() {
    return (
      
      <Router> 
          <Routes/>       
       </Router>
    );
  }
}

export default App;
