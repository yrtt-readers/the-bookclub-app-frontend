import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (      
    <section className="container">
      <Carousel className="carousel-position">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/image_1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Donate books to children</h3>
            <p className="legend">Sign up to donate to local organisations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/image_2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Request a book</h3>
            <p>Sign up to see what’s available in your local area</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/image_3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Find nearest events</h3>
            <p>Making reading fun for everyone</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
    );
  }
  
  export default Home;