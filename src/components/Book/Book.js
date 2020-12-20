import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import {booksData} from './BooksData.js';

function Book({ isbn, stocks, setStocks }) {

  const bookData = booksData.filter(book => book.isbn === isbn);
  console.log(bookData)

  function setBookToStocks(e) {
    if (e.target.className === 'btn btn-primary request')
      setStocks(stocks => [...stocks, { isbn: isbn, qty: -1 }])
    else if (e.target.className === 'btn btn-primary donate')
      setStocks(stocks => [...stocks, { isbn: isbn, qty: +1 }])
  }

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
      {stocks.reduce((sum, stock) => sum + stock.qty, 0)}
      </p>
      <p className='book-description'>Post Code</p>
      <p className='book-description'>
        <a href='#'>More info</a>
      </p>
      <button onClick={setBookToStocks} className='btn btn-primary request'>Request</button>
      <button onClick={setBookToStocks} className='btn btn-primary donate'>Donate</button>
    </div>
  );
}

Book.propTypes = {
  isbn: PropTypes.string,
  stocks: PropTypes.array,
  setStocks: PropTypes.func,
};

export default Book;
