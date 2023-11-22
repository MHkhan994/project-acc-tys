import React from 'react';
import products from '../../product.json'
import Image from 'next/image';

const ProductList = () => {
    return (
        <div className='min-h-[500px] w-full bg-gray mt-[30px] rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
            <h1 className='text-[36px] font-bold'>Product</h1>
            <div className="overflow-x-auto mt-[50px]">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className='border-b-[2px] border-[#050C2F]'>
                            <th className='text-[22px] font-semibold text-black text-start p-0 pb-[20px]'>Image</th>
                            <th className='text-[22px] font-semibold text-black pb-[20px] text-start p-0'>Product Name</th>
                            <th className='text-[22px] font-semibold text-black pb-[20px] text-start p-0'>Price</th>
                            <th className='text-[22px] font-semibold text-black pb-[20px] text-end p-0'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((item, i) => <tr key={i}>
                                <td className='p-0 pt-[20px]'>
                                    <div className='lg:h-[92px] h-[70px] lg:w-[92px] w-[70px] rounded-[10px] bg-white flex justify-center items-center me-4 lg:me-0'>
                                        <Image
                                            src={item.photo}
                                            alt='dashboard hero image'
                                            height={70}
                                            width={70}
                                            className='lg:max-w-[65px] max-h-[50px] lg:max-h-[65px] max-w-[50px] object-contain'
                                        />
                                    </div>
                                </td>
                                <td className='p-0 pt-[20px]'>
                                    <h1 className='lg:text-[22px] text-[16px] font-bold'>{item.name}</h1>
                                    <p className='lg:text-lg text-xs lg:pt-[15px]'>{item.description}</p>
                                </td>
                                <td className='lg:text-[22px] text-[16px] font-bold'>
                                    ${item.price}
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;