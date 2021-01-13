import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
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

function BookList({ mode }) {

  const history = useHistory()

  const getInitialStock = () => {
    if (sessionStorage.getItem(element.get(mode).key) != null)
      return JSON.parse(sessionStorage.getItem(element.get(mode).key))
    if (mode < 2) {
      $.ajax({
        url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json',
        async: false,
        dataType: 'json',
        success: data => {
          try {
            sessionStorage.setItem(element.get(mode).key, JSON.stringify(data))
          } catch (e) { console.log(e) }
        }
      })
      return JSON.parse(sessionStorage.getItem(element.get(mode).key))
    }
  }

  const [stocks, setStocks] = useState(getInitialStock)
  const [sortType, setSortType] = useState('')
  const [bookList, setBookList] = useState([... new Set(stocks.map(v => { return v.isbn }))])

  if (stocks == null)
    element.get(mode).header.className = 'hide'


  function GetSortOrder(key, order) {

    let sortList = [], sortList2

    bookList.forEach(v => sortList.push([v,JSON.parse(sessionStorage.getItem('book.'+v))[key]]))

    sortList2 = [... new Set(sortList
                              .sort((a,b)=> a[1]
                              .localeCompare(b[1]))
                              .map(v => { return v[0] }))]

    order<0?sortList2 = sortList2.reverse():null
    setBookList(sortList2)    
  }

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout')
      history.push('/checkout');
  }

  function onSortListener(e) {

    setSortType(e)

    switch (sortType) {
      case 'title-AZ':
        GetSortOrder("book_name", 1)
        break
      case 'title-ZA':
        GetSortOrder("book_name", -1)
        break
      case 'author-AZ':
        GetSortOrder("book_author", 1)
        break
      case 'author-ZA':
        GetSortOrder("book_author", -1)
        break
    }

  }

  return (

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className={element.get(mode).header.className}>{element.get(mode).header.label}</h1>
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
        <Dropdown className='col-auto' onMouseOut={onSortListener} onSelect={setSortType}>
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
          <label htmlFor='inputSearch' className='col-form-label'>Search book</label>
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
        {bookList.map(v =>
          <Book key={v} mode={mode}
            isbn={v}
            stocks={stocks.filter(stock => stock.isbn === v)}
            setStocks={setStocks} />)}
      </div>
    </section >
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}