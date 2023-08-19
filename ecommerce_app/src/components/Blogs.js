import React from 'react';
import blog1 from '../Images/blog/blog1.jpg';
import blog2 from '../Images/blog/blog2.jpg';
import blog3 from '../Images/blog/blog3.jpg';
import blog4 from '../Images/blog/blog4.jpg';
import { Link } from 'react-router-dom';

const array = [
    {
        id: 1,
        image: blog1,
        name: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
        id: 2,
        image: blog2,
        name: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
        id: 3,
        image: blog3,
        name: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
        id: 4,
        image: blog4,
        name: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
];

const Blogs = () => {
    return (
        <>
            <section className="blogs p-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="mb-3">What our customers say...</h1>
                            <p className="mb-4">Our customers never miss a beat on providing feedback</p>
                        </div>

                        {array.map((item, index) => (
                            <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">{item.name}</p>
                                        <Link to='about'>
                                            <button className="mt-4">Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;
