import React, { Component } from 'react';
import './reset.css';
import './App.css';

import {author,slogan, menu_links, socials_media, typed_text} from './Initialize/index';
import Menu from "./components/Menu";
import Hero from './Sections/Hero';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu menu_links={menu_links} socials_media={socials_media}/>

        <Hero
          author={author}
          slogan={slogan}
          typed_text={typed_text}
        />
      </React.Fragment>
    );
  }
}
export default App;
