import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
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
                <a className='nav-link' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  About us
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='/index.html'>
                  Donate Books
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link activate' aria-current='page' href='#'>
                  Request Book
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Find Event
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Contact us
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Log in / Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
