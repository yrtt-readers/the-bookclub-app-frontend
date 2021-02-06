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
            <h1 className='title-carousel'>Donate books to children</h1>
            <h3 className='sub-title-carousel'>Sign up to donate to local organisations</h3>
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
            <h1 className='title-carousel'>Request a book</h1>
            <h3 className='sub-title-carousel'>Sign up to see what’s available in your local area</h3>
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
            <h1 className='title-carousel'>Find nearest events</h1>
            <h3 className='sub-title-carousel'>Making reading fun for everyone</h3>
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
            <h1 className='title-carousel'>Contact us</h1>
            <h3 className='sub-title-carousel'>Send us a message</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
  }
  
  export default Home;