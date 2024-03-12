import React from 'react'
import './Contact.css'
import QuerSolvedForm from '../querysolvedform/QuerSolvedForm.js'
const Contactus = () => {
  return (
    <>
      <div className='contact-wrapper-bg'>
        <div className='container'>
          <div className='contact-wrapper-bg-child'>
            <h1 className='animated-text'>We are not <span></span> which motivates us to be</h1>
            <p>Help us be number 1, and we will make you number 1.</p>
            <h6>Email Us<i class="fas fa-envelope-open-text mx-2"></i></h6>
          </div>
        </div>
      </div>

      <div className='contact-wrapper-form'>
        <div className='container contact-wrapper-form-border'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <h5>Get In Touch</h5>
              <p>Work Inquiries</p>
              <h6>+91 98981 85798</h6>
              <p>Assistance Hours Monday – Friday 9:30 am to 7:00 pm</p>
            </div>
            <div className='col-12 col-md-4 contact-wrapper-form-child'>
              <h5>Office Address</h5>
              <p>611, Shivalik Shilp,Iskcon Cross Rd, Sarkhej-Gandhinagar Highway,Ahmedabad, Gujarat, 380015</p>
            </div>
            <div className='col-12 col-md-4 contact-wrapper-form-child'>
              <h5>Social Media</h5>
              <div className='row contact-wrapper-social'>
                <div className='col-12'><i class="fab fa-facebook-f mx-2"></i>Facebook</div>
                <div className='col-12'><i class="fab fa-instagram"></i>Instagram</div>
                <div className='col-12'><i class="fab fa-linkedin"></i>Linkedin</div>
                <div className='col-12'><i class="fab fa-twitter"></i>Twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuerSolvedForm />
    </>
  )
}

export default Contactus