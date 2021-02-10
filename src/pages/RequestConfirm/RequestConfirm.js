import React from 'react';
import { useLocation } from "react-router-dom";

function RequestConfirm() {
    const location = useLocation();
    const regionDetail = location?.state?.regionDetails;

    sessionStorage.removeItem('cart.request');

    return (
        <div>
            <section className="container container-margin">
                <h2 className="text-center">Thank you very much for your request</h2>
                <div>
                    <p>Your request ID is <strong>54358OUY</strong>.</p>
                    <p>Please collect your book at:</p>
                    <p><strong>{regionDetail.regionName}</strong></p>
                    <p>{regionDetail.houseNumber}, {regionDetail.street} {regionDetail.city} {regionDetail.county} {regionDetail.postCode} </p>
                    
                    
                    <p><strong>Please note:</strong> {regionDetail.bookCollectionMessage} </p>
                </div>
            </section>
        </div>
        
    )
}

export default RequestConfirm;