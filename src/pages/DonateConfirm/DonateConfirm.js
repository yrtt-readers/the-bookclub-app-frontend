import React from 'react';
import Location from '../../components/Location/Location';

function DonateConfirm() {
    const location = {
        address: "Hogwarts School of Witchcraft",
        postcode: "WD25 7LR",
        img: "https://yrtt-readers.github.io/the-bookclub/assets/images/hogwarts.jpg"
      }

    return (
        <div>
            <section className="container container-margin">
                <div className="text-center">
                    <h1 className="text-center">Thank you very much for your  donation. Please drop off your book at:</h1>
                    <div className='row booklist'>
                        <Location key={1} locationData={location}/>
                    </div>
                    <p><strong>Please note:</strong> Our office is open 9:00 - 15:00. Please ask for Ms Smith at reception.</p>
                </div>
            </section>
        </div>
        
    )
}

export default DonateConfirm;
