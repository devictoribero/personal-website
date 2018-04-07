import React from 'react';

import Typed from 'react-typed';

const Hero = ({author, slogan, typed_text}) => {
  return(
    <section className="hero">
      <div className="hero__positioner">
        <h1 className="hero__author">{author}</h1>
        <p className="hero__slogan">{slogan}</p>

        <Typed
          className={'hero__typed-text'}
          strings={typed_text}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </section>
  );
};

export default Hero;