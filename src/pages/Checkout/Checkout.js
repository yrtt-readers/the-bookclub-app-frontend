import React from 'react';
import BookList from '../../components/BookList/BookList';

function Checkout() {
    return (
      <div>
        <section className="container container-margin">
          <div className="text-center">
              <h1 className="text-center">Checkout your cart</h1>
              <BookList mode={2}/>             
              <BookList mode={3}/>             
          </div>        
        </section>
      </div>
    );
  }
  
  export default Checkout;