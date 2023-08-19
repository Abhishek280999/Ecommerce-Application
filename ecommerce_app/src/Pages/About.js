/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../Images/blog/blog1.jpg'
import blog2 from '../Images/blog/blog2.jpg'
import blog3 from '../Images/blog/blog3.jpg'
import blog4 from '../Images/blog/blog4.jpg'
import a6 from '../Images/about/a6.jpg'
import video from '../Images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../Images/icons/icon1.png'
import orders1 from '../Images/icons/icon2.png'
import orders2 from '../Images/icons/icon3.png'
import orders3 from '../Images/icons/icon4.png'
import orders4 from '../Images/icons/icon5.png'


const array = [
  {
    id: 1,
    image: blog1,
    name: "Marvel Clein",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last updated 3 mins ago',
  },
  {
    id: 2,
    image: blog2,
    name: "Melisa Ivy",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last Updated now',
  },
  {
    id: 3,
    image: blog3,
    name: "Tristian Ann",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last Updated now',
  },
  {
    id: 4,
    image: blog4,
    name: "Phillip Omosh",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last updated now',
  },
  {
    id: 5,
    image: blog2,
    name: "Melisa Ivy",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last updated now',
  },
  {
    id: 6,
    image: blog1,
    name: "Marvel Clein",
    name2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.',
    name3: 'Last updated 3 mins ago',
  },
]

const About = () => {
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
        </div>
      </div>
    </section>

    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Download our <Link>App</Link></h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
        <video loop muted autoPlay src={video} className='w-100'></video>
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>

          {
            array.map((item) => {
              return (

                <div className="col-12 col-md-6 p-3">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text mb-3">{item.name2}</p>
                          <p className="card-text"><small className="text-body-secondary">{item.name3}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div >
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Quick Shipping</p>
              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default About