import React from 'react';
import $ from 'jquery';
import Location from '../../components/Location/Location';

const key = 'locations'

function Shipping() {

    let locationList = sessionStorage.getItem(key)

    if (locationList === null)
        $.ajax({
            url: 'https://yrtt-readers.github.io/the-bookclub/assets/data/locations.json',
            async: false,
            success: data => {
                try {
                    sessionStorage
                        .setItem(key,
                            JSON.stringify(data))

                    locationList = sessionStorage.getItem(key)
                } catch (e) { console.log(e) }
            }
        })

    locationList = JSON.parse(locationList)

    return (
        <div>
            <section className="container container-margin">
                <div className="text-center">
                    <h1 className="text-center">Drop off or pick up your books at:</h1>
                    <div className='row booklist'>
                        {locationList.map((v,i) =>
                            <Location key={i} locationData={v}/>)}
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Shipping;