import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({links}) => {
  return (
    <ol role='menu'>
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link
              id={link.id}
              key={link.id}
              to={link.path}
              className="menu-item"
              role='menuitem'
            >
              {link.display}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Links;