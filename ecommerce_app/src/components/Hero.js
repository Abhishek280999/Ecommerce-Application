import React from 'react';
import icon1 from '../Images/icons/icon1.png';
import icon2 from '../Images/icons/icon2.png';
import icon3 from '../Images/icons/icon3.png';
import icon4 from '../Images/icons/icon4.png';
import icon5 from '../Images/icons/icon5.png';

const Hero = () => {
    const array = [
        {
            icon: icon1,
            name: "Fast Orders"
        },
        {
            icon: icon2,
            name: "Quick Shipping"
        },
        {
            icon: icon3,
            name: "High Saves"
        },
        {
            icon: icon4,
            name: "24/7 Support"
        },
        {
            icon: icon5,
            name: "Discount"
        },
    ];

    return (
        <section className='hero p-2'>
            <div className='container'>
                <div className='row'>
                    <div className=' hero-details d-flex justify-content-around text-center mx-3'>
                        {array.map((item, index) => (
                            <div key={index} className='card'>
                                <img src={item.icon} alt={item.name} className='img-fluid m-auto' />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
