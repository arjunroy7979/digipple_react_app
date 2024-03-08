import React from 'react'
import './CarrierDetails.css'
const CarrierDetails = () => {
    return (
        <>
            <div className='wrapper-careers-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 wrapper-careers-details-main'>
                            <p>CAREERS</p>
                            <h2>Get In touch with us to get the best available Digital Solutions for your Brand.</h2>
                        </div>
                        <div className='col-12 col-md-6 wrapper-careers-details-main1'>
                            <p>
                                We’re a team of creatives who are excited about unique ideas and help companies to create amazing identity by serving with top-notch Marketing & Branding Solutions.
                            </p>
                            <button className='btn btn-sm btn-warning text-white --btn '>
                                Getin Touch Now
                                <i className="fas fa-arrow-right mx-2 "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarrierDetails