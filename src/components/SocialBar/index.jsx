import React from 'react';

import * as FaIconPack from 'react-icons/lib/fa';

const SocialBar = ({socials_media}) => {
  return(
    <aside className="socialBar">
      {socials_media.map(social => <SocialButton key={social.name} {...social} />)}
    </aside>
  );
};
export default SocialBar;

const SocialButton = (social) => {
  return (
    <a
      className={`socialBar-element socialBar-element--${social.name}`}
      href={social.url}
    >
      {social.name === 'twitter' && <TwitterIcon />}
      {social.name === 'github' && <GithubIcon />}
      {social.profile_name}
    </a>
  );
};

const TwitterIcon = () => {
  return (
    <FaIconPack.FaTwitter
      className="socialBar-element-icon"
      color={'white'}
      size={25}
    />)
};

const GithubIcon = () => {
  return (
    <FaIconPack.FaGithub
      className="socialBar-element-icon"
      color={'white'}
      size={25}
    />)
};