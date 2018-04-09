import React from 'react';

const AboutMe = ({ ApplicationData }) => {
  return (
    <section className="about-me section">
      { ApplicationData.aboutMe.map(section => {
        return(
          <article
            className={`about-me__article about-me__article--${section.name}`}
            key={section.name}
          >
            <header className="about-me__article-header">
              <h2 className="about-me__article-title">{section.title}</h2>
            </header>
            <AboutMeAllParagraphs paragraphs={section.texts}/>
          </article>
        );
      })}
    </section>
  );
};
export default AboutMe;

const AboutMeAllParagraphs = ({paragraphs}) => {
  return paragraphs.map((paragraph, i) => <AboutMeParagraph key={i} text={paragraph}/>);
};

const AboutMeParagraph = ({text}) => <p className="about-me__article-life">{text}</p>;
