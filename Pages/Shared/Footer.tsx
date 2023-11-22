'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const pathName = usePathname()
    return (
        <nav className={pathName?.includes('admin') ? 'hidden' : ''}>
            <div className='lg:min-h-[585px] lg:py-[100px] lg:px-[120px] bg-gray my-container rounded-[40px] mt-[130px] mb-[38px] p-[30px]'>
                <div className='lg:flex items-start gap-[40px] grid md:grid-cols-2 grid-cols-1 justify-between'>
                    <div>
                        <Image
                            src={'/logo-dark.png'}
                            alt='footer logo'
                            height={58}
                            width={136}
                            className='h-[58px] w-[136px]'
                        />
                        <p className='text-lg pt-[30px] lg:w-[386px]'>ACC is a historical company founded in 1968 in the Belluno area, Italy. The company is recognized as one of the leaders in household compressor production. </p>
                    </div>
                    <div>
                        <h2 className='primary-p pb-[25px] leading-none'>Product</h2>
                        <span className='space-y-[25px] text-lg'>
                            <p>Air Conditioner</p>
                            <p>Refrigerator</p>
                            <p>Television</p>
                            <p>Washing Machine</p>
                        </span>
                    </div>
                    <div>
                        <h2 className='primary-p pb-[25px] leading-none'>About us</h2>
                        <span className='space-y-[25px] text-lg'>
                            <p>About Acc</p>
                            <p>Support</p>
                            <p>Privacy Policy</p>
                        </span>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <h2 className='primary-p leading-none'>Social Media</h2>
                        <span className='flex gap-[10px]'>
                            <Image src={'/facebook.png'} height={18} width={18} alt='footer facebook icon' />
                            <Image src={'/instagram.png'} height={18} width={18} alt='footer instagram icon' />
                            <Image src={'/whatsapp.png'} height={18} width={18} alt='footer whatsapp icon' />
                            <Image src={'/linkedin.png'} height={18} width={18} alt='footer linkedin icon' />
                            <Image src={'/youtube.png'} height={18} width={18} alt='footer youtube icon' />
                        </span>
                        <span>
                            <h3 className='text-[22px] font-semibold'>Connect Us </h3>
                            <input type="email" className='h-[53px] w-[251px] text-lg px-[15px] py-[20px] rounded-[10px]' placeholder='Enter email here' />
                        </span>
                        <span>
                            <h3 className='text-[22px] font-semibold'>Our apps</h3>
                            <span className='flex gap-3'>
                                <Image src={'/app-store.png'} height={36} width={111} alt='footer app store icon' />
                                <Image src={'/google-play.png'} height={36} width={127} alt='footer google play icon' />
                            </span>
                        </span>
                    </div>
                </div>
                <p className='text-lg pt-[33px] border-t text-center border-[#050000] mt-[65px]'>© Copyright 2023, All Rights Reserved by Walton ACC Bangladesh</p>
            </div>
        </nav>
    );
};

export default Footer;