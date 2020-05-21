import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Nav = () => {
  return (
    <div className="nav">
      <Container>
        <Row className="justify-content-md-between align-items-center">
          <div className="logo">
            <span>G.</span>
          </div>
          <div className="menu">
            <span>Home</span>
            <span>About Us</span>
            <span>Portfolio</span>
            <span>Contact</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
