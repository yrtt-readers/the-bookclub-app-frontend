import React from 'react';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import Location from '../../components/Location/Location';

function RequestCheckout() {
    const history = useHistory()
    
    const onClickListener = (e) => {
        if (e.target.className === 'btn btn-primary confirmRequest')
            history.push('/confirm-request');
        else if (e.target.className === 'btn btn-primary confirmRequest cancel') {
            sessionStorage.removeItem('cart.request');
            history.push('/');
        }
            
    }

    const location = {
        address: "Hogwarts School of Witchcraft",
        postcode: "WD25 7LR",
        img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
    }
    return (
        
        <div className="container container-margin">
            <div>
                <h2 className="text-center">Please confirm that you wish to request the following book located at:</h2>
                <BookList key={2} mode={2} />
                <Location key={1} locationData={location}/>
            </div>
            <div className="space">
                <p><strong>Please note:</strong> Please collect your books from reception.  Please allow 24 hours and call us to verify the the book is ready for collection.</p>
            </div>

            <button className='btn btn-primary confirmRequest' onClick={onClickListener}>Confirm</button>   
            <button className='btn btn-primary confirmRequest cancel' onClick={onClickListener}>Cancel</button>  
        </div>
        

    );
}

export default RequestCheckout;
