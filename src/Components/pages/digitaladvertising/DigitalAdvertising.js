import React from 'react'
import './DigitalAdvertising.css'
import { Link } from 'react-router-dom'
import Testimonial from '../../testimonial/Testimonial.js'
import RecentNews from '../../recentnews/RecentNews.js'
import VideoImage from '../../Videoimage/VideoImage.js'
import Linkdetails from '../../linkdetails/Linkdetails.js'
import CarrierDetails from '../../carrierdetails/CarrierDetails.js'
import QuerSolvedForm from '../querysolvedform/QuerSolvedForm.js'
const DigitalAdvertising = () => {
  return (
    <>
      <div className='container-fluid wrapper-digital-advertising wrapper-digital-advertising-img'>
        <div className='container wrapper-digital-advertising-img-text'>
          <h1>Digital Advertising Company in Ahmedabad</h1>
          <p>
            Digital Advertising are taking. With a proper strategy any small business could beat any big brand with Digital Advertising in the Digital World.
          </p>
          <Link to={'#/get-in-touch'} className='btn btn-sm btn-dark'>
            Getin Touch
            <i className="fas fa-arrow-right mx-2"></i>
          </Link>
        </div>
      </div>

      <div className='digital-adv-wrapper-branding'>
        <div className='container digital-adv-wrapper-branding-main'>
          <div className='row'>
            <div className='col-12 col-md-6 digital-adv-wrapper-branding-main-text1'>
              <div className='digital-adv-wrapper-branding-main-text1-child'>
                <p>Know more about our Digital Branding Services</p>
              </div>
              <h3>Effective Digital Advertising Company in Ahmedabad, India.</h3>
              <Link to={'#'}>
                Get your Free Consultation Now
                <i className="fas fa-arrow-right mx-2"></i>
              </Link>
            </div>
            <div className='col-12 col-md-6 digital-adv-wrapper-branding-main-text2'>
              <p>
                Digital Ads had given the power to every small business to compete with the industry leaders and giants. Digital Advertising has made Advertising much affordable and accessible by any business or individual.
                <br />
                Digital Advertising includes Advertising your products on Google, Social Media Platforms and OTT Platforms. At Digipple we provide Digital Advertising Services at any mentioned platform.
                <br />
                Get in touch to find which platform and which type of digital advertising is best suited for your brand and product. Digipple is a Digital Advertising Company in Ahmedabad providing highly effective Digital Advertising Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container digital-adv-services-wrapper'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h3>Revolution in the Traditional Digital Advertising Era and innovation</h3>
            <p>
              Digital Advertising is boosting as many of the platforms like Google Search, Facebook, Youtube and more are earning a huge part of revenue from Paid Advertising.
            </p>
            <p>
              Digital Advertising was easy before some years when not much people were spending money in it, but now everyone has understood its worth and inclining towards it.
            </p>
            <p>
              Digipple provides Digital Advertising services in India and have some internal defined tactics for it.
            </p>
            <button className='btn btn-sm btn-dark'>
              Interested ? Then Click here
              <i class="fas fa-anchor mx-2"></i>
            </button>
          </div>
          <div className='col-12 col-md-6 accordian-wrapper-main'>
            <h3>
              Digital Advertising Services in India
            </h3>
            <div className='accordian-wrapper'>
              <ul className='accordian'>
                <li>
                  <input type='radio' name='accordian' id='first' checked />
                  <label htmlFor='first'>Facebook and Instagram Advertising</label>
                  <div className='content'>
                    <p>Your customer segment is young guys and millennials than you should do this.</p>
                  </div>
                </li>
                <li>
                  <input type='radio' name='accordian' id='second' />
                  <label htmlFor='second'>Google Ads/ PPC Campaign</label>
                  <div className='content'>
                    <p>Are you a good investor? If yes you will surely like Google Ads.</p>
                  </div>
                </li>
                <li>
                  <input type='radio' name='accordian' id='third' />
                  <label htmlFor='third'>OTT Advertising</label>
                  <div className='content'>
                    <p>You know how attractive and effective video ads are so why not try advertising on OTT.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container digital-adv-platforms mb-4'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='digital-adv-platforms-child'>
              <h3>Get your Brand Advertised on Digital Platforms.</h3>
              <p>Get in Touch, we will respond in less than 24 hours</p>
              <div className='progress-chart d-flex'>
                <div className='progress-child'>
                  <h4>100%</h4>
                  <h6>Client Satisfaction Rate with our Designs</h6>
                </div>
                <div className='progress-child'>
                  <h4>80%</h4>
                  <h6>Campaign Success Rate</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <form>
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
            </form>
          </div>
        </div>
      </div>

      <div className='container text-center digital-adv-ser-wrapper-main'>
        <h3>Why Choose Digipple's Digital Advertising Services?</h3>
        <div className='row mt-5'>
          <div className='col-12 col-md-3'>
            <img src='../images/google.png' alt='img' className='mb-3' />
            <h6>Google Certified Professionals</h6>
            <p>We have a complete team of trained and Google Certified Advertising professionals to execute your campaign.</p>
          </div>
          <div className='col-12 col-md-3'>
            <img src='../images/dollar.png' alt='img' className='mb-2' />
            <h6>Google Certified Professionals</h6>
            <p>We have a complete team of trained and Google Certified Advertising professionals to execute your campaign.</p>
          </div>
          <div className='col-12 col-md-3'>
            <img src='../images/pc.png' alt='img' className='mb-2' />
            <h6>Google Certified Professionals</h6>
            <p>We have a complete team of trained and Google Certified Advertising professionals to execute your campaign.</p>
          </div>
          <div className='col-12 col-md-3'>
            <img src='../images/circle.png' alt='img' className='mb-2' />
            <h6>Google Certified Professionals</h6>
            <p>We have a complete team of trained and Google Certified Advertising professionals to execute your campaign.</p>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className='digital-adv-wrapper-asked-ques'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 text-center mb-4'>
              <h4>Frequently Asked Questions</h4>
            </div>
            <div className='col-12 col-md-6'>
              {/* accordian */}
            </div>
            <div className='col-12 col-md-6'>
              {/* accordian */}
            </div>
          </div>
        </div>
      </div>
      <QuerSolvedForm />
      <RecentNews />
      <VideoImage />
      <Linkdetails />
      <CarrierDetails />
    </>
  )
}

export default DigitalAdvertising