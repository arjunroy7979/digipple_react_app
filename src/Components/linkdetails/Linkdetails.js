import React from 'react'
import './Linkdetails.css'
import { Link } from 'react-router-dom'
const Linkdetails = () => {
    return (
        <>
            <div className='wrapper-link-details'>
                <div className='w-100 about'>
                    <Link to={'#about'} className='text-white'>
                        About Us
                        <i className="fas fa-arrow-right mx-2"></i>
                    </Link>
                </div>
                <div className='w-100 portfolio'>
                    <Link to={'#portfolio'} className='text-white'>
                        portfolio
                        <i className="fas fa-arrow-right mx-2"></i>
                    </Link>
                </div>
                <div className='w-100 careers'>
                    <Link to={'#careers'} className='text-white'>
                        careers
                        <i className="fas fa-arrow-right mx-2"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Linkdetails