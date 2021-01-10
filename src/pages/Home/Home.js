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
            src="assets/images/carousel_1_donate.jpg"
            alt="Donate a book"
          />
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Donate books to children</h3>
            <p>Sign up to donate to local organisations</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/carousel_2_request.jpg"
            alt="Request a book"
          />
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Request a book</h3>
            <p>Sign up to see what’s available in your local area</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/carousel_3_events.jpg"
            alt="Find nearest events"
          />
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Find nearest events</h3>
            <p>Making reading fun for everyone</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/carousel_4_contact.jpg"
            alt="Find nearest events"
          />
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Contact us</h3>
            <p>Send us a message</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
    );
  }
  
  export default Home;