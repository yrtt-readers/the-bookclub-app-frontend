import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const element = new Map()
//let key = '';
//let initialState = sessionStorage.getItem('stocks');

element.set(0,
  {
    key: 'stocks',
    header: {
      label: 'Books available to request',
      className: 'text-center'
    },
    operation: {
      label: null,
      className: 'row g-3 align-items-center'
    }
  }
)
element.set(1,
  {
    key: 'stocks',
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
    key: 'cart.request',
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

// if (initialState === null)
//   $.ajax({
//     url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json',
//     async: false,
//     dataType: 'json',
//     success: data => {
//       try {
//         sessionStorage.setItem('stocks', JSON.stringify(data.stocks))
//         initialState = sessionStorage.getItem('stocks')
//       } catch (e) { console.log(e) }
//     }
//   })
// initialState = JSON.parse(initialState);

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

  const getInitialStock = () => {
    if (sessionStorage.getItem(element.get(mode).key) != null)
      return JSON.parse(sessionStorage.getItem(element.get(mode).key))
    else {
      if (mode < 2) {
        $.ajax({
          url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json',
          async: false,
          dataType: 'json',
          success: data => {
            try {
              sessionStorage.setItem(element.get(mode).key, JSON.stringify(data.stocks))
            } catch (e) { console.log(e) }
          }
        })
        return JSON.parse(sessionStorage.getItem(element.get(mode).key))
      }
    }
  }

  const [stocks, setStocks] = useState(getInitialStock);
  const [sortType, setSortType] = useState('');

  if (stocks === null || stocks.length === 0)
    element.get(mode).header.className = 'hide';

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout')
      history.push('/checkout');
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

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className={element.get(mode).header.className}>{element.get(mode).header.label}</h1>
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
        <Dropdown className='col-auto' onSelect={setSortType}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>Sort by</Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
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
      </div>
    </section >
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}