import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Book from '../../components/Book/Book';
import BookList from '../../components/BookList/BookList';
import Dropdown from 'react-bootstrap/Dropdown';
import './DonateCheckout.css'

function DonateCheckout() {
  const history = useHistory();

  const donation = JSON.parse(sessionStorage.getItem('cart.donate'));
  const [ stocks, setStocks ] = useState(donation);
  const [isLoading, setIsLoading] = useState(false);
  const [ regions, setRegion ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
 
      const response = await axios("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/active");
 
      setRegion(response.data)
      setIsLoading(false);
    };
 
    fetchData();
  }, []);

  const [ regionSelected, setRegionSelected ] = useState('');

  const getRegionSelected = e => {
    setRegionSelected(e);
  };

  function handleDonateCheckout() {
    const newTransaction = {
      isbn: donation[0].isbn,
      regionId: regionSelected,
      requestType: 1
    }

    //Make a post request, pass in the newTask as the body
    axios
    .post("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/users/3/transaction", newTransaction)
    //If error, log out the error
    .catch(error => console.log(error))
   
    history.push({
      pathname: '/confirm-donation',
      state: { regionId: regionSelected }
    });
  }

  function handleCancel() {
    sessionStorage.removeItem('cart.donate');
    history.push('/');            
  }

  return (
  
      <section className="container container-margin">
        <div>
          <h2>Please select a drop off location and confirm that you wish to donate the following books:</h2>
          { stocks.length > 1 && 
            <BookList key={3} mode={3} stocks={stocks} setStocks={setStocks} />
          }
          <Book key={3} mode={3} stock={stocks[0]} stocks={stocks} setStocks={setStocks} />
          
        </div>
        
        <div className='margin-region'>
          <h3>Drop off location:</h3>
          <Dropdown onSelect={setRegionSelected}> 
            <Dropdown.Toggle id="dropdown-custom-components">
              Regions - Post Code
            </Dropdown.Toggle>

            <Dropdown.Menu>
            { isLoading ? (
                <div>Loading regions ...</div>
              ) : (
                regions != null &&
                regions.map(region =>
                  <Dropdown.Item key={region.regionId} onChange={getRegionSelected} eventKey={region.regionId}>{region.regionName} - {region.postCode}</Dropdown.Item>)
            )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button type='button' className='btn btn-success' onClick={handleDonateCheckout}>Confirm</button>
        <button type='button' className='btn btn-danger' onClick={handleCancel}>Cancel</button>
      </section>
  );
}

export default DonateCheckout;