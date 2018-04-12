import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import ApplicationData from './Initialize/index';
import Intro from './Scenes/Intro';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Intro />
      </React.Fragment>
    );
  }
}
export default App;
