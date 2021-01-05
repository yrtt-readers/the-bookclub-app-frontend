import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';

const isbnList = [9780060217860, 
    9780789411464,
    9780806919317,
    9780875349343,
    9780893751159,
    9780689853944,
    9780866228312,
    9780911981568,
    9780816741342]


function BookList({ mode }) {
    const [stocks, setStocks] = useState([
        { isbn: 9780060217860, qty: 3 },
        { isbn: 9780789411464, qty: 2 },
        { isbn: 9780806919317, qty: 6 },
        { isbn: 9780875349343, qty: 2 },
        { isbn: 9780893751159, qty: 3 },
        { isbn: 9780689853944, qty: 7 },
        { isbn: 9780866228312, qty: 2 },
        { isbn: 9780911981568, qty: 6 },
        { isbn: 9780911981568, qty: 2 },
        { isbn: 9780816741342, qty: 3 },
    ])
    
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