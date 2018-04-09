import React from 'react';

import * as FaIconPack from 'react-icons/lib/fa';

const SocialsMedia = ({socials_media}) => {
  return(
    <ul role='menu' className="menu-item menu-item--socials">
      {socials_media.map(social => {
        return (
          <li role='none' key={social.name}>
            <a
              role='menuitem'
              href={social.url}
              className={`menu-item-social menu-item-social--${social.name}`}>
              <SocialMediaIcon name={social.name}/>{social.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialsMedia;

const SocialMediaIcon = ({name}) => {
  if(name === 'twitter') { return <FaIconPack.FaTwitter />;}
  else if(name === 'linkedin') { return <FaIconPack.FaLinkedin />; }
  else if(name === 'github') { return <FaIconPack.FaGithub />;}
};
