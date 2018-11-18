import React from 'react';
import { Row, Col, Container } from 'reactstrap';

class Radio extends React.Component {
    render() {
      return(
        <Container className='Radio-page'> 
          <Row>
            <Col style={{textAlign: 'center'}} xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h3>
                Radio
              </h3>
            </Col>
          </Row>
        </Container>  
      );
    }
  }
  export default Radio;