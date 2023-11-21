'use client'
import { Product } from '@/Types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './product.css'

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
            <div className='flex flex-wrap md:gap-[71px] justify-center md:justify-normal gap-[20px] md:border-b-4 relative border-[#c7dffd]'>
                {
                    detailsTabs.map(item => <button
                        className={`md:text-[22px] font-semibold text-[16px] relative capitalize mb-[-4px] ${currentTab === item ? 'text-[#2F7CE3] border-b-4 border-[#2F7CE3]' : 'border-[#c7dffd]'} pb-[10px] border md:border-t-0 md:border-x-0 border-b-4 p-2`}
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
                            depth: 100,
                            modifier: 1,
                            slideShadows: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 0,
                            },
                            // When window width is >= 640px
                            740: {
                                spaceBetween: 10,
                            },
                            // When window width is >= 992px
                            992: {
                                spaceBetween: 80,
                            },
                        }}
                        modules={[Pagination, EffectCoverflow]}
                        style={{ height: 'auto' }}
                        className={`mySwiper mt-[30px] product-swiper h-full rounded-[50px]`}
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