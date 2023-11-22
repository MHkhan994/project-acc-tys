import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarButtons = () => {
    const pathName = usePathname()

    const handleDrawer = () => {
        const drawerCheckbox = document.getElementById('dashboard-drawer') as HTMLInputElement | null;
        if (drawerCheckbox) {
            console.log(drawerCheckbox.checked);
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    }

    return (
        <>
            <button
                onClick={handleDrawer}
                className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] mt-[48px] ${pathName === '/admin' ? 'bg-[#CCDBF2]' : ''}`}
            >
                <Image
                    src={'/dashboard.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin'} className='primary-p capitalize'>Dashboard</Link>
            </button>

            <p className='primary-p uppercase pt-[48px] pb-[10px]'>pages</p>

            <button
                onClick={handleDrawer}
                className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] ${pathName === '/admin/add-hero' ? 'bg-[#CCDBF2]' : ''}`}
            >
                <Image
                    src={'/add-hero.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin/add-hero'} className='primary-p capitalize'>Add Hero Image</Link>
            </button>

            <button
                onClick={handleDrawer}
                className={`w-[259px] h-[56px] flex items-center rounded-[10px] ps-[10px] gap-[10px] ${pathName === '/admin/add-product' ? 'bg-[#CCDBF2]' : ''}`}
            >
                <Image
                    src={'/add-product.png'}
                    alt='dashboard icon'
                    height={24}
                    width={24}
                />
                <Link href={'/admin/add-product'} className='primary-p capitalize'>Add Product</Link>
            </button>
        </>
    );
};

export default SidebarButtons;