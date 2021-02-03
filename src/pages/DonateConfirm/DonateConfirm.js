import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

function DonateConfirm() {
    const location = useLocation();
    const regionId = location?.state?.regionId;

    const [ isLoading, setIsLoading ] = useState(false);
    const [ regionDetail, setRegionDetail ] = useState([]);  
    
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
     
          const response = await axios(`https://21rr58zp55.execute-api.eu-west-2.amazonaws.com/dev/regions/${regionId}/details`);
     
          setRegionDetail(response.data[0]);
          setIsLoading(false);
        };
     
        fetchData();
      }, [location]);    

    return (
        
        <div className="container container-margin">
            <h2 className="text-center">Thank you very much for your  donation.</h2>
            <h3>Please drop off your book at: </h3>
            <div>
                <div className="col-lg-4 col-sm-6">
                { isLoading ? (
                    <div>Loading region details ...</div>
                ) : (
                    <div>
                        <strong>{regionDetail.regionName}</strong>
                        <p>{regionDetail.houseNumber}, {regionDetail.street} {regionDetail.city} {regionDetail.county} {regionDetail.postCode} </p>
                    </div>
                )}
                </div>
            </div>
            <p><strong>Please note:</strong> {regionDetail.bookDonationMessage}</p>
        </div>
        
        
    )
}

export default DonateConfirm;
