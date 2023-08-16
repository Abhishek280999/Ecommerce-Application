import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='banner p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='banner-details p-5 d-flex flex-column align-items-start justify-content-center'>
              <span className='mx-3'>Trade in offer!!</span>
              <h1>Super Value Deals</h1>
              <h2>On all products</h2>
              <p className=''>Save more today with Apneck</p>
              <Link className='btn btn-primary'>Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Home