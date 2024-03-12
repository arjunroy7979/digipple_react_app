import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from '../../testimonial/Testimonial'
import RecentNews from '../../recentnews/RecentNews'
import VideoImage from '../../Videoimage/VideoImage'
import Linkdetails from '../../linkdetails/Linkdetails'
import CarrierDetails from '../../carrierdetails/CarrierDetails'

const DigitalBranding = () => {
  return (
    <>
      <div className='container-fluid wrapper'>
        <div className='row'>
          <div className='col-12 col-md-6 wrapper-adv'>
            <img src='../images/img1.png' alt='img' />
            <h2>We are the epicenter of Digital Branding in Ahmedabad</h2>
            <button className='btn btn-sm btn-warning text-white --btn'>
              Getin Touch
              <i className="fas fa-chevron-right mx-2"></i>
            </button>
          </div>
          <div className='col-12 col-md-6 wrapper-adv-img'>
            <h2>Thrive by Creating exceptional Brand Identity</h2>
            <button className='btn btn-dark btn-sm'>
              See Our Work 
              <i className="fas fa-chevron-right mx-2"></i>
            </button>
          </div>
        </div>

        <div className='container wrapper-branding'>
          <div className='row'>
            <div className='col-12 col-md-6 wrapper-branding-text1'>
              <div className='wrapper-branding-text1-child'>
                <p>Know more about our Digital Branding Services</p>
              </div>
              <h1>Creative Digital Branding Services</h1>
              <Link to={'#'}>
                Get your Free Consultation Now
                <i className="fas fa-arrow-right mx-2"></i>
              </Link>
            </div>
            <div className='col-12 col-md-6 wrapper-branding-text2'>
              <p>
                Your business deserves to be a brand. Oh you already are a local brand, then it’s time to become a global brand with Digital Branding. Digipple is a creative <Link to={'#'}>Digital Branding Company in Ahmedabad</Link> which provides fully occupied and loaded Digital Branding Services across the globe. Combining the logical minds for your Brand Strategy with creative minds to make your brand image and best action players, Digipple stands out as a Digital Branding company in India.
                <br /> <br />
                Whether it is Logo Design or Brand Strategy or Brand Reputation we do it all. With over 11 Creative Minds and Teammates, Digipple really rocks and sets a fire when it comes to Digital Branding. Being a Digital Branding Company, Digipple offers you some best in class services for Digital Branding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid wrapper-digital-branding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='mt-4'>
                <p>DIGITAL BRANDING CAPABILITIES</p>
                <h3>Creativity Endorsed into the Digital Branding</h3>
                <div className='mt-4'>
                  <p>Digital Branding & Visual Identity</p>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100" style={{ width: '86%' }}>
                      86% Complete
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <p>Digital Branding & Visual Identity</p>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100" style={{ width: '92%' }}>
                      92% Complete
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <p>Digital Branding & Visual Identity</p>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                      81% Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <ul className='accordian'>
                <li>
                  <input type='radio' name='accordian' id='first' checked />
                  <label htmlFor='first'>Digital Brand Identity</label>
                  <div className='content'>
                    <p>An all round digital marketing solution for your company to present and grow in the competitive market.</p>
                  </div>
                </li>
                <li>
                  <input type='radio' name='accordian' id='second' />
                  <label htmlFor='second'>Digital Brand Strategy</label>
                  <div className='content'>
                    <p>The holistic SEO solution which includes everything, literally everything to rank your website.</p>
                  </div>
                </li>
                <li>
                  <input type='radio' name='accordian' id='four' />
                  <label htmlFor='four'>Digital Brand Communication</label>
                  <div className='content'>
                    <p>The most creative social media handling service along with the best in class organic growth in a single pack</p>
                  </div>
                </li>
                <li>
                  <input type='radio' name='accordian' id='five' />
                  <label htmlFor='five'>Holistic Digital Branding</label>
                  <div className='content'>
                    <p>Giving the lively Digital Identities to the brands like you and more with Digital Branding</p>
                  </div>
                </li>
              </ul>
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

export default DigitalBranding