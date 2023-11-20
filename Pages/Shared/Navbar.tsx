'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <div className='flex justify-between items-center my-container pt-[38px] pb-[48px]'>
            <Image
                src={'/logo-blue.png'}
                alt='navbar logo'
                height={58}
                width={136}
            />
            <div className='w-[738px] h-[58px] text-[22px] flex justify-center items-center gap-[30px] font-semibold rounded-[200px] border border-[#E4E4E4]'>
                <Link className={pathname === '/' ? 'text-[#2F7CE3]' : ''} href={'/'}>Home</Link>
                <Link href={'/'} className={pathname === '/about' ? 'text-[#2F7CE3]' : ''}>About Us</Link>
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
    );
};

export default Navbar;