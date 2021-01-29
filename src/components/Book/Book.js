/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './Book.css';

const element = new Map()
element.set(0,
  {
    button: {
      label: 'Request',
      className: 'btn btn-primary request'
    },
    storage: {
      key: 'cart.request'
    },
    bookDescription: {
      className: 'book-description'
    }
  }
)
element.set(1,
  {
    button: {
      label: 'Donate',
      className: 'btn btn-primary donate'
    },
    storage: {
      key: 'cart.donate'
    },
    bookDescription: {
      className: 'book-description'
    }
  }
)
element.set(2,
  {
    button: {
      label: null,
      className: 'hide'
    },
    storage: {
      key: 'cart.request'
    },
    bookDescription: {
      className: 'hide'
    }
  }
)
element.set(3,
  {
    button: {
      label: null,
      className: 'hide'
    },
    storage: {
      key: 'cart.donate'
    },
    bookDescription: {
      className: 'hide'
    }
  }
)
function Book({ mode, stock }) {

  return (
    <div className='col-lg-4 col-sm-6 book'>
      <img
        className='img-thumbnail'
        src={stock.thumbnail}
        alt='book-image-not-found'
      />
      <p className='book-description' data-testid='bookName' id={'bookName.' + stock.isbn}>
        <strong>{stock.bookName}</strong>
      </p>
      <p className='book-description' data-testid='bookAuthors' id={'bookAuthors.' + stock.isbn}>
        <strong>{stock.bookAuthors}</strong>
      </p>
      <p className='book-description'>{stock.qty}</p>
      <button onClick={() => {
        console.log('prev qty: ' + stock.qty)
        stock.qty += 1
        console.log('current qty: ' + stock.qty)
      }}
        className={element.get(mode).button.className}>
        {element.get(mode).button.label}
      </button>
    </div>
  )

}

export default Book;
