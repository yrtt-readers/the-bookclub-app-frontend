/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import './BookList.css';

function Main() {

    const [stocks, setStocks] = useState([])
    const url = 'https://croxqcg4a2.execute-api.eu-west-2.amazonaws.com/test/stock/'
    // const initUrl = 'https://yrtt-readers.github.io/the-bookclub/assets/data/stocks.json'

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            setStocks(result.data)
        }
        fetchData()
    }, [stocks])

    function onClickListener(e) {

        console.log(e.target.id)

        if (e.target.className === 'btn btn-primary donate') {
            stocks.map(v => { v.isbn === e.target.id ? v.qty += 1 : null })
            setStocks(stocks)
            console.log(stocks)
        }
        else if (e.target.className === 'btn btn-primary request') {
            stocks.map(v => { v.isbn === e.target.id ? v.qty -= 1 : null })
            setStocks(stocks)
            console.log(stocks)
        }
        else if (e.target.className === 'btn btn-primary searchBook') {
            console.log(stocks)
        }
        else if (e.target.className === 'btn btn-primary checkout')
            history.push('/checkout')
    }

    function onSortListener(e) {

        console.log(e.target)

        switch (sortType) {
            case 'title-AZ':
                stocks.sort((a, b) => { a.bookName.localeCompare(b.bookName) })
                setStocks(stocks)
                console.log(stocks)
                break
            case 'title-ZA':
                stocks.sort((a, b) => { b.bookName.localeCompare(a.bookName) })
                setStocks(stocks)
                console.log(stocks)
                break
            case 'author-AZ':
                stocks.sort((a, b) => { a.bookAuthors.localeCompare(b.bookAuthors) })
                setStocks(stocks)
                console.log(stocks)
                break
            case 'author-ZA':
                stocks.sort((a, b) => { b.bookAuthors.localeCompare(a.bookAuthors) })
                setStocks(stocks)
                console.log(stocks)
                break
        }
    }

    return (
        <section className='container container-margin'>
            <div className='row g-3'>
                <h1 className='text-center'>Books available to request</h1>
            </div>
            <div className='row g-3 align-items-center'>
                <Dropdown data-testid='sort' className='col-auto' onSelect={onSortListener}>
                    <Dropdown.Toggle variant='primary' id='dropdown-basic-button'>
                        Sort by
            </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onMouseOut={onSortListener} eventKey="title-AZ">Title A-Z</Dropdown.Item>
                        <Dropdown.Item onMouseOut={onSortListener} eventKey="title-ZA">Title Z-A</Dropdown.Item>
                        <Dropdown.Item onMouseOut={onSortListener} eventKey="author-AZ">Author A-Z</Dropdown.Item>
                        <Dropdown.Item onMouseOut={onSortListener} eventKey="author-ZA">Author Z-A</Dropdown.Item>
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
                    <Book key={stock.isbn} stock={stock} />)}
            </div>
        </section >
    )

    function Book({ stock }) {

        return (
            <div className='col-lg-4 col-sm-6 book'>
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
            </div>
        )

    }
}

export default Main;