// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import './Book.css';

function Book({ isbn, stocks, setStocks }) {

$.ajax({
  url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/books.json',
  async: false,
  success: data => {
    try {
      $.each(data.filter(book => book.isbn === isbn)[0],
        (key, val) => { sessionStorage.setItem(isbn + '-' + key, val) })
    } catch (e) { console.log(e) }
  }
})

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
      src={sessionStorage.getItem(isbn + '-' + 'thumbnail')}
      alt='book-image-not-found'
    />
    <p className='book-description'>
      <strong>{sessionStorage.getItem(isbn + '-' + 'book_name')}</strong>
    </p>
    <p className='book-description'>
      <strong>Author names</strong>{' '}
    </p>
    <p className='book-description'>{sessionStorage.getItem(isbn + '-' + 'description')}</p>
    <p className='book-description'>Book Quantity : 
    {stocks.reduce((sum, stock) => sum + stock.qty, 0)}
    </p>
    <p className='book-description'>Post Code</p>
    <p className='book-description'>
      <a href='#'>More info</a>
    </p>
    <button onClick={setBookToStocks} 
            className='btn btn-primary request'>Request</button>
    <button onClick={setBookToStocks} 
            className='btn btn-primary donate'>Donate</button>
  </div>
);
}

Book.propTypes = {
  isbn: PropTypes.number,
  stocks: PropTypes.array,
  setStocks: PropTypes.func,
};

export default Book;
