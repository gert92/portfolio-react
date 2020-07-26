import React from 'react';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__cta">
        {/* <span className="hero--gert">GERT</span>
        <span className="hero--mosin">MOSIN</span> */}
        <h4>Hello</h4>
        <h1>I’m Gert</h1>
        <h2>Web developement with MERN stack</h2>
        <a href="#portfolio">
          <button className="btn btn--solid">View CV</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
