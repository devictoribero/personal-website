import React from 'react';

import * as FaIconPack from 'react-icons/lib/fa';

const SocialBar = props => {
  return(
    <aside className="hero__socialBar">
      <a
        className='hero__socialBar-element hero__socialBar-element--twitter'
        href='https://twitter.com/JS_TUREEY'
      >
        <FaIconPack.FaGithub
          className="hero__socialBar-element-icon"
          color={'white'}
          size={25}
        />
        js_tureey
      </a>
      <a
        className='hero__socialBar-element hero__socialBar-element--github'
        href='https://github.com/tureey'
      >
        <FaIconPack.FaTwitter
          className="hero__socialBar-element-icon"
          color={'white'}
          size={25}
        />
        tureey
      </a>
    </aside>
  );
};

export default SocialBar;