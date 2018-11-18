import React from 'react';
import { Row, Col, Container } from 'reactstrap';

class About extends React.Component {
  render() {
    return(
      <Container className='About-page'> 
        <Row>
          <Col style={{textAlign: 'center'}} xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h3>
              Home
            </h3>
          </Col>
        </Row>
      </Container>  
    );
  }
}
export default About;
