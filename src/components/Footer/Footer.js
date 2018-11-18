import React from 'react';
import { Container, Row, Col } from 'reactstrap';



const Footer = () => (
  <div className="Footer">
    <Container>
      <Row className='text-dark' style={{textAlign: 'center'}}>
        <Col>
          <h3>Check Out <a href='http://upstreamlive.tv'><img width='20%' alt='upstream live' src='https://strings-store.nyc3.digitaloceanspaces.com/USL%20Lower%203rd.png' /></a></h3>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;