import React from 'react';

const AboutMe = ({ ApplicationData }) => {
  return (
    <React.Fragment>
      <section className="vrg-scene about-me">
        <article className="about-me__positioner">
          <h1 className="vrg-scene__title about-me__title">About me</h1>

          {ApplicationData.aboutMe.map((object, index) => {
            if (object.type === 'quote') {
              return <blockquote key={index} className="about-me__blockquote">{object.value}</blockquote>;
            }
            return <p key={index} className="about-me__explanation">{object.value}</p>;
          })}

        </article>
      </section>
    </React.Fragment>
  );
};
export default AboutMe;
