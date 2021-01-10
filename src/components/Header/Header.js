import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <img className="small-logo" src="assets/images/book-icon.jpg" alt="bookclub logo" />
          <Link className='navbar-brand' to="/">The BookClub</Link>
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
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/about">About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/donate">Donate Book</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/request">Request Book</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="#">Find Event</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/contact">Contact us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/login">Log in / Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
