import React from 'react';

import * as TiIconPack from 'react-icons/lib/ti';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const class_modifier_menu = this.state.isOpen ? 'menu--isOpen' : '';

    return(
      <nav className={`menu ${class_modifier_menu}`}>
        <Trigger />
      </nav>
    );
  }
};

const Trigger = () => (
  <TiIconPack.TiThMenu
    size={30}
    color={'white'}
    className={"menu__trigger"}
  />
);