import React from 'react';

function Location({ locationData }) {

    return (
        <div className='col-lg-4 col-sm-6 location'>
            <img
                className='img-thumbnail'
                src={locationData.img}
                alt='location-image-not-found'
            />
            <p className='location-address'>
                <strong>{locationData.address}</strong>
            </p>
            <p className='location-postcode'>{locationData.postcode}</p>
        </div>
    )
}

export default Location;