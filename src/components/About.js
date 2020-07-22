import React, { useEffect, useState } from 'react';

const About = ({ aboutRef }) => {
  const [animate, setAnimate] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const scroll = window.scrollY;
      const startHeight = window.innerHeight;
      if (scroll > startHeight / 3.5) {
        setAnimate('about__image--animate');
      }
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__image">
          <img
            className={`${animate}`}
            src={require('../images/gert.jpg')}
            alt="Gert Mosin"
          />
          <div className="about__image--border"></div>
        </div>

        <div className="about__content">
          <h2 className="about__content__title">About Me</h2>
          <p className="about__content__p">
            I am a self-taught programmer. I have been learning to code for a a
            year now. My main focus of learning is on ReactJS and NodeJS.{' '}
          </p>
          <p className="about__content__p">
            I have been familiar with technology and computer since i was a
            little kid. I found programming for myself about a year ago and i am
            really enjoying it. I am learning it every day after work and trying
            new things and mastering old ones.
          </p>

          {/* <button className="btn btn--solid">View Works</button>
          <button className="btn btn--outlined">Download CV</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
