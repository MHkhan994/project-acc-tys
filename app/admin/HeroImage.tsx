import PrimaryButton from '@/components/PrimaryButton';
import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
    return (
        <div className='h-[337px] w-full bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
            <span className='flex justify-between items-center'>
                <h1 className='text-[36px] font-bold'>Hero Image</h1>
                <PrimaryButton
                    buttonStyle='bg-[#2F7CE3] text-white capitalize h-[50px] w-[146px] rounded-[10px]'
                    text='add new'
                />
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
                                    src={'/header.png'}
                                    alt='dashboard hero image'
                                    height={91}
                                    width={211}
                                />
                            </td>
                            <td className='p-0 pt-[20px]'>
                                <h1 className='lg:text-[22px] text-[16px] font-bold'>WELCOME TO THE WORLD OF ACC</h1>
                                <p className='lf:text-lg text-sm'>Upload Date: February 24, 2023</p>
                            </td>
                            <td>
                                <div className='flex justify-end'>
                                    <button>
                                        <Image
                                            src={'/edit-icon.png'}
                                            alt='edit icon'
                                            height={30}
                                            width={30}
                                            className='lg:h-[30px] h-[20px] lg:w-[30px] w-[20px]'
                                        />
                                    </button>
                                    <button>
                                        <Image
                                            src={'/delete-icon.png'}
                                            alt='delete icon'
                                            height={30}
                                            width={30}
                                            className='lg:h-[30px] h-[20px] lg:w-[30px] w-[20px]'
                                        />
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