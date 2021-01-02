import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const isbnList = [9780060217860,9780789411464]

  const [stocks, setStocks] = useState([
    { isbn: 9780789411464, qty: 1 },
    { isbn: 9780789411464, qty: 2 },
    { isbn: 9780789411464, qty: 1 },
    { isbn: 9780060217860, qty: 2 },
    { isbn: 9780060217860, qty: 3 },
  ])

  return (
    <div>
      <Header />
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
        <Book isbn={isbnList[0]} stocks={stocks.filter(stock => stock.isbn === isbnList[0])} setStocks={setStocks} />
        </div>
      </section>
      <footer className='footer mt-auto py-3 bg-light'>The Book Club!</footer>
    </div>
  );
}

export default App;
