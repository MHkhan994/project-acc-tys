import React from 'react';
import Banner from './Banner';
import LatestProduct from './LatestProduct';
import About from './About';
import Update from './Update';

const HomePage = () => {
    return (
        <div className='my-container'>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <About></About>
            <Update></Update>
        </div>
    );
};

export default HomePage;