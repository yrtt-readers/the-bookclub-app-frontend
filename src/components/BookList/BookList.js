import React, { useState, useEffect } from 'react'; 
import { useHistory, Link } from "react-router-dom";
//import $ from 'jquery';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookList.css';
import Book from '../Book/Book';
//import { data } from 'jquery';

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
      label: 'Select a book from the list',
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

  const history = useHistory();

  // componentDidAmount() {
  //   const response = await fetch("https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json");
  //   const stock = await response.json();

  //   return stock.map(s => s.stocks);
  // }

  // const getInitialStock = async () => {
    

  //   const storedData = sessionStorage.getItem(element.get(mode).key);

  //   if (storedData != null)
  //     return JSON.parse(storedData);
    
  //   if (mode < 2) {
  //     return fetchData();
  //   }
  // }
    
        // $.ajax({
        //   url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json',
        //   async: false,
        //   dataType: 'json',
        //   success: data => {
        //     try {
        //       sessionStorage.setItem(element.get(mode).key, JSON.stringify(data.stocks))
        //     } catch (e) { console.log(e) }
        //   }
        // })
        // return JSON.parse(sessionStorage.getItem(element.get(mode).key))
 
  //const [stocks, setStocks] = useState([]);
  const cache = {};

  const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setStatus('fetching');
            if (cache[url]) {
                const d = cache[url];
                setStocks(d);
                setStatus('fetched');
            } else {
                const response = await fetch(url);
                const json = await response.json();
                cache[url] = json; // set response in cache;
                setStocks(json);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);

    return { stocks };
  };

  const stocks = useFetch("https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json");

  // useEffect(() => {
  //   if (sessionStorage.getItem(element.get(mode).key) != null)
  //     setStocks(JSON.parse(sessionStorage.getItem(element.get(mode).key)))
  //   else {
  //     fetch("https://yrtt-readers.github.io/the-bookclub/assets/data/stocks_new.json").then(
  //         res => setStocks(res.stocks)
  //     )
  //   }
  // }, [])

  // const [sortType, setSortType] = useState('');
  
  if (stocks === null)
    element.get(mode).header.className = 'hide'

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary checkout') {
      if (mode === 1 && sessionStorage.getItem('cart.donate') != null)
        history.push('/checkout-donation');
    }
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
    
      { mode === 1 &&
        <p>If your book is not listed below <Link to="/">click here</Link> to enter the book details</p>
      }
      
      <div className={element.get(mode).operation.className}>
        <Dropdown className='col-auto' onSelect={setSortType}>
          <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>Sort by</Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
            <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='left'>
          <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
        </div>
        
        <div className='right'>
            <input
              type='input'
              id='inputSearch'
              className='form-control'
              aria-describedby='searchHelpInline'
              placeholder='Search book'
            />
            <button className='btn btn-primary'>Search</button>
        </div>    
      </div>
      {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (stocks.map(data => <div>{data}</div>)))} */}
      <div className='row booklist'>
        { stocks != null &&
          stocks.map(b =>
          <Book key={b.isbn} mode={mode}
            stock={b} stocks={stocks}
            setStocks={setStocks} />)
        }
      </div>
      <div className={element.get(mode).operation.className}>
        <button className='btn btn-primary checkout' onClick={onClickListener}>Checkout</button>
      </div>
    </section >
  );
}

export default BookList;

BookList.propTypes = {
  mode: PropTypes.number
}