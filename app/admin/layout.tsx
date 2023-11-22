import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-[1600px] flex mx-auto'>
            <Sidebar />
            <div className='lg:w-[1076px] md:w-[90vw] w-[92vw] mx-auto mb-[48px]'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;