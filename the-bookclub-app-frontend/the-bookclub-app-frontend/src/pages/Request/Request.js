import React from 'react';
import BookList from '../../components/BookList/BookList';

function Request() {
    return (
      <div>
        <section className="container container-margin">
          <div className="text-center">
              <h1 className="text-center">Request a book</h1>             
              <BookList mode={0}/>             
          </div>        
        </section>
      </div>
    );
  }
  
  export default Request;