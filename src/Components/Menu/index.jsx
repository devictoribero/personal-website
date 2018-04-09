import React from 'react';

import { bubble as MenuThirdPart } from 'react-burger-menu';
import Links from "./Components/Links";
import SocialsMedia from "./Components/SocialMedia";

const Menu = ({links, socials_media}) => {
  return (
    <MenuThirdPart
      className={'menu'}
      width={'calc(100% - 12px)'}
      isOpen={ false }
      right
    >
      <Links links={links} />
      <SocialsMedia socials_media={socials_media}/>
    </MenuThirdPart>
  );
};

export default Menu;
