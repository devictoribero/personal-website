import React from 'react';

const AboutMe = ({ aboutMe }) => {
  return (
    <section className="aboutMe section">
      { aboutMe.map(section => {
        return(
          <article className={`aboutMe__article aboutMe__article--${section.name}`}>
            <header className="aboutMe__article-header">
              <h2 className="aboutMe__article-title">{section.title}</h2>
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

const AboutMeParagraph = ({text}) => <p className="aboutMe__article-life">{text}</p>;
