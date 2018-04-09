import React from 'react';

import * as FaIconPack from 'react-icons/lib/fa';

const SocialsMedia = ({socials_media}) => {
  return(
    <ul className="menu-item menu-item--socials">
      {socials_media.map(social => {
        return (
          <li key={social.name}>
            <a
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
