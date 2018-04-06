import React from 'react';

import Typed from 'react-typed';

const Hero = ({social, interests}) => {
  return(
    <section className="hero">
      <div className="hero__positioner">
        <h1 className="hero__author">Victor Ribero</h1>
        <p className="hero__slogan">I am a Frontend developer</p>

        <Typed
          className={'hero__typed-text'}
          strings={[
            '... who likes to learn',
            '... who likes to share knowledge',
            '... who studies about Clean architecture',
            '... who knows Object-Oriented programming',
            '... who codes with S.O.L.I.D principles',
            '... who wants to practise TDD',
            '... who wants to learn DDD',
            '... who will be a scrum master',
            '... who reads a lot about tech stuff',
            ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </section>
  );
};

export default Hero;