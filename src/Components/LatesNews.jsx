import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-3 bg-[#f3f3f3] mt-6'>
            <p className='text-[#f3f3f3] bg-[#d72050] px-3 py-3 '>Latest</p>
            <Marquee className='' pauseOnHover={true}><p className='font-bold text-[#424141] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad debitis excepturi quibusdam eum ullam cum beatae praesentium voluptatum ratione.</p></Marquee>

        </div>
    );
};

export default LatesNews;