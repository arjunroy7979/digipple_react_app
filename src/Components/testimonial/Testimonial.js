import React from 'react'
import './Testimonial.css'
const Testimonial = () => {
    return (
        <>
            <div className='container-fluid wrapper-mutual-growth'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 mb-5'>
                            <div className='wrapper-mutual-growth-main bg-white'>
                                <div className='wrapper-mutual-growth-main-text'>
                                    <p>TESTIMONIALS</p>
                                    <h2>We believe in mutual growth.</h2>
                                </div>
                                <div className=''>
                                    <img src='../images/michael.jpg' alt='img' />
                                    <h6>Solid Work Commitmetment</h6>
                                    <p>"They deliver what they commit....superb work and results...team Digipple recommened."</p>
                                    <h6><b>Ravi Patel</b></h6>
                                    <p>Founder & M.D at Earthlink Enterprise</p>
                                    <div className='rating'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <div className='mt-4'>
                                        <button className='btn rounded-circle'>
                                            <i className="fas fa-arrow-left"></i>
                                        </button>
                                        <button className='btn rounded-circle mx-2'>
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 wrapper-mutual-growth-main2-img mb-5'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial