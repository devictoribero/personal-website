import React from 'react';

const AboutMe = props => {
  return (
    <section className="aboutMe section">
      <article className="aboutMe__article aboutMe__article--summary">
        <header className="aboutMe__article-header">
          <h2 className="aboutMe__article-title">
            How am i?
          </h2>
        </header>
        <p className="aboutMe__article-life">
          I am exactly the same person in my private life than my professional career and everyone should be.
          <br /><br />
          We have a personality that we can't change so we have to be the same in our professional career and private life.
          I try to do things as better as possible doing my best to enjoy the moment.
          <br /><br />
          I like to take care of everything: animals, friends, way to express my self, my code, how I practise sport, what and how I eat..&nbsp;
          <strong className="italic">And that's because if I have to spend time doing something, at least I want to do it properly</strong>
        </p>
      </article>

      <article className="aboutMe__article aboutMe__article--personal">
        <header className="aboutMe__article-header">
          <h2 className="aboutMe__article-title">In my private life</h2>
        </header>
        <p className="aboutMe__article-life">
          I am exactly the same person in my private life than my professional career and everyone should be.
          <br /><br />
         thing: animals, friends, way to express my self, my code, how I practise sport, what and how I eat..&nbsp;
          <strong className="italic">And that's because if I have to spend time doing something, at least I want to do it properly</strong>
        </p>
      </article>

      <article className="aboutMe__article aboutMe__article--professional">
        <header className="aboutMe__article-header">
          <h2 className="aboutMe__article-title">In my daily working day</h2>
        </header>
        <p className="aboutMe__article-life">
          I am exactly the same person in my private life than my professional career and everyone should be.
          <br /><br />
           and private life.
          nd that's because if I have to spend time doing something, at least I want to do it properly
        </p>
      </article>

    </section>
  );
};
export default AboutMe;