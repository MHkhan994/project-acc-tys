import PrimaryButton from '@/components/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className='my-[130px] lg:min-h-[567px] lg:p-[92px] p-[50px] bg-gray rounded-[40px]'>
            <div className='grid lg:grid-cols-2 gap-[84px] min-h-[383px] lg:w-[1053px] items-center'>
                <Image
                    src={'/about.png'}
                    height={383}
                    width={480}
                    alt='about us image'
                    className='object-cover h-[383px]'
                />
                <div className='space-y-[40px]'>
                    <h1 className='lg:text-[56px] text-[32px] font-bold'>About Us</h1>
                    <p className='text-[22px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <button type='button' className='text-[20px] font-semibold bg-[#2F7CE3] w-[177px] h-[62px] text-white rounded-[100px]'>
                        <Link href={'/about'}>Read more</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;