import React from 'react';

function Location({ regionDetail }) {

    return (
        <div className='col-lg-4 col-sm-6 location'>
            {/* "regionName": "Idea Canary Warf",
            "addressId": "2",
            "houseNumber": "Churchill Place",
            "street": "",
            "city": "London",
            "county": "Tower Hamlets",
            "country": "UK",
            "postCode": "E14 5RB" */}

            {
                regionDetail ? <div> regionDetail.regionName</div> : <div>Loading...</div>
            }
            {/* <p className='location-address'>
                <strong>{regionDetail.regionName}</strong>
            </p>
            <p className='location-address'>
                {regionDetail.houseNumber}, {regionDetail.street} - {regionDetail.city}, {regionDetail.county}, 
            </p>
            <p className='location-postcode'>{regionDetail.country} - {regionDetail.postCode}</p> */}
        </div>
    )
}

export default Location;