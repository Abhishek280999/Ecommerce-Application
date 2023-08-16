import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsFacebook , BsInstagram ,BsLinkedin } from 'react-icons/bs'
import google from '../Images/pay/play.jpg'
import app from '../Images/pay/app.jpg'
import pay from '../Images/pay/pay.png'





const Footer = () => {
  return (
    <>
      <footer className='footer p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4 d-flex flex-column '>
              <h3 className='mb-4'>Contact Us</h3>
              <div className='footer-details'>
                <p className='mb-3'><b>Address</b> Thika town, Naltex building, 2nd floor</p>
                <p className='mb-3'><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at +1 (234) 567-890</a></p>
                <p className='mb-3'><b>Hours:</b>  From 8 a.m To 6 p.m</p> 
                <p className='mb-3'><b>Follow Us</b></p>

                {/* <p className='mb-3'><b>Follow the developer</b></p>   */}
                <div className='col-3 social-icons mb-3 d-flex justify-content-around'>
                <Link><AiFillTwitterCircle className='fs-5'/></Link>
                <Link><BsFacebook className='fs-5'/></Link>
                <Link><BsInstagram className='fs-5'/></Link>
                <Link><BsLinkedin className='fs-5'/></Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h3 className='mb-4'>About</h3>
              <div className='footer-details d-flex flex-column'>
                <Link className='mb-3 text-black-50'>About Us </Link>
                <Link className='mb-3 text-black-50'>Delivery </Link>
                <Link className='mb-3 text-black-50'>Privacy Policy</Link>
                <Link className='mb-3 text-black-50'> Terms & Conditions</Link>
                <Link className='mb-3 text-black-50'>Fee Policy </Link>
              </div>
            </div>
            <div className='col-2'>
              <h3 className='mb-4'>Account</h3>
              <div className='footer-details d-flex flex-column'>
                <Link className='mb-3 text-black-50'>Profile </Link>
                <Link className='mb-3 text-black-50'>View Cart </Link>
                <Link className='mb-3 text-black-50'>Help</Link>
                <Link className='mb-3 text-black-50'> Payments</Link>
                <Link className='mb-3 text-black-50'>My Wishlist </Link>
                <Link className='mb-3 text-black-50'>Coupons </Link>
              </div>
            </div>
            <div className='col-4'>
              <h3 className='mb-3'> Install App</h3>
              <div className='footer-details'>
              <p className='mb-3'>Available On Google Play Services & App Store</p>
              <div className='pay'>
              <Link>
              <img src={google} alt="" className='img-fluid p-1 my-1 mx-2 ' />
              </Link>
              <Link>
              <img src={app} alt="" className='img-fluid p-1 my-1 mx-2' />
              </Link>
              <p className='mb-3'>Payment Methods</p>
              <Link>
              <img src={pay} alt="" className='img-fluid  px-4 ' />
              </Link>
              </div>
              
              </div>
            </div>
            </div>
            <hr/> 
            <div className='row  d-flex justify-content-between '>
            <div className='col-3'>
              <p>&copy;Developed by Abhishek Developers 2023</p>
            </div>
            <div className='col-3 d-flex justify-content-around'>
              <Link className='text-black-50'>Privacy Policy</Link>
              <Link className='text-black-50'>Terms of Use</Link>
              <Link className='text-black-50'>Contact Us</Link> 
            </div>
            </div>
         
        </div>
      </footer>
    </>
  )
}

export default Footer