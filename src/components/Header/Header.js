import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <img className="small-logo" src="assets/images/book-icon.png" alt="bookclub logo" />
          <a className='navbar-brand' href='#'>
            The BookClub
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex'>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined">Home</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined">About</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/donate"><button className='nav-link' variant="outlined">Donate Book</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined">Request Book</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined">Find Event</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined">Contact us</button></Link>
              </li>
              <li className='nav-item'>
                <Link to="/"><button className='nav-link' variant="outlined"> Log in / Sign up</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
