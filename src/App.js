import React, { Component } from 'react';
import './reset.css';
import './App.css';

import {author,slogan, socials_media, typed_text} from './Initialize/index';
import Hero from './Sections/Hero';
import SocialBar from "./components/SocialBar";
import AboutMe from "./Sections/AboutMe";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SocialBar socials_media={socials_media} />
        <Hero
          author={author}
          slogan={slogan}
          typed_text={typed_text}
        />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default App;
