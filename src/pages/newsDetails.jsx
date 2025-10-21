import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightSide from '../Components/HomeLayout/RightSide';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(data, id);
    const [news, setNews] = useState({});
    console.log(data, id, news);
    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    }, [data, id])
    return (
        <div className='w-11/12 mx-auto'>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-1 lg:grid-cols-12 lg:gap-2 '>
                <section className='col-span-9'>
                    <h1 className='font-bold'>News Details</h1>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;