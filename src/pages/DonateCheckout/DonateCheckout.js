import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import Dropdown from 'react-bootstrap/Dropdown';

function DonateCheckout() {

  const history = useHistory();

  const donation = JSON.parse(sessionStorage.getItem('cart.donate'));
  const [ stocks, setStocks ] = useState(donation);
  
  const [ regions, setRegion ] = useState([]);
  useEffect(() => {
      axios
      .get("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/active")
      .then(response => setRegion(response.data))
      .catch(error => console.log(error))
  }, [])

  const [ regionSelected, setRegionSelected ] = useState('');

  const getRegionSelected = e => {
    setRegionSelected(e);

    // region = regionSelected; 
    
    console.log(regionSelected);
  };

  function onClickListener() {
    //if (e.target.className === 'btn btn-primary confirmCheckout')

    history.push({
      pathname: '/confirm-donation',
      state: { regionId: regionSelected }
    });
  }

  return (
    <div>
      <section className="container container-margin">
        <div>
          <h2>Please select a drop off location and confirm that you wish to donate the following books:</h2>
        
          <BookList key={3} mode={3} stocks={stocks} setStocks={setStocks} />
        </div>
        
        <div>
          <h3>Drop off location:</h3>
          <Dropdown onSelect={setRegionSelected}> 
            <Dropdown.Toggle id="dropdown-custom-components">
              Regions - Post Code
            </Dropdown.Toggle>

            <Dropdown.Menu>
              { regions != null &&
                regions.map(region =>
                  <Dropdown.Item key={region.regionId} onChange={getRegionSelected} eventKey={region.regionId}>{region.regionName} - {region.postCode}</Dropdown.Item>)
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button className='btn btn-primary confirmCheckout' onClick={onClickListener}>Confirm</button>     
      </section>
    </div>
  );
}

export default DonateCheckout;