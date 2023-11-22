'use-client'
import PrimaryButton from '@/components/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const HeroImage = () => {

    const [imageURL, setImageURL] = useState<string | null>(null)

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('Image_Url');
        if (storedImageUrl) {
            setImageURL(storedImageUrl);
        }
    }, []);

    return (
        <div className='h-[337px] w-full bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
            <span className='flex justify-between items-center'>
                <h1 className='text-[36px] font-bold'>Hero Image</h1>
                <button className='bg-[#2F7CE3] text-white capitalize font-semibold text-[20px] h-[50px] w-[146px] rounded-[10px]'>
                    <Link href={'/admin/add-hero'}>Add New</Link>
                </button>
            </span>
            <div className="overflow-x-auto mt-[50px]">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className='border-b-[2px] border-[#050C2F]'>
                            <th className='text-[22px] font-semibold text-black text-start p-0 pb-[20px]'>Image</th>
                            <th className='text-[22px] font-semibold text-black pb-[20px] text-start p-0'>Head Text</th>
                            <th className='text-[22px] font-semibold text-black pb-[20px] text-end p-0'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-0 pt-[20px]'>
                                <Image
                                    src={imageURL || '/header.png'}
                                    alt='dashboard hero image'
                                    height={91}
                                    width={211}
                                    className='h-[91px] w-[211px] object-cover rounded-[10px]'
                                />
                            </td>
                            <td className='p-0 pt-[20px]'>
                                <h1 className='lg:text-[22px] text-[16px] font-bold'>WELCOME TO THE WORLD OF ACC</h1>
                                <p className='lf:text-lg text-sm'>Upload Date: February 24, 2023</p>
                            </td>
                            <td>
                                <div className='flex justify-end'>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                            <path d="M20.5925 7.63918L23.24 10.2854M22.295 5.30793L15.1363 12.4667C14.7664 12.8361 14.5141 13.3067 14.4113 13.8192L13.75 17.1292L17.06 16.4667C17.5725 16.3642 18.0425 16.1129 18.4125 15.7429L25.5713 8.58418C25.7864 8.36906 25.957 8.11367 26.0734 7.8326C26.1899 7.55153 26.2498 7.25028 26.2498 6.94605C26.2498 6.64183 26.1899 6.34058 26.0734 6.05951C25.957 5.77844 25.7864 5.52305 25.5713 5.30793C25.3561 5.09281 25.1007 4.92216 24.8197 4.80574C24.5386 4.68932 24.2374 4.62939 23.9331 4.62939C23.6289 4.62939 23.3276 4.68932 23.0466 4.80574C22.7655 4.92216 22.5101 5.09281 22.295 5.30793Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.75 19.6292V23.3792C23.75 24.0422 23.4866 24.6781 23.0178 25.1469C22.5489 25.6158 21.913 25.8792 21.25 25.8792H7.5C6.83696 25.8792 6.20107 25.6158 5.73223 25.1469C5.26339 24.6781 5 24.0422 5 23.3792V9.62915C5 8.96611 5.26339 8.33022 5.73223 7.86138C6.20107 7.39254 6.83696 7.12915 7.5 7.12915H11.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                            <path d="M8.75 27.1292C8.0625 27.1292 7.47375 26.8842 6.98375 26.3942C6.49375 25.9042 6.24917 25.3158 6.25 24.6292V8.37915H5V5.87915H11.25V4.62915H18.75V5.87915H25V8.37915H23.75V24.6292C23.75 25.3167 23.505 25.9054 23.015 26.3954C22.525 26.8854 21.9367 27.13 21.25 27.1292H8.75ZM21.25 8.37915H8.75V24.6292H21.25V8.37915ZM11.25 22.1292H13.75V10.8792H11.25V22.1292ZM16.25 22.1292H18.75V10.8792H16.25V22.1292Z" fill="black" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default HeroImage;