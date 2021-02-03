import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
// import Location from '../../components/Location/Location';

function RequestCheckout() {
    const history = useHistory();

    const request = JSON.parse(sessionStorage.getItem('cart.request'));
    const [ stocks, setStocks ] = useState(request);
    const [isLoading, setIsLoading] = useState(false);
    const [ regionDetail, setRegionDetail ] = useState([]);   
    
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
     
          const response = await axios(`https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/${request[0].regionId}/details`);
     
          setRegionDetail(response.data[0]);
          setIsLoading(false);
        };
     
        fetchData();
      }, []); 
    
    const handleClickConfirm = () => {
        const newTransaction = {
            isbn: request[0].isbn,
            regionId: request[0].regionId,
            requestType: 2
          }
      
          //Make a post request, pass in the newTask as the body
          axios
          .post("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/users/2/transaction", newTransaction)
          //If error, log out the error
          .catch(error => console.log(error))
        history.push({
          pathname: '/confirm-request',
          state: { regionDetails: regionDetail }
        });        
    }


    const onClickListener = () => {
        sessionStorage.removeItem('cart.request');
        history.push('/');            
    }

    return (
        
        <div className="container container-margin">
            <div>
                <h2 className="text-center">Please confirm that you wish to request the following book located at:</h2>
                <BookList key={2} mode={2} stocks={stocks} setStocks={setStocks}/>
                { isLoading ? (
                    <div>Loading region details ...</div>
                ) : (
                    <div>
                        <strong>{regionDetail.regionName}</strong>
                        <p>{regionDetail.houseNumber}, {regionDetail.street} - {regionDetail.city}, {regionDetail.county} {regionDetail.postCode} </p>
                    </div>
                )}
            </div>
            <div className="message">
                <p><strong>Please note:</strong> {regionDetail.bookCollectionMessage}</p>
            </div>
            <div>
                <button className='btn btn-primary confirmRequest button' onClick={handleClickConfirm}>Confirm</button>   
                <button className='btn btn-primary confirmRequest button' onClick={onClickListener}>Cancel</button>  
            </div>
        </div>
        
 
    );
}

export default RequestCheckout;
