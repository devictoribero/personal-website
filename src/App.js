import React, { Component } from 'react';
import './reset.css';
import './App.css';

import Hero from './Sections/Hero';
import SocialBar from "./components/SocialBar";

class App extends Component {
  render() {
    const socials_media = [
      {
        name: 'twitter',
        url: 'https://twitter.com/js_tureey',
        profile_name: 'js_tureey',
      },
      {
        name: 'github',
        url: 'https://github.com/tureey',
        profile_name: 'tureey',
      },
    ];

    return (
      <React.Fragment>
        <SocialBar socials_media={socials_media} />
        <Hero />
      </React.Fragment>
    );
  }
}

export default App;
