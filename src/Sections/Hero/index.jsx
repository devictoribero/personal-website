import React from 'react';

import Header from './components/Header';
import SocialBar from './components/SocialBar';

const Hero = props => {
  return(
    <section className="hero">
      <div className="hero__positioner">
        <SocialBar />
        <Header />
      </div>
    </section>
  );
};

export default Hero;