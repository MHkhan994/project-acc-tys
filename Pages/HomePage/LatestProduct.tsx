'use client'
import React from 'react';
import { useState } from 'react'
import products from '../../product.json'
import Image from 'next/image';

const LatestProduct = () => {

    type Tab = 'over view' | 'air conditioner' | 'refrigerator' | 'television' | 'washing machine'
    const [currentTab, setCurrentTab] = useState<Tab>('over view')
    const tabs: Tab[] = ['over view', 'air conditioner', 'refrigerator', 'television', 'washing machine']

    return (
        <div className='mt-[100px]'>
            <h1 className='text-[56px] font-bold text-center'>Shop our Latest Product</h1>
            {/* ========tabs======== */}
            <div className='flex cursor-pointer capitalize justify-center gap-[71px] text-[22px] font-semibold my-[30px]'>
                {
                    tabs.map(tab => <p key={tab} className={`${currentTab === tab ? 'text-[#2F7CE3]  border-b border-[#2F7CE3]' : ''}`} onClick={() => setCurrentTab(tab)}>{tab}</p>)
                }
            </div>
            <div className='flex flex-wrap gap-[30px] justify-center md:justify-between'>
                {
                    products.map((item, i) => <div key={i} className={`${i <= 1 ? 'h-[563px] w-[611px] py-[81px]' : 'h-[418px] w-[395px] py-[50px]'} bg-[#F3F3F6] rounded-[40px] flex items-center flex-col relative`}>
                        <h3 className='font-bold text-[42px] leading-none'>{item.name}</h3>
                        <p className='text-lg py-[12px] font-semibold'>{item.description}</p>
                        <button className='text-[#2F7CE3] mb-[30px]'>View Details &#10095;</button>
                        <img
                            src={item.photo}
                            alt={item.description}
                            className='object-contain'
                        />
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestProduct;