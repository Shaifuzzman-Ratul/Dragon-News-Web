import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatesNews from '../Components/LatesNews';
import Navbar from '../Components/Navbar';
import LeftAsize from '../Components/HomeLayout/LeftSide';
import RightAsize from '../Components/HomeLayout/RightSide';
import LeftSide from '../Components/HomeLayout/LeftSide';
import RightSide from '../Components/HomeLayout/RightSide';

const Home = () => {
    return (
        <div>
            <header className='my-5 '>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'><LatesNews></LatesNews></section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-2 lg:grid-cols-12  lg:w-11/12 mx-auto my-3 '>
                <section className="left_nav col-span-2 sticky lg:top-0 h-fit"><LeftSide></LeftSide></section>
                <section className="main col-span-7">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav col-span-3 sticky lg:top-0 h-fit"><RightSide></RightSide></section>
            </main>
        </div>
    );
};

export default Home;