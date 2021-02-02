import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Location from '../../components/Location/Location';

function DonateConfirm() {
    const location = useLocation();
    const [ regionId, setRegionId ] = useState("");
    setRegionId(location.state.regionId);

    console.log(regionId);

    const [ regionDetail, setRegionDetail ] = useState([]);    
    useEffect(() => {
         axios
         .get(`https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/${regionId}/details`)
         .then(response => setRegionDetail(response.data))
         .catch(error => console.log(error))
    }, []);

    // "bookDonationMessage": "idea_CANARY-book_donation_message",
    

    // const loc = {
    //     address: "Hogwarts School of Witchcraft",
    //     postcode: "WD25 7LR",
    //     img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
    //   }

    return (
        
        <div className="container container-margin">
            <div>
                <h2 className="text-center">Thank you very much for your  donation.</h2>
                <h3>Please drop off your book at: </h3>
                <div className='row booklist'>
                    <Location key={location.state.regionId} locationData={regionDetail} />
                </div>
                <p><strong>Please note:</strong> {regionDetail.bookDonationMessage}</p>
            </div>
        </div>
        
        
    )
}

export default DonateConfirm;
