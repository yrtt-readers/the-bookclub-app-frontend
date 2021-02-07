/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import './BookList.css';

function Main() {

    const [stocks, setStocks] = useState([])
    // const url = 'https://croxqcg4a2.execute-api.eu-west-2.amazonaws.com/test/stock/'
    const url = 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json'

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            setStocks(result.data)
        }
        fetchData()
    }, [])

    function onClickListener(e) {

        if (e.target.className === 'btn btn-primary donate') 
            stocks.map(v => { v.isbn === e.target.id ? v.qty += 1 : null })
        else if (e.target.className === 'btn btn-primary request') 
            stocks.map(v => { v.isbn === e.target.id ? v.qty -= 1 : null })
        else if (e.target.id === 'title-AZ') 
            stocks.sort((a, b) => { a.bookName.localeCompare(b.bookName) })
        else if (e.target.id === 'title-ZA') 
            stocks.sort((a, b) => { b.bookName.localeCompare(a.bookName) })
        else if (e.target.id === 'author-AZ') 
            stocks.sort((a, b) => { a.bookAuthors.localeCompare(b.bookAuthors) })
        else if (e.target.id === 'author-ZA') 
            stocks.sort((a, b) => { b.bookAuthors.localeCompare(a.bookAuthors) })
        
        setStocks([...stocks])
    }

    return (
        <section className='container container-margin'>
            <div className='row g-3'>
                <h1 className='text-center'>Books available to request</h1>
            </div>
            <div className='row g-3 align-items-center'>
                <Dropdown data-testid='sort' className='col-auto' onClick={onClickListener}>
                    <Dropdown.Toggle variant='primary'>
                        Sort by
            </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id='title-AZ'>Title A-Z</Dropdown.Item>
                        <Dropdown.Item id='title-ZA'>Title Z-A</Dropdown.Item>
                        <Dropdown.Item id='author-AZ'>Author A-Z</Dropdown.Item>
                        <Dropdown.Item id='author-ZA'>Author Z-A</Dropdown.Item>
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
                    <div key={stock.isbn} className='col-lg-4 col-sm-6 book'>
                        <img
                            className='img-thumbnail'
                            src={stock.thumbnail}
                            alt='book-image-not-found'
                        />
                        <p className='book-description' data-testid='bookName' id={'bookName.' + stock.isbn}>
                            <strong>{stock.bookName}</strong>
                        </p>
                        <p className='book-description' data-testid='bookAuthors' id={'bookAuthors.' + stock.isbn}>
                            <strong>{stock.bookAuthors}</strong>
                        </p>
                        <p className='book-description'>{stock.qty}</p>
                        <button
                            onClick={onClickListener}
                            className='btn btn-primary request'
                            id={stock.isbn}>
                            Request
                        </button>
                        <button
                            onClick={onClickListener}
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

export default Main;