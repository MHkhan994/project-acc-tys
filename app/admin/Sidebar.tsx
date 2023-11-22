'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {

    const pathName = usePathname()
    console.log(pathName);

    return (
        <div className='w-[362px] bg-gray h-[982px] py-[56px] ps-[71px] pe-[32px] hidden md:hidden lg:block'>
            <Image
                src={'/logo-blue.png'}
                alt='dashboard logo'
                height={55}
                width={129}
            />

            <button className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] mt-[48px] ${pathName === '/admin' ? 'bg-[#CCDBF2]' : ''}`}>
                <Image
                    src={'/dashboard.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin'} className='primary-p capitalize'>Dashboard</Link>
            </button>

            <p className='primary-p uppercase pt-[48px] pb-[10px]'>pages</p>

            <button className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] ${pathName === '/admin/add-hero' ? 'bg-[#CCDBF2]' : ''}`}>
                <Image
                    src={'/add-hero.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin/add-hero'} className='primary-p capitalize'>Add Hero Image</Link>
            </button>
            <button className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] ${pathName === '/admin/add-product' ? 'bg-[#CCDBF2]' : ''}`}>
                <Image
                    src={'/add-product.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin/add-product'} className='primary-p capitalize'>Add Product</Link>
            </button>
        </div>
    );
};

export default Sidebar;