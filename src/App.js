import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
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
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/551629-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Mad Jack</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>
            </p>
            <p className='book-description'>N/A</p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/9943475-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Wider Than the Sky</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              A diverse anthology of poems by William Shakespeare...
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/2643729-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Balloon</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              "Look out the window--everything's white..."
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/667024-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Mathmania</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              It's math with a Puzzlemania twist!...
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/9600218-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Brave Little Tailor</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              A tailor who kills seven flies with one blow...
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/437328-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Red Dog</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              In the rugged Wyoming territory, the...
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/657610-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Hamsters</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>N/A</p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/9670138-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Arizona</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>N/A</p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
          <div className='col-lg-4 col-sm-6 book'>
            <img
              className='img-thumbnail'
              src='https://covers.openlibrary.org/b/id/1551657-L.jpg'
              alt='book-image-not-found'
            />
            <p className='book-description'>
              <strong>Where Is Carmen Sandiego?</strong>
            </p>
            <p className='book-description'>
              <strong>Author names</strong>{' '}
            </p>
            <p className='book-description'>
              A skilled thief on a mysterious mission, Carmen Sandi...
            </p>
            <p className='book-description'>Book Quantity</p>
            <p className='book-description'>Post Code</p>
            <p className='book-description'>
              <a href='#'>More info</a>
            </p>
            <button className='btn btn-primary request'>Request</button>
          </div>
        </div>
      </section>
      <footer className='text-center footer mt-auto py-3 bg-light'>The BookClub!</footer>
    </div>
  );
}

export default App;
