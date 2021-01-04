import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import Main from './components/Main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const isbnList = [9780060217860, 
                    9780789411464,
                    9780806919317,
                    9780875349343,
                    9780893751159,
                    9780689853944,
                    9780866228312,
                    9780911981568,
                    9780816741342]

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
      <div className="App">
        <Main />
      </div>
        
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
            <Book key={v} mode={0}
              isbn={v}
              stocks={stocks.filter(stock => stock.isbn === v)}
              setStocks={setStocks} />)}
        </div>
      </section>
      <footer className='text-center footer mt-auto py-3 bg-light'>The BookClub!</footer>
    </div>
  );
}

export default App;
