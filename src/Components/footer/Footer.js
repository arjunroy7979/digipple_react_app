import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    const [open, setOpen] = useState(false);
    const [opensearch, setOpenSearch] = useState(false);
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <img src='../images/digipple_logo.png' alt='img' />
                            <p>E-mail Us</p>
                            <p>info@digipple (Work) hr@digipple.com</p>
                            <div className='social-icons'>
                                <p>Socialize with us</p>
                                <Link to={'#facebook'}>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to={'#instagram'}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to={'#linkedin'}>
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                                <Link to={'#twitter'}>
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h6 className='mb-3'>Head Office</h6>
                            <p>
                                611, Shivalik Shilp,
                                Iskcon Cross Rd,
                                Sarkhej-Gandhinagar Highway,
                                Ahmedabad India, 380015
                            </p>
                            <h6 className='mb-3'>Inquiries</h6>
                            <p>+91 98981 85798 (Work)</p>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h6 className='mb-3'>Search</h6>
                            <input type='text' placeholder='Search' className='form-control' />
                            <h6 className='mt-3'>Important Links</h6>
                            <ul>
                                <li><Link to={'#'}>Book an Introductory Call with Digipple</Link></li>
                                <li><Link to={'#'}>Business Development Executive Job Application</Link></li>
                                <li><Link to={'#'}>Digital Marketing</Link></li>
                                <li><Link to={'#'}>Digital Branding</Link></li>
                                <li><Link to={'#'}>Digital Advertising</Link></li>
                                <li><Link to={'#'}>Creative Graphic Design</Link></li>
                                <li><Link to={'#'}>WordPress Development</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h6 className='mb-3'>Stay in touch</h6>
                            <input type='text' placeholder='Your email address' className='form-control' />
                            <p>Subscribe</p>
                            <h6 className='mt-3'>Work Links</h6>
                            <ul className='footer-list'>
                                <li><Link to={'#'}>Our Portfolio</Link></li>
                                <li><Link to={'#'}>Career</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row copyright-section'>
                        <div className='col-12 col-md-9 mt-2'>
                            <p>
                                © 2024, DIGIPPLE DIGITAL SOLUTIONS PRIVATE LIMITED. Made with passion by Digipple in India
                            </p>
                        </div>
                        <div className='col-12 col-md-3 mt-2'>
                            <p>
                                All right & wrongs reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='footer-side-links'>
                <div>
                    <strong>Scroll to top</strong>
                </div>
                {
                    opensearch && (
                        <div className='form-serach'>
                            <i className="fa fa-times-circle btn" onClick={() => setOpenSearch(false)}></i>
                            <input type='text' placeholder='Search Here...' className='form-control' />
                        </div>
                    )
                }
                <i className="fas fa-search btn" onClick={() => setOpenSearch(true)}></i>
                <div className='social-link'>
                    <p>Follow Us -</p>
                    <Link to={'/#facebook'} className="fab fa-facebook text-dark"></Link>
                    <Link to={'/#linkedin'} className="fab fa-linkedin-in text-dark"></Link>
                    <Link to={'/#twitter'} className="fab fa-twitter-square text-dark"></Link>
                </div>
                {/* --chat support-- */}
                {
                    open && (
                        <div className='chat-support'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 col-md-8'>
                                        <h4>Arjun Here</h4>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                        <i class="fa fa-ellipsis-v btn"></i>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                        <i class="fas fa-angle-down btn" onClick={() => setOpen(false)}></i>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-md-10'>
                                        <p>Welcome to our website. Ask me anything🎉</p>
                                    </div>
                                    <div className='col-12 col-md-2'>
                                        <img src='../images/customercare.png' alt='img' style={{ height: '2.5rem', position: 'relative', right: '2rem' }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-md-12 d-flex'>
                                        <i class="fa fa-circle text-success"></i>
                                        <p className='mx-2'>Arjun Here to Help you from Digipple</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-md-12'>
                                        <input type='text' placeholder='Enter Your Message...' className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    open ? <div className='comment'>
                        <span span className="badge badge-light">1</span>
                        <i className="fa fa-paper-plane btn"></i>
                    </div > : <div className='comment'>
                        <span span className="badge badge-light">1</span>
                        <i className="fas fa-comment-alt btn" onClick={() => setOpen(true)}></i>
                    </div >
                }


            </div >
        </>
    )
}

export default Footer