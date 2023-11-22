'use client'
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import AddImage from './AddImage';
import ProductDescription from './ProductDescription';
import Swal from 'sweetalert2';

type FormValues = {
    name: string;
    price: number;
    description: string;
    category?: string
}

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        Swal.fire({
            title: `Add product ${data.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add"
        }).then((result) => {
            if (result.isConfirmed) {
                const { name, description, price } = data
                const prevProductsJson = localStorage.getItem('products');

                const id = Math.random() * 1000000

                let prevProducts = prevProductsJson ? JSON.parse(prevProductsJson) : []
                const products = [...prevProducts, { id, name, description, price, photo: "https://i.ibb.co/RcXVJns/product-Tv.png" }]

                localStorage.setItem('products', JSON.stringify(products))
                reset()
                Swal.fire({
                    title: "Success!",
                    text: "Product has been added",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className='min-h-[337px] w-full bg-gray rounded-[40px] lg:px-[38px] px-[20px] lg:py-[45px] py-[25px]'>
                <h1 className='text-[36px] font-bold leading-none pb-[25px] border-b-2 border-black'>Product is</h1>
                <form id="product-form" onSubmit={handleSubmit(onSubmit)} className='pt-[35px] grid md:grid-cols-2 grid-cols-1 justify-start gap-[20px]'>
                    {/* =======product name======= */}
                    <div className="form-control relative">
                        <label className="label absolute bg-gray -top-[14px] left-[27px]">
                            <span className="label-text leading-none">Product name</span>
                        </label>
                        <input {...register('name', { required: true })} type="text" placeholder="Product name" className="outline-none bg-gray border border-black p-[22px] rounded-[10px] lg:w-[370px] text-[18px] w-full h-[57px]" />
                    </div>
                    {/* =======price======== */}
                    <div className="form-control relative">
                        <label className="label absolute bg-gray -top-[14px] left-[27px]">
                            <span className="label-text leading-none">Price</span>
                        </label>
                        <input {...register('price', { required: true })} type="number" placeholder="Price" className="outline-none bg-gray border border-black p-[22px] rounded-[10px] lg:w-[120px] text-[18px] w-full h-[57px]" />
                    </div>
                    {/* =======short bio======== */}
                    <div className="form-control relative">
                        <label className="label absolute bg-gray -top-[14px] left-[27px]">
                            <span className="label-text leading-none">Short Bio (Max 8 words)</span>
                        </label>
                        <input {...register('description', { required: true })} type="text" placeholder="white a short bio" className="outline-none bg-gray border border-black p-[22px] rounded-[10px] lg:w-[370px] text-[18px] w-full h-[57px]" />
                    </div>
                    {/* =======category======== */}
                    <div className="form-control relative">
                        <label className="label absolute bg-gray -top-[14px] left-[27px]">
                            <span className="label-text leading-none">Category</span>
                        </label>
                        <input {...register('category')} type="text" placeholder="white a short bio" className="outline-none bg-gray border border-black p-[22px] rounded-[10px] lg:w-[220px] text-[18px] w-full h-[57px]" />
                    </div>
                </form>
            </div>

            <AddImage />
            <ProductDescription />
            <div className='justify-end flex mt-[32px] gap-[20px]'>
                <button type='submit' form='product-form' className='p-[18px] leading-none bg-[#BD2626] rounded-[10px] text-white font-semibold text-[20px]'>
                    Save & Exit
                </button>
                <button type='submit' form='product-form' className='p-[18px] leading-none bg-[#2F7CE3] rounded-[10px] text-white font-semibold text-[20px]'>
                    Publish
                </button>
            </div>
        </div>
    );
};

export default AddProduct;