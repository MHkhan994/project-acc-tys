'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useRef } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

type FormValues = {
    photo: FileList
    text: string
}

const AddHero = () => {
    const [photoFile, setPhotoFile] = useState<File[] | []>([])

    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    const photoRef = useRef<HTMLInputElement>(null);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 4) {
            alert("can't select more that 4 photos")
            return
        }
        else if (e.target.files) {
            setPhotoFile(Array.from(e.target.files))
        }
    }

    const handleRemovePhotoFile = (file: File) => {
        setPhotoFile(pre => {
            if (pre.length !== 0) {
                const newPhotoFile = pre.filter(f => f !== file)
                return newPhotoFile
            }
            return pre
        })
    }

    return (
        <div className='mt-[30px] min-h-[274px] bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
            <h1 className='text-[36px] font-bold leading-none'>Add Image</h1>
            <p className='text-[20px] pb-[25px] pt-[6px] border-b-2 border-black'>Share your product image. Image should be PNG and maximum size 1 Mb</p>

            <form onSubmit={handleSubmit(onSubmit)} className='pt-[35px] flex gap-[20px]'>
                <div className="form-control">
                    <input
                        onInputCapture={handlePhotoChange}
                        {...register('photo')}
                        ref={photoRef}
                        type="file"
                        accept="image/*"
                        className='hidden'
                        multiple
                    />
                    <div onClick={() => photoRef.current?.click()} className='cursor-pointer w-[191px] h-[60px] bg-[#E4E4E4] border border-[#878787] rounded-[10px] flex justify-center items-center'>
                        <Image
                            src={'/add-photo-icon.png'}
                            alt='delete icon'
                            height={30}
                            width={30}
                            className='h-[24px] w-[24px]'
                        />
                        <p className='text-[20px] font-semibold ps-[10px]'>Add photo</p>
                    </div>
                </div>
                <div className="form-control relative">
                    <label className="label absolute bg-gray -top-[14px] left-[27px]">
                        <span className="label-text leading-none">Head Text (Maximum 8 words)</span>
                    </label>
                    <input {...register('text')} type="text" placeholder="Write your text" className="outline-none bg-gray border border-black p-[22px] rounded-[10px] w-[416px] h-[57px]" />
                </div>
            </form>

            {/* ============banner hero preview=============== */}
            {
                photoFile.length !== 0 && <div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-[43px]'>
                        {
                            photoFile.map((photo, i) => {
                                return <div key={i} className='relative'>
                                    <Image
                                        src={URL.createObjectURL(photo)}
                                        alt='banner preview image'
                                        height={30}
                                        width={30}
                                        className='h-[91px] w-[211px] object-cover'
                                    />
                                    <button onClick={() => handleRemovePhotoFile(photo)} className='h-[30px] w-[30px] bg-[#F3F3F6] rounded-full border border-red-600 absolute right-[25px] -top-4 flex justify-center items-center text-red-600 text-xl'>
                                        <IoCloseSharp />
                                    </button>
                                </div>
                            })
                        }
                    </div>

                    <p className='py-[30px]'>show preview</p>

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
                                photoFile.map((photo, i) => <SwiperSlide key={i}>
                                    <Image
                                        src={URL.createObjectURL(photo)}
                                        height={545}
                                        width={1252}
                                        alt='banner image'
                                        className='object-cover w-[1252px] lg:h-[545px] h-[340px]'
                                    />
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddHero;