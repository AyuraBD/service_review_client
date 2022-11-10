import React from 'react';
import useTitle from '../../hooks/useTitle';

const Notfound = () => {
    useTitle('NotFound');
    
    return (
        <div style={{height:'100vh;', padding:'200px 0px'}}>
            <h1 className='fs-1 fw-bold text-center'>404</h1>
            <p className='text-center'>Page not found.</p>
        </div>
    );
};

export default Notfound;