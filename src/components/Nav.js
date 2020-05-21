import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => {
  const [navbar, setNavbar] = useState('dark');
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 100 ? 'dark' : 'light';
      setNavbar(backgroundcolor);
    });
  });

  return (
    <div className={`nav ${navbar}`}>
      <Container>
        <Row className="justify-content-md-between align-items-center">
          <Col
            md={4}
            sm={12}
            className="d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div className="logo">
              <span>G.</span>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-md-end justify-content-center"
            md={8}
            sm={12}
          >
            <div className="menu">
              <span>
                <a href="#home">Home</a>
              </span>
              <span>
                <a href="#about">About Me</a>
              </span>
              <span>
                <a href="#portfolio">Portfolio</a>
              </span>
              <span>
                <a href="#contacts">Contact</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
