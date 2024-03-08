import React from 'react'
import './RecentNews.css'
import { Link } from 'react-router-dom'
const RecentNews = () => {
    return (
        <>
            <div className='container-fluid wrapper-recent-news'>
                <div className='container wrapper-recent-news-header'>
                    <p>NON-PROFIT INITIATIVE</p>
                    <h3>Recent News.</h3>
                </div>
                <div className='container wrapper-recent-news-main'>
                    <div className="card">
                        <div className="card-body">
                            <div className='d-flex'>
                                <div>
                                    <img src='../images/one.png' alt='img' />
                                </div>
                                <div className='mx-3'>
                                    <p>Posted by Digipple <br />February 8, 2021</p>
                                </div>
                            </div>
                            <div className='wrapper-recent-news-details'>
                                <p>Digital Branding  8 min read</p>
                                <h5>Introduction of Digital Branding</h5>
                            </div>
                            <Link to={'#readmore'}>
                                Read More
                                <i className="fas fa-arrow-right mx-2"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="card-body">
                            <div className='d-flex'>
                                <div>
                                    <img src='../images/one.png' alt='img' />
                                </div>
                                <div className='mx-3'>
                                    <p>Posted by Digipple <br />February 8, 2021</p>
                                </div>
                            </div>
                            <div className='wrapper-recent-news-details'>
                                <p>Digital Branding  8 min read</p>
                                <h5>Introduction of Digital Branding</h5>
                            </div>
                            <Link to={'#readmore'}>
                                Read More
                                <i className="fas fa-arrow-right mx-2"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='d-flex'>
                                <div>
                                    <img src='../images/one.png' alt='img' />
                                </div>
                                <div className='mx-3'>
                                    <p>Posted by Digipple <br />February 8, 2021</p>
                                </div>
                            </div>
                            <div className='wrapper-recent-news-details'>
                                <p>Digital Branding  8 min read</p>
                                <h5>Introduction of Digital Branding</h5>
                            </div>
                            <Link to={'#readmore'}>
                                Read More
                                <i className="fas fa-arrow-right mx-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentNews