import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import Testimonial from '../../testimonial/Testimonial'
import RecentNews from '../../recentnews/RecentNews.js'
import VideoImage from '../../Videoimage/VideoImage.js'
import Linkdetails from '../../linkdetails/Linkdetails.js'
import CarrierDetails from '../../carrierdetails/CarrierDetails.js'
const Aboutus = () => {
  return (
    <>
      <div className='about-wrapper-container-bg'>
        <div className='container about-wrapper-container-bg-container'>
          <p className='text-danger'>Digipple Keeps</p>
          <h1>Forever Expanding Your| Influence!</h1>
          <div className='about-wrapper-container-bg-child'>
            <div>
              <strong> 57 + Succeded Projects</strong>
            </div>
            <div>
              <strong>26 + Happy Clients</strong>
            </div>
            <div>
              <strong>4 Creative Leaders</strong>
            </div>
          </div>
        </div>
      </div>

      <div className='about-wrapper-capabilities'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <p>OUR CAPABILITIES</p>
              <h2>We're your growth catalyst to your business</h2>
            </div>
            <div className='col-12 col-md-4 about-wrapper-capabilities-child'>
              <p>01.</p>
              <h5>Full-Stack Digital Marketing Capabilities</h5>
              <p>There is a fish you need in every digital pond, we believe in throwing the hook at the right place and not where our expertise stays.</p>
            </div>
            <div className='col-12 col-md-4 about-wrapper-capabilities-child'>
              <p>02.</p>
              <h5>Modern Designing & visual creation</h5>
              <p>Experience the new-age digital design and art backed with a lot of though provocation, research & technology</p>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12 col-md-4'></div>
            <div className='col-12 col-md-4 about-wrapper-capabilities-child'>
              <p>03.</p>
              <h5>Advertising with highest ROI</h5>
              <p>Know where every of your single penny is going. Know exactly where to spend and how we spend to get the most ROI.</p>
            </div>
            <div className='col-12 col-md-4 about-wrapper-capabilities-child'>
              <p>04.</p>
              <h5>Holistic Campaign & Content Strategies</h5>
              <p>Campaigns and Content are sacred to us. We believe in delivering the highest value providing content and brand campaigns.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='about-wrapper-work-etics'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 about-wrapper-work-etics-child1'>
              <h1>Our Principles & Work Ethics</h1>
              <p>In this so much competitive we managed to make you find us, Imagine what miracles we could do to your business!</p>
              <Link to={'#aboutus'} className='btn btn-sm'>About us</Link>
            </div>
            <div className='col-12 col-md-6'>
              <div className='row mt-2'>
                <div className='col-12 col-md-6'>
                  <img src='../images/stock.png' alt='img' />
                  <h5>Mutual Growth</h5>
                  <p>We believe, one of the core of our growth is understanding the importance of client's business.</p>
                </div>
                <div className='col-12 col-md-6'>
                  <img src='../images/edit.png' alt='img' />
                  <h5>Creativity is Compulsary</h5>
                  <p>For us to perform and deliver outstandingly, thinking creatively and out of the box is must.</p>
                </div>
                <div className='col-12 col-md-6'>
                  <img src='../images/set.png' alt='img' />
                  <h5>Making Impact</h5>
                  <p>We had the power to advertise and make an impact to people's perception and we know tha
                    t</p>
                </div>
                <div className='col-12 col-md-6'>
                  <img src='../images/like.png' alt='img' />
                  <h5>Being Genuine</h5>
                  <p>We don't sell services, we serve help to businesses in need with honesty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <RecentNews />
      <VideoImage />
      <Linkdetails />
      <CarrierDetails />
    </>
  )
}

export default Aboutus