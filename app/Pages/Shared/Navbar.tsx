'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()

    const openDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer-4') as HTMLInputElement | null;
        if (drawerCheckbox) {
            console.log(drawerCheckbox.checked);
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }

    return (
        <div className={`${pathname?.includes('admin') ? 'hidden' : ''}`}>
            <div className={`lg:flex hidden justify-between items-center my-container pt-[38px] pb-[48px]`}>
                <div onClick={() => router.push('/')}>
                    <Image
                        src={'/logo-blue.png'}
                        alt='navbar logo'
                        height={58}
                        width={136}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-[738px] h-[58px] text-[22px] flex justify-center items-center gap-[30px] font-semibold rounded-[200px] border border-[#E4E4E4]'>
                    <Link className={`${pathname === '/' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3]`} href={'/'}>Home</Link>
                    <Link href={'/'} className={`${pathname === '/d' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3] transition-all`}>About Us</Link>
                    <Link href={'/'}>Request Service</Link>
                    <Link href={'/'}>Find A Store</Link>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <Image
                        src={'/logo-nav-right.png'}
                        alt='navbar logo right side'
                        height={58}
                        width={50}
                    />
                    <span className='text-xl font-semibold'>
                        <p>ACC InstaHome</p>
                        <p>Download App Now</p>
                    </span>
                </div>
            </div>

            {/* =========mobile-nav======== */}
            <div className='flex lg:hidden justify-between my-container py-2 mb-[20px]'>
                <div onClick={() => router.push('/')}>
                    <Image
                        src={'/logo-blue.png'}
                        alt='navbar logo'
                        height={28}
                        width={100}
                        className='cursor-pointer'
                    />
                </div>
                <button className='text-2xl' onClick={openDrawer}>
                    <FaBarsStaggered />
                </button>

            </div>
            <div className="drawer drawer-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side z-40">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 md:w-96 gap-3 min-h-full bg-base-200 text-base-content">
                        <button className='text-2xl ms-auto' onClick={openDrawer}>
                            <IoCloseSharp />
                        </button>
                        <div>
                            <div className='flex items-center gap-[10px]'>
                                <Image
                                    src={'/logo-nav-right.png'}
                                    alt='navbar logo right side'
                                    height={38}
                                    width={30}
                                />
                                <span className='text-lg font-semibold'>
                                    <p>ACC InstaHome</p>
                                    <p>Download App Now</p>
                                </span>
                            </div>
                        </div>
                        <div className='text-xl gap-[20px] flex flex-col mt-3'>
                            <Link className={`${pathname === '/' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3]`} href={'/'}>Home</Link>
                            <Link href={'/'} className={`${pathname === '/about' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3] transition-all`}>About Us</Link>
                            <Link className={`${pathname === '/service' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3]`} href={'/'}>Request Service</Link>
                            <Link className={`${pathname === '/store' ? 'text-[#2F7CE3]' : ''} hover:text-[#2F7CE3]`} href={'/'}>Find A Store</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;