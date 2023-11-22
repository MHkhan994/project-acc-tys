'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaBars } from "react-icons/fa6";
import Sidebar from './Sidebar';
import SidebarButtons from './SidebarButtons';

const DashboardNav = () => {
    const pathName = usePathname()
    const router = useRouter()

    const handleDrawer = () => {
        const drawerCheckbox = document.getElementById('dashboard-drawer') as HTMLInputElement | null;
        if (drawerCheckbox) {
            console.log(drawerCheckbox.checked);
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }

    return (
        <div className='min-h-[44px] w-full flex justify-between items-center lg:my-[80px] my-[50px] border-b-2 pb-[20px] border-gray-400'>

            {/* =============mobile============ */}
            <div className='block lg:hidden z-40'>
                <button
                    onClick={handleDrawer}
                    className='text-2xl h-[45px] w-[45px] bg-gray-400 flex justify-center items-center text-white rounded-[10px]'
                >
                    <FaBars />
                </button>
                <div className="drawer">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 pt-[30px] w-[360px] min-h-full bg-[#F3F3F6] text-base-content">
                            <Image
                                src={'/logo-blue.png'}
                                alt='dashboard logo'
                                height={55}
                                width={129}
                            />
                            <SidebarButtons />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex gap-[20px] items-center'>
                <button onClick={() => router.back()} className='w-[56px] h-[44px] rounded-[10px] bg-[#878787] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                        <path d="M0.292875 6.79277C-0.0976486 7.18329 -0.0976486 7.81646 0.292875 8.20698L6.65684 14.571C7.04737 14.9615 7.68053 14.9615 8.07106 14.571C8.46158 14.1804 8.46158 13.5473 8.07106 13.1567L2.4142 7.49988L8.07106 1.84302C8.46158 1.45249 8.46158 0.819328 8.07106 0.428803C7.68053 0.0382784 7.04737 0.0382783 6.65684 0.428803L0.292875 6.79277ZM21 6.49988L0.999983 6.49988L0.999983 8.49988L21 8.49988L21 6.49988Z" fill="#FCFCFC" />
                    </svg>
                </button>
                <button onClick={() => router.forward()} className='w-[56px] h-[44px] rounded-[10px] bg-[#878787] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                        <path d="M20.7071 8.20699C21.0976 7.81646 21.0976 7.1833 20.7071 6.79277L14.3432 0.428807C13.9526 0.038282 13.3195 0.0382819 12.9289 0.428807C12.5384 0.819331 12.5384 1.4525 12.9289 1.84302L18.5858 7.49988L12.9289 13.1567C12.5384 13.5473 12.5384 14.1804 12.9289 14.571C13.3195 14.9615 13.9526 14.9615 14.3432 14.571L20.7071 8.20699ZM-1.74846e-07 8.49988L20 8.49988L20 6.49988L1.74846e-07 6.49988L-1.74846e-07 8.49988Z" fill="#FCFCFC" />
                    </svg>
                </button>
                <h4 className='text-[24px] font-semibold hidden lg:block'>
                    Dashboard/<span>{pathName === '/admin' ? 'Overview' : pathName === '/admin/add-hero' ? 'add-hero' : pathName === '/admin/add-product' ? 'add-product' : ''}</span>
                </h4>
            </div>
            <div className='lg:flex gap-[12px] items-center hidden'>
                <div className='bg-[#D9D9D9] h-[55px] w-[55px] rounded-full'></div>
                <div className='pe-[10px]'>
                    <h4 className='text-[18px] font-bold'>Admin Login</h4>
                    <p className='text-sm'>Developer</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M15.5556 6.05543L14 7.61099L15.7778 9.38877H6.66667V11.611H15.7778L14 13.3888L15.5556 14.9443L20 10.4999L15.5556 6.05543ZM2.22222 2.7221H10V0.499878H2.22222C1 0.499878 0 1.49988 0 2.7221V18.2777C0 19.4999 1 20.4999 2.22222 20.4999H10V18.2777H2.22222V2.7221Z" fill="#050000" />
                </svg>
            </div>
        </div>
    );
};

export default DashboardNav;