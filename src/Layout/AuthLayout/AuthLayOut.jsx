import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router';
import AuthNav from '../../Components/AuthComponent/AuthNav';

const AuthLayOut = () => {
    return (
        <div className='bg-base-200 min-h-screen  py-5' >
            <header className='w-11/12 mx-auto py-5'> <AuthNav></AuthNav></header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayOut;