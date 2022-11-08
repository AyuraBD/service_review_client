import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Servicehome from './Servicehome';


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
                            <button>
                                <Link to='/servicesall'>See all Services</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;