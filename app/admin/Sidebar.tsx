'use client'
import Image from 'next/image';
import React from 'react';
import SidebarButtons from './SidebarButtons';

const Sidebar = () => {

    return (
        <div className='w-[362px] bg-gray h-[982px] py-[56px] ps-[71px] pe-[32px] hidden md:hidden lg:block'>
            <Image
                src={'/logo-blue.png'}
                alt='dashboard logo'
                height={55}
                width={129}
            />
            <SidebarButtons></SidebarButtons>
        </div>
    );
};

export default Sidebar;