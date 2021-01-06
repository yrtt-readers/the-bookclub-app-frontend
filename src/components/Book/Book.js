// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import './Book.css';

const bookComponent = new Map()
bookComponent.set(-1, { label: null, className: 'none' })
bookComponent.set(0, { label: 'Request', className: 'btn btn-primary request' })
bookComponent.set(1, { label: 'Donate', className: 'btn btn-primary donate' })


function Book({ mode, isbn, stocks, setStocks }) {

  (sessionStorage.getItem('book.' + isbn) === null) ?
    $.ajax({
      url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/books.json',
      async: false,
      success: data => {
        try {
          sessionStorage
            .setItem('book.' + isbn,
              JSON.stringify(data.filter(book => book.isbn === isbn)[0]))
        } catch (e) { console.log(e) }
      }
    }) : null

  const bookData = JSON.parse(sessionStorage.getItem('book.' + isbn))

  function setBookToStocks(e) {
    if (e.target.className === 'btn btn-primary request')
      setStocks(stock => [...stock, { isbn: isbn, qty: -1 }])
    else if (e.target.className === 'btn btn-primary donate')
      setStocks(stock => [...stock, { isbn: isbn, qty: +1 }])
  }

  return (
    <div className='col-lg-4 col-sm-6 book'>
      <img
        className='img-thumbnail'
        src={bookData.thumbnail}
        alt='book-image-not-found'
      />
      <p className='book-description'>
        <strong>{bookData.book_name}</strong>
      </p>
      <p className='book-description'>
        <strong>Author names</strong>{' '}
      </p>
      <p className='book-description'>{bookData.description}</p>
      <p className='book-description'>Book Quantity: {stocks.reduce((sum, stock) => sum + stock.qty, 0)}
      </p>
      <p className='book-description'>Post Code</p>
      <p className='book-description'>
        <a href='#'>More info</a>
      </p>
      <button onClick={setBookToStocks}
        className={bookComponent.get(mode).className}>
        {bookComponent.get(mode).label}
      </button>
    </div>
  )

}

Book.propTypes = {
  mode: PropTypes.number,
  isbn: PropTypes.number,
  stocks: PropTypes.array,
  setStocks: PropTypes.func,
};

export default Book;
