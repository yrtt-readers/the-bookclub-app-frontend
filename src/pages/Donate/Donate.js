import React from 'react';
import './Donate.css';

import Header from '../../components/Header/Header';

function Donate() {
    return (
      <div>
        <Header />

        <section className="container container-margin">
          <div className="text-center">
              <h1 className="text-center">Donate a book to a child</h1>
              <img src="assets/images/donate.jpg" alt="child reading a book" />
              <p className="text-center">Message explaining how to donate books</p>

              <button className="btn btn-primary">Contact us!</button>
          </div>
        
        </section>
      </div>
    );
  }
  
  export default Donate;
