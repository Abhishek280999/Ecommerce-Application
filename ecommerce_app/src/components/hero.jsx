/* eslint-disable no-unused-vars */
import React from 'react'
import orders from '../Images/icons/icon1.png'
import orders1 from '../Images/icons/icon2.png'
import orders2 from '../Images/icons/icon3.png'
import orders3 from '../Images/icons/icon4.png'
import orders4 from '../Images/icons/icon5.png'

const array = [
  {
    icon: orders,
    name: "Fast Orders"
  },
  {
    icon: orders1,
    name: "Quick Shipping"
  },
  {
    icon: orders2,
    name: "High Saves"
  },
  {
    icon: orders3,
    name: "24/7 Support"
  },
  {
    icon: orders4,
    name: "Discount"
  },
  {
    icon: orders1,
    name: "Discount"
  },
];

const hero = () => {
  return <>
    <section className="hero p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
            <div className="row g-4 justify-content-center justify-content-md-between align-items-center">

              {array.map((item, index) => (
                <div className="col-6 col-md-4 col-lg-2">
                  <div key={index} className="card text-center m-auto">
                    <img src={item.icon} className="card-img-top img-fluid m-auto" alt="Fast Orders" />
                    <div className="card-body">
                      <p className="card-text mb-0">{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default hero