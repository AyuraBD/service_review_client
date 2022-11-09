import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { img, name, about, price } = useLoaderData();
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="details-cnt">
                    <div className="col-md-8 offset-md-2">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className='img-fluid mb-3' src={img} alt={name} />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="details-heading">
                        <h2>{name}</h2>
                        <p className='text-warning fw-bold'>{price}</p>
                    </div>
                    <div className="desciption">
                        <p>{about}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;