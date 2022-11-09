import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';
import ServicesCard from './ServicesCard';

const Servicesall = () => {
    const [services, setServices] = useState([]);
    const { loading} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://cleaning-service-server.vercel.app/servicesall')
            .then(res => res.json())
            .then(data => {
                // if (loading) {
                //     return <div className="text-center">
                //                 <Spinner animation="border" role="status">
                //                     <span className="visually-hidden">Loading...</span>
                //                 </Spinner>
                //             </div>
                // }
                setServices(data);
                
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