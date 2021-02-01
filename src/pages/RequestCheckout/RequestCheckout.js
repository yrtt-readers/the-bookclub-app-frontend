import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import Location from '../../components/Location/Location';

function RequestCheckout() {
    const [ regionDetail, setRegionDetail ] = useState([]);    
    useEffect(() => {
        axios
         .get("https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/6/details")
         .then(response => setRegionDetail(response.data))
         .catch(error => console.log(error))
    }, []);

    // const bookSelected = JSON.parse(sessionStorage.getItem('cart.request'))[0];
    // const regionId = bookSelected.regionId;
    // console.log(regionId);

    console.log(regionDetail);
    const history = useHistory();
    
    const onClickListener = (e) => {
        if (e.target.className === 'btn btn-primary confirmRequest')
            history.push('/confirm-request');
        else if (e.target.className === 'btn btn-primary confirmRequest cancel') {
            sessionStorage.removeItem('cart.request');
            history.push('/');
        }
            
    }

    // const location = {
    //     address: "Hogwarts School of Witchcraft",
    //     postcode: "WD25 7LR",
    //     img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
    // }
    return (
        
        <div className="container container-margin">
            <div>
                <h2 className="text-center">Please confirm that you wish to request the following book located at:</h2>
                <BookList key={2} mode={2} />
                <Location key={1} locationData={regionDetail}/>
            </div>
            <div className="message">
                <p><strong>Please note:</strong> Please collect your books from reception.  Please allow 24 hours and call us to verify the the book is ready for collection.</p>
            </div>

            <button className='btn btn-primary confirmRequest' onClick={onClickListener}>Confirm</button>   
            <button className='btn btn-primary confirmRequest cancel' onClick={onClickListener}>Cancel</button>  
        </div>
        
 
    );
}

export default RequestCheckout;
