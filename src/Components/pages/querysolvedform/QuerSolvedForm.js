import React from 'react'
import './QuerSolvedForm.css'
const QuerSolvedForm = () => {
    return (
        <>
            <div className='digital-adv-wrapper-query-form'>
                <div className='container'>
                    <div className='text-center mb-4'>
                        <h3>Get your Queries Solved & your free Quote now.</h3>
                        <p className='text-danger'>Describe Your Project Details</p>
                    </div>
                    <div className='query-form'>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Name*</label>
                                    <input type="text" className="form-control" id="username" placeholder='Your Sweet name' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="companyname" className="form-label">Company*</label>
                                    <input type="text" className="form-control" id="companyname" placeholder='Your Company name' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="emails" className="form-label">Email*</label>
                                    <input type="text" className="form-control" id="emails" placeholder='Your working email' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="phoneno" className="form-label">Phone*</label>
                                    <input type="text" className="form-control" id="phoneno" placeholder='Your Phone number' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="subjects" className="form-label">Subject (optional)</label>
                                    <input type="text" className="form-control" id="subjects" placeholder='Choose a subject' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className="mb-3">
                                    <label htmlFor="option" className="form-label">Multiple Choice*</label>
                                    <select className='form-control' id='option'>
                                        <option>Digital Marketing</option>
                                        <option>Digital Branding</option>
                                        <option>Creative Designs</option>
                                        <option>Digital Advertising</option>
                                        <option>Website Devlopment</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-12'>
                                <div className="mb-3">
                                    <label htmlFor="messages" className="form-label">Message</label>
                                    <textarea className="form-control" placeholder='Your Message' id='messages' />
                                </div>
                            </div>
                            <div className='col-12 col-md-12'>
                                <div className="mb-3">
                                    <input type="checkbox" id="checkbox" placeholder='Your Sweet name' />
                                    <label htmlFor="checkbox" className="form-label mx-1">Expanding Influence</label>
                                </div>
                            </div>
                            <div className='col-12 col-md-12'>
                                <div className="mb-3">
                                    <button className='btn btn-sm btn-dark'>Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuerSolvedForm