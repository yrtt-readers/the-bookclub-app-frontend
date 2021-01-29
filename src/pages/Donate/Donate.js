import React from 'react';
import BookList from '../../components/BookList/BookList';

function Donate() {
    return (
      <div className="container container-margin">
          <div>
              <h1 className="text-center">Donate a book to a child</h1>              
              <BookList mode={1}/>
          </div>        
      </div>
    );
  }
  
  export default Donate;
