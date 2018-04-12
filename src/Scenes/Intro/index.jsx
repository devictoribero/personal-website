import React from 'react';

const Intro = props => {
  return(
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand animated"></span>
      </h1>
      <h2 className="intro__tagline">
        I'm
        <span className="name">Victor Ribero</span>
        , a front-end software engineer focused on building high-quality products to give the best experiences to the users.
        <span className="emoji technologist"></span>
      </h2>
      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="emoji pointer"></span>
        <span>
          <a  href="mailto:victor.ribero3@gmail.com"
              target="_blank"
              className="link highlight-link">
            victor.ribero3@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};
export default Intro;