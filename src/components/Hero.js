import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <Container>
        <Row className="justify-content-md-between align-content-center">
          <div className="cta">
            <h6>Hello</h6>
            <h1>I’m Gert</h1>
            <h2>Learning web development with MERN stack</h2>
            <button>Hire Me</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
