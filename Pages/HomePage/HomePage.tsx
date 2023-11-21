import React from 'react';
import Banner from './Banner';
import LatestProduct from './LatestProduct';
import About from './About';

const HomePage = () => {
    return (
        <div className='my-container'>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <About></About>
        </div>
    );
};

export default HomePage;