import React from 'react'
import { PRODUCTS1 } from './Products'

const newArrival = () => {
  return (
    <>
          <div className='row mt-4'>
                {
                    PRODUCTS1.slice(1, 5).map((Products) => {
                        return (
                            <div className='col-3'>
                                <div key={Products.id}>
                                    <div className='card m-auto  p-1 '>
                                        <img src={Products.image} alt='' className='card-img-top img-fluid m-auto p-2 ' />
                                        <div className='card-details'>
                                           <div className='title m-2 '>
                                           <span className='card-text text-danger '>{Products.brand}</span>
                                            <h5  className='mb-3'>{Products.name}</h5>
                                           </div>
                                            <div className='card-footer text-muted text-center'>
                                                <p className='text-danger'>{Products.status}</p>
                                                <strike className='text-danger'>${Products.rate}</strike>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>  
    </>
  )
}

export default newArrival