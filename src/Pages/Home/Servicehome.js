import React from 'react';

const Servicehome = ({service}) => {
    const {img, name, about, price} = service;
    return (
        <div className='col-lg-4'>
            <div className="single-service">
                <img className='img-fluid mb-3' src={img} alt={name} />
                <h3>{name}</h3>
                <p>{about.slice(0, 150)}</p>
            </div>
        </div>
    );
};

export default Servicehome;