import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const element = new Map()
let key = '';
let initialState = sessionStorage.getItem('stocks');
//let isbnList;

element.set(0,
  {
    header: {
      label: 'Books available to request',
      className: 'text-center'
    },
    operation: {
      //label: null,
      className: 'row g-3 align-items-center'
    }
  }
)
element.set(1,
  {
    header: {
      label: 'Books available to donate',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'row g-3 align-items-center'
    }
  }
)
element.set(2,
  {
    header: {
      label: 'You\'ve requested the following books',
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

if (initialState === null)
  $.ajax({
    url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json',
    async: false,
    dataType: 'json',
    success: data => {
      try {
        sessionStorage.setItem('stocks', JSON.stringify(data.stocks))
        initialState = sessionStorage.getItem('stocks')
      } catch (e) { console.log(e) }
    }
  })
initialState = JSON.parse(initialState);

// if (initialState === null) {

//   initialState = async () => {
//     try {
  
//       let response = fetch('https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json');
//       console.log("a resposta");
//       console.log(response);
//       let data = await response.json();
      
//       sessionStorage.setItem('stocks', data.stocks)
//       return data.stocks;
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }

function BookList({ mode }) {

  const history = useHistory();

  const getInitialState = () => {

    switch (mode) {
      case 2:
        key = 'cart.request';
        return JSON.parse(sessionStorage.getItem(key));
      case 3:
        key = 'cart.donate';
        return JSON.parse(sessionStorage.getItem(key));
      default: return initialState
    }
  }

  console.log(mode);
  const [stocks, setStocks] = useState(getInitialState);

  console.log(stocks);

  if (stocks === null || stocks.length === 0) {
    element.get(mode).header.className = 'hide';
  }

  // if (stocks != null) {
  //   stocks.forEach(book => {
  //     if (!isbnList.includes(book.isbn)) {
  //       isbnList.push(book.isbn);
  //     } 
  //   })
  // }
  // if (stocks != null)
  //   stocks.forEach(element => {
  //     !isbnList.includes(element.isbn) ?
  //       isbnList.push(element.isbn) : null
  //   })
  // function getIsbnList() {
  //   let isbnL = new Set();
  //   if (stocks != null) {
  //     stocks.forEach(book => {
  //       isbnL.add(book.isbn);
  //     });  
  //   }
   
  //   isbnL = Array.from(isbnL);

  //   return isbnL;
  // }

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout')
      history.push('/checkout');
  }

  const [sortType, setSortType] = useState('');

  function GetSortOrder(prop, order) {    
    return function(a, b) { 
      if (order === "desc") {   
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }
      } else if (order === "asc") {
          if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }
      }    
        return 0;    
    }    
  }    

  const handleSortBy=(e)=>{
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

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className={element.get(mode).header.className}>{element.get(mode).header.label}</h1>
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
        <Dropdown className='col-auto' onSelect={handleSortBy}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item eventKey="title-AZ">Title A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="title-ZA">Title Z-A</Dropdown.Item>
            <Dropdown.Item eventKey="author-AZ">Author A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="author-ZA">Author Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className='col-auto'>
          <label htmlFor='inputSearch' className='col-form-label'>
            Search book
            </label>
        </div>

        <div className='col-auto'>
          <input
            type='input'
            id='inputSearch'
            className='form-control'
            aria-describedby='searchHelpInline'
          />
        </div>

        <div className='col-auto'>
          <Button variant='primary'>Search</Button>
        </div>
      </div>
      <div className='row booklist'>
        { stocks != null &&
          stocks.map(b =>
          <Book key={b.isbn} mode={mode}
            stock={b} stocks={stocks}
            setStocks={setStocks} />)
        }
        {/* {isbnList.map(v =>
          <Book key={v} mode={mode}
            isbn={v}
            stocks={stocks.filter(stock => stock.isbn === v)}
            setStocks={setStocks} />)} */}
      </div>
    </section >
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}