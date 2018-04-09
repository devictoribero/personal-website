import React from 'react';

import Typed from 'react-typed';

const Home = (props) => {
  return(
    <section className="home">
      <div className="home__positioner">
        <h1 className="home__author">{props.ApplicationData.author}</h1>
        <p className="home__slogan">{props.ApplicationData.slogan}</p>

        <Typed
          className={'home__typed-text'}
          strings={props.ApplicationData.typed_text}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </section>
  );
};

export default Home;