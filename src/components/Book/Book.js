import PropTypes from 'prop-types';
import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import $ from 'jquery';
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
    description: {
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
    description: {
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
    description: {
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
    description: {
      className: 'hide'
    }
  }
)
function Book({ mode, stock, stocks, setStocks }) {

  let bookData = sessionStorage.getItem('book.' + stock.isbn);

  if (bookData === null) {
    $.ajax({
      url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/books_new.json',
      async: false,
      success: data => {
        try {
          sessionStorage
            .setItem('book.' + stock.isbn,
              JSON.stringify(data.books.filter(book => book.isbn === stock.isbn)[0]))

          bookData = sessionStorage.getItem('book.' + stock.isbn)
        } catch (e) { console.log(e) }
      }
    })
  }
  
  bookData = JSON.parse(bookData)

  function onClickListener(e) {
    let item = {};
    let cart = [];
    let new_stock;

    if (e.target.className === 'btn btn-primary request') {
      cart = sessionStorage.getItem(element.get(mode).storage.key)
      if (cart === null) {
        
          new_stock = stocks.map((book) => {
            if (book.isbn === stock.isbn) {
              
              return {...book, qty: book.qty - 1} 
            } else {
              return book;
            }
          });

          setStocks(new_stock);

          item = stock;
          item.qty = 1;
          cart = [item];
          sessionStorage.setItem(element.get(mode).storage.key, JSON.stringify(cart));
      }
    }
    else if (e.target.className === 'btn btn-primary donate') {
      new_stock = stocks.map((book) => {
        if (book.isbn === stock.isbn) {
          return {...book, qty: stock.qty + 1} 
        } else {
          return book;
        }
      });

      setStocks(new_stock);

      item = stock;
      item.qty = 1;
      

      if (sessionStorage.getItem(element.get(mode).storage.key) === null)
        sessionStorage.setItem(element.get(mode).storage.key, JSON.stringify(cart));
      
      cart = JSON.parse(sessionStorage.getItem(element.get(mode).storage.key));

      let bookInCart = cart.filter(b => b.isbn === stock.isbn);
      
      if (bookInCart.length === 0) {
        cart.push(item);
      } else {
        cart = cart.map((b) => {
          if (b.isbn === stock.isbn) {
            return {...b, qty: b.qty + 1} 
          } else {
            return b;
          }
        });
      }

      sessionStorage.setItem(element.get(mode).storage.key,
        JSON.stringify(cart))
    }

  }

  return (
    <div className='col-lg-4 col-sm-6 book'>
      <img
        className='img-thumbnail'
        src={bookData.thumbnail}
        alt='book-image-not-found'
      />      
      <p className='book-description' data-testid='book_name'>
        <strong>{bookData.book_name}</strong>
      </p>
      <p className='book-description' data-testid='book_author'>

        <strong>{bookData.book_author}</strong>
      </p>
      <ShowMore text={bookData.description} className={element.get(mode).description.className} />
      <p className='book-description'>Book Quantity: {stock.qty} </p>
      { mode === 0 && <p className='book-description'><strong>Post Code: {stock.post_code}</strong></p> }
      <button onClick={onClickListener}
        className={element.get(mode).button.className}>
        {element.get(mode).button.label}
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
