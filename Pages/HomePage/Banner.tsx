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
                    className="mySwiper rounded-[50px]"
                    autoplay={true}
                >
                    {
                        Array.from({ length: 4 }, (item, i) => <SwiperSlide key={i}>
                            <Image
                                src={'/header.png'}
                                height={545}
                                width={1252}
                                alt='banner image'
                            />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <h1 className='absolute top-[145px] left-[360px] z-20 text-white  text-[64px] text-center font-black leading-[68px]'>WELCOME <br />
                TO THE WORLD <br /> OF ACC
            </h1>

        </header>
    );
};

export default Banner;