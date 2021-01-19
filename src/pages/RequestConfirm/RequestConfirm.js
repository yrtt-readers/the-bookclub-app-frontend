import React from 'react';
import Location from '../../components/Location/Location';

function RequestConfirm() {
    const location = {
        address: "Hogwarts School of Witchcraft",
        postcode: "WD25 7LR",
        img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
      }

    return (
        <div>
            <section className="container container-margin">
                <div className="text-center">
                    <h1 className="text-center">Thank you very much for your requests, your request ID is <strong>54358OUY</strong>. Please collect  your book at:</h1>
                    
                    <Location key={1} locationData={location}/>
                    
                    <p><strong>Please note:</strong> Please collect your books from reception.  Please allow 24 hours and call us to verify the the book is ready for collection. </p>
                </div>
            </section>
        </div>
        
    )
}

export default RequestConfirm;