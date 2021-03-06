import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from  'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Hero (props) {
    return (
        <Jumbotron className='bg-transparent' fluid={true}>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                        {props.subTitle && <h3 className='display-4 font-weight-light'>{props.subTitle}</h3>}
                        {props.text && <h4 className='lead font-weight-light'>{props.text}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;