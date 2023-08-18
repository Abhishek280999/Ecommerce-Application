import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Featured_Products from '../components/Featured_Products'
import NewArrival from '../components/newArrival'
import img1 from '../Images/banner/b17.jpg'
import img2 from '../Images/banner/b10.jpg'


const Home = () => {
  return (
    <>
      <section className='banner p-1'>
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

      <Hero />

      <section className='featured-products p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='text-center'>
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <Featured_Products />

          </div>
        </div>
      </section>

      <section className='repair mb-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='repair-details  d-flex flex-column align-items-center justify-content-center'>
              <h5 className='mt-4 text-white'>Repair Services</h5>
              <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
              <button>Explore Now</button>
            </div>
          </div>


        </div>
      </section>


      <section className='new-products p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='text-center'>
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className='deals mb-3 '>
        <div className='container-xxl'>
          <div className='row  '>
            <div className='col-6 '>
              <div className='card row'>
                <div className='d-flex  '>
                  <div className='col-md-4'>
                    <img src={img1} alt='' className='img-fluid h-75 p-2 rounded-start' />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <span>Hots Deals</span>
                      <h3 className='card-title'>Buy One get One free</h3>
                      <p>The latest best collection in our closet <br />Feel Cute with our outfits</p>
                      <button className='button-deals mt-3'>
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6 '>
              <div className='card row'>
                <div className='d-flex'>
                  <div className='col-md-4'>
                    <img src={img2} alt='' className='img-fluid h-75 p-2 rounded-start' />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <span>Season-In</span>
                      <h3 className='card-title'>All Weather Attire</h3>
                      <p>It never matter which season it is <br />We got you covered</p>
                      <button className='button-deals mt-3'>
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home