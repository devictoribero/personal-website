import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import ApplicationData from './Initialize/index';
import Home from './Scenes/Home';
import AboutMe from './Scenes/AboutMe';
import Menu from "./Components/Menu";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment >

          <Menu
            links={ApplicationData.links}
            socials_media={ApplicationData.socials_media}
          />

          <main role='main'>
            <Switch>
              <Route exact path ='/' render={(props) => (
                <Home {...props} ApplicationData={ApplicationData} />
              )}/>

              <Route path ='/about' render={(props) => (
                <AboutMe {...props} ApplicationData={ApplicationData} />
              )}/>

            </Switch>
          </main>

        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
