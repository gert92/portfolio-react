import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <div className="aboutimage">
            <img src={require('../images/photo.jpg')} alt="Gert Mosin" />
            <div className="imageborder"></div>
          </div>
          <div className="aboutcontent">
            <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sollicitudin commodo sem, ac luctus sapien rutrum ac. Vivamus
              ornare arcu id rhoncus porta. Etiam lacus nibh, vestibulum vel
              maximus non, aliquet eget felis. Pellentesque interdum tempus
              eleifend.{' '}
            </p>
            <p>
              Cras nec leo eget nulla facilisis tempus id non est. Nulla
              facilisi. Sed vestibulum, justo a aliquet tincidunt, dolor sapien
              suscipit dolor, vel feugiat ligula tellus id lectus.
            </p>
            <button>View Works</button>
            <button>Download CV</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
