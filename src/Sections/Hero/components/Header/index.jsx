import React from 'react';

import ColoredChip from '../../../../components/ColoredChip';

const Header = props => {
  return(
    <header className="hero__header">
      <h1 className="hero__author">Victor Ribero</h1>
      <p className="hero__string hero__string--1">I am a Frontend developer</p>
      <p className="hero__string hero__string--2">#who</p>
      <p className="hero__string hero__string--3">
        <span className="hero_aqua_mark">has expertise</span>
        likes
      </p>

      <ul className="hero__interest-list">
        <ColoredChip text="Object-Oriented" />
        <ColoredChip text="S. O. L. I. D" />
        <ColoredChip text="Clean architecture" />
        <ColoredChip text="TDD" />
        <ColoredChip text="DDD" />
        <ColoredChip text="Agile" />
        <ColoredChip text="Craftmanship" />
        <ColoredChip text="Ethics" />
      </ul>
    </header>
  );
};

export default Header;