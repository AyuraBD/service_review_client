import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Servicesall = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesall')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div>  
            <div className="container">
                <div className="row">
                    <div className="service-heading mt-5 mb-3">
                        <h1 className='text-center'>Here our all services</h1>
                    </div>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Servicesall;