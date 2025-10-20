import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard/NewsCard';
import { RiseLoader } from 'react-spinners';

const CatagoryNews = () => {
    const { id } = useParams();
    // console.log(obj);
    const data = useLoaderData();
    // console.log(data);
    const [catagoryNews, setCatagoryNews] = useState([]);
    useEffect(() => {
        if (id == "0") {
            setCatagoryNews(data);
            return;

        }
        else if (id == "1") {

            const breakingNews = data.filter(news => news.others.is_today_pick == true);
            setCatagoryNews(breakingNews)

        }
        else {
            const filteredNews = data.filter(news => news.category_id == id);
            // console.log(filteredNews);
            setCatagoryNews(filteredNews);

        }
    }, [data, id]);
    return (
        <div>
            <p className='font-bold'> News Found (<span className='text-red-400'>{catagoryNews.length}</span>)</p>
            <div>
                {
                    catagoryNews.length === 0
                        ? (
                            <div className="flex justify-center mt-10">
                                <RiseLoader color="#30cbe6" />
                            </div>
                        )
                        : (
                            catagoryNews.map(news => (
                                <NewsCard key={news.id} news={news} />
                            ))
                        )
                }
            </div>
        </div>

    );
};

export default CatagoryNews;