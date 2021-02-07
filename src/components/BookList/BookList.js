/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import './BookList.css';


function BookList() {

    const [stocks, setStocks] = useState([])
    const searchUrl = 'https://croxqcg4a2.execute-api.eu-west-2.amazonaws.com/test/stock/'
    const initUrl = 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json'

    function loadStocks(e) {

        if (e === null || e.target.className === 'btn btn-primary searchBook') {
            let url = (e === null) ? initUrl : searchUrl
            useEffect(() => {
                const fetchData = async () => {
                    const result = await axios(url)
                    setStocks(result.data)
                }
                fetchData()
            }, [])
        }
        else {
            switch (e.target.className) {
                case 'btn btn-primary donate':
                    stocks.map(v => { v.isbn === e.target.id ? v.qty += 1 : null })
                    break
                case 'btn btn-primary request':
                    stocks.map(v => { v.isbn === e.target.id ? v.qty -= 1 : null })
                    break
                case 'title-AZ dropdown-item':
                    stocks.sort((a, b) => { return a.bookName.localeCompare(b.bookName)})
                    break
                case 'title-ZA dropdown-item':
                    stocks.sort((a, b) => {  return b.bookName.localeCompare(a.bookName) })
                    break
                case 'author-AZ dropdown-item':
                    stocks.sort((a, b) => {  return a.bookAuthors.localeCompare(b.bookAuthors) })
                    break
                case 'author-ZA dropdown-item':
                    stocks.sort((a, b) => {  return b.bookAuthors.localeCompare(a.bookAuthors) })
                    break
            }
            setStocks([...stocks])
        }
    }

    loadStocks(null)
    return (
        <section className='container container-margin'>
            <div className='row g-3'>
                <h1 className='text-center'>Books available to request</h1>
            </div>
            <div className='row g-3 align-items-center'>
                <Dropdown data-testid='sort' className='col-auto' onClick={loadStocks}>
                    <Dropdown.Toggle variant='primary'>
                        Sort by
            </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='title-AZ'>Title A-Z</Dropdown.Item>
                        <Dropdown.Item className='title-ZA'>Title Z-A</Dropdown.Item>
                        <Dropdown.Item className='author-AZ'>Author A-Z</Dropdown.Item>
                        <Dropdown.Item className='author-ZA'>Author Z-A</Dropdown.Item>
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
                    <button className='btn btn-primary searchBook' onClick={loadStocks}>Search</button>
                </div>
            </div>
            <div className='row booklist'>
                {stocks.map(stock =>
                    <div key={stock.isbn} className='col-lg-4 col-sm-6 book'>
                        <img
                            className='img-thumbnail'
                            src={stock.thumbnail}
                            alt='book-image-not-found'
                        />
                        <p className='book-description' data-testid='bookName'
                           id={'bookName.' + stock.isbn}>
                            <strong>{stock.bookName}</strong>
                        </p>
                        <p className='book-description' data-testid='bookAuthors'
                           id={'bookAuthors.' + stock.isbn}>
                            <strong>{stock.bookAuthors}</strong>
                        </p>
                        <p className='book-description'>{stock.qty}</p>
                        <button
                            onClick={loadStocks}
                            className='btn btn-primary request'
                            id={stock.isbn}>
                            Request
                        </button>
                        <button
                            onClick={loadStocks}
                            className='btn btn-primary donate'
                            id={stock.isbn}>
                            Donate
                        </button>
                    </div>
                )}
            </div>
        </section >
    )
}

export default BookList;