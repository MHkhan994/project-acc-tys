import PrimaryButton from '@/components/PrimaryButton';
import React from 'react';

const Update = () => {
    return (
        <div className='bg-gray p-[30px] lg:h-[387px] rounded-[40px] flex flex-col justify-center items-center'>
            <h1 className='lg:text-[56px] text-[32px] font-bold text-center'>Need Our Latest Update?</h1>
            <p className='text-center pb-[30px] pt-[10px]'>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.</p>
            <PrimaryButton text='Sign up for Newsletter' buttonStyle='text-[20px] font-semibold bg-[#2F7CE3] w-[285px] h-[62px] text-white rounded-[100px]'></PrimaryButton>
        </div>
    );
};

export default Update;