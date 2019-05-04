import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';



class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signup/" component={Signup} />
        <Route path="/login/" component={Login} />
      </Router>
    );
  }
}

export default App;
