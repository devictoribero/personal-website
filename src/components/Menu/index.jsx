import React from 'react';

import { bubble as MenuThirdPart } from 'react-burger-menu';
import SocialsMedia from "./components/SocialMedia";
import Links from "./components/Links";

const Menu = ({menu_links, socials_media}) => {
  return (
    <MenuThirdPart
      className={'menu'}
      width={'calc(100% - 12px)'}
      isOpen={ true }
      right
    >
      <Links links={menu_links} />
      <SocialsMedia socials_media={socials_media}/>
    </MenuThirdPart>
  );
};

export default Menu;
