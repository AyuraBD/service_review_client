import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Servicehome from './Servicehome';
import aboutimg from '../../assets/img/about.jpg';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="banner">
                <div className="overlay">
                    <h1>Welcome <br />To our cleaning services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatem corporis fuga itaque quasi ducimus?<br />
                        Non id quae exercitationem quaerat?</p>
                    <button className='btn btn-primary'><Link to='/blog'>Read More</Link></button>
                </div>
            </div>
            <div className="services">
                <div className="heading text-center">
                    <p>Featured Services</p>
                    <h1>For centuries we are providing cleaning services</h1>
                </div>
                <div className="service-home">
                    <div className="container">
                        <div className="row">
                            {
                                services.map(service => <Servicehome
                                    key={service._id}
                                    service={service}
                                ></Servicehome>)
                            }
                            <div className='text-center'>
                                <button className='btn btn-primary'>
                                    <Link to='/servicesall'>See all Services</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus">
                
            </div>
            <div className="chooseus py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left">
                                <img className='img-fluid w-1/2' src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right">
                                <h6 className='fw-bold head-key'>Why choose us</h6>
                                <h1 className='fw-bold mb-3'>Expert in cleaning services <br/> Reasons to choose us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis nam id praesentium deserunt minima minus, dolorem impedit quae dolore? Iste ipsum odit aliquid, molestias illum nisi reprehenderit error quasi. Excepturi reiciendis nam id praesentium deserunt minima minus, dolorem impedit quae dolore? Iste ipsum odit aliquid, molestias illum nisi reprehenderit error quasi.</p>
                                <div className="keys1 keys mt-4">
                                    <li>1. Expert Member</li>
                                    <li>2. Expert Member</li>
                                </div>
                                <div className="keys1 keys">
                                    <li>3. Expert Member</li>
                                    <li>4. Expert Member</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;