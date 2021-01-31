import React, { useState, useEffect } from 'react'; 
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
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

function BookList({ mode }) {

  const history = useHistory();
  
  const [ stocks, setStocks ] = useState([]);
  useEffect(() => {
    if (mode < 2) {
      axios
      .get("https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_with_books.json")
      .then(response => setStocks(response.data.stocks))
      .catch(error => console.log(error))
    }else {
      setStocks(JSON.parse(sessionStorage.getItem(element.get(mode).key)));
    }
  }, [])
   
  
  const [sortType, setSortType] = useState('');
  
  if (stocks === null)
    element.get(mode).header.className = 'hide'

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
  }

  return (

    <div>
      <div className='row g-3'>
        { mode === 0 && <h1 className="text-center">Books available to request</h1> }
        { mode === 1 && <h1 className="text-center">Select the books from the list</h1> }
      </div>
      <div className='row g-3'>
        { mode === 0 &&
          <p>You can only request a book at a time.</p>
        }
      
        { mode === 1 &&
          <p>If your book is not listed below <Link to="/"> click here </Link> to enter the book details</p>
        }
      </div>
    
      <div className={element.get(mode).operation.className}>
        <Dropdown className='col-auto' onSelect={setSortType}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>Sort by</Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='left'>
          <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
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
          <div>
            <button className='btn btn-primary'>Search</button>
          </div>  
        </div>  
      </div>
    
      <div className='row booklist'>
        { stocks != null &&
          stocks.map(b =>
          <Book key={b.isbn} mode={mode} 
            stock={b} stocks={stocks}
            setStocks={setStocks} />)
        }
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
      </div>
    </div>
    
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}