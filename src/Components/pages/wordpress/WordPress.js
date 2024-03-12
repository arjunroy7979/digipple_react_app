import React from 'react'
import './WordPress.css'
import { Link } from 'react-router-dom'
import Testimonial from '../../testimonial/Testimonial'
import QuerSolvedForm from '../querysolvedform/QuerSolvedForm.js'
import RecentNews from '../../recentnews/RecentNews.js'
import VideoImage from '../../Videoimage/VideoImage.js'
import Linkdetails from '../../linkdetails/Linkdetails.js'
import CarrierDetails from '../../carrierdetails/CarrierDetails.js'
const WordPress = () => {
  return (
    <>
      <div className='wordpress-wrapper-img'>
        <h3>WORDPRESS WEBSITE DESIGN & DEVELOPMENT COMPANY IN AHMEDABAD <span className='text-danger animate__animated animate__flash animate__infinite'>|</span></h3>
      </div>

      <div className='wordpress-conculation'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 wordpress-conculation-col1'>
              <p>Know more about Web Development Services</p>
              <h3>WordPress Website Design & Development Service in Ahmedabad India.</h3>
              <Link to={'#'}>Get your Free Consultation Now </Link>
            </div>
            <div className='col-12 col-md-6 wordpress-conculation-col2'>
              <p>There are millions of website over the internet today and on average a person visits 7-8 websites in a day, so if you are the one you need to get remembered. In order to get noticed you need advanced WordPress development services by Digipple a website development company in Ahmedabad, India.
                <br /><br />
                Digipple does not only provide WordPress website development but along with web development we provides SEO optimization with website development services and also website design service in Ahmedabad.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='wordpress-quote-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='wordpress-quote-form-child1'>
                <h3>Get your Website Designed & Developed</h3>
                <p>Get in Touch, we will respond in less than 24 hours</p>
                <div className='row'>
                  <div className='col-6 col-md-6'>100%</div>
                  <div className='col-6 col-md-6'>89%</div>
                  <div className='col-6 col-md-6'>
                    <p>Client Satisfaction Rate with our Designs</p>
                  </div>
                  <div className='col-6 col-md-6'>
                    <p>Keyword Ranking Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='wordpress-form'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name*</label>
                      <input type="text" className="form-control" id="name" placeholder='Your Sweet name' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email*</label>
                      <input type="text" className="form-control" id="email" placeholder='Your working email' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject (optional)</label>
                      <input type="text" className="form-control" id="subject" placeholder='Chhoose a subject' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">Company*</label>
                      <input type="text" className="form-control" id="company" placeholder='Your Sweet name' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone*</label>
                      <input type="text" className="form-control" id="phone" placeholder='Your working email' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="opt" className="form-label">Select Services*</label>
                      <select className='form-control' id='opt'>
                        <option>Our Services</option>
                        <option>Search engine optimization-SEO</option>
                        <option>Social media marketing- SMM</option>
                        <option>COntent marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-12 col-md-12'>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className='form-control' id='message' placeholder='Your Message' />
                  </div>
                </div>
                <div>
                  <button className='btn btn-sm btn-dark'>Get a Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='wordpress-devlopment-process'>
        <div className='container'>
          <h2 className='text-center'><span className='text-warning'>Digipple's</span> WordPress Development Process.</h2>
          <div>
            {/* horizontal accordian impliment here */}
          </div>
        </div>
      </div>

      <div className='wordpress-dev-quote'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>GET WEBSITE DONE</p>
              <h3>Get your free WordPress Website Design & Development Quote.</h3>
            </div>
            <div className='col-12 col-md-6'>
              <p>What are you waiting for? If you don’t want to read more, just get your free quote now.</p>
              <button className='btn btn-sm btn-warning'>Get Your Free Quote</button>
            </div>
          </div>
        </div>
      </div>

      <div className='wordpress-serv-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12'>
              <h3 className='text-center'>Why Choose <span className='text-warning'>Digipple's Web Development</span> Services?</h3>
            </div>
            <div className='col-12 col-md-3 text-center mt-5'>
              <img src='../images/searchicon.png' alt='img' />
              <h6>UI/UX Branded Design</h6>
              <p>Digipple's SEO focus on understanding your audience and industry. Understanding it helps Digipple's SEO to provide quality with better UX by solving searchers problem.</p>
            </div>
            <div className='col-12 col-md-3 text-center mt-5'>
              <img src='../images/google.png' alt='img' />
              <h6>Website Optimization Included</h6>
              <p>Google is the controller of the SERP. Google decides whom to rank first by some parameters and some defined policies. Following google's policies can help you rank in top.</p>
            </div>
            <div className='col-12 col-md-3 text-center mt-5'>
              <img src='../images/server.png' alt='img' />
              <h6>Conversion Rate Optimized Website</h6>
              <p>Content is the King and you may had heard many times. Do you want to experience in SEO also? Digipple's SEO Content always works based on the foundation which is build by content.</p>
            </div>
            <div className='col-12 col-md-3 text-center mt-5'>
              <img src='../images/searchicon.png' alt='img' />
              <h6>Latest technology and feature containing website</h6>
              <p>Why only work on website if you can get traffic from different channels also? Digipple along with SEO provides you the complete Omni-Channel Consultation and provides help.</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <QuerSolvedForm />
      <RecentNews />
      <VideoImage />
      <Linkdetails />
      <CarrierDetails />
    </>
  )
}

export default WordPress