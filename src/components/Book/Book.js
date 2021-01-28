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
function Book({ mode, stock, updateStocks, setStocks }) {

function onClickListener(e) {

    if (e.target.className === 'btn btn-primary request')
      stock.qty -= 1
    else if (e.target.className === 'btn btn-primary donate')
      stock.qty += 1

      updateStocks.find(v => {
        v.isbn == stock.isbn ? v.qty = stock.qty : null
      })

    useEffect(() => {
      setStocks(updateStocks)
      console.log(updateStocks)
    }, [])  
  }
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
      <p className='book-description'>{stock.qty}
      </p>
      <button onClick={onClickListener}
        className={element.get(mode).button.className}>
        {element.get(mode).button.label}
      </button>
    </div>
  )

}

Book.propTypes = {
  mode: PropTypes.number,
  stock: PropTypes.object,
  setStocks: PropTypes.func,
};

export default Book;
