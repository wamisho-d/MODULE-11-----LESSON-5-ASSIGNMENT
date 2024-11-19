import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import './HomePage.css'; // Add custom styles for animations

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <CSSTransition in appear timeout={500} classNames="fade">
      <div
        style={{
          backgroundColor: '#f8f9fa',
          color: '#212529',
          padding: '20px',
          border: '2px solid #dee2e6',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container className="text-center">
          {/* Responsive Image */}
          <Image
            src={require('../assets/welcome-image.jpg')}
            fluid
            alt="Welcome"
            style={{
              marginBottom: '20px',
              borderRadius: '8px',
            }}
          />

          {/* Welcome Message */}
          <h1>Welcome to Our Shop!</h1>
          <p>Explore our collection of amazing products tailored just for you.</p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/shop')}
            style={{
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Shop Now
          </Button>

          {/* Feature Cards */}
          <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Body>
                <Card.Title>Featured Product</Card.Title>
                <Card.Text>
                  Discover our top-rated product that customers love!
                </Card.Text>
                <Button variant="secondary">Learn More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Body>
                <Card.Title>Special Offer</Card.Title>
                <Card.Text>
                  Don't miss out on this exclusive deal. Limited time only!
                </Card.Text>
                <Button variant="secondary">Check Offer</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default HomePage;
