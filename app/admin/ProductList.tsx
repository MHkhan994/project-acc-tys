'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/Types/types';
import Link from 'next/link';
import Swal from 'sweetalert2';

const ProductList = () => {

    const [AllProducts, setAllProducts] = useState<Product[] | []>([])

    useEffect(() => {
        const productsJson = localStorage.getItem('products');
        const localProducts = productsJson ? JSON.parse(productsJson) : []
        setAllProducts([...localProducts])
    }, []);

    const handleEditProduct = (item: Product) => {

    }

    const handleDeleteProduct = (item: Product) => {
        Swal.fire({
            title: `Delete product - ${item.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const filteredProducts = AllProducts.filter(p => p !== item)
                setAllProducts(filteredProducts)
                localStorage.setItem('products', JSON.stringify(filteredProducts))
                Swal.fire({
                    title: "Deleted!",
                    text: "Product has been deleted",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='min-h-[500px] w-full bg-gray mt-[30px] rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
            <h1 className='text-[36px] font-bold'>Product</h1>
            {
                AllProducts.length > 0 && <div className="overflow-x-auto mt-[50px]">
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
                                AllProducts.map((item, i) => <tr key={i}>
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
                                            <button onClick={() => handleEditProduct(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path d="M20.5925 6.76003L23.24 9.40628M22.295 4.42878L15.1363 11.5875C14.7664 11.9569 14.5141 12.4275 14.4113 12.94L13.75 16.25L17.06 15.5875C17.5725 15.485 18.0425 15.2338 18.4125 14.8638L25.5713 7.70503C25.7864 7.48991 25.957 7.23452 26.0734 6.95345C26.1899 6.67238 26.2498 6.37113 26.2498 6.0669C26.2498 5.76267 26.1899 5.46143 26.0734 5.18036C25.957 4.89929 25.7864 4.6439 25.5713 4.42878C25.3561 4.21366 25.1007 4.04301 24.8197 3.92659C24.5386 3.81017 24.2374 3.75024 23.9331 3.75024C23.6289 3.75024 23.3276 3.81017 23.0466 3.92659C22.7655 4.04301 22.5101 4.21366 22.295 4.42878Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M23.75 18.75V22.5C23.75 23.163 23.4866 23.7989 23.0178 24.2678C22.5489 24.7366 21.913 25 21.25 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V8.75C5 8.08696 5.26339 7.45107 5.73223 6.98223C6.20107 6.51339 6.83696 6.25 7.5 6.25H11.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <button onClick={() => handleDeleteProduct(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                                    <path d="M8.75 27.1292C8.0625 27.1292 7.47375 26.8842 6.98375 26.3942C6.49375 25.9042 6.24917 25.3158 6.25 24.6292V8.37915H5V5.87915H11.25V4.62915H18.75V5.87915H25V8.37915H23.75V24.6292C23.75 25.3167 23.505 25.9054 23.015 26.3954C22.525 26.8854 21.9367 27.13 21.25 27.1292H8.75ZM21.25 8.37915H8.75V24.6292H21.25V8.37915ZM11.25 22.1292H13.75V10.8792H11.25V22.1292ZM16.25 22.1292H18.75V10.8792H16.25V22.1292Z" fill="black" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
            {
                AllProducts.length === 0 && <div className='min-h-[300px] w-full flex gap-4 justify-center text-[20px] font-semibold items-center'>
                    <p className='text-[20px] font-semibold'>No products available</p>
                    <Link href={'/admin/add-product'} className='text-[#2F7CE3] underline'>add product</Link>
                </div>
            }
        </div >
    );
};

export default ProductList;