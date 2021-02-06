import React, { useState } from 'react'; 
import { useHistory, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const element = new Map()

element.set(0,
  {
    key: 'stocks',
    header: {
      label: 'Books available to request',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'row g-3 align-items-center space_title'
    }
  }
)
element.set(1,
  {
    key: 'stocks',
    header: {
      label: 'Select a book from the list',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'row g-3 align-items-center space_title'
    }
  }
)
element.set(2,
  {
    key: 'cart.request',
    header: {
      label: 'You\'ve requested the following book',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'hide'
    }
  }
)
element.set(3,
  {
    key: 'cart.donate',
    header: {
      label: 'You\'ve donated the following books',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'hide'
    }
  }
)

function BookList({ mode, stocks, setStocks }) {

  const history = useHistory();   
  
  const [sortType, setSortType] = useState('');

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout') {
      if (mode === 0 && sessionStorage.getItem('cart.request') != null)
        history.push('/checkout-request');
      if (mode === 1 && sessionStorage.getItem('cart.donate') != null)
        history.push('/checkout-donation');
      
    }
  }

  function GetSortOrder(prop, order) {    
    return function(a, b) { 
      if (order === "asc") {   
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }
      } else if (order === "desc") {
          if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }
      }    
        return 0;    
    }    
  }    

  const onSortListener = e => {
      setSortType(e);

      switch (sortType) {
        case 'title-AZ':
          setStocks(stocks.sort(GetSortOrder("book_name", "asc")));
          break;
        case 'title-ZA':
          setStocks(stocks.sort(GetSortOrder("book_name", "desc")));
          break;
        case 'author-AZ':
          setStocks(stocks.sort(GetSortOrder("book_author", "asc")));
          break;
        case 'author-ZA':
          setStocks(stocks.sort(GetSortOrder("book_author", "desc")));
          break;
      }
  };

  return (

    <div className='text-center'>
      <div className='row g-3'>
        { mode === 0 && <h2 className="text-center">Books available to request</h2> }
        { mode === 1 && <h2 className="text-center">Select the books from the list</h2> }
      </div>
    
      <div className='row g-3 space_title2'>
        { mode === 0 &&
          <h4>You can only request one book at a time</h4>
        }
      
        { mode === 1 &&
          <h4>If your book is not listed below <Link to="/"> click here </Link> to enter the book details</h4>
        }
      </div>
    
      <div className={element.get(mode).operation.className}>
        <Dropdown className='col-auto' onSelect={setSortType}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>Sort by</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='left'>
          <button className='btn btn-warning checkout' onClick={onClickListener}>Checkout</button>
        </div>
        
        <div className='right row g-3 align-items-center'>
          <div className='col-auto'>
            <input
              type='input'
              id='inputSearch'
              className='form-control'
              aria-describedby='searchHelpInline'
              placeholder='Search book'
            />
          </div>
          <div className='col-auto'>
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>    
      </div>
    
      <div className='row booklist'>
        
          { stocks != null &&
            stocks.map(b =>
            <Book key={b.isbn+b.postCode} mode={mode} 
              stock={b} stocks={stocks}
              setStocks={setStocks} />)
          }
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-warning checkout' onClick={onClickListener}>Checkout</button>
      </div>
    </div>
    
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}