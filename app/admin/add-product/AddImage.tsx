'use client'
import Image from 'next/image';
import React from 'react';


const AddImage = () => {
    return (
        <div className='min-h-[361px] flex justify-between flex-col-reverse items-center lg:flex-row gap-[64px] w-full bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px] mt-[30px]'>
            <div className='flex-grow'>
                <h1 className='text-[36px] font-bold leading-none'>Add Image</h1>
                <p className='text-[20px] pb-[25px] leading-normal pt-[10px] border-b-2 border-black'>Share your product image. Image should be PNG and <br /> maximum size 1 Mb</p>
                <div className='flex justify-between items-center'>
                    <div className='h-[125px] w-[125px] mt-[30px] bg-white rounded-[10px] flex justify-center items-center'>
                        <Image
                            src={'https://i.ibb.co/RcXVJns/product-Tv.png'}
                            alt='add-product image'
                            height={125}
                            width={125}
                            className='max-h-[93px] max-w-[93px] object-contain'
                        />
                    </div>
                    <div className='flex justify-end gap-[10px]'>
                        <button className='bg-[#2F7CE3] h-[41px] w-[41px] rounded-[5px] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M16.8425 4.88491L19.49 7.53116M18.545 2.55366L11.3863 9.71241C11.0164 10.0818 10.7641 10.5524 10.6613 11.0649L10 14.3749L13.31 13.7124C13.8225 13.6099 14.2925 13.3587 14.6625 12.9887L21.8213 5.82991C22.0364 5.61478 22.207 5.3594 22.3234 5.07833C22.4399 4.79726 22.4998 4.49601 22.4998 4.19178C22.4998 3.88755 22.4399 3.5863 22.3234 3.30523C22.207 3.02416 22.0364 2.76878 21.8213 2.55366C21.6061 2.33853 21.3507 2.16789 21.0697 2.05147C20.7886 1.93504 20.4874 1.87512 20.1831 1.87512C19.8789 1.87512 19.5776 1.93504 19.2966 2.05147C19.0155 2.16789 18.7601 2.33853 18.545 2.55366Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 16.8749V20.6249C20 21.2879 19.7366 21.9238 19.2678 22.3926C18.7989 22.8615 18.163 23.1249 17.5 23.1249H3.75C3.08696 23.1249 2.45107 22.8615 1.98223 22.3926C1.51339 21.9238 1.25 21.2879 1.25 20.6249V6.87488C1.25 6.21184 1.51339 5.57595 1.98223 5.10711C2.45107 4.63827 3.08696 4.37488 3.75 4.37488H7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className='bg-[#BD2626] h-[41px] w-[41px] rounded-[5px] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                                <path d="M4.25 23.3751C3.5625 23.3751 2.97375 23.1301 2.48375 22.6401C1.99375 22.1501 1.74917 21.5618 1.75 20.8751V4.62512H0.5V2.12512H6.75V0.875122H14.25V2.12512H20.5V4.62512H19.25V20.8751C19.25 21.5626 19.005 22.1514 18.515 22.6414C18.025 23.1314 17.4367 23.376 16.75 23.3751H4.25ZM16.75 4.62512H4.25V20.8751H16.75V4.62512ZM6.75 18.3751H9.25V7.12512H6.75V18.3751ZM11.75 18.3751H14.25V7.12512H11.75V18.3751Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-[271px] w-[271px] bg-white rounded-[10px] flex justify-center items-center'>
                <Image
                    src={'https://i.ibb.co/RcXVJns/product-Tv.png'}
                    alt='add-product image'
                    height={199}
                    width={199}
                    className='max-h-[199px] max-w-[199px] object-contain'
                />
            </div>
        </div>
    );
};

export default AddImage;