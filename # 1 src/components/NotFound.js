import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // React Router integration

const NotFound = () => {
    return (
        <Container 
            fluid 
            className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 bg-light"
        >
            {/* Engaging Image */}
            <Row className="mb-4">
                <Col xs={12}>
                    <Image
                        src="https://via.placeholder.com/400" // Replace with an actual engaging 404 image URL
                        alt="Page Not Found"
                        className="img-fluid"
                        style={{ maxHeight: '300px' }}
                    />
                </Col>
            </Row>
            
            {/* Error Message */}
            <Row>
                <Col xs={12}>
                    <h1 className="text-danger">404 - Page Not Found</h1>
                    <p className="text-secondary fs-5">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                </Col>
            </Row>
            
            {/* Navigation Link */}
            <Row className="mt-4">
                <Col xs={12}>
                    <Nav.Link as={NavLink} to="/" className="p-0">
                        <Button variant="primary" size="lg">
                            Go Back to Home
                        </Button>
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
