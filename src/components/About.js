import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row className="d-flex">
          <Col
            className="d-flex justify-content-center justify-content-md-start align-content-center mb-5 mb-md-0"
            sm={12}
            md={6}
          >
            <div className="aboutimage">
              <img src={require('../images/photo.jpg')} alt="Gert Mosin" />
              <div className="imageborder"></div>
            </div>
          </Col>
          <Col
            className="d-flex flex-column justify-content-center align-content-center align-items-center align-items-md-start p-4"
            sm={12}
            md={6}
          >
            <Row>
              {/* <div className="aboutcontent"> */}
              <h3 className="mb-3">About Me</h3>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sollicitudin commodo sem, ac luctus sapien rutrum ac. Vivamus
                ornare arcu id rhoncus porta. Etiam lacus nibh, vestibulum vel
                maximus non, aliquet eget felis. Pellentesque interdum tempus
                eleifend.{' '}
              </p>
            </Row>
            <Row className="mb-4">
              <p>
                Cras nec leo eget nulla facilisis tempus id non est. Nulla
                facilisi. Sed vestibulum, justo a aliquet tincidunt, dolor
                sapien suscipit dolor, vel feugiat ligula tellus id lectus.
              </p>
            </Row>
            <Row>
              <button className="mr-2">View Works</button>
              <button>Download CV</button>
            </Row>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
