import React, { useState } from 'react'; 
import { useHistory, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

function BookList({ mode, stocks, setStocks }) {

  const history = useHistory();   
  
  const [sortType, setSortType] = useState('');

  function onClickListener() {
    if (mode === 0 && sessionStorage.getItem('cart.request') != null)
      history.push('/checkout-request');
    if (mode === 1 && sessionStorage.getItem('cart.donate') != null)
      history.push('/checkout-donation');
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
          setStocks(stocks.sort(GetSortOrder("title", "asc")));
          break;
        case 'title-ZA':
          setStocks(stocks.sort(GetSortOrder("title", "desc")));
          break;
        case 'author-AZ':
          setStocks(stocks.sort(GetSortOrder("author", "asc")));
          break;
        case 'author-ZA':
          setStocks(stocks.sort(GetSortOrder("author", "desc")));
          break;
      }
  };

  return (
    <div className='text-center'>
      <div className='row g-3'>
        { mode === 0 && <h2>Books available to request</h2> }
        { mode === 1 && <h2>Select the books from the list</h2> }
      </div>
    
      <div className='row g-3 space-title-bottom'>
        { mode === 0 &&
          <h4>You can only request one book at a time</h4>
        }
      
        { mode === 1 &&
          <h4>If your book is not listed below <Link to="/add-book"> click here </Link> to enter the book details</h4>
        }
      </div>
      
      { mode < 2 && 
        <div className='row space-title'>
          <div className='col left'>
            <Dropdown className='col-auto' onSelect={setSortType}>
              <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>Sort by</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
                <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
                <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
                <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col left'>
            <button className='btn btn-success checkout' onClick={onClickListener}>Checkout</button>
          </div>
        
          <div className='col'>
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
      }
    
      <div className='row booklist'>
        { stocks != null &&
          stocks.map(b =>
          <Book key={b.isbn+b.postCode} mode={mode} 
            stock={b} stocks={stocks}
            setStocks={setStocks} />)
        }
      </div>
      {
        mode < 2 &&
        <div className='space-title'>
          <button className='btn btn-success checkout' onClick={onClickListener}>Checkout</button>
        </div>
      }
    </div>
    
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}