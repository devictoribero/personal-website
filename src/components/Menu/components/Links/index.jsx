import React from 'react';

const Links = ({links}) => {
  return (
    links.map(link => {
      return (
        <a
          id={link.id}
          key={link.id}
          href={link.path}
          className="menu-item"
        >
          {link.display}
        </a>
      );
    })
  );
};

export default Links;