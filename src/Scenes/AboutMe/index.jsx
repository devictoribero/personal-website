import React from 'react';
import SceneContainer from "../../Components/SceneContainer";
import TopBar from "../../Components/TopBar";

const AboutMe = ({ ApplicationData }) => {
  return (
    <React.Fragment>
      <section className="about-me overlay">
        <article className="about-me__positioner">
          <h1 className="about-me__title">About me</h1>
          <p className="about-me__explanation">I like to learn everything in live. Cultures, societies, food, countries, habits... That's why in my professional career and personal life I am always receptive to learn about anything.</p>
          <p className="about-me__explanation">I am honest. I like to say things directly. Once everyone knows what people things about each other, it is a good starting point to do whatever.</p>
          <blockquote className="about-me__blockquote">Stop doing something just right you notice you are wasting time.</blockquote>
          {/*<TopBar title={'About me'} />*/}
          {/*{ ApplicationData.aboutMe.map(section => {
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
          })}*/}
        </article>
      </section>
    </React.Fragment>
  );
};
export default AboutMe;

const AboutMeAllParagraphs = ({paragraphs}) => {
  return paragraphs.map((paragraph, i) => <AboutMeParagraph key={i} text={paragraph}/>);
};

const AboutMeParagraph = ({text}) => <p className="about-me__article-life">{text}</p>;
