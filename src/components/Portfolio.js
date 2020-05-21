import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <Row className="justify-content-md-center align-content-center">
          <div className="head">
            <Col>
              <h3 className="mb-3">Portfolio</h3>
              <p className="mb-4">
                Cras nec leo eget nulla facilisis tempus id non est. Nulla
                facilisi. Sed vestibulum.
              </p>
            </Col>
          </div>
        </Row>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end align-content-center mb-2"
          >
            <div className="featuredimage" />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <Row className="mb-2">
              <div className="gridimage1" />
              <div className="gridimage2" />
            </Row>
            <Row>
              <div className="gridimage3" />
              <div className="gridimage4" />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
