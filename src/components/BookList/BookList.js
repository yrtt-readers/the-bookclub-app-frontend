import React, { useState } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const bookListComponent = new Map()
bookListComponent.set(-1, { label: null})
bookListComponent.set(0, { label: 'Books available to request'})
bookListComponent.set(1, { label: 'Books available to donate'})
bookListComponent.set(2, { label: 'You\'ve requested the following books'})
bookListComponent.set(3, { label: 'You\'ve donated the following books'})

let key = ''
let initialState, isbnList = []

$.ajax({
  url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json',
  async: false,
  dataType: 'json',
  success: data => {
    try {
      initialState = data
    } catch (e) { console.log(e) }
  }
})

$.ajax({
  url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/availableStocks.json',
  async: false,
  dataType: 'json',
  success: data => {
    try {
      isbnList = data
    } catch (e) { console.log(e) }
  }
})

function BookList({ mode }) {

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

  if (mode >= 2) {
    isbnList = []
    stocks.forEach(element => {
      !isbnList.includes(element.isbn) ?
        isbnList.push(element.isbn) : null
    })
  }

  return (

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className='text-center'>{bookListComponent.get(mode).label}</h1>
      </div>
      <div className='row g-3 align-items-center'>
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
        {isbnList.map(v =>
          <Book key={v} mode={mode}
            isbn={v}
            stocks={stocks.filter(stock => stock.isbn === v)}
            setStocks={setStocks} />)}
      </div>
    </section>
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}