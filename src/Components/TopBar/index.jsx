import React from 'react';

const TopBar = ({title}) => {
  return(
    <aside className="topBar">
      <h1 className="title">{title}</h1>
    </aside>
  );
};
export default TopBar;