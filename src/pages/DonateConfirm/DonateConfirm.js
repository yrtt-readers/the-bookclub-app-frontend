import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

function DonateConfirm() {
    const location = useLocation();
    const regionId = location?.state?.regionId;

    const [ regionDetail, setRegionDetail ] = useState([]);    

    useEffect(() => {
         axios
         .get(`https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/${regionId}/details`)
         .then(response => setRegionDetail(response.data[0]))
         .catch(error => console.log(error))
    }, [location]);

    console.log(regionDetail);

    // "bookDonationMessage": "idea_CANARY-book_donation_message",
    

    // const loc = {
    //     address: "Hogwarts School of Witchcraft",
    //     postcode: "WD25 7LR",
    //     img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
    //   }

    return (
        
        <div className="container container-margin">
            <h2 className="text-center">Thank you very much for your  donation.</h2>
            <h3>Please drop off your book at: </h3>
            <div>
                <div className="col-lg-4 col-sm-6">
                    <strong>{regionDetail.regionName}</strong>
                    <p>{regionDetail.houseNumber}, {regionDetail.street} - {regionDetail.city}, {regionDetail.county}</p>
                </div>
            </div>
            <p><strong>Please note:</strong> {regionDetail.bookDonationMessage}</p>
        </div>
        
        
    )
}

export default DonateConfirm;
