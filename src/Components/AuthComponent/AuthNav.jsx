import React from 'react';
import { Link, NavLink } from 'react-router';

const AuthNav = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* <div className='blank'>

            </div> */}

            <div className='links flex gap-5 text-[#706f6f] '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login flex gap-4'>
                <img src="https://i.ibb.co.com/bjQRgzxf/user.png" alt="" />
                <Link to="/auth/login"><button className='btn text-white bg-[#403f3f] px-8'>Login</button></Link>
            </div>
        </div >
    );
};

export default AuthNav;