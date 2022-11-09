import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, name, about, price } = service;
    return (
        <div className='col-lg-4 col-md-6 mb-3'>
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='img-fluid mb-3' src={img} alt={name} />
                </PhotoView>
            </PhotoProvider>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{about.slice(0, 150)}...</p>
            <Link to={`/details/${_id}`}>
                <button>See details</button>
            </Link>
        </div>
    );
};

export default ServicesCard;