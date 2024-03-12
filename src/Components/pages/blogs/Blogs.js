import React, { useEffect, useState } from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  const APIURL = 'http://localhost:8000/posts';

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        settotalPages(Math.ceil(data.length / 10))
      })
  }, [])

  // current pages function
  const handlePageChange = (newPage) => {
    setcurrentPage(newPage)
  }
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1)
    }
  }
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }
  }
  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = userData.slice(startIndex, endIndex);

  return (
    <>
      <div className='container blogs-wrapper'>
        <div className='row'>
          <div className='col-12 col-md-12'>
            <h1>Blogs</h1>
          </div>
          <div className='col-6 col-md-2'>
            <Link to={'/'}>Home</Link><span>{'>'}Blogs</span>
          </div>
          <div className='col-6 col-md-10 d-flex justify-content-end'>
            <p>Showing 1-10 of 35 results</p>
            <select className='select-blogs'>
              <option>Categories</option>
              <option>Campagins</option>
              <option>Digital Advertising</option>
              <option>Digital Branding</option>
              <option>Digital Marketing</option>
              <option>News</option>
              <option>SEO</option>
              <option>Social Media Marketing</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-2 blogs-wrapper-child'>
            <input type='text' className='form-control' placeholder='Search...' />
            <h6 className='mt-3'>Share</h6>
            <div className='social-links'>
              <Link to={'#'} className="fab fa-facebook-f"></Link>
              <Link to={'#'} class="fab fa-linkedin"></Link>
              <Link to={'#'} class="fab fa-pinterest"></Link>
              <Link to={'#'} class="fab fa-twitter"></Link>
            </div>
            <h6 className='mt-3'>Categories</h6>
            <p><Link to={'#'}>Campaigns (2)</Link></p>
            <p><Link to={'#'}>Digital Advertising (7)</Link></p>
            <p><Link to={'#'}>Digital Branding (7)</Link></p>
            <p><Link to={'#'}>Digital Marketing (1)</Link></p>
            <p><Link to={'#'}>News (3)</Link></p>
            <p><Link to={'#'}>Search Engine Optimization (9)</Link></p>
            <p><Link to={'#'}>Social Media Marketing (7)</Link></p>

            <h6 className='mt-3'>Recent Posts</h6>
            <p><Link to={'#'}>#letscelebratewomensdaily</Link></p>
            <p><Link to={'#'}>How to find the best Digital Marketing Agency?
            </Link></p>
            <p><Link to={'#'}>Digipple is India’s Top Advertising & Marketing Company on Clutch this 2022</Link></p>
            <p><Link to={'#'}>#Womenempoweringwomen- CSR Campaign by Digipple</Link></p>
            <p><Link to={'#'}>Complete Social Media Marketing Guide</Link></p>
            <h6 className='mt-3 mb-3'>Subscribe</h6>
            <input type='text' className='form-control' placeholder='Enter email address' />
            <button className='mt-3 btn btn-sm bg-light w-100'>Subscribe</button>
          </div>

          <div className='col-12 col-md-10 blogs-wrapper-child1'>
            {
              itemsToDisplay && itemsToDisplay.length > 0 ? itemsToDisplay.map((item) => {
                return (
                  <div className='card' key={item.id}>
                    <div className="inner">
                      <img src={item.img} className="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                      <p className="card-text">{item.title}</p>
                      <h5 className="card-title">{item.heading}</h5>
                      <p className="card-text">{item.shortpara}</p>
                    </div>
                  </div>
                )
              }) : ''
            }
            <button
              className='btn btn-sm btn-primary mx-1'
              onClick={handlePrevClick}
              disabled={preDisabled}
            >
              Prev
            </button>
            {
              Array.from({ length: totalPages }, (_, i) => {
                return (
                  <button
                    className='btn btn-sm btn-primary  mx-1'
                    onClick={() => handlePageChange}
                    key={i}
                    disabled={i + 1 === currentPage}
                  >
                    {i + 1}
                  </button>
                )
              })
            }
            <button
              className='btn btn-sm btn-primary  mx-1'
              onClick={handleNextClick}
              disabled={nextDisabled}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Blogs