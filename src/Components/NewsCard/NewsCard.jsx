import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { id, author, title, details, rating, total_view, image_url } = news;
    const formatedDate = new Date(news.author.published_date).toLocaleDateString();
    return (
        <div className='rounded-xl border-1 border-gray-200 m-4 '>
            <div className='bg-gray-200 flex justify-between p-3 rounded-md'>
                <div className='flex gap-3'>
                    <img className='w-[40px] h-[40px] rounded-full
                    ' src={author.img} alt="" />
                    <div>
                        <p className='text-sm'>{author.name}</p>
                        <p className='text-sm text-gray-400'>{formatedDate}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p><CiBookmark />
                    </p>
                    <p><CiShare2 />
                    </p>
                </div>
            </div >
            <div className='p-2'>
                <p className='font-bold p-2'>{title}</p>
                <img className='w-full h-full' src={image_url} alt="" />
                <p className='text-gray-500 p-1'>{details.length > 300 ? (
                    <>
                        {details.slice(0, 300)}...
                        <Link to={`/newsDetails/${id}`}> <span className='font-semibold  text-sm text-primary hover:underline' >Read More</span></Link>
                    </>) : (details)}</p>
            </div>
            <div className="divider"></div>
            <div className='flex justify-between p-2'>
                <div className='flex text-[#ff8c47] items-center pb-3'>

                    <p className='pl-2 text-md text-black font-bold flex justify-center items-center gap-1  '>Ratig : <span className='text-[#ff8811] text-md'>                    <MdOutlineStarPurple500 />
                    </span><span className='text-[#ff8811] text-md'>{rating.number}</span></p>

                </div>
                <div className='flex items-center gap-1'>
                    <IoEye />

                    <span>{total_view}</span>
                </div>
            </div>
        </div >
    );
};

export default NewsCard;