'use client'
import React from 'react';
import HeroImage from './HeroImage';
import ProductList from './ProductList';

const Dashboard = () => {
    return (
        <div className='pt-[30px]'>
            <HeroImage />
            <ProductList />
        </div>
    );
};

export default Dashboard;