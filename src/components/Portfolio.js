import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <Row className="justify-content-md-center align-content-center">
          <div className="head">
            <h3>Portfolio</h3>
            <p>
              Cras nec leo eget nulla facilisis tempus id non est. Nulla
              facilisi. Sed vestibulum.
            </p>
          </div>
          <div className="imagegrid">
            <div className="featuredimage"></div>
            <div className="gridimage1"></div>
            <div className="gridimage2"></div>
            <div className="gridimage3"></div>
            <div className="gridimage4"></div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
