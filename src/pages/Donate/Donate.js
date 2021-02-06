import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../../components/BookList/BookList';

function Donate() {
  const [isLoading, setIsLoading] = useState(false);
  const [ stocks, setStocks ] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
    .get("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/donate/stocks")
    .then(response => setStocks(response.data))
    .catch(error => console.log(error))
    setIsLoading(false);
  }, [])

  return (
    <div className="container container-margin text-center">
      <h1 className="text-center">Donate a book to a child</h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <BookList mode={1} stocks={stocks} setStocks={setStocks} />
      )}            
    </div>
  );
}
  
  export default Donate;
