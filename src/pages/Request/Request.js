import React from 'react';
import BookList from '../../components/BookList/BookList';

function Request() {
    return (
      <div>
        <section className="container container-margin">
          <div>
              <h1 className="text-center">Request a book for a child</h1>             
              <BookList mode={0}/>             
          </div>        
        </section>
      </div>
    );
  }
  
  export default Request;