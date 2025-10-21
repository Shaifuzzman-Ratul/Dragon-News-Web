import React from 'react';

const NewsDetailsCard = ({ news }) => {
    const { title, image_url, details } = news;
    return (
        <div className='my-4'>
            <div className='p-2'>
                <p className='font-bold p-2'>{title}</p>
                <img className='w-full h-full' src={image_url} alt="" />
                <p className='text-gray-500 p-1'>{details}</p>
            </div>
        </div>
    );
};

export default NewsDetailsCard;