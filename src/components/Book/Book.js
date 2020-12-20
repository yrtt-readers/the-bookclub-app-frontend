import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book({Isbn,Stocks}) {
  return (
    <div className='col-lg-4 col-sm-6 book'>
      <img
        className='img-thumbnail'
        src='https://covers.openlibrary.org/b/id/9943475-L.jpg'
        alt='book-image-not-found'
      />
      <p className='book-description'>
        <strong>Wider Than the Sky</strong>
      </p>
      <p className='book-description'>
        <strong>Author names</strong>{' '}
      </p>
      <p className='book-description'>
        A diverse anthology of poems by William Shakespeare...
  </p>
      <p className='book-description'>Book Quantity :
      {Stocks.filter(stock => stock.isbn === Isbn).reduce((sum, stock) => sum + stock.qty, 0)}
      </p>
      <p className='book-description'>Post Code</p>
      <p className='book-description'>
        <a href='#'>More info</a>
      </p>
      <button className='btn btn-primary request'>Request</button>
    </div>
  );
}

Book.propTypes = {
  Isbn: PropTypes.string,
  Stocks: PropTypes.array,
};

export default Book;
