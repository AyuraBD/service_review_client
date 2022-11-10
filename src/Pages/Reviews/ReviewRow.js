import React from 'react';

const ReviewRow = ({ review, deleteReview }) => {
    const { _id, image, reviewer, serviceName, message } = review;
    return (
        <div>
            <div className="reviewRow mb-4" style={{ border: '1px solid gray', borderRadius: '20px', padding: '20px' }}>
                <div className="review-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px' }}>
                    <div onClick={() => deleteReview(_id)} className="close me-5">
                        <h4 className='me-4' style={{ cursor: 'pointer' }}>X</h4>
                    </div>
                    <div className="middle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width:"80%"}}>
                        <div className="left" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="img">
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={image} alt="" />
                            </div>
                            <div className="name ms-3">
                                <h6>{reviewer}</h6>
                            </div>
                        </div>

                        <div className="review-right">
                            <h5 className='mb-3 mt-3'>{serviceName}</h5>
                            <p>{message}</p>
                        </div>

                    </div>
                    <div className="right ms-5">
                        <button>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;