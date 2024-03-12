import React from 'react'
import './DigitalMarketing.css'
import { Link } from 'react-router-dom'
import Testimonial from '../../testimonial/Testimonial.js'
import RecentNews from '../../recentnews/RecentNews.js'
import VideoImage from '../../Videoimage/VideoImage.js'
import Linkdetails from '../../linkdetails/Linkdetails.js'
import CarrierDetails from '../../carrierdetails/CarrierDetails.js'
import QuerSolvedForm from '../querysolvedform/QuerSolvedForm.js'
const DigitalMarketing = () => {
  return (
    <>
      <div className='digitalmarketing-wrapper-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 '>
              <div className='digitalmarketing-wrapper-bg-child'>
                <h1>Digital Marketing Company in Ahmedabad</h1>
                <p>But we aim to, by delivering results to you! |</p>
                <button className='btn btn-sm btn-dark'>
                  See Results Delivered Till Now
                  <i class="fas fa-caret-right mx-2"></i>
                </button>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='digitalmarketing-wrapper-bg-form'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name*</label>
                      <input type="text" className="form-control" id="name" placeholder='Your Sweet name' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone*</label>
                      <input type="text" className="form-control" id="phone" placeholder='Your Phone number' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email*</label>
                      <input type="text" className="form-control" id="email" placeholder='Your Work Email' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="website" className="form-label">Website*</label>
                      <input type="text" className="form-control" id="website" placeholder='Your Company Website' />
                    </div>
                  </div>
                  <div className='col-12 col-md-12'>
                    <button className='btn btn-sm btn-dark'>Get a Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-services'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 digital-marketing-services-child'>
              <p>Know more about Digital Marketing Services</p>
              <h2>Result Driven Digital Marketing Company in Ahmedabad, India.</h2>
              <Link to={'#'}>
                Get your Free Consultation Now
                <i class="fas fa-arrow-right mx-2"></i>
              </Link>
            </div>
            <div className='col-12 col-md-6 digital-marketing-services-child1'>
              <p>To provide optimum results and returns to our clients, we work on the philosophy of giving the numbers in form of Quality. Digipple respects your efforts that you had put in to grow your company and synergies with you to make it grow even bigger.</p>
              <p>Being a Digital Marketing Company, we have experts and certified professionals in the different categories of Digital Marketing like SEO, SMM, PPC, Content Marketing & more.</p>
              <p> Digipple believes in making relations and network with our clients and not only doing business with them, which enforces us to provide complete support to our clients. As we respect our clients, it pushes us towards staying committed to our work and raising the bar everyday for the excellence.</p>

            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-card'>
        <div className='container digital-marketing-card-child'>
          <div className='card'>
            <div className='card-body'>
              <img src='../images/mozila.png' alt='...' />
              <h5>SEO</h5>
              <h6>Boost your website traffic & ranking with</h6>
              <ul>
                <li>Reaching optimal heights of your potential through your website.</li>
                <li>Experience how it feels on being number one in your rankings.</li>
                <li>Improving visibility and increasing your trustworthiness.</li>
                <li>Showing your expertise through the Digital World</li>
                <li>Converting your visitors to your customers by increasing conversion rates.</li>
              </ul>
            </div>
            <Link to={'#knowmore'}>KNOW MORE</Link>
          </div>

          <div className='card'>
            <div className='card-body'>
              <img src='../images/shares.png' alt='...' />
              <h5>SMM</h5>
              <h6>Tell your stories with</h6>
              <ul>
                <li>Increase your reach to your targeted Audience.</li>
                <li>Proven and unique techniques to enhance your visibility.</li>
                <li>"Dil mange more?" Get more followers with Digipple’s SMM.</li>
                <li>Improve your traction and make an influence.</li>
                <li>Clear statics, clearer reports and more clearer results.</li>
              </ul>
            </div>
            <Link to={'#knowmore'}>KNOW MORE</Link>
          </div>

          <div className='card'>
            <div className='card-body'>
              <img src='../images/file.png' alt='...' />
              <h5>Content Writing & Marketing</h5>
              <h6>Research, create & Promote your content with</h6>
              <ul>
                <li>Reach out to your consumers who consume your content.</li>
                <li>Content is the King and Digipple is its creator.</li>
                <li>Get more eyeball attention with appealing content.</li>
                <li>Show your expertise coated with creative content.</li>
                <li>Creating problem solving and value adding content to get more traffic.</li>
              </ul>
            </div>
            <Link to={'#knowmore'}>KNOW MORE</Link>
          </div>
        </div>
      </div>

      <div className='digital-marketing-quote'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>GET DIGITAL MARKETING QUOTE</p>
              <h3>Get your free Digital Marketing Quote to get best digital solutions.</h3>
            </div>
            <div className='col-12 col-md-6'>
              <p>What are you waiting for? If you don’t want to read more, just get your free quote now.</p>
              <button className='btn btn-sm btn-warning'>Get Your Free Quote <i class="fas fa-arrow-right mx-2"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-adson'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <h4>SOME DIGITAL MARKETING ADD-ONS</h4>
              <div className='mt-5'>
                <p>Your Digital Game will be boosted by</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="92"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                    92% Complete
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='accordian-wrappers'>
                <ul className='accordian'>
                  <li>
                    <input type='radio' name='accordian' id='first' checked />
                    <label htmlFor='first'>CONVERSION RATE OPTIMIZATION</label>
                    <div className='content'>
                      <p>You have good number of website visitors, but don’t get much leads? My friend, you need conversion rate optimization to increase leads and increase conversion rates of your visitors.</p>
                    </div>
                  </li>
                  <li>
                    <input type='radio' name='accordian' id='second' />
                    <label htmlFor='second'>ONLINE REPUTATION MANAGEMENT</label>
                    <div className='content'>
                      <p>Do you want to represent your business with goodwill on digital platforms? Get your online reputation done with Digipple’s online reputation management services .</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-serv-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='digital-marketing-serv-form-child'>
                <h1>Digital Marketing Services.</h1>
                <p>Fill up this from with your requirements and details and get your free quote within 24 hours.</p>
                <div>
                  <h5>100%</h5>
                  <p>We will contact you in just 24hr.</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <form>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="naming" className="form-label">Name*</label>
                      <input type="text" className="form-control" id="naming" placeholder='Your Sweet name' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emailid" className="form-label">Email*</label>
                      <input type="text" className="form-control" id="emailid" placeholder='Your working email' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sub" className="form-label">Subject (optional)</label>
                      <input type="text" className="form-control" id="sub" placeholder='Chhoose a subject' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="comp" className="form-label">Company*</label>
                      <input type="text" className="form-control" id="comp" placeholder='Your Sweet name' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">Phone*</label>
                      <input type="text" className="form-control" id="mobile" placeholder='Your working Phone' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="opts" className="form-label">Select Services*</label>
                      <select className='form-control' id='opts'>
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
                    <label htmlFor="messages" className="form-label">Message</label>
                    <textarea className='form-control' id='messages' placeholder='Your Message' />
                  </div>
                </div>
                <div>
                  <button className='btn btn-sm btn-dark'>Get a Quote</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-progress-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 digital-marketing-progress-wrapper-child'>
              <p>Don’t Believe us? It’s ok though</p>
              <h2>Look at these facts shouting to opt for Digital Marketing.</h2>
            </div>
            <div className='col-12 col-md-6'>
              <div className='mt-1'>
                <p>Your Digital Game will be boosted by</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="92"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                    92% Complete
                  </div>
                </div>
              </div>
              <div className='mt-1'>
                <p>Your Digital Game will be boosted by</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="92"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                    92% Complete
                  </div>
                </div>
              </div>
              <div className='mt-1'>
                <p>Your Digital Game will be boosted by</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="92"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                    92% Complete
                  </div>
                </div>
              </div>
              <div className='mt-1'>
                <p>Your Digital Game will be boosted by</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="92"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}>
                    92% Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='digital-marketing-details'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-12 col-md-12 mb-5'>
              <h2>Why Choose <span className='text-warning'>Digipple's Digital Marketing</span> Services?</h2>
            </div>
            <div className='col-12 col-md-3'>
              <img src='../images/1.png' alt='..' className='mb-1' />
              <h6>All services interconnected</h6>
              <p>We value our clients and thus provide all the services whenever required and even if you don't pay. We believe in Results and deliver them.</p>
            </div>
            <div className='col-12 col-md-3'>
              <img src='../images/2.png' alt='..' className='mb-1' />
              <h6>Advanced Tools and strong technology</h6>
              <p>We have advanced tools and more advanced technology and even more strong mind. This blasts our productivity and boosts your growth.</p>
            </div>
            <div className='col-12 col-md-3'>
              <img src='../images/3.png' alt='..' className='mb-1' />
              <h6>We want to grow by growing you.</h6>
              <p>We don't only think of you, we also want to grow which is a second reason to provide results. We can grow only and only by growing you.</p>
            </div>
            <div className='col-12 col-md-3'>
              <img src='../images/4.png' alt='..' className='mb-1' />
              <h6>Kaizen (Google it!)</h6>
              <p>If you don't want to Google it, then let me explain. It means continuous development and evaluation of what one is doing</p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12 col-md-6'>
              <h1 className='text-warning'>Accomplish the following things by just one call.</h1>
              <button className='btn btn-sm btn-dark mt-3 mb-3'>
              <i className="fa fa-phone mx-2"></i>
                LET'S SCHEDULE A CALL
              </button>
            </div>
            <div className='col-12 col-md-6'>
              <ul>
                <li>Get solution of all your queries related to Digital Marketing</li>
                <li>Get your free 15 minute complete digital marketing consultation.</li>
                <li>Just one call, and you are ahead of your online competition in your industry.</li>
                <li>Digital Marketing services like Search Engine Optimization (SEO), Social</li>
                <li>Media Marketing (SMM), Content Marketing, Influencer Marketing and E-commerce Marketing all at one place.</li>
                <li>Burst your myths about digital marketing and have a clearer picture, then decide.</li>
              </ul>
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

export default DigitalMarketing