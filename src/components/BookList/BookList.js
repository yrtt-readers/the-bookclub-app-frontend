import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const element = new Map()
let key = ''
let initialState = sessionStorage.getItem('stocks')
let initList = []

element.set(0,
  {
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
    url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json',
    async: false,
    dataType: 'json',
    success: data => {
      try {
        sessionStorage.setItem('stocks', JSON.stringify(data))
        initialState = sessionStorage.getItem('stocks')
      } catch (e) { console.log(e) }
    }
  })
initialState = JSON.parse(initialState)

function BookList({ mode }) {

  const history = useHistory()

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
  const [stocks, setStocks] = useState(getInitialState)

  initList = []
  if (stocks != null)
    stocks.forEach(element => {
      !initList.includes(element.isbn) ?
        initList.push(element.isbn) : null
    })
  else if (stocks == null || stocks.length == 0)
    element.get(mode).header.className = 'hide'

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout')
      history.push('/checkout');
  }

  return (

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className={element.get(mode).header.className}>{element.get(mode).header.label}</h1>
      </div>
      <div className={element.get(mode).operation.className}>
      <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
        <Dropdown className='col-auto'>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>
            Sort by
            </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Title</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Author</Dropdown.Item>
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
        {initList.map(v =>
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