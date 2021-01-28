/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
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

  const url = 'https://croxqcg4a2.execute-api.eu-west-2.amazonaws.com/test/stock/'
  const history = useHistory()
  const [sortType, setSortType] = useState('')
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then(response => setStocks(response.data))
      .catch(error => console.log(error))
  }, [])

  if (stocks == null)
    element.get(mode).header.className = 'hide'

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout')
      history.push('/checkout');
    else if (e.target.className === 'btn btn-primary searchBook') {
      const url = 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json'
      useEffect(() => {
        axios
          .get(url)
          .then(response => setStocks(response.data))
          .catch(error => console.log(error))
      }, [])
    }
  }

  function onSortListener() {

    switch (sortType) {
      case 'title-AZ':
        setStocks(stocks.sort((a, b) => { a.bookName.localeCompare(b.bookName) }))
        break
      case 'title-ZA':
        setStocks(stocks.sort((a, b) => { b.bookName.localeCompare(a.bookName) }))
        break
      case 'author-AZ':
        setStocks(stocks.sort((a, b) => { a.bookAuthors.localeCompare(b.bookAuthors) }))
        break
      case 'author-ZA':
        setStocks(stocks.sort((a, b) => { b.bookAuthors.localeCompare(a.bookAuthors) }))
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
        <Dropdown data-testid='sort' className='col-auto' onMouseOut={onSortListener} onSelect={setSortType}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
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
          <button className='btn btn-primary searchBook' onClick={onClickListener}>Search</button>
        </div>
      </div>
      <div className='row booklist'>
        {stocks.map(stock =>
          <Book key={stock.isbn} mode={mode}
            stock={stock}
            updateStocks={stocks}
            setStocks={setStocks} />)}
      </div>
    </section >
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}