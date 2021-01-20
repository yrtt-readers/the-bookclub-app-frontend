import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (      
    <div className="container-xl">
      <Carousel className="carousel-position">
        <Carousel.Item>
          <Link to="/donate">
            <img
              className="d-block w-100"
              src="assets/images/carousel_1_donate.jpg"
              alt="Donate a book"
            />
          </Link>
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Donate books to children</h3>
            
            <p>Sign up to donate to local organisations</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/request">
            <img
              className="d-block w-100"
              src="assets/images/carousel_2_request.jpg"
              alt="Request a book"
            />
          </Link>
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Request a book</h3>
            <p>Sign up to see what’s available in your local area</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src="assets/images/carousel_3_events.jpg"
              alt="Find nearest events"
            />
          </Link>
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Find nearest events</h3>
            <p>Making reading fun for everyone</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/contact">
            <img
              className="d-block w-100"
              src="assets/images/carousel_4_contact.jpg"
              alt="Find nearest events"
            />
          </Link>
          <Carousel.Caption bsPrefix="carousel-caption text-caption">
            <h3>Contact us</h3>
            <p>Send us a message</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
  }
  
  export default Home;