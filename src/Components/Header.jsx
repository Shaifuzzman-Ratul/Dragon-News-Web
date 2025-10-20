import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center '>
            <img src="https://i.ibb.co.com/SXYRYNPT/logo.png" alt="" />
            <p className='text-[#706f6f] my-3'>Journalism Without Fear or Favour</p>

            <p className='font-semibold  text-[#706f6f]'>{format(new Date(), "EEEE, MMMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;