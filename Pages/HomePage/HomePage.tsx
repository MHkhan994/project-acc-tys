import React from 'react';
import Banner from './Banner';
import LatestProduct from './LatestProduct';

const HomePage = () => {
    return (
        <div className='my-container'>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
        </div>
    );
};

export default HomePage;