import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Servicehome = ({service}) => {
    const {img, name, about, price} = service;
    return (
        <div className='col-lg-4'>
            <div className="single-service">
                <PhotoProvider>
                    <PhotoView src={img}>
                    <img className='img-fluid mb-3' src={img} alt={name} />
                    </PhotoView>
                </PhotoProvider>                
                <h3>{name}</h3>
                <h6 className='fw-semibold'>{price}</h6>
                <p>{about.slice(0, 150)}...</p>
                <button>Read More</button>
            </div>
        </div>
    );
};

export default Servicehome;