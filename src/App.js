import React, { Component } from 'react';
import './reset.css';
import './App.css';

import {author,slogan, menu_links, typed_text} from './Initialize/index';
import { bubble as Menu } from 'react-burger-menu';
import Hero from './Sections/Hero';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu
          className={'menu'}
          width={'calc(100% - 12px)'}
          isOpen={ false }
          right
        >
          {menu_links.map(link => {
            return (
              <a id={link.id} className="menu-item" href={link.path}>
                {link.display}
              </a>
            );
          })}
        </Menu>

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
