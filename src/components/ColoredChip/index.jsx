import React from 'react';

const ColoredChip = props => {
  return(
    <li className='chip chip--colored'>
      <span className="chip__ball"></span>
      {props.text}
    </li>
  );
};


export default ColoredChip;