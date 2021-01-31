import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Location from '../../components/Location/Location';

function DonateConfirm() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state.regionId); // result: 'some_value'
     }, [location]);

    const loc = {
        address: "Hogwarts School of Witchcraft",
        postcode: "WD25 7LR",
        img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
      }

    return (
        
        <div className="container container-margin">
            <div>
                <h2 className="text-center">Thank you very much for your  donation.</h2>
                <h3>Please drop off your book at: {location.state.regionId} </h3>
                <div className='row booklist'>
                    <Location key={1} locationData={loc}/>
                </div>
                <p><strong>Please note:</strong> Our office is open 9:00 - 15:00. Please ask for Ms Smith at reception.</p>
            </div>
        </div>
        
        
    )
}

export default DonateConfirm;
