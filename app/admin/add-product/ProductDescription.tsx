import Image from 'next/image';
import React from 'react';

const ProductDescription = () => {
    return (
        <div>
            <div className='bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px] mt-[30px]'>
                <h1 className='text-[36px] font-bold leading-none lg:pb-[60px] pb-[30px]'>Product Description</h1>
                <>
                    <p className='text-[28px] font-bold'>Add Feature Details</p>
                    <p className='text-lg'>Share your product image. Image should be PNG and maximum size 1 Mb</p>
                    <div className='w-full h-[205px] border border-gray-400 rounded-[10px] mt-[25px]'>
                        <div className='flex gap-[30px] items-center p-[15px] border-b border-gray-400'>
                            <span className=''>
                                <p className='text-lg'>Normal</p>
                            </span>
                            <p className='font-black'>B</p>
                            <p className='font-bold'>I</p>
                            <p className='font-bold underline'>U</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M5.89421 11.3333H12.9775C13.1192 11.3333 13.2255 11.2722 13.2963 11.15C13.3671 11.0278 13.3553 10.9111 13.2609 10.8L11.313 8.35C11.2421 8.26111 11.1477 8.21667 11.0296 8.21667C10.9116 8.21667 10.8171 8.26111 10.7463 8.35L8.90462 10.6667L7.59421 9.01667C7.52337 8.92778 7.42893 8.88333 7.31087 8.88333C7.19282 8.88333 7.09837 8.92778 7.02754 9.01667L5.61087 10.8C5.51643 10.9111 5.50462 11.0278 5.57546 11.15C5.64629 11.2722 5.75254 11.3333 5.89421 11.3333ZM3.76921 14C3.37962 14 3.04623 13.8696 2.76904 13.6087C2.49137 13.3473 2.35254 13.0333 2.35254 12.6667V4.66667C2.35254 4.3 2.49137 3.98622 2.76904 3.72533C3.04623 3.464 3.37962 3.33333 3.76921 3.33333H6.00046L6.88587 2.43333C7.01573 2.28889 7.17204 2.18044 7.35479 2.108C7.53801 2.036 7.72997 2 7.93066 2H10.9411C11.1418 2 11.3337 2.036 11.517 2.108C11.6997 2.18044 11.856 2.28889 11.9859 2.43333L12.8713 3.33333H15.1025C15.4921 3.33333 15.8257 3.464 16.1034 3.72533C16.3806 3.98622 16.5192 4.3 16.5192 4.66667V12.6667C16.5192 13.0333 16.3806 13.3473 16.1034 13.6087C15.8257 13.8696 15.4921 14 15.1025 14H3.76921ZM15.1025 12.6667V4.66667H3.76921V12.6667H15.1025Z" fill="#050C2F" />
                            </svg>
                            <p>{`</>`}</p>
                        </div>
                        <textarea placeholder='Event Details' className='w-full resize-none bg-transparent outline-none h-[162px] p-[15px]'></textarea>
                    </div>
                </>

                <div className='w-full h-[1px] bg-gray-400 my-[50px]'></div>

                <div className='flex lg:flex-row flex-col lg:gap-[80px] gap-[50px]'>
                    <button className='w-[304px] h-[50px] p-[18px] bg-[#2F7CE3] primary-p text-white rounded-[10px] items-center flex justify-between'>
                        <span>Add Category</span>
                        <span>+</span>
                    </button>
                    <button className='w-[304px] h-[50px] p-[18px] bg-[#E4E4E4] primary-p text-black border border-gray-400 rounded-[10px] items-center flex justify-between'>
                        <span>Add Category</span>
                        <span>+</span>
                    </button>
                </div>

                <div className='w-full h-[1px] bg-gray-400 my-[50px]'></div>

                <>
                    <p className='text-[28px] font-bold'>Add Image Gallery</p>
                    <p className='text-lg leading-none pb-[30px] pt-[10px]'>Share your product image. Image should be PNG and maximum size 1 Mb</p>
                    <div className='cursor-pointer w-[191px] h-[60px] bg-[#E4E4E4] border border-[#878787] rounded-[10px] flex justify-center items-center'>
                        <Image
                            src={'/add-photo-icon.png'}
                            alt='delete icon'
                            height={30}
                            width={30}
                            className='h-[24px] w-[24px]'
                        />
                        <p className='text-[20px] font-semibold ps-[10px]'>Add photo</p>
                    </div>
                </>

                <div className='w-full h-[1px] bg-gray-400 my-[50px]'></div>

                <>
                    <p className='text-[28px] font-bold'>Add Support Details</p>
                    <p className='text-lg'>Share your product image. Image should be PNG and maximum size 1 Mb</p>
                    <div className='w-full h-[205px] border border-gray-400 rounded-[10px] mt-[25px]'>
                        <div className='flex gap-[30px] items-center p-[15px] border-b border-gray-400'>
                            <span className=''>
                                <p className='text-lg'>Normal</p>
                            </span>
                            <p className='font-black'>B</p>
                            <p className='font-bold'>I</p>
                            <p className='font-bold underline'>U</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M5.89421 11.3333H12.9775C13.1192 11.3333 13.2255 11.2722 13.2963 11.15C13.3671 11.0278 13.3553 10.9111 13.2609 10.8L11.313 8.35C11.2421 8.26111 11.1477 8.21667 11.0296 8.21667C10.9116 8.21667 10.8171 8.26111 10.7463 8.35L8.90462 10.6667L7.59421 9.01667C7.52337 8.92778 7.42893 8.88333 7.31087 8.88333C7.19282 8.88333 7.09837 8.92778 7.02754 9.01667L5.61087 10.8C5.51643 10.9111 5.50462 11.0278 5.57546 11.15C5.64629 11.2722 5.75254 11.3333 5.89421 11.3333ZM3.76921 14C3.37962 14 3.04623 13.8696 2.76904 13.6087C2.49137 13.3473 2.35254 13.0333 2.35254 12.6667V4.66667C2.35254 4.3 2.49137 3.98622 2.76904 3.72533C3.04623 3.464 3.37962 3.33333 3.76921 3.33333H6.00046L6.88587 2.43333C7.01573 2.28889 7.17204 2.18044 7.35479 2.108C7.53801 2.036 7.72997 2 7.93066 2H10.9411C11.1418 2 11.3337 2.036 11.517 2.108C11.6997 2.18044 11.856 2.28889 11.9859 2.43333L12.8713 3.33333H15.1025C15.4921 3.33333 15.8257 3.464 16.1034 3.72533C16.3806 3.98622 16.5192 4.3 16.5192 4.66667V12.6667C16.5192 13.0333 16.3806 13.3473 16.1034 13.6087C15.8257 13.8696 15.4921 14 15.1025 14H3.76921ZM15.1025 12.6667V4.66667H3.76921V12.6667H15.1025Z" fill="#050C2F" />
                            </svg>
                            <p>{`</>`}</p>
                        </div>
                        <textarea placeholder='Event Details' className='w-full resize-none bg-transparent outline-none h-[162px] p-[15px]'></textarea>
                    </div>
                </>
            </div>


            <div>

            </div>
        </div>
    );
};

export default ProductDescription;