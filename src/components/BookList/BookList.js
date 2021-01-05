import React, { useState } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';

const isbnList = [9780060217860,
  9780789411464,
  9780806919317,
  9780875349343,
  9780893751159,
  9780689853944,
  9780866228312,
  9780911981568,
  9780816741342]

  let initialState = []

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

function BookList({ mode }) {

  const [stocks, setStocks] = useState(initialState)

  return (

    <section className='container container-margin'>
      <div className='row g-3'>
        <h1 className='text-center'>Books available</h1>
      </div>
      <div className='row g-3 align-items-center'>
        <Dropdown className='col-auto'>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>
            Sort by
            </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Title</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Author</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Date-newest</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Date-oldest</Dropdown.Item>
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