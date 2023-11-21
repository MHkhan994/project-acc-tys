'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
    return (
        <header className='relative'>
            <div className="swiper-wrapper">
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="mySwiper banner-swiper rounded-[50px]"
                    autoplay={true}
                >
                    {
                        Array.from({ length: 4 }, (item, i) => <SwiperSlide key={i}>
                            <Image
                                src={'/header.png'}
                                height={545}
                                width={1252}
                                alt='banner image'
                                className='object-cover w-[1252px] lg:h-[545px] h-[340px]'
                            />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <h1 className='absolute lg:top-[145px] top-[60px] lg:left-[360px] md:left-[200px] left-[5%] z-20 text-white lg:text-[64px] text-[42px] text-center font-black lg:leading-[68px] leading-[45px]'>WELCOME <br />
                TO THE WORLD <br /> OF ACC
            </h1>

        </header>
    );
};

export default Banner;