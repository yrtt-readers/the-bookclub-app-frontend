import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (      
    <Carousel className="carousel-position">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/images/image_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Donate books to children</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Home;