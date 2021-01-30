import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../../components/BookList/BookList';

function Donate() {
  const [ stocks, setStocks ] = useState([]);
  useEffect(() => {
      axios
      .get("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/donate/stocks")
      .then(response => setStocks(response.data))
      .catch(error => console.log(error))
  }, [])

  console.log(stocks);
  return (
    <div className="container container-margin">
        <div>
            <h1 className="text-center">Donate a book to a child</h1>              
            <BookList mode={1} stocks={stocks} setStocks={setStocks} />
        </div>        
    </div>
  );
}
  
  export default Donate;
