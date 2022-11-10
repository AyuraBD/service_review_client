import React from 'react';

const ReviewRow = ({ review }) => {
    const { image, reviewer, serviceName, message } = review;
    return (
        <div>
            <div className="reviewRow" style={{border: '1px solid gray', borderRadius: '20px', padding: '20px' }}>
                <div className="review-top" style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', borderBottom:'1px solid lightGray', paddingBottom:'10px'}}>
                    <div className="left" style={{ display: 'flex', alignItems: 'center'}}>
                        <div className="close">
                            <h4 className='me-4' style={{ cursor: 'pointer' }}>X</h4>
                        </div>
                        <div className="img">
                            <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={image} alt="" />
                        </div>
                        <div className="name ms-3">
                            <h6>{reviewer}</h6>
                        </div>
                    </div>
                    <div className="right">
                        <button>Update</button>
                    </div>
                </div>
                <div className="review-bottom">
                    <h5 className='mb-3 mt-3'>{serviceName}</h5>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;