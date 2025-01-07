"use client"

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='flex flex-col flex-grow overflow-hidden'>
                <Header />
                <main className='flex-grow p-3 overflow-y-auto'>
                    { children }
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;