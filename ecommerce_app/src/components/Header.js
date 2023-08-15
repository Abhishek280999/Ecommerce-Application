import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import Logo from '../Images/logo.png'
import {HiOutlineArchiveBox}  from 'react-icons/hi'

const Header = () => {
    return (
        <>
            <header className='header-top-strip p-1 shadow-sm'>
                <div className='container-xxl'>
                    <div className='row align-item-center'>
                        <div className=' col-6'>
                            <p> The trending outfits at 100% off</p>
                        </div>
                        <div className='col-6 d-flex justify-content-between'>
                            <div>
                                <a href='tel:+42455555'>Call us +565485158412</a>
                            </div>
                            <div>
                                <Link><BiPhoneCall className='fs-3 mx-4' /></Link>
                                <Link><AiOutlineMail className='fs-3 mx-4' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <header className='header-upper '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2 text-center'>
                            <Link to="/">
                                <img src={Logo} alt="logo" className='img-fluid logo  align-items-center' />
                            </Link>
                        </div>
                        <div className='col-3 d-flex align-items-center'>
                            <div className="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">All</span>
                                <input type="text" className="form-control p-2" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button className="input-group-text" id="basic-addon2">Search</button>
                            </div>
                        </div>
                        <div className='col-4 d-flex align-items-center justify-content-between text-center m-auto'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'shop'}>Shop</Link>
                            <Link to={'blog'}>Blog</Link>
                            <Link to={'about'}>About</Link>
                            <Link to={'contact'}>Contact</Link>

                        </div>
                        <div className='col-3 d-flex align-items-center justify-content-between'>
                            <Link></Link>
                            <Link></Link>
                            <Link></Link>
                        </div>
                    </div>

                </div>

            </header>

        </>
    )
}

export default Header