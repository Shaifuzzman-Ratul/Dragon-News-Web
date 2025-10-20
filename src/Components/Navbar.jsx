import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='blank'>

            </div>

            <div className='links flex gap-5 text-[#706f6f] '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login flex gap-4'>
                <img src="https://i.ibb.co.com/bjQRgzxf/user.png" alt="" />
                <button className='btn text-white bg-[#403f3f] px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;