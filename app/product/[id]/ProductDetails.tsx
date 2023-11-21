'use client'
import { Product } from '@/Types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as style from './product.module.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ProductDetails = ({ product }: { product: Product | undefined }) => {

    type DetailsTab = "feature" | "technical_specification" | "picture_gallery" | "supports"
    const detailsTabs: DetailsTab[] = ["feature", "technical_specification", "picture_gallery", "supports"]
    const [currentTab, setCurrentTab] = useState<DetailsTab>('feature')

    console.log(product);

    return (
        <div className='mt-[100px]'>
            <h1 className='primary-title pb-[50px]'>Details more</h1>
            <div className='space-x-[71px] border-b-4 relative border-[#c7dffd]'>
                {
                    detailsTabs.map(item => <button
                        className={`primary-p relative capitalize mb-[-4px] ${currentTab === item ? 'text-[#2F7CE3] border-b-4 border-[#2F7CE3]' : ''} pb-[10px]`}
                        key={item}
                        onClick={() => setCurrentTab(item)}
                    >
                        {item}
                    </button>)
                }
            </div>
            <div>
                {
                    currentTab !== 'picture_gallery' && <p className='primary-p pt-[30px]'>{product?.[currentTab]}</p>
                }
                {
                    currentTab === 'picture_gallery' && <Swiper
                        effect={'coverflow'}
                        freeMode={true}
                        grabCursor={true}
                        spaceBetween={80}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }
                        }
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 40,
                            modifier: 1,
                            slideShadows: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                            },
                            // When window width is >= 640px
                            640: {
                                spaceBetween: 50,
                            },
                            // When window width is >= 992px
                            992: {
                                spaceBetween: 80,
                            },
                        }}
                        modules={[Pagination, EffectCoverflow]}
                        style={{ height: 'auto' }}
                        className={`mySwiper mt-[30px] product-swiper h-full rounded-[50px] ${style}`}
                    >
                        {
                            product?.picture_gallery?.map(photo => <SwiperSlide className='img-slider rounded-[40px]' key={photo}>
                                <div className='h-[463px] lg:w-[411px] w-[340px] rounded-[40px] lg:p-[81px] p-[30px] bg-gray flex justify-center items-center'>
                                    <Image
                                        src={photo}
                                        alt={'product image gallery'}
                                        width={411}
                                        height={450}
                                        className='max-h-[300px] max-w-[463px] object-contain'
                                    />
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                }
            </div>
        </div>
    );
};

export default ProductDetails;