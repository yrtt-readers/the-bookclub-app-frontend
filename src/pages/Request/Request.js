import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../../components/BookList/BookList';
// const BookList = lazy(() => import('../../components/BookList/BookList'));

function Request() {
  const [ stocks, setStocks ] = useState([]);
  useEffect(() => {
      axios
      .get("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/request/stocks")
      .then(response => setStocks(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="container container-margin text-center">
        <h1 className="space-title">Request a book for a child</h1>
        <BookList mode={0} stocks={stocks} setStocks={setStocks} />
    </div>        
  );
}
  
export default Request;