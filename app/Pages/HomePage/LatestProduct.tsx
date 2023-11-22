'use client'
import React from 'react';
import { useState } from 'react'
import products from '../../../product.json'
import Image from 'next/image';
import Link from 'next/link';

const LatestProduct = () => {

    type Tab = 'over view' | 'air conditioner' | 'refrigerator' | 'television' | 'washing machine'
    const [currentTab, setCurrentTab] = useState<Tab>('over view')
    const tabs: Tab[] = ['over view', 'air conditioner', 'refrigerator', 'television', 'washing machine']

    return (
        <div className='mt-[100px]'>
            <h1 className='primary-title text-center'>Shop our Latest Product</h1>
            {/* ========tabs======== */}
            <div className='flex cursor-pointer capitalize justify-center lg:gap-[71px] gap-4 flex-wrap lg:text-[22px] text-lg font-semibold my-[30px]'>
                {
                    tabs.map(tab => <p key={tab} className={`${currentTab === tab ? 'text-[#2F7CE3]  border-b border-[#2F7CE3]' : ''}`} onClick={() => setCurrentTab(tab)}>{tab}</p>)
                }
            </div>
            <div className='flex flex-wrap gap-[30px] justify-center md:justify-between'>
                {
                    products.map((item, i) => <div key={i} className={`${i <= 1 ? 'lg:h-[563px] lg:w-[611px] lg:py-[81px] py-[50px] h-[418px] w-[395px] md:w-[350px]' : 'h-[418px] w-[395px] lg:w-[395px] md:w-[350px] py-[50px]'} bg-[#F3F3F6] rounded-[40px] flex items-center flex-col relative md:mx-auto`}>
                        <h3 className='font-bold lg:text-[42px] text-[28px] leading-none'>{item.name}</h3>
                        <p className='text-lg py-[12px] font-semibold'>{item.description}</p>
                        <Link href={`/product/${item.id}`} className='text-[#2F7CE3] mb-[30px]'>View Details &#10095;</Link>
                        <img
                            src={item.photo}
                            alt={item.description}
                            className='object-cover max-h-[200px]'
                        />
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestProduct;