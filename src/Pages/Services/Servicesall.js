import React, { useEffect, useState } from 'react';

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
            <h1>Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>{services.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicesall;