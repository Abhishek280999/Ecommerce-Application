import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'

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
                                <Link><AiOutlineMail className='fs-3 mx-4'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
        </>
    )
}

export default Header