'use client'
import React from 'react';
import products from '../../../product.json'
import Image from 'next/image';
import ReactStars from 'react-stars'
import ProductDetails from './ProductDetails';
import { Product } from '@/Types/types';

const SingleProduct = ({ params }: { params: { id: string } }) => {

    const product: Product | undefined = products.find(p => p.id === params.id)

    console.log(product);

    return (
        <div className='my-container lg:pt-[33px] pt-[10px]'>
            <div className='grid lg:grid-cols-2 gap-[50px]'>
                <div className='lg:h-[563px] h-[340px] mx-auto lg:w-[611px] w-[330px] rounded-[40px] lg:p-[81px] p-[30px] bg-gray flex justify-center items-center'>
                    <Image
                        src={product?.photo ? product.photo : ''}
                        alt={product?.name ? product.name : ''}
                        width={463}
                        height={450}
                        className='lg:max-h-[450px] lg:max-w-[463px] max-w-[250px] max-h-[300px] object-contain'
                    />
                </div>
                <div>
                    <h1 className='primary-title leading-none pb-[25px]'>{product?.name}</h1>
                    <p className='text-[22px] leading-normal'>{product?.details}</p>
                    <span className='flex items-center gap-1 py-[40px]'>
                        <ReactStars
                            count={5}
                            value={product?.ratings?.average || 5}
                            size={39}
                            edit={false}
                            color1={'#E4E4E4'}
                            color2={'#FFC73F'}
                        />
                        <p className='text-[22px] font-semibold'>{product?.ratings?.average} ({product?.ratings?.total})</p>
                    </span>
                    <h2 className='text-[#2F7CE3] primary-title'>${product?.price}</h2>

                    <div className='pt-[40px] flex flex-wrap gap-[30px] lg:justify-normal justify-between'>
                        <div className='rounded-[15px] lg:h-[117px] lg:w-[177px] h-[100px] w-[150px] border border-[#E4E4E4] flex flex-col gap-[10px] justify-center items-center'>
                            <span className='h-[37px] w-[37px] rounded-full bg-[#557597]'></span>
                            <p className='primary-p'>blue</p>
                        </div>
                        <div className='rounded-[15px] lg:h-[117px] lg:w-[177px] h-[100px] w-[150px] border border-[#E4E4E4] flex flex-col gap-[10px] justify-center items-center'>
                            <span className='h-[37px] w-[37px] rounded-full bg-[#E2586A]'></span>
                            <p className='primary-p'>pink</p>
                        </div>
                        <div className='rounded-[15px] lg:h-[117px] lg:w-[177px] h-[100px] w-[150px] border border-[#E4E4E4] flex flex-col gap-[10px] justify-center items-center'>
                            <span className='h-[37px] w-[37px] rounded-full bg-[#F1D35C]'></span>
                            <p className='primary-p'>yellow</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetails
                product={product}
            />
        </div>
    );
};

export default SingleProduct;