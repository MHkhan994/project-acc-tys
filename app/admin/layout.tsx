import React from 'react';
import Sidebar from './Sidebar';
import DashboardNav from './DashboardNav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-[1600px] flex mx-auto'>
            <div className='fixed'>
                <Sidebar />
            </div>
            <div className='lg:max-w-[1076px] md:w-[90vw] w-[92vw] mx-auto mb-[48px] lg:ms-[392px]'>
                <DashboardNav />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;