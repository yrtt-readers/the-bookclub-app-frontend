import React from 'react';
import BookList from '../../components/BookList/BookList';
import './Donate.css';

function Donate() {
    return (
      <div>
        <section className="container container-margin">
          <div className="text-center">
              <h1 className="text-center">Donate a book to a child</h1>              
              <BookList mode={1}/>
              <p className="text-center">Message explaining how to donate books</p>
              <button className="btn btn-primary">Contact us!</button>
          </div>        
        </section>
      </div>
    );
  }
  
  export default Donate;
