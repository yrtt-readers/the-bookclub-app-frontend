import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ShowMore from '../ShowMore/ShowMore';
import './Book.css';

function Book({ mode, stock, stocks, setStocks }) {  

  const history = useHistory(); 
  
  const [ msg, setMsg ] = useState("");

  function onClickListener() {
    let item = {};
    let cart = [];
    let new_stock;

    if (mode === 0) {
      cart = sessionStorage.getItem('cart.request');
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
          sessionStorage.setItem('cart.request', JSON.stringify(cart));

          history.push('/checkout-request');

      } else {
        setMsg("You've already selected a book. You can only choose one book at a time!");
      }
    }
    else if (mode === 1) {
      item = stock;
      item.qty = 1;
      
      if (sessionStorage.getItem('cart.donate') === null)
        sessionStorage.setItem('cart.donate', JSON.stringify(cart));
      
      cart = JSON.parse(sessionStorage.getItem('cart.donate'));

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

      sessionStorage.setItem('cart.donate', JSON.stringify(cart));
    }
  }

  let cart_checkout = null;
  
  if (mode === 0 || mode === 2) 
    cart_checkout = JSON.parse(sessionStorage.getItem('cart.request'));
  else if (mode === 3)
    cart_checkout = JSON.parse(sessionStorage.getItem('cart.donate'));

  return (
      <div className={` col-lg-6 col-sm-6 ${mode > 1 && cart_checkout != null && cart_checkout.length === 1 ? 'checkout-book' : 'book'} `}>
        { mode === 0 && 
          <div className='alert alert-warning mt-2' style={{display: msg ? 'block' : 'none' }} role="alert">
              {msg}
          </div>
        }

        <img
          className='img-thumbnail'
          src={stock.thumbnail}
          alt='book-image-not-found'
        />
          
        <p>
          <strong>{stock.title}</strong>
        </p>
        <p data-testid='book_author'>
          <strong>{stock.author}</strong>
        </p>
        <ShowMore text={stock.summary} className='book-description' />
        { mode === 3 && 
          <p>You've selected {stock.qty} {`${stock.qty > 1 ? 'copies' : 'copy'} `} of this book </p>
        }
        { mode === 0 && <p><strong>Postcode: {stock.postCode}</strong></p> }
        { mode < 2 &&
          <button onClick={onClickListener}
            className='btn btn-primary button-action' disabled={mode === 0 && cart_checkout != null}>
            {
              mode === 0 ? 'Request' : 'Donate'
            }
          </button>
        }
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
